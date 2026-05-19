# SER-ECF Website

Official website for the **Southern Ethiopia Regional Evangelical Churches Fellowship (SER-ECF)** — uniting Evangelical churches across Southern Ethiopia for unity, leadership development, peacebuilding, and holistic transformation.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- i18next (English / Amharic)
- Supabase (admin auth & dashboard)
- PHP contact handler (`contact_handler.php`) for Yegara hosting

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the `dist/` folder to your web host. Include PHP files (`contact_handler.php`, `config.php`) in the same document root if using the contact form on Yegara.

## Environment

Copy `.env` and set:

- `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` — admin features
- `VITE_CONTACT_HANDLER_URL` — contact form endpoint (e.g. `https://yourdomain.com/contact_handler.php`)
