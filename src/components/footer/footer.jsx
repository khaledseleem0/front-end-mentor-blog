import React from 'react';
import {Logo , Ul,FooterContent} from './footerstyle';
export default function Footer(){
    return<>
        <FooterContent>
<Logo>



<img src={`${process.env.PUBLIC_URL}/asseset/images/logo.svg`}/>


</Logo>
    <Ul>
        <li> Product</li>
        <li>Overview</li>
        <li>Pricing</li>
        <li>Marketplace</li>
        <li>Features</li>
        <li>ntegrations</li>
    </Ul>
    <Ul>
        <li> Company</li>
        <li>About</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Careers</li>
    </Ul>
    <Ul>
        <li> Connect</li>
        <li>Contact</li>
        <li>Newsletter</li>
        <li>Blog</li>
        <li>LinkedIn</li>
    </Ul>
        </FooterContent>
    </>
}  