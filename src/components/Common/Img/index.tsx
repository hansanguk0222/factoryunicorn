import React from "react";
import styled, { css } from "styled-components";
import { IImg } from "@/type";

const StyledImg = styled.img<IImg>`
  ${(props) =>
    props.shape === "headerLogo" &&
    css`
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.headerLargeLogo};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.headerSmallLogo};
      }
    `}
  ${(props) =>
    props.shape === "hamburger" &&
    css`
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.hamburgerLarge};
        height: ${(props) => props.theme.size.height.hamburgerLarge};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.hamburgerMedium};
        height: ${(props) => props.theme.size.height.hamburgerMedium};
      }
      @media only screen and (max-width: 849px) {
        width: ${(props) => props.theme.size.width.hamburgerSmall};
        height: ${(props) => props.theme.size.height.hamburgerSmall};
      }
    `}
    ${(props) =>
    props.shape === "productApplicationIcon" &&
    css`
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.tshirtLargeImg};
        height: ${(props) => props.theme.size.height.tshirtLargeImg};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.tshirtMediumImg};
        height: ${(props) => props.theme.size.height.tshirtMediumImg};
      }
      @media only screen and (max-width: 849px) {
        width: ${(props) => props.theme.size.width.tshirtSmallImg};
        height: ${(props) => props.theme.size.height.tshirtSmallImg};
      }
    `}
    ${(props) =>
    props.shape === "productApplicationBin" &&
    css`
      margin-right: ${(props) =>
        props.theme.size.margin.horizontal.productApplicationRemoveButtonIcon};
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.binLargeImg};
        height: ${(props) => props.theme.size.height.binLargeImg};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.binMediumImg};
        height: ${(props) => props.theme.size.height.binMediumImg};
      }
      @media only screen and (max-width: 849px) {
        display: none;
      }
    `}
    ${(props) =>
    props.shape === "cardImg" &&
    css`
      width: ${(props) => props.theme.size.width.gridCardImg};
      height: ${(props) => props.theme.size.height.gridCardImg};
    `}
    ${(props) =>
    props.shape === "youtube" &&
    css`
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.youtubeLarge};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.youtubeSmall};
      }
    `}
    ${(props) =>
    props.shape === "brands" &&
    css`
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.youtubeLarge};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.youtubeSmall};
      }
    `}
`;

export const Img: React.FC<{ shape: string; src: string }> = ({
  shape,
  src,
}) => {
  return <StyledImg src={src} shape={shape} alt={src} />;
};
