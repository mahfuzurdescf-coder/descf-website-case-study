/**
 * An illustrative programme-page data pattern.
 * No production content, credentials, or live CMS connection are included.
 */
export type ProgrammeSummary = {
  title: string;
  slug: string;
  summary: string;
  status: 'current' | 'in-development' | 'exploratory';
  relatedArticles: Array<{ title: string; slug: string }>;
};

export const programmeBySlugQuery = `
  *[_type == "programme" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "summary": shortDescription,
    status,
    "relatedArticles": relatedArticles[]-> {
      title,
      "slug": slug.current
    }
  }
`;

// The caller supplies a CMS fetcher. This example does not include a client
// configuration, environment variables, or an authenticated connection.
export async function loadProgramme(
  slug: string,
  fetchContent: <T>(query: string, params: { slug: string }) => Promise<T>,
): Promise<ProgrammeSummary | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return fetchContent<ProgrammeSummary | null>(programmeBySlugQuery, { slug });
}