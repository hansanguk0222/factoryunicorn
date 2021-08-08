import styled, { css } from "styled-components";
import { IStyledSpan } from "@/type";

const StyledSpan = styled.span<IStyledSpan>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) =>
    props.shape === "leftHeaderMenu" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      padding-left: ${(props) =>
        props.theme.size.padding.horizontal.leftHeaderMenu};
      font-size: ${(props) => props.theme.size.font.l};
    `}
  ${(props) =>
    props.shape === "productApplicationHeader" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.l};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.xs};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.xxxs};
      } ;
    `}
    ${(props) =>
    props.shape === "productApplicationFirstShow" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.xl};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.m};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.s};
      } ;
    `}
    ${(props) =>
    props.shape === "productApplicationRemoveButton" &&
    css`
      color: ${(props) => props.theme.color.white};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.s};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.xxs};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.xxxxxs};
      } ;
    `}
    ${(props) =>
    props.shape === "productApplicationContentHeader" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      margin-bottom: 5px;
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.m};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.xxs};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.xxxxs};
      } ;
    `};
  ${(props) =>
    props.shape === "productApplicationChoiceBox" &&
    css<IStyledSpan>`
      color: ${(props) => props.theme.color.gray1};
      ${(props) =>
        props.selected
          ? css`
              background: ${(props) => props.theme.color.blue4};
              border: 1px solid ${(props) => props.theme.color.blue4};
              border-radius: ${(props) => props.theme.size.border.radius};
              color: ${(props) => props.theme.color.white};
            `
          : css`
              background: ${(props) => props.theme.color.white};
              border: 1px solid ${(props) => props.theme.color.blue4};
              border-radius: ${(props) => props.theme.size.border.radius};
            `}
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.m};
        padding-top: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationLargeChoiceButton};
        padding-bottom: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationLargeChoiceButton};
        padding-right: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationLargeChoiceButton};
        padding-left: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationLargeChoiceButton};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.xxs};
        padding-top: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationMediumChoiceButton};
        padding-bottom: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationMediumChoiceButton};
        padding-right: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationMediumChoiceButton};
        padding-left: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationMediumChoiceButton};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.xxxxs};
        padding-top: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationSmallChoiceButton};
        padding-bottom: ${(props) =>
          props.theme.size.padding.vertical
            .productApplicationSmallChoiceButton};
        padding-right: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationSmallChoiceButton};
        padding-left: ${(props) =>
          props.theme.size.padding.horizontal
            .productApplicationSmallChoiceButton};
      } ;
    `};
  ${(props) =>
    props.shape === "productApplicationExplain" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.m};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.xxs};
      }
      @media only screen and (max-width: 849px) {
        display: none;
      } ;
    `};
  ${(props) =>
    props.shape === "bigContent" &&
    css<IStyledSpan>`
      color: ${(props) => props.theme.color.gray1};
      word-break: keep-all;
      ${(props) =>
        props.bold &&
        css`
          font-weight: bold;
        `}
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.bigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.bigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.bigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "mediumContent" &&
    css`
      color: ${(props) => props.theme.color.gray1};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.mediumContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.mediumContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.mediumContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "cardContent" &&
    css<IStyledSpan>`
      font-size: ${(props) => props.theme.size.font.cardContent};
      color: ${(props) => props.theme.color.gray1};
      ${(props) =>
        props.bold &&
        css`
          font-weight: bold;
        `};
    `}
  ${(props) =>
    props.shape === "bigBlueContent" &&
    css`
      color: ${(props) => props.theme.color.blue3};
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.bigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.bigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.bigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "mediumBlueContent" &&
    css<IStyledSpan>`
      color: ${(props) => props.theme.color.blue3};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${(props) => props.theme.size.font.mediumContentMedium};
      font-weight: ${(props) => (props.bold ? "600" : "400")};
    `};
  ${(props) =>
    props.shape === "veryBigContent" &&
    css`
      color: ${(props) => props.theme.color.gray2};
      font-weight: bold;
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "veryBigDarkGrayContent" &&
    css`
      color: ${(props) => props.theme.color.darkgray};
      font-weight: bold;
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "bigWhiteContent" &&
    css`
      color: ${(props) => props.theme.color.white};
      font-weight: bold;
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.bigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.bigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.bigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "veryBigBlueContent" &&
    css`
      color: ${(props) => props.theme.color.blue3};
      font-weight: bold;
      @media only screen and (min-width: 1000px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentLarge};
      }
      @media only screen and (max-width: 999px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentMedium};
      }
      @media only screen and (max-width: 849px) {
        font-size: ${(props) => props.theme.size.font.veryBigContentSmall};
      } ;
    `};
  ${(props) =>
    props.shape === "influenceContent" &&
    css<IStyledSpan>`
      color: ${(props) => props.theme.color.blue3};
      font-size: ${(props) => props.theme.size.font.influenceContent};
    `};
  ${(props) =>
    props.shape === "smallContent" &&
    css`
      color: ${(props) => props.theme.color.gray2};
      font-size: ${(props) => props.theme.size.font.smallContentLarge};
    `};
  ${(props) =>
    props.shape === "smallWhiteContent" &&
    css`
      color: ${(props) => props.theme.color.white};
      font-size: ${(props) => props.theme.size.font.smallContentLarge};
    `};
  ${(props) =>
    props.shape === "smallBlueContent" &&
    css`
      color: ${(props) => props.theme.color.blue3};
      font-size: ${(props) => props.theme.size.font.smallContentLarge};
    `};
  ${(props) =>
    props.shape === "factoryInform" &&
    css`
      color: ${(props) => props.theme.color.blue5};
      font-size: ${(props) => props.theme.size.font.mediumContentLarge};
    `};
`;

export const Span: React.FC<{
  shape: string;
  text: string;
  selected?: boolean;
  bold?: boolean;
}> = ({ shape, text, selected, bold }) => {
  return (
    <StyledSpan shape={shape} selected={selected} bold={bold}>
      {text}
    </StyledSpan>
  );
};
