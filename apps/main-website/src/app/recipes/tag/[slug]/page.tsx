import { FIND_RECIPES_WITH_TAG_QUERY } from "@incrediblysketchy/shared-types";
import { FIND_RECIPES_WITH_TAG_QUERYResult } from "@incrediblysketchy/shared-types/sanity-types";
import { Suspense } from "react";
import { sanityFetch } from "~/hooks/sanity-client";

async function getRecipes(recipeTag: string) {
    const recipes = await sanityFetch<FIND_RECIPES_WITH_TAG_QUERYResult>({
      query: FIND_RECIPES_WITH_TAG_QUERY,
      params: {
        recipeTag,
      },
    });

    return recipes;   
}

export default async function RecipeTagPage({params}: {params: { slug: string }}) {
    const recipes = await getRecipes(params.slug);

    return <>
        <h1>Tag: {params.slug}</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <ul>
                {recipes.map(recipe => <li key={recipe._id}>{recipe.title}</li>)}
            </ul>
        </Suspense>
    </>
}
