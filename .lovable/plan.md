
# Plan: Create a Dedicated Projects Page

## Overview
Create a separate `/projects` page that displays all projects (current and future), while the home page only shows featured projects. This involves centralizing project data, creating a new page, and updating the existing components.

---

## Architecture

```text
+-------------------+       +---------------------------+
|   projectsData.ts |------>|  Home Page (Index.tsx)    |
|   (Central Data)  |       |  Shows: is_featured=true  |
+-------------------+       +---------------------------+
         |
         +----------------->+---------------------------+
                            |  Projects Page            |
                            |  Shows: ALL projects      |
                            +---------------------------+
```

---

## Project Data Structure

Each project will have the following fields:
- **title** (required): Project name
- **description** (required): Project description
- **skills** (required): Array of skills/technologies used
- **link** (required): Website URL
- **github** (optional): Code repository link
- **image** (required): Project thumbnail
- **is_featured** (required): Boolean to show on home page

---

## Implementation Steps

### Step 1: Create Centralized Project Data
**File:** `src/data/projectsData.ts`

Create a TypeScript file with:
- Project interface/type definition
- Array of all projects with the new data structure
- Export both the type and data for reuse

### Step 2: Create Projects Page
**File:** `src/pages/Projects.tsx`

Create a dedicated page that:
- Imports project data from centralized file
- Displays ALL projects (not just featured)
- Includes the Navbar and Footer for consistent layout
- Uses the same card design as the home page
- Adds a "Back to Home" navigation option

### Step 3: Update Home Page Projects Section
**File:** `src/components/sections/Projects.tsx`

Modify to:
- Import projects from centralized data file
- Filter to show only `is_featured: true` projects
- Add a "View All Projects" button linking to `/projects`

### Step 4: Add Route to App
**File:** `src/App.tsx`

Add the new route:
- Import the Projects page component
- Add `/projects` route before the catch-all

### Step 5: Update Navbar
**File:** `src/components/layout/Navbar.tsx`

Update the navigation:
- Change "Projects" link from `#projects` to `/projects`
- Handle navigation appropriately for both home and projects page

---

## Technical Details

### Project Type Definition
```typescript
export interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
  github?: string;  // Optional
  image: string;
  is_featured: boolean;
}
```

### Sample Data Migration
The existing 4 projects will be migrated with:
- `tags` renamed to `skills`
- `featured` renamed to `is_featured`
- Current placeholder projects will be kept for now (you can replace them later)

### Navigation Handling
The Navbar will be updated to:
- Use React Router's `Link` component for the Projects link
- Keep hash links for other sections (About, Services, etc.)
- Handle the case when user is on `/projects` page and clicks home sections

---

## Files to Create
1. `src/data/projectsData.ts` - Centralized project data and types

2. `src/pages/Projects.tsx` - Dedicated projects page

## Files to Modify
1. `src/App.tsx` - Add new route
2. `src/components/sections/Projects.tsx` - Use centralized data, filter featured
3. `src/components/layout/Navbar.tsx` - Update Projects link to use router
