import styled, { css } from "styled-components";
import { IStyledButton } from "@/type";

const StyledButton = styled.button<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.shape === "productApplication" &&
    css<IStyledButton>`
      padding: 1px;
      ${(props) =>
        props.needMargin &&
        css`
          margin-right: ${(props) =>
            props.theme.size.margin.horizontal.carouselButton};
        `}
      border-radius: ${(props) => props.theme.size.border.radius};
      box-shadow: ${(props) => props.theme.boxShadow.darkgray};
      @media only screen and (min-width: 1000px) {
        width: ${(props) => props.theme.size.width.carouselLargeButton};
        height: ${(props) => props.theme.size.height.carouselLargeButton};
      }
      @media only screen and (max-width: 999px) {
        width: ${(props) => props.theme.size.width.carouselMediumButton};
        height: ${(props) => props.theme.size.height.carouselMediumButton};
      }
      @media only screen and (max-width: 849px) {
        width: ${(props) => props.theme.size.width.carouselSmallButton};
        height: ${(props) => props.theme.size.height.carouselSmallButton};
      }
      ${(props) =>
        props.background === "darkBlue" &&
        css`
          border: 1px solid ${(props) => props.theme.color.blue3};
          background: ${(props) => props.theme.color.blue3};
        `}
      ${(props) =>
        props.background === "lightBlue" &&
        css`
          border: 1px solid ${(props) => props.theme.color.blue1};
          background: ${(props) => props.theme.color.blue1};
        `}
      ${(props) =>
        props.background === "white" &&
        css`
          border: 1px solid ${(props) => props.theme.color.white};
          background: ${(props) => props.theme.color.white};
        `}
    `}
`;

export const Button: React.FC<{
  shape: string;
  background?: string;
  needMargin?: boolean;
  onClick?: any;
}> = ({ shape, background, children, needMargin, onClick }) => {
  return (
    <StyledButton
      shape={shape}
      background={background}
      needMargin={needMargin}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
