import styled from "styled-components";

export const ChainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100px; /* Sayfa sonuna geçiş efekti yüksekliği */
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.card_light}
    ); /* Geçiş efekti rengi */
  }
`;

export const ChainLeftContainer = styled.div`
  width: 100%;
  order: 1;
`;
export const ChainRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  margin-left: 10px;
`;
export const ChainDataPre = styled.pre`
  width:70%;
  max-height: 100vh;
  font-size: 10px;
  margin-right: 75px;
  margin-top: 100px;
`;

export const ChainDataContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  max-height: 100vh; /* Sayfanın yüzde 75'ini kaplaması için */
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column; /* İçeriği sıralı bir sütun olarak görüntüler */
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: auto; /* Dikey kaydırma çubuğunu etkinleştirir */
`;

export const ChainInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 42px;
  white-space: pre-line;
  color: ${({ theme }) => theme.text_primary + 95};
`;

export const Span = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  white-space: pre-line;
  color: ${({ theme }) => theme.white + 95};
`;
