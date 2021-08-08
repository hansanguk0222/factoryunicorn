import {
  ContentContainer1,
  ContentContainer2,
  ContentContainer3,
  ContentContainer4,
  ContentContainerOneAndTwo,
} from "@/components/ContentContainer";
import { ProductApplicationCarousel } from "@/components/ProductApplicationCarousel";
import styled from "styled-components";
import { Span } from "@/components/Common/Span";
import { A } from "@/components/Common/A";
import { Cards } from "../Cards";
import { Brands } from "@/components/Brands";
import { Img } from "../Common/Img";
import Youtube from "@/svg/Youtube.svg";
import { Reviews } from "../Reviews";

const StyledHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledVerticalContainer1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledVerticalContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer1 = styled.div`
  margin-bottom: 40px;
`;

const TextContainer2 = styled.div`
  max-width: 500px;
  margin-bottom: 40px;
  text-align: center;
`;

const CarouselContainer = styled.div`
  margin-right: 10%;
`;

const MediumCenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.color.gray1};
  @media only screen and (min-width: 1000px) {
    font-size: ${(props) => props.theme.size.font.mediumContentLarge};
  }
  @media only screen and (max-width: 999px) {
    font-size: ${(props) => props.theme.size.font.mediumContentMedium};
  }
  @media only screen and (max-width: 849px) {
    font-size: ${(props) => props.theme.size.font.mediumContentSmall};
  }
`;

const MediumContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const MainComponent: React.FC = () => {
  return (
    <>
      <ContentContainerOneAndTwo>
        <ContentContainer1 order={1}>
          <StyledHorizontalContainer>
            <StyledVerticalContainer1>
              <TextContainer1>
                <Span
                  shape="bigContent"
                  bold
                  text="간단한 클릭! 쉬운 의류제작!"
                />
                <Span shape="bigContent" bold text="3분만에 초보자가" />
                <Span shape="bigContent" bold text="의류생산 전문가로" />
              </TextContainer1>
              <A shape="realTimeA" text="실시간 제작 견적 확인" />
            </StyledVerticalContainer1>
            <CarouselContainer>
              <ProductApplicationCarousel />
            </CarouselContainer>
          </StyledHorizontalContainer>
        </ContentContainer1>
        <ContentContainer2 order={2}>
          <StyledVerticalContainer2>
            <TextContainer1>
              <Span
                bold
                shape="bigContent"
                text="아무것도 몰라도 팩토리유니콘은 가능합니다."
              />
            </TextContainer1>
            <MediumCenterContent>
              원단을 몰라도, 봉제를 몰라도, 치수를 몰라도 누구나 쉽게 의류제작을
              할 수 있습니다.더 이상 시간과 금액을 낭비하지 마세요!
            </MediumCenterContent>
            <Cards />
          </StyledVerticalContainer2>
        </ContentContainer2>
      </ContentContainerOneAndTwo>

      <ContentContainer3 order={3}>
        <StyledHorizontalContainer>
          <StyledVerticalContainer1>
            <TextContainer1>
              <Span
                shape="veryBigBlueContent"
                text="함께 하고 있는 패션 브랜드"
              />
            </TextContainer1>
            <Brands />
          </StyledVerticalContainer1>
        </StyledHorizontalContainer>
      </ContentContainer3>
      <ContentContainer3 order={4}>
        <StyledHorizontalContainer>
          <StyledVerticalContainer1>
            <HeaderContainer>
              <Img shape="youtube" src={Youtube} />
              <Span
                shape="veryBigDarkGrayContent"
                text="함께 하고 있는 인플루언서"
              />
            </HeaderContainer>
            <MediumContainer>
              <Span shape="influenceContent" text="보겸TV" />
              <Span shape="influenceContent" text="제이제이살롱드핏" />
              <Span shape="influenceContent" text="SUNBA선바" />
              <Span shape="influenceContent" text="쿠쿠크루 - Cuckoo Crew" />
              <Span
                shape="influenceContent"
                text="샘의 삶Serim's Life / 지지플래닛"
              />
              <Span shape="influenceContent" text="바라던 바다 BADACHANNEL" />
            </MediumContainer>
          </StyledVerticalContainer1>
        </StyledHorizontalContainer>
      </ContentContainer3>
      <ContentContainer2 order={5}>
        <StyledVerticalContainer2>
          <TextContainer2>
            <Span
              bold
              shape="bigContent"
              text="지금도 많은 분들이 팩토리유니콘을 이용중입니다"
            />
          </TextContainer2>
          <MediumCenterContent>
            <Reviews />
          </MediumCenterContent>
        </StyledVerticalContainer2>
      </ContentContainer2>
      <ContentContainer4 order={6}>
        <Container>
          <Span shape="bigContent" bold text="지금 제작 상담 받아보세요" />
          <Span
            shape="mediumContent"
            text="팩토리 유니콘과 함께라면 간단하고 쉽게 제작 가능합니다."
          />
        </Container>
        <A shape="realTimeA" text="실시간 제작 견적 확인" />
      </ContentContainer4>
      <ContentContainer3 order={7}>
        <StyledHorizontalContainer>
          <StyledVerticalContainer1>
            <HeaderContainer>
              <Span shape="bigWhiteContent" text="Factory Unicorn" />
            </HeaderContainer>
            <MediumContainer>
              <Span shape="factoryInform" text="상호: (주)팩토리 유니콘" />
              <Span shape="factoryInform" text="대표: 백찬" />
              <Span
                shape="factoryInform"
                text="주소: 서울특별시 동대문구 천호대로 77길 115 B1"
              />
              <Span
                shape="factoryInform"
                text="사업자 등록번호: 335-86-02102"
              />
              <Span shape="factoryInform" text="전화번호: 0507-1358-9113" />
              <Span
                shape="factoryInform"
                text="이메일: info@factoryunicorn.co.kr"
              />
              <Span shape="factoryInform" text="version_1.0.0" />
            </MediumContainer>
          </StyledVerticalContainer1>
        </StyledHorizontalContainer>
      </ContentContainer3>
    </>
  );
};
