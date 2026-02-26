# Family Devotion Calendar

A simple one-page web app that provides a daily devotion for every day in a 1-year plan (365 days).

## What is included

- Daily scripture reference and text for each day.
- Daily William Branham quote slot for each day.
- Date picker to navigate any day in the year.
- Author section:
  - John Ukpanukpong
  - The Bride Of Jesus Christ Tabernacle, Ibong, Obudu, Cross River, Nigeria
  - 2348167168911

## Important note

The runtime environment used to generate this app cannot directly access `branham.org` (HTTP 403 from the network gateway), so `devotions.js` currently contains placeholder quote text for each day. Replace each placeholder with an unabridged William Branham sermon quote (100–150 characters) and include source details from `branham.org`.

## Run locally

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.
