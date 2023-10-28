import React from "react";
import { Button,TransactionContainer,TransactionInnerContainer,Title,Span,TransactionLeftContainer,InputText, TransactionRightContainer} from "./transactionStyledComponents";
const Transaction = () =>  {

    return (<div id="transaction">
       <TransactionContainer>
            <TransactionInnerContainer>
                <TransactionLeftContainer>
                <Title>Aktarma İşlemleri</Title>
                <Span>Bakiyenizi aktarmak istediğin index numarasını giriniz : </Span>
                <InputText placeholder="Index Numarası"/>
                <Button>Aktar !</Button>
                </TransactionLeftContainer>
            </TransactionInnerContainer>
       </TransactionContainer>
       </div>
    );
}

export default Transaction;