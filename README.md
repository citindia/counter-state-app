# Counter State [Project 1 (FSWD Expert)]

A comprehensive counter application demonstrating various state management patterns in React. This project showcases different approaches to managing state from basic local state to advanced global state management using Jotai. Built with Next.js, React, TypeScript, and modern UI components.

## 🚀 Features

### Basic Counter Page

- **Simple State Management**: Uses React's `useState` hook for local state
- **Increment/Decrement**: Basic counter functionality with +1 and -1 operations
- **Clean UI**: Minimal design with shadcn/ui components
- **Responsive Layout**: Mobile-friendly card-based interface

### Advanced Counter Page

- **Enhanced Functionality**: Includes +10 and -10 operations alongside basic increments
- **Extended Operations**: Multiple increment/decrement values for flexibility
- **Improved UX**: Better user experience with additional control options
- **Consistent Design**: Maintains the same clean UI pattern as basic counter

### Expert Counter Page

- **Boundary Validation**: Implements min/max limits (0-100 range)
- **Conditional Buttons**: Buttons disable based on counter boundaries
- **Advanced Logic**: Sophisticated state management with validation rules
- **Professional UI**: Disabled states and visual feedback for better UX

### Atomic Counter Page

- **Global State Management**: Uses Jotai for atomic state management
- **Separated Components**: Display and controls are in separate components
- **Shared State**: Counter value is shared across multiple components
- **Advanced Pattern**: Demonstrates atomic state architecture

### Global Features

- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation for better code quality
- **Dark Mode**: Theme toggle functionality with next-themes
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Performance**: React Compiler optimization for enhanced performance
- **Navigation**: Clean header navigation between different counter implementations
- **Component Architecture**: Well-organized component structure with separation of concerns

## 📸 Preview

### Basic Counter Page

![Basic Counter Preview](/public/preview/basic-counter.jpeg)

### Advanced Counter Page

![Advanced Counter Preview](/public/preview/advanced-counter.jpeg)

### Expert Counter Page

![Expert Counter Preview](/public/preview/expert-counter.jpeg)

### Atomic Counter Page

![Atomic Counter Preview](/public/preview/atomic-counter.jpeg)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui with class-variance-authority
- **State Management**: Jotai (for atomic state)
- **Icons**: Lucide React
- **Theme**: next-themes (for dark mode)
- **Image Optimization**: Sharp
- **Package Manager**: Bun (lockfile present)
- **Development Tools**: ESLint, Prettier, TypeScript strict mode
- **Performance**: React Compiler (babel-plugin-react-compiler)

## 📁 Project Structure

```
counter-state-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── advanced/           # Advanced counter page
│   │   │   └── page.tsx
│   │   ├── atomic/             # Atomic counter page
│   │   │   └── page.tsx
│   │   ├── expert/             # Expert counter page
│   │   │   └── page.tsx
│   │   ├── layout.tsx          # Root layout with header
│   │   ├── page.tsx            # Basic counter home page
│   │   └── globals.css         # Global styles and theme configuration
│   ├── components/
│   │   ├── Header/             # Navigation header component
│   │   ├── Providers/          # Theme provider wrapper
│   │   ├── shadcnui/           # shadcn/ui components
│   │   ├── AdvancedCounter.tsx # Advanced counter component
│   │   ├── BasicCounter.tsx    # Basic counter component
│   │   ├── ExpertCounter.tsx   # Expert counter with validation
│   │   ├── GlobalCounterButtons.tsx # Atomic counter controls
│   │   ├── GlobalCounterText.tsx    # Atomic counter display
│   │   └── ThemeToggleButton.tsx    # Dark mode toggle
│   ├── hooks/
│   │   └── .gitkeep
│   └── lib/
│       ├── atoms.ts            # Jotai atoms for global state
│       ├── fonts.ts            # Font configuration
│       └── utils.ts            # Utility functions
├── .gitignore
├── .prettierrc
├── LICENSE
├── bun.lock
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- Bun or npm 11.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/citindia/counter-state-app.git
cd counter-state-app
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

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun prod` - Run lint, build, and start production server

## 🎯 Usage

### Navigation

- Click on the logo to return to the basic counter page
- Use the navigation menu to switch between Basic, Advanced, Expert, and Atomic counter implementations
- Toggle between light and dark themes using the theme switcher

### Basic Counter

- Simple increment and decrement operations (+1/-1)
- Demonstrates React's basic useState hook
- Clean, minimal interface for learning purposes

### Advanced Counter

- Extended functionality with +10/-10 operations
- Multiple increment/decrement values
- Shows how to expand basic counter functionality

### Expert Counter

- Implements boundary validation (0-100 range)
- Buttons disable automatically when limits are reached
- Demonstrates advanced state management with validation logic

### Atomic Counter

- Uses Jotai for global state management
- Counter value is shared between separate display and control components
- Shows atomic state architecture patterns

## 🔧 Development

### Code Style

- Follows Airbnb Style Guide
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting

### Component Architecture

- Organized component structure with page-specific folders
- Reusable components with proper separation of concerns
- TypeScript interfaces for type safety
- Modern React patterns with hooks

### State Management Patterns

- **Local State**: Basic and Advanced counters use React's useState
- **Global State**: Atomic counter uses Jotai for atomic state management
- **Component Separation**: Atomic counter demonstrates separated display and control logic
- **Validation Logic**: Expert counter shows complex state management with boundaries

### Performance Features

- React Compiler enabled for automatic optimization
- Next.js Image optimization for better performance
- Sharp for efficient image processing
- Atomic state management with Jotai for optimal re-renders

### UI Framework

- Tailwind CSS for styling with custom theme configuration
- shadcn/ui components for consistent design system
- Responsive design patterns
- Lucide React icons for visual elements
- Dark mode support with next-themes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saikat Sardar**

- GitHub: [@citindia](https://github.com/citindia)
- Project Homepage: [https://github.com/citindia/counter-state-app](https://github.com/citindia/counter-state-app)
