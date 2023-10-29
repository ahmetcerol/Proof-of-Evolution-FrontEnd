import styled from "styled-components";

export const MineContainer = styled.div`
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

export const MineLeftContainer = styled.div`
  width: 100%;
  order: 1;
`;

export const MineRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
`;



export const MineDataContainer = styled.div`
  width: 50%; /* Sayfanın yüzde 60'ını kaplaması için */
  position: absolute;
  margin-left:50px;
  top: 0;
  
  height: 60vh; /* Sayfanın yüzde 75'ini kaplaması için */
  background-color: #ffffff; /* Beyaz arka plan */
  border-radius: 30px; /* Köşeleri oval yapmak için uygun bir değer */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Özellikle üstte olması gerekiyorsa */
`;

export const MineDataPre = styled.pre `
width: 70%;
font-size: 11px;
margin-right: 75px;
`;


export const DropBox = styled.select`
  height: auto;
  margin-top: 35px;
  padding: 12px 16px;
  margin-left: 25px;
  border-radius: 8px;
  border-color: #f9f9f9;
  letter-spacing: 1.5px;
  text-align: center;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  color: #333;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transitions */

  &:focus {
    outline: none;
    border-color: #090382; /* Change border color on focus */
    box-shadow: 0 0 4px rgba(9, 3, 130, 0.5); /* Add a subtle box shadow on focus */
  }
`;

export const MineInnerContainer = styled.div`
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


export const Button = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: ${({ theme }) => theme.button};
  letter-spacing: 2px;
  font-size: 14px;
  margin-left: 25px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #3d78c4;
  }
`;