import { PortableText, PortableTextBlock, groq, type SanityDocument } from "next-sanity";
import { sanityFetch } from "~/hooks/sanity-client"

import { RETRIEVE_RECIPE_BY_SLUG_QUERY } from "@incrediblysketchy/shared-types";
import { RETRIEVE_RECIPE_BY_SLUG_QUERYResult } from "@incrediblysketchy/shared-types/sanity-types";
import { makePortableText } from "~/hooks/sanity-helpers";
import Link from "next/link";

async function getRecipe(slug: string) {
  const recipe = await sanityFetch<RETRIEVE_RECIPE_BY_SLUG_QUERYResult>({
    query: RETRIEVE_RECIPE_BY_SLUG_QUERY,
    params: {
      slug,
    },
  });

  return recipe;
}

function RecipeTitle({title}: {title: string}) {
  return <h1>{title}</h1>
}

function RecipeTags({tags}: {tags: string[]}) {
  if (tags.length === 0) {
    return <div className="text-surface2">No tags for this recipe</div>;
  }
  return <div className="text-overlay1 mb-4">
      Tags: <ul className="inline-flex gap-2 list-none">{tags.map((tag:string) => (
        <li key={tag} className="px-2 py-1 justify-center items-center rounded-full bg-surface2 text-text">
          <Link href={`/recipes/tag/${tag.replace(" ", "-")}`} className="underline decoration-red underline-offset-4">{tag.replace("-", " ")}</Link>
        </li>
      ))}
      </ul>
    </div>
}

function RecipeIngredients({ingredients}: {ingredients: string[]}) {
  if (ingredients.length === 0) {
    return <div className="text-surface2">Apparently, this recipe does not need ingedients.</div>;
  }

  return <><h2>Ingredients</h2>
  <ul className="mb-4">
      {ingredients.map((ingredient:string) => (
        <li key={ingredient} className="font-semibold">{ingredient}</li>
      ))}
    </ul></>
}

function RecipeSpecialEquipment({specialEquipment}: {specialEquipment: PortableTextBlock | undefined}) {
  if (!specialEquipment) {
    return null;
  }
  return <>
  <h2>Special Equipment</h2>
  <div className="mb-4 prose">
    <PortableText value={specialEquipment} />
  </div></>
}

function RecipeMethod({method}: {method: PortableTextBlock | undefined}) {
  if (!method) {
    return null;
  } 
  return <div className="border-2 border-surface2 rounded-lg p-4">
  <h2>Method</h2>
  <div className="mb-4 prose method">
    <PortableText value={method} />
  </div></div>
}

function RecipeNotFound() {
  return <div>Recipe not found</div>
}

export default async function RecipePage({params}: {params: { slug: string }}) {
  const recipe = await getRecipe(params.slug);

  if (!recipe) {
    return <RecipeNotFound />;
  }

  const specialEquipment = makePortableText(recipe.specialEquipment, "specialEquipment");
  const method = makePortableText(recipe.method, "method");

  return (
    <>
    <RecipeTitle title={recipe.title || ""} />
    <RecipeTags tags={recipe.tags || []} />
    <RecipeIngredients ingredients={recipe.ingredients || []} />
    <RecipeSpecialEquipment specialEquipment={specialEquipment} />
    <RecipeMethod method={method} />
    </>
  );
}