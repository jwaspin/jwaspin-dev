import type { Tool } from './types'
import { categories, categoryById } from './categories'
import { languages } from './tools/languages'
import { frontend } from './tools/frontend'
import { backend } from './tools/backend'
import { mobile } from './tools/mobile'
import { cssUi } from './tools/css-ui'
import { stateData } from './tools/state-data'
import { databases } from './tools/databases'
import { apiTools } from './tools/api-tools'
import { design } from './tools/design'
import { aiMl } from './tools/ai-ml'
import { devopsCloud } from './tools/devops-cloud'
import { versionControl } from './tools/version-control'
import { testingQa } from './tools/testing-qa'
import { monitoring } from './tools/monitoring'
import { editors } from './tools/editors'
import { productivity } from './tools/productivity'
import { designAssets } from './tools/design-assets'

export type { Tool, Category, Pricing } from './types'
export { categories, categoryById }

/**
 * Every tool across every category, in category-declaration order.
 * To add a new tool: append it to the relevant array in src/data/tools/<category>.ts.
 * To add a new category: see the comment atop src/data/categories.ts.
 */
export const tools: Tool[] = [
  ...languages,
  ...frontend,
  ...backend,
  ...mobile,
  ...cssUi,
  ...stateData,
  ...databases,
  ...apiTools,
  ...design,
  ...aiMl,
  ...devopsCloud,
  ...versionControl,
  ...testingQa,
  ...monitoring,
  ...editors,
  ...productivity,
  ...designAssets,
]

export const toolCountByCategory: Map<string, number> = tools.reduce((map, tool) => {
  map.set(tool.categoryId, (map.get(tool.categoryId) ?? 0) + 1)
  return map
}, new Map<string, number>())

export const featuredTools: Tool[] = tools.filter((t) => t.featured)
