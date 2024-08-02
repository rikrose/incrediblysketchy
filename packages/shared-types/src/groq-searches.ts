import { groq } from "next-sanity";  

export const RETRIEVE_RECIPE_BY_SLUG_QUERY = groq`*[_type == "recipe" && slug.current == $slug][0]`; 
export const FIND_RECIPES_WITH_TAG_QUERY = groq`*[_type == "recipe" && $recipeTag in tags]`;
export const FIND_ALL_TAGS_QUERY = groq`*[_type == "recipe"].tags[]`;

export const FIND_BLOG_POST_BY_SLUG_QUERY = groq`*[_type == "article" && slug.current == $slug][0]}`;

// TODO: tested in Vision. Make use of. Note that previous and next could be null, or entire result could be null if current doesn't exist.
export const FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERY = groq`
*[_type == "article" && slug.current == $slug]{
    "current": { 
      "slug": slug.current, title, publicReleaseDate 
    },
    "previous": *[_type == "article" && ^._updatedAt > _updatedAt && hideFromNavigation != true]|order(_updatedAt desc)[0]{  
        "slug": slug.current, title, _updatedAt
    },
    "next": *[_type == "article" && ^._updatedAt < _updatedAt && hideFromNavigation != true]|order(_updatedAt asc)[0]{  
        "slug": slug.current, title, _updatedAt
    },
}|order(_updatedAt)[0]`;