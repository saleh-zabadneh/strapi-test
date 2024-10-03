import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'omega-v1',

  projectId: 'l1tyswe0',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  cors: {
    origin: [
      'http://localhost:3000',
      'https://your-nextjs-app.vercel.app',
      'https://your-sanity-studio.vercel.app',
    ],
    credentials: true,
  },
})
