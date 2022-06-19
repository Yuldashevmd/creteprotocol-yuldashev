import React, { useState } from "react";
import { CoApps, ContainerS, ExportBtn, ExportProduct, ExportWrap, LeftPro, Wrapper } from "./style";
import { ReactComponent as ProtocolText } from "../../assets/protocolText.svg";
import { ReactComponent as EcoText } from "../../assets/Ecosystem.svg";
import { ReactComponent as LearnMore } from "../../assets/Learnmore.svg";
import { ReactComponent as Products } from "../../assets/Products.svg";
import { ReactComponent as ArrowRight } from "../../assets/blocksvgs/ArrowRight.svg";
import GlobeSvg from "../../assets/ilustratorGlobe.svg";
import { block } from "./mockData";
import { product } from "./mockData";

const Section = () => {
  const [data] = useState(block);
  const [products] = useState(product);
  return (
    <ContainerS>
      <Wrapper>
        <LeftPro>
          <ProtocolText className="protocolsvg" />
          <p>
            Create Protocol is a completely decentralised ecosystem, structured
            around creators and artists, which has multiple decentralised
            applications (DApps) built on top of it. All these DApps are
            governed and powered by the create governance token - $CR8.
          </p>
          <p>
            Using the Create platform and the suite of APIs along with it, the
            community has the freedom of extending these applications in the way
            they like - which is the revolution that Create Protocol plans to
            bring about.
          </p>
        </LeftPro>
        <img src={GlobeSvg} alt="globe" />
      </Wrapper>
      <CoApps>
        <CoApps.Header>
          <EcoText  className="ecosvg"/>
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
      <CoApps>
        <CoApps.Header>
          <Products className="productsvg"/>
          <LearnMore className="btnEco" />
        </CoApps.Header>
        <ExportWrap>
        {products.map((item) => (
          <ExportProduct key={item.id}>
            <ExportProduct.Block>
              <h2>{item.title}</h2>
              <ArrowRight className="arrowright"/>
            </ExportProduct.Block>
            <p>
              {item.paragh}
            </p>
          </ExportProduct>
        ))}
        </ExportWrap>
        <ExportBtn>
          <p>The entire ecosystem of CREATE PROTOCOL is a spiderweb: interlinked DApps that power each other, where the Protocol is the engine.</p>
          <button>Learn  more</button>
        </ExportBtn>
      </CoApps>
    </ContainerS>
  );
};

export default Section;
