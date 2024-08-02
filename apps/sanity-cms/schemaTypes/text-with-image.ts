import { defineField } from "sanity";
import { DocumentTextIcon } from '@sanity/icons'

export const textWithImageType = {
    name: 'textWithImage',
    title: 'Text with Image',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
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
        }),
        defineField({
            name: 'imageCaption',
            type: 'string',
            title: 'Image Caption',
        }),
        defineField({
            name: 'text',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ],
    preview: {
        select: {
            title: 'imageCaption',
            subtitle: 'text',
            media: 'image'
        },
        prepare({imageCaption, text, image}: {imageCaption: string, text: string, image: any }){
            return {
                title: imageCaption || 'Untitled',
                subtitle: text ?? 'Text with Image',
                media: image || DocumentTextIcon,
            }
        }
    }
}