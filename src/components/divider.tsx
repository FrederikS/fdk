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
        mt: 5,
        mb: 3,
        "ul + &": {
          mt: 3,
        },
        ":first-of-type": {
          mt: 4,
        }
      }}
    >
      <Heading {...props} my={0}>
        {props.children}
      </Heading>
    </Flex>
  );
};
