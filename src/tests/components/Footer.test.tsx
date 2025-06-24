import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders the footer with correct heading', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders the brand name "Space Reader"', () => {
    render(<Footer />);

    const brandName = screen.getByText('Space Reader');
    expect(brandName).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Footer />);

    const description = screen.getByText(/Explore the universe of knowledge/);
    expect(description).toBeInTheDocument();
  });

  it('renders all social media links with correct attributes', () => {
    render(<Footer />);

    const facebookLink = screen.getByLabelText('Follow us on Facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');

    const twitterLink = screen.getByLabelText('Follow us on Twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');

    const skypeLink = screen.getByLabelText('Contact us on Skype');
    expect(skypeLink).toBeInTheDocument();
    expect(skypeLink).toHaveAttribute('href', 'https://skype.com');

    const instagramLink = screen.getByLabelText('Follow us on Instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');

    const youtubeLink = screen.getByLabelText(
      'Subscribe to our Youtube channel'
    );
    expect(youtubeLink).toBeInTheDocument();
    expect(youtubeLink).toHaveAttribute('href', 'https://youtube.com');

    const linkedinLink = screen.getByLabelText('Follow us on LinkedIn');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
  });

  it('renders navigation links', () => {
    render(<Footer />);

    const homeLink = screen.getByText('HOME');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const contactLink = screen.getByText('CONTACT US');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `© ${currentYear} Space Reader. All rights reserved.`
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveAttribute('aria-labelledby', 'footer-heading');

    const heading = screen.getByText('Footer');
    expect(heading).toHaveClass('sr-only');
  });
});
