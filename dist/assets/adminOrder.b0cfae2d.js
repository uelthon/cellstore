import{f as o,d as r,j as t,T as u,L as p,r as l,J as m,K as f,o as y}from"./index.99067196.js";const O=({order:d})=>{var s;const i=o(e=>e.products.value);if(!d||!i)return null;const c=(s=d==null?void 0:d.products)==null?void 0:s.map(e=>{const n=i.find(h=>h.id===e.product);return{id:n.id,name:n.name,price:n.price,quantity:e.quantity}}),a=new Date(d.createdAt).toUTCString().substring(0,16);return r("div",{style:{display:"flex",flexDirection:"column",width:"100%",paddingTop:"2rem",gap:"2rem",alignItems:"center"},children:[r("div",{children:[r("h1",{children:["Order #",d.id]}),t("p",{children:a})]}),t("div",{style:{width:"80%"},children:r(u,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[t("thead",{children:r("tr",{children:[t("th",{children:"#"}),t("th",{children:"Item"}),t("th",{children:"Quantity"}),t("th",{children:"Price"}),t("th",{children:"Total"})]})}),r("tbody",{children:[c==null?void 0:c.map((e,n)=>r("tr",{children:[t("td",{children:n+1}),t("td",{children:t(p,{to:`/product/${e.id}`,children:e.name})}),t("td",{children:e.quantity}),r("td",{children:["$",e.price]}),r("td",{children:["$",Number(e.price)*Number(e.quantity)]})]},e.id)),r("tr",{children:[t("th",{children:"Total Amount"}),t("td",{}),t("td",{}),t("td",{}),r("td",{children:["$",d.amount]})]})]})]})})]})},g=()=>{const[d,i]=l.exports.useState(null),a=m("/admin/orders/:id").params.id;return l.exports.useEffect(()=>{(async()=>{const e=await y.getOneOrder(a);i(e)})()},[a]),d?t(O,{order:d}):t(f,{})};export{g as default};
