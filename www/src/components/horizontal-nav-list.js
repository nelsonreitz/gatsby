import React from "react"
import Link from "gatsby-link"
import styled from "@emotion/styled"

import { colors, mediaQueries } from "../utils/presets"

const LinkList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  * + * {
    border-left: 1px solid ${colors.ui.border.subtle};
  }
`
const Li = styled.li`
  padding: 3px 12px;
  ${mediaQueries.md} {
    padding: 0px 6px;
  }
  margin: 0;
  &:hover {
    background-color: ${colors.ui.hover};
  }
`

const HorizontalNavList = ({ items = [], slug }) => (
  <nav>
    <LinkList>
      {items.map(item => (
        <Link key={item} to={`${slug.slice(0, -1)}#${item.toLowerCase()}`}>
          <Li>{item}</Li>
        </Link>
      ))}
    </LinkList>
  </nav>
)

export default HorizontalNavList
