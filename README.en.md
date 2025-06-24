# Reader Space 📚

A modern, minimal reading platform. Reader Space is designed for book lovers to discover, share, and discuss literature through a beautiful, responsive web application.

## ✨ Features

- **📖 Article Management**: Browse and read articles with rich content support
- **🏷️ Tag-based Navigation**: Explore content by categories (Classics, Fantasy, Mystery, Non-Fiction, Romance, Sci-Fi)
- **📱 Responsive Design**: Optimized for all devices with mobile-first approach
- **⚡ Performance Optimized**: Built with Next.js 15 App Router for optimal performance
- **🎨 Modern UI**: Clean, minimal design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **React Icons**
- **React Markdown**

### Development Tools
- **ESLint**
- **Prettier**
- **Jest**
- **React Testing Library**
- **Turbopack**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:MatheusVieira97/reader-space.git
   cd reader-space
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   API_URL=http://localhost:3000 
   ```

4. **Set up and run the backend API**
   The frontend requires the backend API to be running. Found on [https://github.com/MatheusVieira97/reader-space-api](https://github.com/MatheusVieira97/reader-space-api)
   **Note**: Make sure the backend is running on the port specified in your `API_URL` environment variable.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code linting |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

### Test Structure

- **Component Tests**: Test individual UI components
- **Hook Tests**: Test custom React hooks
- **API Tests**: Test API endpoints and data fetching


## 🔧 Configuration
### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_URL` | Backend API URL | Yes |

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Ensure code passes linting and formatting checks
- Update documentation for new features
