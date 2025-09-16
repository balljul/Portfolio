# Portfolio Configuration Guide

This guide explains how to customize your portfolio by editing the configuration files.

## Main Configuration File

**Location:** `/src/data/config.js`

### Profile Section

```javascript
const profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  location: "Your Location",
  profileImage: "/assets/images/profile/your-photo.jpg", // Add your profile image
  bio: `Your bio text here...`,
  
  contact: {
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    website: "https://yourwebsite.com"
  }
}
```

### Experience Section

```javascript
const experience = {
  jobs: [
    {
      id: "job-id",
      title: "Job Title",
      company: "Company Name",
      companyLogo: "/assets/images/companies/company-logo.jpg", // Optional
      location: "Location",
      range: "Date Range",
      description: [
        "Achievement 1",
        "Achievement 2"
      ],
      technologies: ["Tech1", "Tech2"] // Will show with icons
    }
  ]
}
```

### Projects Section

```javascript
const projects = {
  featured: [
    {
      id: "project-id",
      title: "Project Title",
      description: "Brief description",
      image: "/assets/images/projects/project-image.jpg", // Project thumbnail
      technologies: ["React", "Node.js"], // Will show with icons
      liveUrl: "https://live-demo.com",
      githubUrl: "https://github.com/user/repo",
      featured: true,
      year: "2024",
      status: "completed"
    }
  ]
}
```

### Skills Section

```javascript
const skills = {
  categories: [
    {
      name: "Category Name",
      skills: [
        { 
          name: "Skill Name", 
          level: 4, // 1-5 scale
          icon: techIcons["Skill Name"] // Automatic icon mapping
        }
      ]
    }
  ]
}
```

## Adding Images

### Profile Image
1. Add your photo to `/public/assets/images/profile/`
2. Update `profile.profileImage` path

### Project Images  
1. Add project screenshots to `/public/assets/images/projects/`
2. Update `project.image` paths
3. Use 600x400px images for best results

### Company Logos
1. Add logos to `/public/assets/images/companies/`
2. Update `job.companyLogo` paths

### Technology Icons
- Most popular technologies have automatic icons via the `techIcons` mapping
- Local icons in `/public/assets/images/tech/` for core technologies
- CDN icons from DevIcons for others

## Technology Icon Mapping

The `techIcons` object automatically maps technology names to icons:

```javascript
const techIcons = {
  "JavaScript": "/assets/images/tech/javascript.svg",
  "React": "/assets/images/tech/react.svg",
  // ... many more included
}
```

**Supported Technologies:** JavaScript, PHP, HTML/CSS, React, Node.js, Vue.js, Python, TypeScript, MongoDB, PostgreSQL, Docker, Git, AWS, and many more.

## File Structure

```
/public/assets/images/
  ├── profile/          # Your profile photo
  ├── projects/         # Project screenshots
  ├── companies/        # Company logos  
  └── tech/            # Technology icons (SVGs)
```

## Quick Customization

1. **Update Profile:** Edit the `profile` object
2. **Add Jobs:** Add entries to `experience.jobs` array
3. **Add Projects:** Add entries to `projects.featured` array  
4. **Update Skills:** Modify `skills.categories` arrays
5. **Add Images:** Place in `/public/assets/images/` and reference in config

All changes to `config.js` will automatically reflect in your portfolio!