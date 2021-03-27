import styled from 'styled-components';
const width = 600; 
export const Header = styled.h3`
text-align:center;
`

export const PageOne = styled.div`
padding: 7% 5%;
color:hsl(240, 10%, 16%);

`
export const Content = styled.div`
display:flex;
@media screen and (max-width:${width}px){
    flex-flow:column-reverse;
    justify-items:center;
    div{
        width:100%;
    }
}

`
export const Right = styled.div`
padding:5%;
display:flex;
flex-flow:column;
width:60%;
div{
    margin:5% 0%;
    p{
        margin:3% 0%;
    }
}

`
export const Left = styled.div`
width:40%;
img{
    width:100%;
}
`

export const PageTow = styled.div`
background: hsl(237, 23%, 32%);
display:flex;
border-radius: 0% 10%;
padding: 10% 5%;
justify-content:end;
align-items:center;
position:relative;
flex-flow:row-reverse
`

export const PageTowRight = styled.div`
width:50%;
color:#fff;

p{
    margin:5% 0%;
}
`

export const Phone = styled.div`

transform: translate(-90%,0%);
    position: absolute;
    width: 50vw;
    img{
        width:100%;
    }
`
export const PageThree = styled.div`
display:flex;
padding:5%;
flex-flow:row-reverse;
@media screen and (max-width:${width}px){
    flex-flow:column-reverse;
    justify-items:center;
    div{
        width:100%;
    }
}
`