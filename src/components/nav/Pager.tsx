import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'gatsby'

const pageUrl = (prefix: string, page: number): string => (page <= 1 ? prefix : `${prefix}/${page}`)

export interface PagerProps {
  readonly prefix: string
  readonly page: number
  readonly total: number
  readonly maxVisiblePages?: number
  readonly className?: string
}

export const Pager = ({ prefix, page, total, maxVisiblePages = 5, className }: PagerProps) => {
  const normalizedPrefix = prefix.startsWith('/') ? prefix : `/${prefix}`
  const lastFirstVisiblePage = total - maxVisiblePages + 1
  let firstVisiblePage = page - Math.floor((maxVisiblePages - 1) / 2)
  // if firstVisiblePage is < 1, then set it to 1
  firstVisiblePage =
    firstVisiblePage < 1
      ? 1
      : lastFirstVisiblePage < firstVisiblePage
      ? lastFirstVisiblePage
      : firstVisiblePage
  const visiblePages = total < maxVisiblePages ? total : maxVisiblePages
  const lastVisiblePage = firstVisiblePage + visiblePages
  const show = total !== 1
  return (
    <Pagination className={className}>
      {firstVisiblePage > 1 && <Pagination.First as={Link} to={pageUrl(normalizedPrefix, 1)} />}
      {page > 1 && <Pagination.Prev as={Link} to={pageUrl(normalizedPrefix, page - 1)} />}
      {show &&
        Array.from(Array(visiblePages), (x, i) => firstVisiblePage + i).map((p) => (
          <Pagination.Item
            key={p}
            active={page === p}
            as={page === p ? undefined : Link}
            to={page === p ? undefined : pageUrl(normalizedPrefix, p)}
          >
            {p}
          </Pagination.Item>
        ))}
      {page < total && <Pagination.Next as={Link} to={pageUrl(normalizedPrefix, page - 1)} />}
      {lastVisiblePage < total && (
        <Pagination.Last as={Link} to={pageUrl(normalizedPrefix, total)} />
      )}
    </Pagination>
  )
}
