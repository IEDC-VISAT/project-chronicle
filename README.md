# Chronicle'26 - Student Portal

A fully responsive retro-themed student portal web application for internship and job notifications, built with React and UnoCSS.

## 🎨 Design Theme

Chronicle'26 features a unique retro newspaper + Windows 98 hybrid aesthetic:

- **Color Palette**: Beige (#f5f5dc), off-white, black, muted brown, light grey
- **Accent Colors**: Dark blue (#003366) and faded red (#8b0000)
- **Typography**: Serif headings (Times New Roman style) and simple sans-serif body text
- **UI Style**: Boxy layouts, thin black borders, flat rectangular buttons with slight embossing

## 🚀 Features

- **Landing Page**: Featured opportunities, latest entries, and category browsing
- **Archive Dashboard**: Comprehensive job/internship listings with filtering system
- **Job Details**: Full opportunity descriptions with apply functionality
- **Bookmarks**: Save and manage favorite opportunities (localStorage)
- **Bulletin Board**: Announcements and updates in newspaper snippet style
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search Functionality**: Search across titles, companies, and descriptions
- **Filtering System**: Filter by type, location, and domain

## 📁 Project Structure

```
chronicle-26/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── OpportunityCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── RoadmapStep.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── BulletinPanel.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── JobDetails.jsx
│   │   ├── SkillCorner.jsx
│   │   ├── SkillDetail.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Toolkit.jsx
│   │   ├── FlySky.jsx
│   │   ├── Bookmarks.jsx
│   │   └── Bulletin.jsx
│   ├── data/
│   │   ├── mockData.js
│   │   ├── skills.js
│   │   ├── roadmaps.js
│   │   ├── toolkit.js
│   │   ├── flysky.js
│   │   └── universities.js
│   ├── hooks/
│   │   └── useBookmarks.js
│   ├── utils/
│   │   └── supabaseAdapter.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── uno.config.js
```

## 🛠️ Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 🎯 Core Technologies

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **UnoCSS**: Utility-first CSS framework (no Tailwind)
- **Vite**: Fast build tool and dev server
- **LocalStorage**: Persistent bookmarks

## 🎨 UnoCSS Configuration

Custom shortcuts defined in `uno.config.js`:

- `retro-card`: Card component with border and shadow
- `retro-btn`: Standard button style
- `retro-btn-primary`: Primary action button
- `retro-input`: Form input styling
- `retro-heading`: Serif heading style

## 📱 Pages Overview

### Landing Page (`/`)
- Public page accessible without login
- Hero section with tagline
- Featured "Breaking" opportunities
- Latest entries grid
- Quick links to all major sections
- Login/Signup buttons for unauthenticated users

### Login Page (`/login`)
- Email and password authentication
- Error handling for invalid credentials
- Link to signup page
- Retro-styled form with validation

### Signup Page (`/signup`)
- Create new account with name, email, password
- Password confirmation
- Duplicate email prevention
- Success message and redirect to login

### Archive Dashboard (`/archive`) - Protected
- Three-column newspaper layout
- Left: Filter panel (type, location, domain)
- Center: Opportunity listings
- Right: Bulletin snippets
- Search bar at top

### Job Details (`/job/:id`)
- Full opportunity description
- Requirements and responsibilities
- Apply button and bookmark functionality
- Related opportunities section

### Skill Corner (`/skill-corner`)
- Browse skills by category (Programming, Web Dev, Data Science, Core Engineering, Soft Skills)
- Search functionality
- Skill cards with difficulty levels, tags, and trending/editor's pick badges
- Filter by category

### Skill Detail (`/skill/:id`)
- Detailed skill information
- Step-by-step "How to Learn" roadmap
- "Where to Learn" resources with links
- Related skills section

### Career Roadmap (`/roadmap`)
- Select target role (Software Engineer, Data Scientist, UI/UX Designer, DevOps, AI Engineer)
- Step-by-step career path with 5 stages
- Progress tracker with localStorage persistence
- Mark steps as completed
- Skills, resources, and projects for each step

### Toolkit (`/toolkit`)
- Resume Templates (3 professional templates)
- LinkedIn Profile Enhancer (generate headlines and about sections)
- AI Prompt Library (8 ready-to-use prompts for career tasks)
- Copy-to-clipboard functionality

### FlySky (`/flysky`)
- Study Abroad section (5 countries with requirements, exams, costs)
- **University listings** (27 universities with detailed information)
- **University filters** (by program, ranking, acceptance rate)
- Bookmark countries and universities
- International Internships (8 programs with details)
- Bookmark internship programs
- Application Guide (8-step process with timeline)
- Tab-based navigation

### Bookmarks (`/bookmarks`)
- **Universal bookmarking** for all content types
- Tabs: Jobs, Skills, Countries, Universities, Internships, Roadmaps
- Total bookmark counter
- Empty states with call-to-action for each type
- Quick navigation to source pages

### Bulletin Board (`/bulletin`)
- All announcements and updates
- Urgent/breaking labels
- Chronological listing

## 🎨 Styling Guidelines

All styling uses UnoCSS utility classes:
- No Tailwind CSS
- No external UI libraries
- No TypeScript (JSX only)
- Retro aesthetic maintained throughout

## 📊 Mock Data

Sample data includes:
- 8 job/internship opportunities
- 5 bulletin announcements
- 12 skills across 5 categories
- 5 career roadmaps with detailed steps
- 3 resume templates
- 8 AI prompts for career tasks
- 5 study abroad countries with complete information
- **27 universities** (6 USA, 5 Germany, 5 Canada, 5 UK, 6 Australia)
- 8 international internship programs
- 8-step application guide

## 🔧 Key Features Implementation

## 🔧 Key Features Implementation

### Authentication System
- **Signup/Login**: Complete user authentication flow
- **Session Management**: Persistent login with localStorage
- **Protected Routes**: Automatic redirect for unauthenticated users
- **User Profile**: Display user info in header
- **Supabase Ready**: Easy migration path to Supabase auth

### Universal Bookmarking System
- **Multi-type bookmarks**: Jobs, Skills, Countries, Universities, Internships, Roadmaps
- Uses enhanced `useBookmarks` hook with type-based storage
- Persists to localStorage with migration from old format
- Toggle functionality across all content types
- Centralized bookmarks page with tabs for each type
- Total bookmark counter

### Roadmap Progress Tracking
- localStorage persistence per role
- Mark steps as completed
- Visual progress bar
- Reset functionality
- Bookmark favorite career paths

### Filtering System
- Real-time filtering by type, location, domain
- Search across multiple fields
- Clear filters option
- **University filters**: Program, Ranking, Acceptance Rate

### Study Abroad Universities
- **27 top universities** across 5 countries
- Detailed information: ranking, tuition, acceptance rate, requirements
- Filter by program, ranking, and acceptance rate
- Bookmark individual universities
- Direct links to university websites

### LinkedIn Profile Generator
- Field-specific content generation
- Copy-to-clipboard functionality
- Professional headlines and about sections

### Prompt Library
- Ready-to-use AI prompts
- Copy functionality with visual feedback
- Categorized by use case

### Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Sticky sidebars on desktop
- Responsive navigation

## 🎯 Future Enhancements

Potential additions:
- Backend integration
- User authentication
- Application tracking
- Email notifications
- Advanced search filters
- Sorting options
- Skill assessment quizzes
- Community forum
- Mentor matching
- Job alerts

## 📄 License

This is a demonstration project for educational purposes.

---

**Chronicle'26** - "Documenting Your Next Opportunity"
