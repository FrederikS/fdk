/** @jsx jsx */
import { jsx } from "theme-ui";
import { withPrefix } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import { Avatar, Flex, Box } from "@theme-ui/components";
// @ts-ignore
import AboutText from "../text/about";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Flex sx={{ flexDirection: ["column", "column", "row", "row"] }}>
        <Box p={2} sx={{ width: ["full", "full", "2/3", "2/3"] }}>
          <AboutText />
        </Box>
        <Flex
          p={2}
          sx={{
            justifyContent: "center",
            flexDirection: ["row", "row", "column", "column"],
            width: ["full", "full", "1/3", "1/3"],
          }}
        >
          <Avatar
            src={withPrefix("/avatar.jpg")}
            sx={{
              width: ["1/2", "1/2", "full", "full"],
              height: ["full", "full", "auto", "auto"],
            }}
          />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default AboutPage;
