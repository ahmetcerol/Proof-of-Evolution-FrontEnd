import React from "react";
import { MineContainer,MineInnerContainer,Title,Span,MineLeftContainer,DropBox, MineRightContainer} from "./mineStyledComponent";
const Mine = () =>  {

    return (<div id="mine">
       <MineContainer>
            <MineInnerContainer>
                <MineLeftContainer>
                <Title>Madencilik İşlemleri</Title>
                <Span>Hangi methodu kullanarak madencilik yapmak istersiniz ? </Span>
                <DropBox>
                <option value={"Proof of Work"}>Proof of Work</option>
                <option value={"Genetik Algoritma"}>Genetik Algoritma</option>
                <option value={"Ant Colony Optimization"}>Karınca Kolonisi</option>
                <option value={"Artificial Bee Colony"}>Yapay Arı Kolonisi</option>
                </DropBox>
                </MineLeftContainer>
            </MineInnerContainer>
       </MineContainer>
       </div>
    );
}

export default Mine;