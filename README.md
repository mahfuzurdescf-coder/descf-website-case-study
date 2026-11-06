# DESCF’s public conservation website

**Mahfuzur Rahman · Website planning, development and launch**

I planned, built and launched DESCF’s public website. The site brings together conservation programmes, field documentation, editorial content and a guide to the snakes of Bangladesh. I designed the website around the different things visitors come to do, from learning about a species to exploring a programme or finding a way to collaborate.

[Visit the live website](https://www.descf.org/) · [Explore the snake guide](https://www.descf.org/bangladesh-wildlife/snakes)

## Three decisions that shaped the site

### Give each audience a clear starting point

The homepage separates education, coexistence and research. Programme pages explain the work in more detail, while the partnership page gives institutions a clear way to engage. Field photographs with contextual captions connect these areas to DESCF’s activities.

### Start with the names visitors actually use

The snake guide offers search by Bangla, local, English and scientific names, with filters for venom status and conservation status. Its public guidance emphasises safe distance and protecting sensitive locations. The reviewed public snapshot displayed one published species profile, the Indian rat snake. That snapshot demonstrates the layout and content model. Search behaviour across spelling variants still needs hands-on verification.

### Build programme pages around structured content

A May 2026 project audit records a Next.js programme detail route that looks up programmes by slug from Sanity and uses shared components for articles and resources. This is a concrete example of separating the programme’s content from its page template so the same presentation can serve multiple programmes.

## Engineering evidence

| Evidence | What it supports |
|---|---|
| 19 May 2026 programme detail audit | A dynamic programme route, shared cards, Sanity queries and a metadata helper in the local implementation. |
| 20 May 2026 metadata and QA audit | A documented check of public images and social-sharing metadata. |
| 20 May 2026 release cleanup audit | Next.js 14.2.3 compiled successfully, checked types and generated 50 static pages during that historical build. The build log records that linting was skipped. |

The build count refers to that historical run. The current production deployment commit, current route count and performance have yet to be measured. Website development is my contribution. DESCF’s fieldwork, photography and editorial contributions should be credited to their respective contributors wherever examples are reproduced.

## Next evidence for the GitHub release

1. Add a mobile homepage view, a programme view and a guide view, using approved images and captions.
2. Publish a standalone, runnable search demo with synthetic data. Test a Bangla name, a spelling variant, an English name, a scientific name, a shared local alias and a no-results query.
3. Document the testing conditions, keyboard and mobile checks, and any issue fixed after review. Use a dated before-and-after example where the comparison is reproducible.
4. Add a short source and deployment timeline after matching local commits to release records. Publish only approved excerpts and keep private configuration and records out of the portfolio.

## Search demo

Download [DESCF_Search_Demo.html](./DESCF_Search_Demo.html) and open it in a browser. It uses fictional records to demonstrate multilingual search.
