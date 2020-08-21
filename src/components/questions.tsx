/** @jsx jsx */
import { jsx, Heading, SxStyleProp } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import { keyframes } from "@emotion/core";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

interface QuestionProps {
  question: string;
  children: React.ReactNode;
}

const baseStylesChevron: SxStyleProp = {
  boxSizing: "border-box",
  position: "relative",
  display: "block",
  transform: "scale(1.3)",
  width: "22px",
  height: "22px",
  border: "2px solid transparent",
  borderRadius: "100px",
  my: "auto",
  marginRight: 3,
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

export function Question(props: QuestionProps) {
  return (
    <Box py={3}>
      <AccordionItem>
        <Heading
          as="h4"
          variant="styles.h5"
          sx={{
            cursor: "pointer",
            ":hover .bounce": {
              animation: `${bounceRight} .3s alternate ease infinite`,
            },
          }}
        >
          <AccordionItemHeading>
            <AccordionItemButton>
              <Flex>
                <AccordionItemState>
                  {({ expanded }) =>
                    expanded ? (
                      <i sx={stylesChevronDown} />
                    ) : (
                      <i sx={stylesChevronRight} className="bounce" />
                    )
                  }
                </AccordionItemState>
                {props.question}
              </Flex>
            </AccordionItemButton>
          </AccordionItemHeading>
        </Heading>
        <AccordionItemPanel>
          <Box
            mx={3}
            sx={{
              "& .gatsby-highlight": {
                mx: [-4, -3, -3, -3],
              },
            }}
            paddingTop={2}
          >
            {props.children}
          </Box>
        </AccordionItemPanel>
      </AccordionItem>
    </Box>
  );
}

interface QuestionsProps {
  children:
    | React.ReactElement<QuestionProps>
    | React.ReactElement<QuestionProps>[];
}

export function Questions(props: QuestionsProps) {
  return (
    <Accordion allowZeroExpanded allowMultipleExpanded>
      {props.children}
    </Accordion>
  );
}
