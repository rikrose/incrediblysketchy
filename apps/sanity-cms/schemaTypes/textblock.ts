import { defineField } from "sanity";
import { DocumentTextIcon } from '@sanity/icons'

export const textblockType = {
    name: 'textblock',
    title: 'Text Block',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
}