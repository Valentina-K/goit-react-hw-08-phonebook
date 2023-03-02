"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[891],{5891:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(4270),a=t(2791),s=t(9434),i=t(5946),o=t(9439),c=t(5984),u=t(4585),l=t(7886),d=t(4224),h=t(3634),p=t(6916),m=function(e){return e.filter.value},f=function(e){return e.contacts.items},x=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},v=(0,p.P1)([f,m],(function(e,n){return""===n?e:e.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))})),b=t(184),g=(0,c.kP)("1234567890id-",5),C=function(){var e=(0,a.useState)(""),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=(0,a.useState)(""),c=(0,o.Z)(i,2),p=c[0],m=c[1],x=(0,s.I0)(),j=(0,s.v9)(f),v=g(),C=g(),w=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"phone":m(a);break;default:return}};return(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.some((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):x((0,h.uK)({name:t,number:p})),r(""),m("")},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(u.l,{htmlFor:v,children:"Name"}),(0,b.jsx)(l.I,{w:"50%",type:"text",name:"name",value:t,id:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:w})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(u.l,{htmlFor:C,children:"Number"}),(0,b.jsx)(l.I,{w:"50%",type:"tel",name:"phone",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:C,onChange:w})]}),(0,b.jsx)(d.z,{type:"submit",children:"Add contact"})]})},w=t(2007),y=t.n(w),k=function(e){var n=e.name,t=e.phone,r=e.id,a=(0,s.I0)();return(0,b.jsxs)("li",{children:[(0,b.jsxs)("span",{children:[n,": ",t]}),(0,b.jsx)("button",{onClick:function(){return a((0,h.GK)(r))},children:"Delete"})]})};k.protoTypes={name:y().string.isRequired,phone:y().string.isRequired};var _=k,L=function(){var e=(0,s.v9)(v);return(0,b.jsx)("ul",{children:e.map((function(e){return(0,b.jsx)(_,{name:e.name,phone:e.phone,id:e.id},e.id)}))})},A=t(1273),F=function(){var e=(0,s.v9)(m),n=(0,s.I0)();return(0,b.jsxs)("label",{children:[(0,b.jsx)("span",{children:"Find contact by name"}),(0,b.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,A.M6)(e.target.value))}})]})},I=t(1523),q=function(){return(0,b.jsx)(I.g4,{height:"80",width:"80",radius:"9",color:"#3d19c0",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"Loader",visible:!0})},z=function(){var e=(0,s.I0)(),n=(0,s.v9)(x),t=(0,s.v9)(j);return(0,a.useEffect)((function(){e((0,h.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.q,{children:(0,b.jsx)("title",{children:"Contacts"})}),(0,b.jsx)(i.X,{mb:8,children:"Phonebook"}),(0,b.jsx)(C,{}),(0,b.jsx)(i.X,{mb:6,children:"Contacts"}),(0,b.jsx)(F,{}),n&&!t&&(0,b.jsx)(q,{}),(0,b.jsx)(L,{})]})}}}]);
//# sourceMappingURL=891.a626e12f.chunk.js.map