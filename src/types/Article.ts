export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  tag: string;
  image_url: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
export interface PaginationInfo {
  page: number;
  limit: number;
  totalArticles: number;
  totalPages: number;
  hasMore: boolean;
}

export interface ArticlesPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    tag?: string;
  }>;
}
