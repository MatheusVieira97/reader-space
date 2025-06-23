import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // const apiUrl = process.env.API_URL;
    const response = await fetch(`https://space-reader-api-sc26w.ondigitalocean.app/api/articles`);
  
    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP error! status: ${response.status}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
} 