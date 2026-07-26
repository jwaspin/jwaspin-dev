import type { Tool } from './types'
import { categories, categoryById, categoryGroups } from './categories'
import { languages } from './tools/languages'
import { frontend } from './tools/frontend'
import { backend } from './tools/backend'
import { fullstack } from './tools/fullstack'
import { mobile } from './tools/mobile'
import { cssUi } from './tools/css-ui'
import { stateData } from './tools/state-data'
import { databases } from './tools/databases'
import { apiTools } from './tools/api-tools'
import { networkingSecurity } from './tools/networking-security'
import { design } from './tools/design'
import { aiMl } from './tools/ai-ml'
import { devopsCloud } from './tools/devops-cloud'
import { buildPackage } from './tools/build-package'
import { versionControl } from './tools/version-control'
import { testingQa } from './tools/testing-qa'
import { monitoring } from './tools/monitoring'
import { editors } from './tools/editors'
import { productivity } from './tools/productivity'
import { designAssets } from './tools/design-assets'
import { productOwners } from './owners'
import { libraries, libraryCountByEcosystem, libraryEcosystems } from './libraries'
import { references, referenceSourceTypes } from './references'

export type { Tool, Category, CategoryGroup, CategoryGroupId, ProductOwner, Library, LibraryEcosystem, Pricing, Reference, ReferenceSourceType, ReferenceSourceTypeInfo } from './types'
export { categories, categoryById, categoryGroups, productOwners, libraries, libraryCountByEcosystem, libraryEcosystems, references, referenceSourceTypes }

/**
 * Every tool across every category, in category-declaration order.
 * To add a new tool: append it to the relevant array in src/data/tools/<category>.ts.
 * To add a new category: see the comment atop src/data/categories.ts.
 */
export const tools: Tool[] = [
  ...languages,
  ...frontend,
  ...backend,
  ...fullstack,
  ...mobile,
  ...cssUi,
  ...stateData,
  ...databases,
  ...apiTools,
  ...networkingSecurity,
  ...design,
  ...aiMl,
  ...devopsCloud,
  ...buildPackage,
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

/** Favicon source for each library ecosystem, borrowed from the tool/language it extends. */
export const ecosystemIconUrl: Map<string, string> = new Map(
  libraryEcosystems.map((ecosystem) => [ecosystem.id, tools.find((tool) => tool.id === ecosystem.toolId)?.url ?? '']),
)

export const featuredTools: Tool[] = tools.filter((t) => t.featured)
