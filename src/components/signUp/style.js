import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
margin: auto;
height: 50px;
background:#4C6FFF;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width:1200px) {
  width: 1190px;
}
`;
export const Text = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
color: #fff;
`;
export const Button = styled.button `
border: 1px solid #fff;
color: #fff;
font-size: 10px;
text-transform: uppercase;
background: transparent;
padding: 10px 35px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
cursor: pointer;
:active{
  transform: scale(.98);
}
`;