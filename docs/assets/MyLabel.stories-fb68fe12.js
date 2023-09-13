import{j as h}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:t,size:x="h1",allCaps:v=!1,color:L="text-primary",fontColor:o="black"})=>h.jsx("span",{className:`${x} ${L} ${o} ${v&&"capitalize"}`,style:{color:o},children:t});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to diplay",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"h1"},description:"Size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize all the text",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Color of the text",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:"black"},description:"Font color of the text",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const z={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"My Label"}},a={args:{label:"All Caps Label",allCaps:!1}},r={args:{label:"Secondary Label"}},l={args:{label:"Custom Color Label"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'My Label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: false
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,C,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label'
  }
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,z as default};
//# sourceMappingURL=MyLabel.stories-fb68fe12.js.map
