import styled, { css } from "styled-components";
import { IContainer } from "@/type";
import Brand from "@/svg/Brand.svg";
import Desktop from "@/svg/Desktop.svg";
import Mouse from "@/svg/Mouse.svg";
import Stand from "@/svg/Stand.svg";
import Pad from "@/svg/Pad.svg";
import Director from "@/svg/Director.svg";
import Camera from "@/svg/Camera.svg";
import Keyboard from "@/svg/Keyboard.svg";

const Container1 = styled.div<IContainer>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px ${(props) => props.theme.size.padding.vertical.container};
  @media only screen and (min-width: 1000px) {
    justify-content: center;
  }
  @media only screen and (max-width: 999px) {
    justify-content: center;
    padding-bottom: 200px;
  }
`;

const Container2 = styled.div<IContainer>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.size.padding.vertical.container};
  ${(props) =>
    props.order === 5 &&
    css`
      padding: 50px 0;
    `}
`;

const Container3 = styled.div<IContainer>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px ${(props) => props.theme.size.padding.vertical.container};
  justify-content: center;
  ${(props) =>
    props.order === 3 &&
    css`
      background-color: ${(props) => props.theme.color.blue6};
      background-image: url(${Brand});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 50%;
    `}
  ${(props) =>
    props.order === 4 &&
    css`
      background-color: ${(props) => props.theme.color.blue5};
      background-image: url(${Mouse}), url(${Desktop}), url(${Stand}),
        url(${Director}), url(${Pad}), url(${Camera}), url(${Keyboard});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 50%;
    `}
  ${(props) =>
    props.order === 7 &&
    css`
      background: ${(props) => props.theme.color.blue3};
    `}

  @media only screen and (max-width: 999px) {
    justify-content: center;
  }
`;

const Container4 = styled.div<IContainer>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px ${(props) => props.theme.size.padding.vertical.container};
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.order === 6 &&
    css`
      background: ${(props) => props.theme.color.blue7};
    `}
`;

const ContainerOneAndTwo = styled.div`
  width: 100%;
  background: radial-gradient(at 20% 30%, #e8d0fe 30%, #95f8ff, #bcdffb);
`;

export const ContentContainer1: React.FC<{ order: number }> = ({
  order,
  children,
}) => {
  return <Container1 order={order}>{children}</Container1>;
};

export const ContentContainer2: React.FC<{ order: number }> = ({
  children,
  order,
}) => {
  return <Container2 order={order}>{children}</Container2>;
};

export const ContentContainer3: React.FC<{ order: number }> = ({
  children,
  order,
}) => {
  return <Container3 order={order}>{children}</Container3>;
};

export const ContentContainer4: React.FC<{ order: number }> = ({
  children,
  order,
}) => {
  return <Container4 order={order}>{children}</Container4>;
};

export const ContentContainerOneAndTwo: React.FC = ({ children }) => {
  return <ContainerOneAndTwo>{children}</ContainerOneAndTwo>;
};
