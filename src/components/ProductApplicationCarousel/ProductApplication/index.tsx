import React, { useCallback } from "react";
import styled from "styled-components";
import { Span } from "@/components/Common/Span";
import { Img } from "@/components/Common/Img";
import { Button } from "@/components/Common/Button";
import { SelectBox } from "./SelectBox";
import { ChoiceBox } from "./choiceBox";
import Hamburger from "@/svg/Hamburger.svg";
import Tshirt from "@/svg/Tshirt.svg";
import Bin from "@/svg/Bin.svg";
import LeftArrow from "@/svg/LeftArrow.svg";
import RightArrow from "@/svg/RightArrow.svg";
import { service } from "@/service";

const Container = styled.div`
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.size.border.radius};
  background: ${(props) => props.theme.color.white};
  @media only screen and (min-width: 1000px) {
    width: ${(props) => props.theme.size.width.carouselLargeContainer};
    height: ${(props) => props.theme.size.height.carouselLargeContainer};
  }
  @media only screen and (max-width: 999px) {
    width: ${(props) => props.theme.size.width.carouselMediumContainer};
    height: ${(props) => props.theme.size.height.carouselMediumContainer};
  }
  @media only screen and (max-width: 849px) {
    width: ${(props) => props.theme.size.width.carouselSmallContainer};
    height: ${(props) => props.theme.size.height.carouselSmallContainer};
  }
  @media only screen and (max-width: 699px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselLarge};
  }
  @media only screen and (max-width: 999px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselMedium};
  }
  @media only screen and (max-width: 849px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselSmall};
  }
  @media only screen and (max-width: 699px) {
    display: none;
  }
`;

const TopContainer = styled.div`
  @media only screen and (min-width: 1000px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselLarge};
  }
  @media only screen and (max-width: 999px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselMedium};
  }
  @media only screen and (max-width: 849px) {
    padding: ${(props) => props.theme.size.padding.horizontal.carouselSmall};
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.blue5};
  display: flex;
  padding-top: ${(props) =>
    props.theme.size.padding.vertical.productApplicationButtonBox};
  padding-bottom: ${(props) =>
    props.theme.size.padding.vertical.productApplicationButtonBox};
  padding-right: ${(props) =>
    props.theme.size.padding.horizontal.carouselLarge};
  padding-left: ${(props) => props.theme.size.padding.horizontal.carouselLarge};
  box-sizing: border-box;
`;

const MediumContainer = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.size.padding.horizontal.carouselLarge};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MediumContainerContent = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RemoveButton = styled.div`
  display: flex;
  background: ${(props) => props.theme.color.blue3};
  align-items: center;
  border-radius: ${(props) => props.theme.size.border.radius};
  @media only screen and (min-width: 850px) {
    padding: ${(props) =>
      props.theme.size.padding.fourSide.productApplicationRemoveButton};
  }
`;

const MediumContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.color.gray2};
  padding-bottom: 2px;
`;

const BottomContainer = styled.div`
  border-bottom-right-radius: ${(props) => props.theme.size.border.radius};
  border-bottom-left-radius: ${(props) => props.theme.size.border.radius};
  background: ${(props) => props.theme.color.blue4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const BorderLine = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.gray2};
  margin-top: 5px;
  margin-bottom: 2px;
`;

export const ProductApplication: React.FC<{ isExist: boolean }> = ({
  isExist,
}) => {
  const onClick = useCallback(async () => {
    const data = await service.getSize();
    const filteringData = data.filter(
      (clothes) => clothes.figure.length >= 70 && clothes.figure.width >= 50
    );
    alert(JSON.stringify(filteringData, null, 2));
  }, []);
  return (
    <Container>
      {isExist ? (
        <>
          <Header>
            <Span shape="productApplicationHeader" text="Factory Unicorn" />
            <Img shape="hamburger" src={Hamburger} />
          </Header>
          <TopContainer>
            <Span shape="productApplicationFirstShow" text="????????? ????????????" />
          </TopContainer>
          <ButtonBox>
            <Button
              shape="productApplication"
              background="white"
              needMargin={true}
            >
              +
            </Button>
            <Button
              shape="productApplication"
              background="darkBlue"
              needMargin={true}
            >
              <Img shape="productApplicationIcon" src={Tshirt} />
            </Button>
            <Button shape="productApplication" background="lightBlue">
              <Img shape="productApplicationIcon" src={Tshirt} />
            </Button>
          </ButtonBox>
          <MediumContainer>
            <MediumContainerHeader>
              <Span shape="productApplicationFirstShow" text="????????? 1" />
              <RemoveButton>
                <Img shape="productApplicationBin" src={Bin} />
                <Span
                  shape="productApplicationRemoveButton"
                  text="???????????????"
                />
              </RemoveButton>
            </MediumContainerHeader>
            <MediumContainerContent>
              <SelectBox optionValue="?????????" text="????????? ????????????" />
              <SelectBox optionValue="??????" text="????????? ??????" />
              <SelectBox optionValue="?????? ?????????" text="????????? ??????" />
            </MediumContainerContent>
          </MediumContainer>
          <BottomContainer>
            <Button shape="productApplication" background="white">
              <Img shape="productApplicationIcon" src={LeftArrow} />
            </Button>
            <Button
              shape="productApplication"
              background="white"
              onClick={onClick}
            >
              ???
            </Button>
            <Button shape="productApplication" background="white">
              <Img shape="productApplicationIcon" src={RightArrow} />
            </Button>
          </BottomContainer>
        </>
      ) : (
        <>
          <>
            <Header>
              <Span shape="productApplicationHeader" text="Factory Unicorn" />
              <Img shape="hamburger" src={Hamburger} />
            </Header>
            <MediumContainer>
              <MediumContainerContent>
                <ChoiceBox
                  headerText="???"
                  leftContentText="????????????"
                  rightContentText="?????????"
                />
                <ChoiceBox
                  headerText="??????"
                  leftContentText="??????"
                  rightContentText="??????"
                />
                <BorderLine />
                <ChoiceBox
                  headerText="????????? ??????"
                  leftContentText="?????????"
                  rightContentText="?????? ??????"
                />
                <Span
                  shape="productApplicationExplain"
                  text="???????????? ?????? ???????????? ???????????? ????????? ??????????????? ????????? ?????? ???????????? ????????? ?????????????????????."
                />
              </MediumContainerContent>
            </MediumContainer>
            <BottomContainer>
              <Button shape="productApplication" background="white">
                <Img shape="productApplicationIcon" src={LeftArrow} />
              </Button>
              <Button
                shape="productApplication"
                background="white"
                onClick={onClick}
              >
                ???
              </Button>
              <Button shape="productApplication" background="white">
                <Img shape="productApplicationIcon" src={RightArrow} />
              </Button>
            </BottomContainer>
          </>
        </>
      )}
    </Container>
  );
};
