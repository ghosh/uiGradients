import React from "react";

interface StackProps {
  children: React.ReactNode,
  gap: number
}

const Stack = ({ children, gap }: StackProps) => {
  const styles = {
    display: "flex",
    gap: `${4 * gap}px`
  };

  return <div style={styles}>{children}</div>;
};

Stack.displayName = "Stack";

Stack.defaultProps = {
  gap: 1
};

export default Stack;
