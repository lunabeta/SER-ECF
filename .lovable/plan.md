## Goal

Add a proper website **Terms & Conditions** page tailored to SER-ECF, and link it from the site footer's bottom legal row. The uploaded PDF (Protocol Regulation) will be referenced as institutional governance, but the T&C itself will cover real website-use topics.

## What gets built

**1. New page: `src/pages/Terms.tsx`** at route `/terms`

Uses the existing `InfoPage` component for visual consistency with other content pages. Sections:

1. Introduction & Acceptance of Terms
2. About SER-ECF (brief org context)
3. Use of the Website (permitted use, prohibited conduct)
4. Intellectual Property (logo, content, scripture attributions)
5. User Submissions (prayer requests, contact form, newsletter)
6. Donations & Financial Contributions (non-refundable, intended use, tax notice)
7. Third-Party Links & Services
8. Ministry & Institutional Affiliation — short note referencing the **Protocol Regulation** that governs affiliated ministries, theological colleges, and spiritual institutions (summary derived from the uploaded PDF)
9. Disclaimers & Limitation of Liability
10. Privacy (brief — points to contact email for data requests)
11. Governing Law (Federal Democratic Republic of Ethiopia)
12. Changes to These Terms
13. Contact (uses existing email/phone from footer)
14. Effective Date

**2. Routing:** register `/terms` in `src/App.tsx` above the catch-all.

**3. Footer link:** in `src/components/SiteFooter.tsx`, add a "Terms & Conditions" link to the bottom legal row (line 65–68) so it sits beside the copyright line — small, low-emphasis, matches existing footer text styling.

## Notes

- No backend, no schema changes — purely a content page.
- Copy is general-purpose website T&C tailored to a non-profit/religious org, not legal advice; user should review.
- The PDF's Protocol Regulation content stays as a brief reference section inside T&C; if you later want it as its own dedicated page (e.g. `/protocol-regulation`), that's a small follow-up.
