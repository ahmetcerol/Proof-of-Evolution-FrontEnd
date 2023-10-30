import React from "react";
import {
  ChainContainer,
  ChainInnerContainer,
  Title,
  Span,
  ChainLeftContainer,
  ChainRightContainer,
  ChainDataContainer,
  ChainDataPre,
} from "./chainStyledComponents";
import { Bio } from "../../data/constants";
import axios from "axios";
import { useState, useEffect } from "react";

const Chain = () => {
  const [responseData, setResponseData] = useState(null);


  //This method for axios connection with Spring Boot BackEnd which allowed us to see all Chain indexes
  const fetchChainData = () => {
    axios
      .get("http://localhost:8080/blockchain/chain")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("API çağrısı başarısız oldu:", error);
      });
  };


  //This method allow us bring new chain every 15 seconds
  useEffect(() => {
    fetchChainData();

    //15 seconds
    const intervalId = setInterval(fetchChainData, 15000);

    return () => {
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
                  <pre>{JSON.stringify(responseData, null, 2)}</pre>
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
