import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'IncrediblySketchy',

  projectId: 'cofqbwqn',
  dataset: 'production',

  plugins: [structureTool({defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
