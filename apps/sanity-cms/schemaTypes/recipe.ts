import { DetailPreview, defineField, defineType } from 'sanity';
import { defaultInitialValueTemplateItems } from 'sanity/structure';

export const recipeType = defineType({
    name: 'recipe',
    title: 'Recipe',
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
            name: 'ingredients',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [],
        }),
        defineField({
            name: 'specialEquipment',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({   
            name: 'method',
            type: 'array',
            of: [{ type: 'block' }]   
        }),
    ]
});
