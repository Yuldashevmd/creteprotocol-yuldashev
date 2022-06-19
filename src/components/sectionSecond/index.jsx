import React, { useState } from "react";
import { CoApps, ContainerS,  LeftPro, Right, Wrapper } from "./style";
import { ReactComponent as Create } from "../../assets/Create.svg";
import { ReactComponent as LearnMore } from "../../assets/Learnmore.svg";
import { ReactComponent as Partners } from "../../assets/Partners.svg";
import { block } from "./mockData";
import { icons } from "./mockData";


const SectionSecond = () => {
  const [data] = useState(block);
  const [icon] =useState(icons)
  return (
    <ContainerS>
      <Wrapper>
        <LeftPro>
          <Create className='createsvg'/>
         <p>The best way to stake your claim in the ecosystem is by creating an account (wallet). Then, choose the first step in your journey.</p>
        </LeftPro>
       <Right>
       {
         icon.map(item=>(
          <Right.Block key={item.id}>
          <img src={item.icon} alt="icon" />
          <span>{item.title}</span>
          <p>{item.paragh}</p>
          <button>{item.btnText}</button>
        </Right.Block>
         ))
       }
       </Right>
      </Wrapper>
      <CoApps>
        <CoApps.Header>
          <Partners  className="partsvg"/>
          <LearnMore className="btnEco" />
        </CoApps.Header>
        <CoApps.Content>
          {data.map((item) => (
            <CoApps.Content.Block key={item.id}>
              <img src={item.img} alt="22" />
              <p>{item.title}</p>
              <span>{item.paragh}</span>
              <span>{item.descrip}</span>
            </CoApps.Content.Block>
          ))}
        </CoApps.Content>
      </CoApps>
     
    </ContainerS>
  );
};

export default SectionSecond;
