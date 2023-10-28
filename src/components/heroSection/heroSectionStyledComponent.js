import styled from "styled-components";

export const HeroContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Tam sayfa yüksekliği */
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100px; /* Sayfa sonuna geçiş efekti yüksekliği */
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.card_light}); /* Geçiş efekti rengi */
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
`;

export const Span = styled.span`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  white-space: pre-line;
  color: ${({ theme }) => theme.white + 95};
`;
