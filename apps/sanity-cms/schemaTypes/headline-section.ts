import { defineField } from "sanity";
import { StarIcon } from '@sanity/icons'

export const headlineSectionType = {
    name: 'headlineSection',
    title: 'Headline Section',
    type: 'object',
    icon: StarIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'Styling',
            description: "TailwindCSS override",
            type: 'string',
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessibility.',
                    validation: (Rule) => Rule.required(),
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'backgroundImage',
        },
        prepare({title, media}: {title: string, media: any}){ 
            return {
                title: title || 'Untitled',
                subtitle: 'Headline Section',
                media: media || StarIcon
            }
        }
    }
}