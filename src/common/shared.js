import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Item = styled("li")(
  {
    position: "relative",
    cursor: "pointer",
    display: "block",
    border: "none",
    height: "auto",
    textAlign: "left",
    borderTop: "none",
    lineHeight: "1em",
    background: "white",
    color: "#00539b",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "400",
    boxShadow: "none",
    padding: ".8rem 1.1rem",
    whiteSpace: "normal",
    wordWrap: "normal"
  },
  ({ isActive, isSelected }) => {
    const styles = [];
    if (isActive && !isSelected) {
      styles.push({
        color: "#002B5C",
        background: "#f4f4f4"
      });
    }
    if (isSelected && !isActive) {
      styles.push({
        color: "#1295d8",
        fontWeight: "700"
      });
    }
    if (isSelected && isActive) {
      styles.push({
        color: "#002B5C",
        fontWeight: "700",
        background: "#f4f4f4"
      });
    }
    return styles;
  }
);

const onAttention = "&:hover, &:focus";

const Input = styled("input")(
  {
    width: "100%", // full width - icon width/2 - border
    fontSize: "1em",
    wordWrap: "break-word",
    lineHeight: "1em",
    outline: 0,
    whiteSpace: "normal",
    minHeight: "1.5em",
    background: "white",
    display: "inline-block",
    padding: "1em 2em 1em 1em",
    color: "#00539b",
    boxShadow: "none",
    border: "1px solid #00539b",
    borderRadius: ".30rem",
    transition: "box-shadow .1s ease,width .1s ease",
    [onAttention]: {
      borderColor: "#00539b",
      boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)"
    }
  },
  ({ isOpen }) =>
    isOpen
      ? {
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          [onAttention]: {
            boxShadow: "none"
          }
        }
      : null
);

const Label = styled("label")({
  color: "#00539b",
  display: "block",
  marginBottom: 10
});

const BaseMenu = styled("ul")(
  {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    maxHeight: "20rem",
    overflowY: "auto",
    overflowX: "hidden",
    outline: "0",
    transition: "opacity .1s ease",
    borderRadius: "0 0 .28571429rem .28571429rem",
    boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
    borderColor: "#0c5f8a",
    borderTopWidth: "0",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid"
  },
  ({ isOpen }) => ({
    border: isOpen ? null : "none"
  })
);

// dropdown menu
const Menu = React.forwardRef((props, ref) => (
  <BaseMenu ref={ref} {...props} />
));

// button used to open dropdown and clear input
const ControllerButton = styled("button")({
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  right: 0,
  top: 0,
  cursor: "pointer",
  width: 47,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center"
});

// select dropdown
const ArrowIcon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#a8d8f0"
      strokeWidth="1.1px"
      transform={isOpen ? "rotate(180)" : undefined}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  );
};

// clear input
const XIcon = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#a8d8f0"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  );
};

export {
  Label,
  Input,
  ControllerButton,
  Menu,
  BaseMenu,
  Item,
  XIcon,
  ArrowIcon
};
