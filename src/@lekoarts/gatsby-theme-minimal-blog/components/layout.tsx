import React from "react"
import { Global } from "@emotion/core"
import { Box, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Header from "@lekoarts/gatsby-theme-minimal-blog/src/components/header"
import Footer from "@lekoarts/gatsby-theme-minimal-blog/src/components/footer"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"
import { globalStyles } from "../../../styles/global"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global styles={globalStyles} />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </Styled.root>
)

export default Layout
