# DESCF — conservation website and species discovery

**Mahfuzur Rahman · Website planning, design, development, and launch**

I developed the public website for the [Deep Ecology and Snake Conservation Foundation (DESCF)](https://www.descf.org/) in Bangladesh. It brings conservation programmes, public education, field stories, and wildlife information into one accessible platform.

[**Visit the website**](https://www.descf.org/) · [**Explore the snake guide**](https://www.descf.org/bangladesh-wildlife/snakes) · [**View the interactive case study**](https://mahfuzurdescf-coder.github.io/descf-website-case-study/) · [**Try the name-search explorer**](https://mahfuzurdescf-coder.github.io/descf-website-case-study/DESCF_Search_Demo.html)

## The design challenge

People arrive with different needs: to learn about a snake, understand a conservation programme, read a field story, or contact the organisation. The website needed clear routes for each audience while keeping scientific information approachable and responsible.

## What I built

| Area | Approach |
| --- | --- |
| Public experience | Distinct entry points for conservation learning, programmes, wildlife information, stories, and collaboration |
| Species discovery | A searchable snake guide with Bangla, local, English, and scientific names, alongside venom and conservation-status filters |
| Content architecture | Structured programme pages and reusable article/resource components connected to Sanity CMS |
| Responsible communication | Safety-first wildlife guidance and care around sensitive species-location information |

## Selected technical work

The web application uses **Next.js 14, TypeScript, React, Tailwind CSS, Sanity CMS, and GROQ**. The following self-contained examples illustrate two of the engineering patterns behind the experience:

- [Multilingual name matching](./examples/species-name-search.mjs) — pure search logic for Bangla, English, romanised aliases, and scientific names, with [automated examples](./examples/species-name-search.test.mjs).
- [Structured programme content](./examples/programme-content-pattern.ts) — a typed, reusable page-data pattern with a parameterised GROQ query.

The [species-name explorer](./DESCF_Search_Demo.html) is a standalone interaction illustrating searches across writing systems, aliases, and scientific names. **Its sample records are fictional and must not be used for species identification.**
The code examples are illustrative and do not connect to DESCF's live database.

## My role and collaborators

I was responsible for the website's planning, design, implementation, and launch. DESCF's field programmes, photographs, research, and editorial contributions belong to the respective contributors and are not presented as my individual work.

The live website continues to evolve; this case study describes the product and implementation areas shown above without claiming unmeasured traffic, performance, or conservation outcomes.