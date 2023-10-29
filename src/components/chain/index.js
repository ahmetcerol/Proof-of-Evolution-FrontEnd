import React from "react";
import {
  ChainContainer,
  ChainInnerContainer,
  Title,
  Span,
  ChainLeftContainer,
  ChainRightContainer,
  ChainDataContainer,
  ChainDataPre
} from "./chainStyledComponents";
import { Bio } from "../../data/constants";
import axios from "axios";
import  { useState, useEffect } from "react";


const Chain = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchChainData = () => {
    axios.get("http://localhost:8080/blockchain/chain")
      .then(response => {
        setResponseData(response.data);
      })
      .catch(error => {
        console.error("API çağrısı başarısız oldu:", error);
      });
  };

  useEffect(() => {
    // Sayfa yüklendiğinde zinciri alın
    fetchChainData();

    // Her 15 saniyede bir zinciri güncelle
    const intervalId = setInterval(fetchChainData, 1000);

    return () => {
      // Bileşen ayrıldığında aralığı temizle
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="chain">
      <ChainContainer>
        <ChainInnerContainer>
          <ChainLeftContainer>
            <Title>{Bio.chainTitle}</Title>
            <Span>{Bio.chainSubTitle}</Span>
          </ChainLeftContainer>
          <ChainRightContainer>
            <ChainDataContainer>
              <ChainDataPre>
                {responseData && (
                  <pre>
                    {JSON.stringify(responseData, null, 2)}
                  </pre>
                )}
              </ChainDataPre>
            </ChainDataContainer>
          </ChainRightContainer>
        </ChainInnerContainer>
      </ChainContainer>
    </div>
  );
};

export default Chain;

