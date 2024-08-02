import "server-only"

import { createClient, type QueryParams } from "next-sanity"
import { env } from "~/env"

export const client = createClient({
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    useCdn: env.NODE_ENV === "production",
    apiVersion: "2024-01-01",
});

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
  }: {
    query: string;
    params?: QueryParams;
    tags?: string[];
  }) {
    return client.fetch<QueryResponse>(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    });
  }