import React from "react";
import { Box } from "@theme-ui/components";
import { components } from "@theme-ui/mdx";
import baseComponents from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/components";

const Table = components.table;

export default {
  ...baseComponents,
  table: ({ children }) => (
    <Box sx={{ overflowX: "auto" }}>
      <Table>{children}</Table>
    </Box>
  ),
};
