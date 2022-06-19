import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: ${(props=>props.height==='small'? '98px':'384px')};
background:#121624;
margin: auto;
  /* media */
  @media screen and (min-width:1200px) {
  width: 1190px;
}
`;
export const Wrapper = styled.div `
width: 80%;
height: 100%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: flex-start;
padding-top: 6rem;
`;
// logo part
Wrapper.LogoLeft = styled.div `
width: 40%;
h2{
font-family: Tahoma;
font-weight: 600;
font-size: 18px;
color: #fff;
margin: 20px 0;
letter-spacing: 2px;
}
`;
Wrapper.LogoLeft.Up = styled.div `
width: 100%;
display: flex;
align-items: center;
color: #fff;
.logofooter{
  width: 150px;
}
p{
  width: 150px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  margin-left: 1rem;
}
`;
Wrapper.LogoLeft.Logo = styled.div `
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
.logo{
  width: 30px;
}
`;
// content part
Wrapper.Content = styled.div `
width: 60%;
display: flex;
justify-content: space-between;
`;
Wrapper.Content.Block = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
color: #fff;
p{
width: 230px;
font-weight: 400;
font-size: 12px;
line-height: 28px;
letter-spacing: 0.01em;
}
h2{
  font-size: 16px;
  margin-bottom: 2rem;
}
ul{
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li{
    font-size: 12px;
  }
}
`;
export const InputDiv = styled.div `
width: 221px;
height: 43px;
display: flex;
align-items: center;
background: grey;

.arrow{
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
input{
  width: 169px;
  height: 100%;
  background: #191D2A;
  border: none;
  outline: none;
  padding: 5px 15px; 
  color: #fff;
  font-size: 16px;
  :focus{
    border-bottom: 1px solid lightblue;
  }
}
`;
export const FooterBottom = styled.div `
width: 100%;
height: 78px;
background:#191D2A;
display: flex;
align-items: center;
color: #fff;
font-size: 14px;
line-height: 28px;
letter-spacing: 0.01em;
p{
  width: 80%;
  margin: auto;
}
`;