import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArticleCard from '../../components/ArticleCard';

describe('ArticleCard', () => {
  const defaultProps = {
    id: 1,
    imageUrl: '/test-image.jpg',
    tag: 'Technology',
    title: 'Test Article Title',
    author: 'John Doe',
    date: '2024-01-15',
    content:
      'This is a test article content that should be truncated if it exceeds 240 characters.',
  };

  it('renders the article card with all required props', () => {
    render(<ArticleCard {...defaultProps} />);

    expect(screen.getByText('Test Article Title')).toBeInTheDocument();

    expect(screen.getByText('Technology')).toBeInTheDocument();

    expect(screen.getByText(/by John Doe/)).toBeInTheDocument();

    expect(
      screen.getByText(/This is a test article content/)
    ).toBeInTheDocument();
  });

  it('truncates content when it exceeds 240 characters', () => {
    const longContent = 'A'.repeat(250);
    render(<ArticleCard {...defaultProps} content={longContent} />);

    const truncatedContent = screen.getByText(/A{240}\.\.\./);
    expect(truncatedContent).toBeInTheDocument();
  });

  it('does not truncate content when it is 240 characters or less', () => {
    const shortContent = 'Short content';
    render(<ArticleCard {...defaultProps} content={shortContent} />);

    expect(screen.getByText('Short content')).toBeInTheDocument();
  });

  it('applies priority loading when priority prop is true', () => {
    render(<ArticleCard {...defaultProps} priority={true} />);

    const image = screen.getByAltText('Test Article Title');
    expect(image).toHaveAttribute('loading', 'eager');
  });

  it('applies lazy loading when priority prop is false', () => {
    render(<ArticleCard {...defaultProps} priority={false} />);

    const image = screen.getByAltText('Test Article Title');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('applies lazy loading by default when priority prop is not provided', () => {
    render(<ArticleCard {...defaultProps} />);

    const image = screen.getByAltText('Test Article Title');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
