# BayLabTech - Project Blueprint

## Overview

This document provides a comprehensive blueprint of the BayLabTech web application. The project is a React-based platform for BayLabTech, a company specializing in a range of engineering and fabrication services including product development, CAD/engineering, laser cutting, web development, 3D visualization, and 3D printing. The application serves as a digital storefront, enabling potential clients to explore services, understand the company's capabilities, and submit project inquiries through a detailed quote request form. It also features a secure administrative section for company personnel to manage and respond to these client requests.

## Project Outline

- **Framework:** The application is built using **React**, leveraging its component-based architecture for a modular and scalable codebase.

- **Styling:** **Tailwind CSS** is used for styling, providing a utility-first approach that allows for rapid and consistent UI development.

- **Routing:** Client-side routing is managed by **`react-router-dom`**, enabling seamless navigation between the application's various pages and views.

- **Firebase Integration:** The application is tightly integrated with Firebase services to provide robust backend functionality:
    - **Firestore:** Serves as the primary database for storing and managing quote requests submitted by users.
    - **Firebase Storage:** Used for securely storing and managing file attachments (e.g., design files, specifications) associated with quote requests.
    - **Firebase Authentication:** Provides a secure and reliable authentication system for the administrative section of the application.

- **Pages & Features:**
    - **Public-Facing Pages:**
        - `Home`: The main landing page, offering an introduction to BayLabTech and its core services.
        - `About`: Provides more detailed information about the company's mission, values, and team.
        - `Services`: A comprehensive overview of all services offered, with links to detailed pages for each service.
        - `Projects`: A placeholder page intended to showcase a portfolio of completed projects.
        - `Contact`: A page with contact information and a simple contact form.
        - `Quote`: A detailed form that allows users to request a quote for a specific service, including the ability to upload project files.
        - `Careers`: A placeholder page for listing career opportunities at BayLabTech.
        - `Privacy`: A placeholder page for the company's privacy policy.
        - `Terms`: A placeholder page for the company's terms of service.
    - **Service Detail Pages:**
        - Individual pages for each service (e.g., `Product Development`, `CAD & Engineering`) that provide in-depth information about that specific offering.
    - **Administrative Section:**
        - `Admin`: A secure login page for administrators.
        - `AdminDashboard`: A central dashboard for authenticated users to view, filter, and manage all submitted quote requests.
        - `AdminQuoteDetail`: A detailed view of a single quote request, allowing administrators to review the submitted information and attached files.

- **Components:**
    - `Navbar`: The primary navigation component for the application.
    - `Footer`: The application's footer, containing links and copyright information.
    - `AdminLogin`: The login form component used on the `/admin` page.
    - `QuoteRequestsTable`: A reusable component for displaying and filtering quote requests in the admin dashboard.

## Recent Changes: Mailgun Email Notification & Form Wiring

Implemented direct email notifications for both the Contact and Quote request forms using Mailgun and Vercel Serverless Functions.

**Plan and Steps Executed:**

1.  **Serverless Email Dispatch (`api/send-email.js`):**
    - Created a lightweight Vercel Serverless Function running on Node.js.
    - Integrated with Mailgun's REST API (`api.mailgun.net/v3/{domain}/messages`) with HTTP Basic Authentication.
    - Added styled HTML templates and plain-text fallbacks for both Contact inquiries and Quote requests (with file attachment links).
    - Configured reply-to headers so replies go directly to the customer's email address.

2.  **Contact Form Integration (`src/pages/Contact.jsx`):**
    - Added React state management for `name`, `email`, and `message`.
    - Wired `handleSubmit` to POST to `/api/send-email`.
    - Added interactive states: submitting indicator, accessible green success banner, and red error banner.

3.  **Quote Form Enhancement (`src/pages/Quote.jsx`):**
    - Updated `handleSubmit` to call `/api/send-email` upon submission, linking all uploaded file URLs.
    - Added resilient fallback: even if client-side Firestore fails, the email dispatch is still attempted.
    - Restored and polished the user-facing success and error notification banners.

4.  **Security & Environment Configuration:**
    - Created `.env.example` and `.env.local` templates for `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_RECIPIENT_EMAIL`, `MAILGUN_FROM_EMAIL`, and `MAILGUN_REGION`.
    - Verified `.env.local` is ignored in `.gitignore` to prevent secret leakage.
    - Updated `firestore.rules` to allow public creation of quote requests while maintaining strict authentication for admin read/update operations.

