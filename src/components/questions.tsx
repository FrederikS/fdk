/** @jsx jsx */
import { jsx, Heading, SxStyleProp } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import { keyframes } from "@emotion/core";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import questions from "../text/questions";

const baseStylesChevron: SxStyleProp = {
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  transform: "scale(1.3)",
  width: "22px",
  height: "22px",
  border: "2px solid transparent",
  borderRadius: "100px",
  marginRight: 3,
  flex: "none",
  color: "secondary",
};

const stylesChevronRight: SxStyleProp = {
  ...baseStylesChevron,
  "::after": {
    content: '""',
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    width: "10px",
    height: "10px",
    borderBottom: "3px solid",
    borderRight: "3px solid",
    transform: "rotate(-45deg)",
    right: "6px",
    top: "4px",
  },
};

const stylesChevronDown: SxStyleProp = {
  ...baseStylesChevron,
  "::after": {
    content: '""',
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    width: "10px",
    height: "10px",
    borderBottom: "3px solid",
    borderRight: "3px solid",
    transform: "rotate(45deg)",
    left: "4px",
    top: "2px",
  },
};

const bounceRight = keyframes`
  from {
    transform: translateX(0) scale(1.3);
  }
  to {
    transform: translateX(5px) scale(1.4);
  }
`;

export function Questions() {
  // when js disabled, expand all
  const [preExpanded, setPreExpanded] = useState(
    questions.map((_q, i) => i + questions.length + "")
  );

  // when js enabled, collapse all
  useEffect(() => {
    if (preExpanded.length > 0) {
      setPreExpanded([]);
    }
  });

  return (
    <Accordion
      allowZeroExpanded
      allowMultipleExpanded
      preExpanded={preExpanded}
    >
      {questions.map((q, i) => {
        const Answer = q.default;
        const uuid = i + preExpanded.length + "";
        return (
          <Box py={3} key={i}>
            <AccordionItem uuid={uuid}>
              <AccordionItemHeading
                sx={{
                  cursor: "pointer",
                  ":hover .bounce": {
                    animation: `${bounceRight} .3s alternate ease infinite`,
                  },
                }}
              >
                <AccordionItemButton sx={{ p: 1 }}>
                  <Flex sx={{ alignItems: "center" }}>
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <i sx={stylesChevronDown} />
                        ) : (
                          <i sx={stylesChevronRight} className="bounce" />
                        )
                      }
                    </AccordionItemState>
                    <Heading as="h3" variant="styles.h5" my={0}>
                      {q._frontmatter.question}
                    </Heading>
                  </Flex>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Box
                  mx={3}
                  sx={{
                    "& .gatsby-highlight, .code-title": {
                      mx: [-4, -3, -3, -3],
                    },
                  }}
                  paddingTop={2}
                >
                  <Answer />
                </Box>
              </AccordionItemPanel>
            </AccordionItem>
          </Box>
        );
      })}
    </Accordion>
  );
}
