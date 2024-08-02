import { DetailPreview, defineArrayMember, defineField, defineType } from 'sanity';
import { defaultInitialValueTemplateItems } from 'sanity/structure';
import { createClient } from '@sanity/client'
import config from "..\\sanity.config"

export const blogpostType = defineType({
    name: 'article',
    title: 'Blog Article',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page Builder',
            of: [
                defineArrayMember({
                    name: 'headlineSection',
                    type: 'headlineSection',
                }),
                defineArrayMember({
                    name: 'textWithImage',
                    type: 'textWithImage',
                }),
                defineArrayMember({
                    name: 'gallery',
                    type: 'gallery',
                }),
                defineArrayMember({
                    name: 'video',
                    type: 'video',
                }),
                defineArrayMember({
                    name: 'textblock',
                    type: 'textblock',
                }),
            ]
        }),
        defineField({
            name: 'hideFromNavigation',
            type: 'boolean',
            title: 'Hide from next/previous links',
            description: 'Hide this article from the next/previous link generation',
        }),
    ]
});