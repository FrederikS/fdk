/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <a
          onClick={(e) => {
            e.preventDefault();
            // @ts-ignore
            gaOptout();
          }}
        >
          Deactivate Google Analytics
        </a>
      </div>
      <div>
        <Link
          as={OutboundLink}
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link
          as={OutboundLink}
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de/en"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
