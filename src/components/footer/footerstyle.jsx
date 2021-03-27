import styled from 'styled-components';
const width=600;
export const Logo = styled.div`
width:20%;
img{
    width:100%;
}
`     
export const Ul = styled.div`
list-style:none;
li{
    margin:10px 0%;
}
`     
export const FooterContent = styled.div`
display:flex;
justify-content:space-around;
background:#222222;
padding:5%;
color:#fff;
@media screen and (max-width:${width}px){
    flex-flow:column;
    justify-items:center;
    ul{
        width:100%;
    }
}
`     
