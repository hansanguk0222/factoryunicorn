import styled, { css } from "styled-components";
import { ReviewItem } from "./ReviewItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${(props) => props.theme.size.padding.horizontal.reviews};
`;

const StyledGrid1 = styled.div`
  margin-top: 60px;
  width: 100%;
  display: grid;
  padding: ${(props) => props.theme.size.padding.fourSide.gridCardItem};
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 70px;
  }
  @media only screen and (max-width: 999px) {
    grid-template-columns: 1fr;
    gap: 50px 0px;
  }
  align-self: center;
  margin-bottom: 50px;
`;

export const Reviews: React.FC = () => {
  return (
    <Container>
      <StyledGrid1>
        <ReviewItem
          text1="의류제작에 대한 지식이나 경험이 전혀 없는 상태로 팩토리유니콘을 알게 되었습니다. 아무것도 몰랐지만 의류제작하는데 전혀 어려움이 없었고, 제작 된 옷 또한 매우 만족스럽습니다. 무엇보다 초보자와 브랜드 입장에서 생각해준다는 것을 많이 느꼈습니다."
          text2="쿠쿠크루"
          text3="83만 유튜버"
        />
        <ReviewItem
          text1="타 의류제조 업체에 비해 옷의 핏이 정확하고, 납기일 또한 매우 정확해서 스트레스 없이 의류사업하기 너무 좋습니다!"
          text2="R사"
          text3="스포츠 브랜드"
        />
        <ReviewItem
          text1="작업지시서를 작성하지 못해서 의류제작을 포기하고 있다가 팩토리유니콘 통해서 쉽게 옷을 만들 수 있었습니다. 원단부터 봉제 아무것도 몰랐지만 클릭 몇번으로 원단도 추천받아 제작 했는데 고객들 만족도 진짜 좋습니다. 감사합니다."
          text2="K사"
          text3="남성 브랜드"
        />
      </StyledGrid1>
      <ReviewItem
        text1="의류제작에 대한 지식이 하나도 없어도 제작을 할 수 있다는 점이 가장 큰 메리트라 생각합니다. 기초 지식이 없더라도 클릭 몇번으로 옷이 제작 되는것이 신세계입니다. 제가 받았던 피드백 중 팩토리유니콘에서 추천해주신 피마원단을 이용해 의류제작을 진행하였는데 고객분들께서 아주 긍정적인 반응을 보여주셨습니다. 또한 제작과정에서 제가 생각하지 못한 작은 디테일 하나하나 신경써주셔서 퀄리티를 높일 수 있는 부분이 저의 브랜드 가치를 높일 수 있는 하나의 요인이 되지 않았나 싶습니다."
        text2="V사"
        text3="스트릿 브랜드"
      />
    </Container>
  );
};
