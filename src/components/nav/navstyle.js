import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const width = 700;
export const Link = styled(NavLink)`

text-decoration:none;
color:hsl(0, 0%, 100%);
`
export const Navbar = styled.nav`
display:flex;
padding:2% 5%;
position:absolute;
right:0px;
left:0px;
transition:height 0.5s;
justify-content: space-between;
z-index: 5;
align-items: center;
`

export const Regester = styled.nav`
width:40%;
display:flex;
justify-content:flex-end;
align-items:center;
@media screen and (max-width:${width}px) {
    flex-flow: column;
    width:100%;
    justify-content: center;
    li{
        color: tomato !important;
        text-align: center;
        background: tomato;
        a{
            color: #fff !important;
        }
        &:aftter{
            content:"";
            display: none;

        }
    }
};

`
export const Drop = styled.ul`
list-style:none;
position:absolute;
top: 100%;
box-shadow: 0px 0px 20px 1px rgb(0 0 0 / 20%);
    background: #fff;
    transform: translate(0% ,10%);
    opacity:0;
    transition:0.6s;
    clip-path: circle(0% at 0% 0%);

li{
    margin:3% 1%;
    a{
        color:#222222;

    }
}
@media screen and (max-width:${width}px) {
position: relative;
background: #eee;
width: 100%;
overflow:hidden;
clip-path: none;
opacity:1;
transform:translateY(-100%);
height: 0px;
/* hy */
li{
    z-index: 3;
    color: #333 !important;
    overflow: hidden;
}

};
`
export const Logo = styled.nav`
width:20%;
`
export const Ul = styled.ul`
text-decoration:none;
list-style:none;
width:80%;
top: 106%;
display:flex;
transition: .5s;

li{
    display:block;
    padding:10px 15px;
    position:relative;
    overflow:hidden;
}
@media screen and (max-width:${width}px) {
    opacity: 0;
transform: translateY(-130%);
    background-color: #fff;
    position: absolute;
    flex-flow: column;
    width:90%;
    align-items: center;
    padding:3%;
    li{
        width: 100%;
    }
};
`


// dropdown
export const DropDown = styled.div`
list-style:none;
display:flex;
flex-flow:column;
margin: 1% 2%;
position:relative;
@media screen and (max-width:${width}px) {
   overflow:hidden;
     a{
        color:#333 !important;
        overflow:hidden;
        z-index:12;
}
}
a{
    color:hsl(0, 0%, 100%);
        overflow:hidden;
        z-index:12;
}
&:hover >ul {
    opacity:1;
    clip-path: circle(100%);

}
@media screen and (max-width:${width}px) {

position: relative;
clip-path: none;
width: 100%;
align-items: center;
margin: 3%;
&:hover >ul {
    transform: translateY(5%);

    transition: 0.5s;
    height: 100%;
    li{
        color:#333;
        overflow:hidden;
        ;z-index:12312;
        a{
            color:#333;
        overflow:hidden;
        ;z-index:12312
        }
    }
    /* hy2 */
}
};

`


// navbar
export const NavBar = styled.div`
    width: 100%;
display:flex;
justify-content:space-around;
align-items:center;
transition: 0.5s;
@media screen and (max-width:${width}px) {
    flex-flow: column;

};

`



// burger 
export const Burger  = styled.div`
width:40px;
height:40px;
background: #fff;
right: 0px;
display: none;
flex-flow: column;
align-items: center;
padding:0px 5px;
justify-content: center;
border-radius: 4px;
@media screen and (max-width:${width}px) {
    display: flex ;
span{
    margin:2px;
    display:inline-block;
    background: tomato;
    height: 4px;
    width:100%;

}
`