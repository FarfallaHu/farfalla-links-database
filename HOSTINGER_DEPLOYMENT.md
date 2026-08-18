# Hostinger deployment

This project is a static React/Vite application. Hostinger only needs the
contents of the generated `dist` directory; Node.js is not required in
production.

## Build locally

```bash
pnpm install --frozen-lockfile
pnpm build
```

The production files are generated in `dist/`. The build also copies
`public/.htaccess` into `dist/.htaccess` for SPA fallback, security headers,
and long-lived caching of hashed assets.

## Upload through hPanel

1. Open **Websites → Dashboard → File manager** for the intended domain.
2. Open the domain's document root, normally `public_html`.
3. Back up any existing site before replacing it.
4. Upload the **contents** of `dist/`, not the `dist` folder itself.
5. Confirm that `index.html`, `.htaccess`, and `assets/` are directly inside
   `public_html`.
6. Open the public URL over HTTPS and verify the page and browser console.

## Data behavior

- Shared links and folders come from `src/app/data/localData.ts` and are part
  of every build.
- Changes made in the deployed UI are saved only in that browser's
  `localStorage`. They do not update GitHub or other visitors automatically.
- To publish shared data changes, update `localData.ts`, commit the change,
  rebuild, and upload the new `dist` contents.

## Security note

The edit password in this static frontend is a convenience guard, not secure
authentication. Browser-delivered JavaScript can always be inspected. Do not
store confidential links, credentials, or private data in this public
repository or rely on the edit prompt for access control.
