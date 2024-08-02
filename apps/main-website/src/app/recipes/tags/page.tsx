import { PortableText, PortableTextBlock, groq, type SanityDocument } from "next-sanity";
import { sanityFetch } from "~/hooks/sanity-client"

import { FIND_ALL_TAGS_QUERY } from "@incrediblysketchy/shared-types";
import { FIND_ALL_TAGS_QUERYResult } from "@incrediblysketchy/shared-types/sanity-types";
import { makePortableText } from "~/hooks/sanity-helpers";
import Link from "next/link";
import { Suspense } from "react";

async function getTags() {
  const recipe = await sanityFetch<FIND_ALL_TAGS_QUERYResult>({
    query: FIND_ALL_TAGS_QUERY,
    params: {},
  });

  return recipe;
}


export default async function RecipeTagPage({params}: {params: { slug: string }}) {
  const tags = await getTags();

  return <>
      <Suspense fallback={<div>Loading...</div>}>
          <ul>
              {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
      </Suspense>
  </>
}
