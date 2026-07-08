# CMS / Admin Structure

This project is a portfolio site, so the backend should be content-first rather than app-first. The CMS should expose the sections already used by the frontend and keep the admin workflow simple: edit content, upload media, publish, and inspect contact submissions.

## Content Models

### `site_settings`
Global configuration used across the site.

- `site_name`
- `seo_title`
- `seo_description`
- `logo_text`
- `resume_url`
- `profile_image`
- `social_links`
- `theme_default`
- `analytics_id`

### `navigation_items`
Controls the navbar and footer links.

- `label`
- `href`
- `order`
- `visible`

### `hero_section`
Hero content.

- `headline`
- `highlight_text`
- `subheadline`
- `primary_cta_label`
- `primary_cta_href`
- `secondary_cta_label`
- `secondary_cta_href`
- `profile_image`

### `about_section`
About section copy and stats.

- `title`
- `bio_paragraphs`
- `stats` with `label` and `value`

### `skills`
Skill categories displayed in the skills grid.

- `category`
- `skills[]`
- `order`

### `projects`
Interactive project cards and the project detail drawer.

- `title`
- `slug`
- `category`
- `year`
- `description`
- `decision`
- `challenge`
- `impact`
- `technologies[]`
- `tags[]`
- `image`
- `metrics[]` with `label` and `value`
- `decisions[]`
- `code_url`
- `live_url`
- `case_study_slug`
- `featured`
- `published`

### `case_studies`
Long-form case study content.

- `title`
- `slug`
- `project_id`
- `summary`
- `problem`
- `approach`
- `tradeoffs`
- `results`
- `metrics[]`
- `decision_notes[]`
- `published`

### `blog_posts`
MDX-backed blog entries.

- `title`
- `slug`
- `excerpt`
- `body_mdx`
- `cover_image`
- `published_at`
- `reading_time`
- `tags[]`
- `published`

### `github_profile`
Data for the GitHub activity / pinned repo section.

- `username`
- `followers`
- `contributions`
- `pinned_repositories[]`
- `last_synced_at`

### `experience`
Work history and education.

- `type` (`job` or `education`)
- `title`
- `company_or_school`
- `period`
- `description`
- `achievements[]`
- `order`

### `contact_messages`
Incoming form submissions.

- `name`
- `email`
- `message`
- `status` (`new`, `read`, `archived`)
- `created_at`
- `ip_hash` or `request_id`

## Admin Screens

### Dashboard

- Recent drafts
- Recent contact messages
- Publish queue
- Last GitHub sync time

### Content Editor

- Hero editor
- About editor
- Skills editor
- Projects editor
- Case study editor
- Blog editor
- Experience editor
- Footer/site settings editor

### Media Library

- Upload profile and project images
- Reuse assets across posts and case studies
- Alt text and file metadata

### Contact Inbox

- View messages
- Mark as read or archived
- Reply via email link

## Suggested API Endpoints

If you want REST, these are enough to power the whole site:

- `GET /api/site-settings`
- `GET /api/navigation`
- `GET /api/hero`
- `GET /api/about`
- `GET /api/skills`
- `GET /api/projects`
- `GET /api/projects/:slug`
- `GET /api/case-studies`
- `GET /api/case-studies/:slug`
- `GET /api/blog-posts`
- `GET /api/blog-posts/:slug`
- `GET /api/github-profile`
- `POST /api/contact`
- `GET /api/contact` for admin use

## Permissions

- `admin`: full access
- `editor`: can edit site content, cannot change users or deployment settings
- `viewer`: read-only access to drafts, messages, and analytics

## Implementation Notes

- Keep public content separate from admin-only fields.
- Store MDX blog bodies as markdown or MDX blobs, not HTML.
- Use slugs as stable route identifiers.
- Make projects and case studies link by ID or slug, not by title.
- Cache public read endpoints aggressively because the site is mostly read-heavy.

## Minimal Backend Stack

If you want the simplest usable backend:

- PostgreSQL for structured content
- Object storage for images and uploads
- A small REST API for public content and contact form submissions
- An admin dashboard or headless CMS for editing
