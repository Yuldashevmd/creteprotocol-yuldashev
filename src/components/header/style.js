import styled from 'styled-components';
import HeaderImg from '../../assets/header-bg.png'


export const Container = styled.div `
width: 100%;
height: 804px;
margin: auto;
background: url(${HeaderImg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
position: relative;
  /* media */
  @media screen and (min-width:1200px) {
  width: 1190px;
}
.vector{
  width: 70%;
  position: absolute;
  top: 27rem;
}
`;
export const Wrapper = styled.div `
width: 80%;
margin: auto;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
export const Block = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
.logo{
  width: 260px;
  height: fit-content;
  cursor: pointer;
}
`;
export const Ul = styled.ul `
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`;
Ul.Li = styled.li `
font-weight: 400;
font-size: 14px;
line-height: 136.02%;
color: #fff;
cursor: pointer;
:hover{
  color: lightgray;
}
`;
Ul.Btn = styled.button `
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: #fff;
background: transparent;
border: 1px solid #fff;
outline: none;
cursor: pointer;
:active{
  transform: scale(.98);
}
`;
export const LeftTextSide = styled.div `
display: flex;
flex-direction: column;
color: #fff;
.textlogo{
  width: 450px;
}
p{
  font-size: 16px;
  margin: 10px 0;
}
ul{
  li{
    font-size: 14px;
    font-weight: 400;
    margin: 15px 0;
    user-select: none;
    list-style: disc;
  }
}
`;
export const GroupBtn = styled.div `
display: flex;
margin: 20px 0;
button{
  width: 120px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
}
button:nth-child(1){
  background: #4C6FFF;
  border: 1px solid #4C6FFF;
}
`;
export const RightFrameSide = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
.iframe{
  width: 90%;
}
`;