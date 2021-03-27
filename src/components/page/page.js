import React from 'react';
import {PageThree,PageOne,Header,Content,Phone,Right,Left,PageTow,PageTowRight} from './pagestyle.js';
export default function Page(){
    return <>
    <PageOne>
        <Header>  Designed for the future </Header>
        <Content>
<Right>
<div>
<h3>Introducing an extensible editor</h3>

<p>
Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.
</p>
</div>
<div>
<h3>Robust content management</h3>
<p>
  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
</p>
</div>
    </Right>
    <Left>
<img src={`${process.env.PUBLIC_URL}/asseset/images/illustration-editor-desktop.svg`}/>
    </Left>
        </Content>


        </PageOne>

<PageTow>
    <PageTowRight>
        <h2> State of the Art Infrastructure</h2>
        <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.</p>
  
</PageTowRight>
        <Phone>
<img src={`${process.env.PUBLIC_URL}/asseset/images/illustration-phones.svg`}/>
    </Phone>
        </PageTow>


        {/* three */}
        <PageThree>
            <Right>
                <div>
            <h3>Introducing an extensible editor</h3>

<p>
Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.
</p>
</div>
<div>
<h3>Robust content management</h3>
<p>
  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
</p>
</div>
</Right>
    <Left>
        <img src={`${process.env.PUBLIC_URL}/asseset/images/illustration-editor-desktop.svg`}/>
    </Left>
</PageThree>
    </>
}