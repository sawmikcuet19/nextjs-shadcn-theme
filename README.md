# Next.js Shadcn Dashboard

A modern, responsive admin dashboard built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components. This project was created as a learning exercise following tutorials on Next.js and modern React development.

## Features

- **Dashboard Overview** - Visual data representation with multiple chart types
- **Data Visualization** - Area charts, Bar charts, and Pie charts using Recharts
- **Data Tables** - Sortable and filterable tables with pagination using TanStack Table
- **Responsive Sidebar** - Collapsible navigation with nested menu items
- **Dark/Light Theme** - Theme switching with next-themes
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Form Handling** - Form validation with React Hook Form and Zod
- **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Tables:** [TanStack Table](https://tanstack.com/table)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Dashboard home page
│   ├── layout.tsx         # Root layout with sidebar/navbar
│   ├── globals.css        # Global styles and CSS variables
│   ├── users/             # Users page
│   └── payments/          # Payments page with data table
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── AppSidebar.tsx     # Navigation sidebar
│   ├── Navbar.tsx         # Top navigation bar
│   ├── AppAreaChart.tsx   # Area chart component
│   ├── AppBarChart.tsx    # Bar chart component
│   ├── AppPieChart.tsx    # Pie chart component
│   ├── CardList.tsx       # Transaction/content cards
│   ├── TodoList.tsx       # Task management list
│   ├── TablePagination.tsx # Table pagination controls
│   └── providers/         # Context providers
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd next-shadcn-project
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
# or
npm run build
```

### Lint

```bash
bun run lint
# or
npm run lint
```

## Available Scripts

- `dev` - Start development server
- `build` - Build production application
- `start` - Start production server
- `lint` - Run ESLint

## Pages

| Route | Description |
|-------|-------------|
| `/` | Dashboard with charts and overview cards |
| `/users` | User management page |
| `/payments` | Payments data table with sorting/filtering |

## Key Components

- **AppSidebar** - Responsive navigation with collapsible groups and nested items
- **DataTable** - Full-featured table with pagination, built with TanStack Table
- **Charts** - Responsive data visualization components (Area, Bar, Pie)
- **ThemeProvider** - Dark/light mode switching support

## Acknowledgments

This project was built as a learning exercise following tutorials on:
- Next.js App Router
- shadcn/ui components
- Tailwind CSS v4
- Modern React patterns

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
