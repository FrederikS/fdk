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
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

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

  const trackQuestionToggle = (question, expanded) => {
    trackCustomEvent({
      category: "Java Interview Question",
      action: "click",
      label: question,
      value: {
        collapsed: 0,
        expanded: 1,
      }[expanded ? "expanded" : "collapsed"],
    });
  };

  return (
    <Accordion
      allowZeroExpanded
      allowMultipleExpanded
      preExpanded={preExpanded}
    >
      {questions.map((q, i) => {
        const Answer = q.default;
        const question = q._frontmatter.question;
        const uuid = i + preExpanded.length + "";
        return (
          <Box py={3} key={i}>
            <AccordionItem uuid={uuid}>
              <AccordionItemState>
                {({ expanded }) => (
                  <React.Fragment>
                    <AccordionItemHeading
                      sx={{
                        cursor: "pointer",
                        ":hover .bounce": {
                          animation: `${bounceRight} .3s alternate ease infinite`,
                        },
                      }}
                      onClick={() => trackQuestionToggle(question, !expanded)}
                    >
                      <AccordionItemButton sx={{ p: 1 }}>
                        <Flex sx={{ alignItems: "center" }}>
                          {expanded ? (
                            <i sx={stylesChevronDown} />
                          ) : (
                            <i sx={stylesChevronRight} className="bounce" />
                          )}
                          <Heading as="h3" variant="styles.h5" my={0}>
                            {question}
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
                  </React.Fragment>
                )}
              </AccordionItemState>
            </AccordionItem>
          </Box>
        );
      })}
    </Accordion>
  );
}
