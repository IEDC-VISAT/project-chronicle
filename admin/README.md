# Chronicle'26 Admin Panel

A retro-themed Content Management System (CMS) for managing all data in the Chronicle'26 student portal.

## 🎯 Features

- **Dashboard**: Overview statistics and quick actions
- **Manage Jobs**: Add, edit, delete job and internship listings
- **Manage Skills**: CRUD operations for Skill Corner content
- **Manage Roadmaps**: Create career roadmaps with multiple steps
- **Toolkit Manager**: Manage resume templates and AI prompts
- **FlySky Manager**: Manage study abroad countries and international internships
- **Bulletins**: Post and manage announcements
- **Settings**: Export data and system configuration

## 🎨 Design

Retro Windows 98 control panel aesthetic:
- Grey color scheme with blue accents
- Boxy layouts with black borders
- Flat, rectangular buttons
- Classic table views
- Modal popups for forms

## 🚀 Installation

```bash
cd admin
npm install
```

## 🏃 Running the App

```bash
npm run dev
```

The admin panel will run on `http://localhost:3001`

## 🔐 Login Credentials

- **Username**: admin
- **Password**: admin123

## 📊 Data Management

All data is stored in localStorage with the key `chronicle_admin_data`. The data structure includes:

- `jobs`: Job and internship listings
- `skills`: Skills for Skill Corner
- `roadmaps`: Career roadmaps
- `bulletins`: Announcements
- `countries`: Study abroad destinations
- `internships`: International internship programs
- `templates`: Resume templates
- `prompts`: AI prompt library

## 🔧 Key Components

### Context Providers

- **AuthContext**: Handles authentication state
- **DataContext**: Manages all application data with CRUD operations

### Reusable Components

- **Table**: Generic table component with edit/delete actions
- **Modal**: Popup modal for forms
- **Sidebar**: Navigation sidebar
- **Header**: Top header with logout

### Pages

- Dashboard
- Jobs
- Skills
- Roadmaps
- Toolkit
- FlySky
- Bulletins
- Settings

## 💾 Data Persistence

Data is automatically saved to localStorage on every create, update, or delete operation. You can export all data as JSON from the Settings page.

## 🎨 Styling

Uses UnoCSS with custom shortcuts:
- `admin-card`: Card component
- `admin-btn`: Standard button
- `admin-btn-primary`: Primary action button
- `admin-btn-danger`: Delete/danger button
- `admin-input`: Form input
- `admin-table`: Table styling

## 📝 Notes

- This is a frontend-only admin panel
- No backend integration (uses localStorage)
- Designed to complement the Chronicle'26 student portal
- All forms include validation
- Confirmation dialogs for delete operations

## 🔄 Future Enhancements

- Backend API integration
- Image upload for skills and countries
- Bulk import/export
- User role management
- Activity logs
- Search and advanced filtering

---

**Chronicle'26 Admin Panel** - Retro CMS for Modern Career Management

