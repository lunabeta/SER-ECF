# Deploying SER-ECF on Yegara (Apache)

## Build locally

```bash
npm install
npm run build
```

## Upload to hosting

Upload **everything inside** the `dist/` folder to your site root (`public_html` or your domain folder), including:

- `index.html`
- `assets/` folder
- **`.htaccess`** ← required for routes like `/about` to work on refresh
- `favicon.jpg`
- PHP files if using the contact form: `contact_handler.php`, `config.php`

> **Important:** Enable “Show hidden files” in File Manager so `.htaccess` is uploaded.

## Fix: pages work when clicking nav, but 404 on refresh

This means `.htaccess` is missing or `mod_rewrite` is off. The `.htaccess` in `public/` is copied into `dist/` on build.

If your site is in a **subfolder** (e.g. `yoursite.com/ser-ecf/`), edit `dist/.htaccess` before upload:

```apache
RewriteBase /ser-ecf/
```

## Fix: old Lovable tab icon

1. Delete old `favicon.ico` on the server if it still exists.
2. Upload `favicon.jpg` from `dist/`.
3. Hard-refresh the browser (Ctrl+Shift+R) or clear cache.

## Contact form

Set in `.env` before build:

```
VITE_CONTACT_HANDLER_URL=https://yourdomain.com/contact_handler.php
```

Then rebuild and re-upload `dist/`.
