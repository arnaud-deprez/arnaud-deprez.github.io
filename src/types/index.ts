export interface PaginatedPageContext {
  readonly total: number
  readonly page: number
  readonly pageTotal: number
  readonly prefix: string
}
