import React from "react";
import {
  Button,
  TransactionContainer,
  TransactionInnerContainer,
  Title,
  Span,
  TransactionLeftContainer,
  InputText,
  TransactionRightContainer,
} from "./transactionStyledComponents";
import { Bio } from "../../data/constants";
const Transaction = () => {
  return (
    <div id="transaction">
      <TransactionContainer>
        <TransactionInnerContainer>
          <TransactionLeftContainer>
            <Title>{Bio.transactionTitle}</Title>
            <Span>{Bio.transactionSubTitle}
            </Span>
            <InputText placeholder="Index Numarası" />
            <Button>Aktar !</Button>
          </TransactionLeftContainer>
        </TransactionInnerContainer>
      </TransactionContainer>
    </div>
  );
};

export default Transaction;
