import{e as i,R as e,T as s,L as o,r as m,H as E,J as p,o as h}from"./index.1ede3e92.js";const f=({order:n})=>{var u;const r=i(t=>t.products.value);if(!n||!r)return null;const a=(u=n==null?void 0:n.products)==null?void 0:u.map(t=>{const l=r.find(d=>d.id===t.product);return{id:l.id,name:l.name,price:l.price,quantity:t.quantity}}),c=new Date(n.createdAt).toUTCString().substring(0,16);return e.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",paddingTop:"2rem",gap:"2rem",alignItems:"center"}},e.createElement("div",null,e.createElement("h1",null,"Order #",n.id),e.createElement("p",null,c)),e.createElement("div",{style:{width:"80%"}},e.createElement(s,{striped:!0,bordered:!0,hover:!0,responsive:!0},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"#"),e.createElement("th",null,"Item"),e.createElement("th",null,"Quantity"),e.createElement("th",null,"Price"),e.createElement("th",null,"Total"))),e.createElement("tbody",null,a==null?void 0:a.map((t,l)=>e.createElement("tr",{key:t.id},e.createElement("td",null,l+1),e.createElement("td",null,e.createElement(o,{to:`/product/${t.id}`},t.name)),e.createElement("td",null,t.quantity),e.createElement("td",null,"$",t.price),e.createElement("td",null,"$",Number(t.price)*Number(t.quantity)))),e.createElement("tr",null,e.createElement("th",null,"Total Amount"),e.createElement("td",null),e.createElement("td",null),e.createElement("td",null),e.createElement("td",null,"$",n.amount))))))},O=()=>{const[n,r]=m.exports.useState(null),c=E("/admin/orders/:id").params.id;return m.exports.useEffect(()=>{(async()=>{const t=await h.getOneOrder(c);r(t)})()},[c]),n?e.createElement(f,{order:n}):e.createElement(p,null)};export{O as default};