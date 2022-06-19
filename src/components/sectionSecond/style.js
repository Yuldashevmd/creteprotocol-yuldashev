import styled from 'styled-components';

export const ContainerS = styled.div `
  width: 100%;
  min-height: 766px;
  margin: auto;
  /* media */
  @media screen and (min-width:1200px) {
  width: 1190px;
}
`;
export const Wrapper = styled.div `
width: 80%;
height: 450px;
margin: auto;
display: flex;
justify-content: space-between;

`
export const LeftPro = styled.div `
width: 45%;
display: flex;
flex-direction: column;
align-items: flex-start;
color: #fff;
.createsvg{
  width: 350px;
}
p{
width: 65%;
font-weight: 400;
font-size: 14px;
line-height: 136.52%;
margin: 10px 0;
}
`;
export const Right = styled.div `
width: 70%;
height: 300px;
margin-top: auto;
display: flex;
justify-content: space-between;
color: #fff;
`;
Right.Block = styled.div `
width: 380px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
border-right: 1px solid grey;
padding: 0 30px;
img {
  width: 40px;
  height: 40px;
}
p{
  font-size: 14px;
}
span{
  font-size: 18px;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover{
    background: lightblue;
    color: #000;
  }
}
`
export const CoApps = styled.div `
width: 80%;
margin: 5rem auto;
`;
CoApps.Header = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 2rem;
.partsvg{
  width: 350px;
}
.btnEco {
  width: 140px;
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
  height: 100px ;
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