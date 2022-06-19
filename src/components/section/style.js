import styled from 'styled-components';

export const ContainerS = styled.div `
  width: 100%;
  min-height: 804px;
  margin: auto;
    /* media */
    @media screen and (min-width:1200px) {
  width: 1190px;
}
`;
export const Wrapper = styled.div `
width: 80%;
height: 100%;
margin: 5rem auto;
display: flex;
align-items: center;
justify-content: space-between;
img {
  width: 350px;
}
`
export const LeftPro = styled.div `
width: 45%;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #fff;
.protocolsvg{
  width: 450px;
}
p{
font-weight: 400;
font-size: 14px;
line-height: 136.52%;
margin: 20px 0;
}
`;

export const CoApps = styled.div `
width: 80%;
margin: 8rem auto;
`;
CoApps.Header = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 2rem;
.ecosvg{
  width: 350px;
}
.productsvg{
  width: 300px;
}
.btnEco {
  width: 150px;
  background: transparent;
  cursor: pointer;
}
`;
CoApps.Content = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
CoApps.Content.Block = styled.div `
width: 173px;
height: 250px;
display: flex;
flex-direction: column;
text-align: center;
cursor: pointer;
margin: 30px 0;
img{
  width: 100%;
  height: 100px;
  border: 1px solid lightblue;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
span{
  width: 100%;
  font-size: 12px;
  color: #718096;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
}
p{
  color:#EAEEF6;
  font-size: 14px;
  margin: 10px 0;
}
:hover span{
  color: #fff;
}
`;
export const ExportWrap = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
`
export const ExportProduct = styled.div `
width: 300px;
margin: 20px 0;
display: flex;
flex-direction: column;
align-items: flex-start;
cursor: pointer;
transition: all 0.2s linear;
:hover {
  opacity: 0.7;
}

p{ 
  width: 300px;
  color:#CBD5E0;
  font-size: 14px;
}
`;
ExportProduct.Block = styled.div `
width: 300px;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;
.arrowright{
  width: 25px;
}
h2{
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 25px;
}

`;
export const ExportBtn = styled.div `
width: 60%;
margin: 5rem auto;
text-align: center;
button{
padding: 10px 25px;
margin: 50px 0;
background:#4C6FFF;
color: #fff;
font-size: 14px;
text-transform: uppercase;
outline: none;
border: none;
cursor: pointer;
transition: all 0.3s linear;
:hover{
  opacity: 0.7;
}
}
p{
font-size: 16px;
line-height: 136.52%;
color: #fff;
}
`;