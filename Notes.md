# Improvements

## OpenGraph

Feedback from https://www.opengraph.xyz/

- Image is 1080x1450px. Recommended size is 1200x630px.
- Missing a clear headline in your image
- Missing a call-to-action in your image
- Title is short (27 characters). Optimal: 50-60 characters
- Description is short (109 chars). Optimal: 110-160 chars

## Google Rich Results Test

https://search.google.com/test/rich-results

- No items detected
- No rich results detected in this URL.

## Schema.org Validator

https://validator.schema.org/

- Looks good for home page

## Google Search Console

https://search.google.com/search-console/welcome

- Waiting on data
- TODO: in Search Console, submit sitemap manually (Sitemaps → "Add a new sitemap" → `sitemap.xml`) to speed up indexing.

---

# Suggested fixes (priority order)

## 1. OG image at 1200×630 (highest impact)

The current default `self-portrait.jpg` is 1080×1450 (portrait), so social platforms crop it awkwardly.

Options:
- **(a)** Pick a landscape painting from `/public/art/` close to 1.91:1 ratio. Update `DEFAULT_OG_IMAGE` in `lib/jsonld.js`.
- **(b)** Create one dedicated `/public/og-image.jpg` at exactly 1200×630 (resize/crop a chosen painting). One image covers every page.
- **(c)** Per-page OG images later (more work, more control).

Recommendation: start with (b).

## 2. Lengthen home title + description

In `app/page.js`:

- Title is 27 chars (optimal 50–60). Suggested:
  - `"12 Instruments — Painting Series by Vera Zhang, Chinese Artist"` (~62 chars)
- Description is 109 chars (optimal 110–160). Suggested:
  - `"12 Instruments — a 12-piece oil-painting series exploring music through accordion, cello, erhu, guqin, pipa and more, by Chinese artist Vera Zhang."` (~150 chars)

(Tune the description by listing instruments you actually feature.)

## 3. Add `WebSite` schema in layout

`Person` alone doesn't trigger any Google rich-result type — that's why Rich Results Test says "no items detected" on the home page. `WebSite` schema is one of the easiest to qualify for and enables the "site name" display in search results.

In `lib/jsonld.js`, add a `veraWebsite` constant alongside `veraPerson`, then include it in `app/layout.js`:

```js
{
  "@type": "WebSite",
  "@id": SITE_URL + "#website",
  url: SITE_URL,
  name: "Vera Zhang",
  inLanguage: ["en", "zh"],
  publisher: { "@id": VERA_ID },
}
```

## 4. Re-test Rich Results on stronger pages

Home only has `Person` + `WebSite`. The pages that *should* produce rich results:
- `/blog/brain`, `/blog/genesis`, `/blog/creative-freedom`, `/blog/opening` (BlogPosting)
- `/art` (ImageGallery)

Paste each URL into Rich Results Test to confirm.

## 5. (Optional) Model the 12 Instruments series as `CreativeWork`

Same pattern as `/art` — the home page content is itself a series of paintings. Adding a `CreativeWork` (or `CollectionPage` of 12 `VisualArtwork`s) would make the home content machine-readable too.

## Skip

- "Missing headline in OG image" / "missing call-to-action in OG image" — these warnings assume a corporate/marketing-style social card. For an artist site, the painting *is* the message. Ignore.
