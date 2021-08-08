import React from "react";
import styled, { css } from "styled-components";
import { IStyledA } from "@/type";

const StyledA = styled.a<IStyledA>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media only screen and (max-width: 999px) {
    ${(props) =>
      props.shape === "questionA" &&
      css`
        background: ${(props) => props.theme.color.blue3};
        width: ${(props) => props.theme.size.width.headerSmallStyledA};
        height: ${(props) => props.theme.size.height.headerSmallStyledA};
        border-radius: ${(props) => props.theme.size.border.radius};
        color: ${(props) => props.theme.color.white};
        box-shadow: ${(props) => props.theme.boxShadow.darkgray};
      `}
    ${(props) =>
      props.shape === "realTimeA" &&
      css`
        background: ${(props) => props.theme.color.blue3};
        width: ${(props) => props.theme.size.width.contentSmallStyledA};
        height: ${(props) => props.theme.size.height.contentSmallStyledA};
        border-radius: ${(props) => props.theme.size.border.radius};
        color: ${(props) => props.theme.color.white};
      `}
  }
  @media only screen and (min-width: 1000px) {
    ${(props) =>
      props.shape === "questionA" &&
      css`
        background: ${(props) => props.theme.color.blue3};
        width: ${(props) => props.theme.size.width.headerLargeStyledA};
        height: ${(props) => props.theme.size.height.headerLargeStyledA};
        border-radius: ${(props) => props.theme.size.border.radius};
        color: ${(props) => props.theme.color.white};
        box-shadow: ${(props) => props.theme.boxShadow.darkgray};
      `}
    ${(props) =>
      props.shape === "realTimeA" &&
      css`
        background: ${(props) => props.theme.color.blue3};
        width: ${(props) => props.theme.size.width.contentLargeStyledA};
        height: ${(props) => props.theme.size.height.contentLargeStyledA};
        border-radius: ${(props) => props.theme.size.border.radius};
        color: ${(props) => props.theme.color.white};
      `}
  }
  ${(props) =>
    props.shape === "leftHeaderMenuItemA" &&
    css`
      background: ${(props) => props.theme.color.white};
      width: ${(props) => props.theme.size.width.leftHeaderMenuItem};
      height: ${(props) => props.theme.size.height.leftHeaderMenuItem};
      border: none;
      color: ${(props) => props.theme.color.gray1};
    `}
`;

export const A: React.FC<{ shape: string; text: string }> = ({
  shape,
  text,
}) => {
  return <StyledA shape={shape}>{text}</StyledA>;
};
