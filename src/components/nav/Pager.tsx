import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'gatsby'

const pageUrl = (prefix: string, page: number): string =>
  page <= 1 ? `/${prefix}` : `/${prefix}/${page}`

export interface PagerProps {
  readonly prefix: string
  readonly page: number
  readonly total: number
  readonly maxVisiblePages?: number
  readonly className?: string
}

export const Pager = ({ prefix, page, total, maxVisiblePages = 5, className }: PagerProps) => {
  let firstVisiblePage = page - Math.floor((maxVisiblePages - 1) / 2)
  // if firstVisiblePage is < 1, then set it to 1
  firstVisiblePage = firstVisiblePage < 1 ? 1 : firstVisiblePage
  const visiblePages = total < maxVisiblePages ? total : maxVisiblePages
  const lastVisiblePage = firstVisiblePage + visiblePages - 1
  // const show = total !== 1
  const show = true
  return (
    <Pagination className={className}>
      {firstVisiblePage > 1 && (
        <Pagination.First>
          <Link to={pageUrl(prefix, 1)}></Link>
        </Pagination.First>
      )}
      {page > 1 && (
        <Pagination.Prev>
          <Link to={pageUrl(prefix, page - 1)}></Link>
        </Pagination.Prev>
      )}
      {show &&
        Array.from(Array(visiblePages), (x, i) => i + page).map((p) => (
          <Pagination.Item key={p} active={page === p}>
            <Link to={pageUrl(prefix, p)}>{p}</Link>
          </Pagination.Item>
        ))}
      {page < total && (
        <Pagination.Prev>
          <Link to={pageUrl(prefix, page - 1)}></Link>
        </Pagination.Prev>
      )}
      {lastVisiblePage < total && (
        <Pagination.Last>
          <Link to={pageUrl(prefix, total)}></Link>
        </Pagination.Last>
      )}
    </Pagination>
  )
}
