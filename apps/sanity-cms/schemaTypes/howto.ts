import { DetailPreview, defineField, defineType } from 'sanity';
import { defaultInitialValueTemplateItems } from 'sanity/structure';

export const howtoType = defineType({
    name: 'howto',
    title: 'Howto Article',
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
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({   
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]   
        }),
    ]
});
