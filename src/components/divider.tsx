/** @jsx jsx */
import { jsx, Flex, Heading, HeadingProps } from "theme-ui";

interface DividerTitleProps extends HeadingProps {}

export const DividerTitle = (props: DividerTitleProps) => {
  return (
    <Flex
      sx={{
        textAlign: "center",
        alignItems: "center",
        "::before,::after": {
          content: '""',
          flex: 1,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "secondary",
        },
        "::before": {
          mr: 3,
        },
        "::after": {
          ml: 3,
        },
        my: 3,
      }}
    >
      <Heading {...props} mb={0}>
        {props.children}
      </Heading>
    </Flex>
  );
};
