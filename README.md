# Hackathon Frontend

## Tech Stack

- React
- Astro
- TailwindCSS

## 🚀 Project Structure

```text
/
├── .astro/
│   ├── settings.json
│   └── types.d.ts
├── .vscode/
│   ├── extensions.json
│   └── launch.json
├── public/
│   └── placeHolderImages/
├── src/
│   ├── components/
│   │   ├── CommentCard.jsx
│   │   ├── CommentSection.jsx
│   │   ├── CommentSubmission.jsx
│   │   ├── CommunityList.jsx
│   │   ├── CommunityListItem.jsx
│   │   ├── CreateEventButton.jsx
│   │   ├── EventAttendCard.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventDetailsSection.jsx
│   │   ├── EventForm.jsx
│   │   ├── EventImages.jsx
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── middleware/
│   ├── pages/
│   │   ├── events/
│   │   │   └── [eventId].astro
│   │   └── login-signup.astro
│   ├── stores/
│   └── utils/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |

## Configuration

### Astro Configuration

The Astro configuration is defined in astro.config.mjs. It includes integrations for React, TailwindCSS, and Vercel serverless deployment.

### TailwindCSS Configuration

The TailwindCSS configuration is defined in tailwind.config.mjs. It includes custom colors, themes, and plugins.

## Components

### CommentSection

Located in src/components/CommentSection.jsx, this component displays comments for a specific event.

### EventCard

Located in src/components/EventCard.jsx, this component displays individual event details.

### CommunityListItem

Located in src/components/CommunityListItem.jsx, this component displays community information.

### ReportForm

Located in src/components/ReportForm.jsx, this component handles the submission of reports.

### CommentCard

Located in src/components/CommentCard.jsx, this component displays individual comments and their replies.

## Layouts

### Layout

Located in src/layouts/Layout.astro, this layout component includes the Navbar, Footer, and other common elements.

## Pages

### Login-Signup Page

Located in src/pages/login-signup.astro, this page allows users to log in or sign up.

### Event Details Page

Located in src/pages/events/[eventId].astro, this page displays details for a specific event, including comments and submission forms.

License
This project is licensed under the MIT License.
