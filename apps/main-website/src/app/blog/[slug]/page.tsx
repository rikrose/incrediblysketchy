import { FIND_BLOG_POST_BY_SLUG_QUERY, FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERY } from "@incrediblysketchy/shared-types";
import { Article, FIND_BLOG_POST_BY_SLUG_QUERYResult, FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERYResult } from "@incrediblysketchy/shared-types/sanity-types";
import { sanityFetch } from "~/hooks/sanity-client";
import { type Gallery, type HeadlineSection, type TextWithImage, type Video, type textblockType } from "@incrediblysketchy/shared-types/sanity-types";
import { PortableText, PortableTextBlock } from "@portabletext/react"
import clsx from "clsx";

async function getArticle(slug: string) {
    const article = await sanityFetch<FIND_BLOG_POST_BY_SLUG_QUERYResult>({
      query: FIND_BLOG_POST_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });

    return article;   
}

async function getPreviousAndNextArticles(slug: string) {
    const articles = await sanityFetch<FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERYResult>({
      query: FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERY,
      params: {
        slug
      },
    });

    return articles;
}


function ArticleNotFound() {
    return <div>Article not found.</div>
}

type ArticleProps = {
  article: Extract<FIND_BLOG_POST_BY_SLUG_QUERYResult, {_type: "article"}>;
  nextAndPreviousArticles: FIND_NEXT_AND_PREVIOUS_BLOG_POSTS_QUERYResult
};

type PortableTextProps = {
  value: PortableTextBlock;
  isInline: boolean;
};

function GallerySection({value, isInline}: PortableTextProps){
    return <div>Gallery</div>
}

function VideoSection({value, isInline}: PortableTextProps){
    return <div>Video</div>
}

function HeadlineSectionSection({value, isInline}: PortableTextProps){
    const section = value as HeadlineSection;
    if (!section.Styling){
        return <div className="text-6xl mx-auto">{section.title}</div>
    }
    const cls = clsx("container", "mx-auto", "inline-block", "bg-gradient-to-r", "bg-clip-text", "text-8xl", "text-transparent", section.Styling.split(" ")) 
    return <div className={cls}>{section.title}</div>
}

function TextWithImageSection({value, isInline}: PortableTextProps){
    const section = value as TextWithImage;

    if (!section?.text || !section.image)
        return null;

    return <div className="outline outline-2"><PortableText value={section.text} /></div>
}

function TextBlockSection({value, isInline}: PortableTextProps){
    const section = value as textblockType;
    return <PortableText value={section.text} />
}

const sectionComponents = {
    types : {
        "video": VideoSection,
        "headlineSection": HeadlineSectionSection,
        "textWithImage": TextWithImageSection,
        "gallery": GallerySection,
        "textblock": TextBlockSection
    }
}

type ArticleSectionTypes = Extract<FIND_BLOG_POST_BY_SLUG_QUERYResult[pageBuilder], _type>; 

function RenderArticle({article, nextAndPreviousArticles} : ArticleProps) {
    return <>{article.pageBuilder?.map(element => {
        return <PortableText value={element} components={sectionComponents} />;
    })}</> 
}

export default async function ArticlePage({params}: {params: {slug: string}}) {
    const article = await getArticle(params.slug);

    if (!article) {
        return <ArticleNotFound />;
    }

    const nextAndPreviousArticles = await getPreviousAndNextArticles(params.slug);

    return <RenderArticle article={article} nextAndPreviousArticles={nextAndPreviousArticles} />;
}