import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TransactionContainer,
  TransactionInnerContainer,
  Title,
  Span,
  TransactionLeftContainer,
  InputText,
  TransactionRightContainer,
  TransactionDataContainer,
} from "./transactionStyledComponents";
import { Bio } from "../../data/constants";

const Transaction = () => {
  const [transactionData, setTransactionData] = useState({
    sender: "",
    recipient: "",
    amount: 0, // Default bir değer belirledim, kullanıcı bunu değiştirebilir.
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleTransferClick = () => {
    axios
      .post("http://localhost:8080/blockchain/transactions", transactionData)
      .then((response) => {
        setResponse(response.data);
        setError(null);
      })
      .catch((error) => {
        setResponse(null);
        setError("Aktarım başarısız oldu.");
      });
  };

  return (
    <div id="transaction">
      <TransactionContainer>
        <TransactionInnerContainer>
          <TransactionLeftContainer>
            <Title>{Bio.transactionTitle}</Title>
            <Span>{Bio.transactionSubTitle}</Span>
            <InputText
              name="sender"
              placeholder="Gönderen"
              value={transactionData.sender}
              onChange={handleInputChange}
            />
            <InputText
              name="recipient"
              placeholder="Alıcı"
              value={transactionData.recipient}
              onChange={handleInputChange}
            />
            <InputText
              name="amount"
              placeholder="Miktar"
              value={transactionData.amount}
              onChange={handleInputChange}
            />
            <Button onClick={handleTransferClick}>Aktar !</Button>
          </TransactionLeftContainer>
          <TransactionRightContainer>
            <TransactionDataContainer>
              {response && (
                <div>
                  <p style={{ color: "green" }}>Başarılı!</p>
                  <p>Yeni İndeks: {response.index}</p>
                </div>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </TransactionDataContainer>
          </TransactionRightContainer>
        </TransactionInnerContainer>
      </TransactionContainer>
    </div>
  );
};

export default Transaction;
