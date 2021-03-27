import styled from 'styled-components';
const width = 700;
export const LandingPage = styled.div`
height:100vh;
width:100vw;
background-image:url("/front-end-mentor-blog/asseset/images/back.svg");
`
export const Content  = styled.div`
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
color:#fafafa;
text-transform:capitalize;
p{
    margin:4% 0%;
}
@media screen and (max-width:${width}px){
width:100%;
text-align:center
}
`
export const BtnOut = styled.button`
padding:2% 6%;
border-radius: 41px;
font-size: 1.2em;
border: none;
background: #fff;
color:tomato;
`
export const Btn = styled.button`
padding:2% 6%;
border-radius: 41px;
font-size: 1.2em;
border: 1px solid #fff;
margin:0% 5%;
color:#fff;
background:transparent
`