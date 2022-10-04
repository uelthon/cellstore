import{g as S,j as e,F as q,r as h,h as T,i as I,k as D,l as k,b as x,M as v,m as g,n as G,d as o,q as t,B as f,t as N,v as j,w as A,x as B,y as z,f as L,z as $,T as F,A as R}from"./index.99067196.js";const C=S("input-group-text",{Component:"span"}),M=r=>e(C,{children:e(q,{type:"checkbox",...r})}),E=r=>e(C,{children:e(q,{type:"radio",...r})}),w=h.exports.forwardRef(({bsPrefix:r,size:n,hasValidation:l,className:d,as:c="div",...a},p)=>{r=T(r,"input-group");const i=h.exports.useMemo(()=>({}),[]);return e(I.Provider,{value:i,children:e(c,{ref:p,...a,className:D(d,r,n&&`${r}-${n}`,l&&"has-validation")})})});w.displayName="InputGroup";const u=Object.assign(w,{Text:C,Radio:E,Checkbox:M}),O=async r=>({name:r.name,brand:r.brand,procesador:{speed:r.speed,type:r.type},display:{size:r.size,resolution:r.resolution},camera:{front:r.front,back:r.back},memory:{ram:r.ram,rom:r.rom},battery:r.battery,img:r.img,price:r.price}),W=()=>{const{register:r,formState:{errors:n},handleSubmit:l,reset:d}=k(),[c,a]=h.exports.useState(!1),p=x(),i={req:"This field is required"};return e(v,{btnTitle:e(g,{icon:G}),head:"Add Product",show:c,setShow:a,children:o(t,{style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:l(async y=>{const b=await O(y);p(N(b,a)),console.log(b)}),children:[o("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxHeight:"50vh",overflow:"auto",scrollbarWidth:"thin",paddingRight:"1rem",paddingLeft:"1rem"},children:[o(t.Group,{children:[e(t.Label,{children:"Name:"}),e(t.Control,{...r("name",{required:i.req}),name:"name",type:"text",placeholder:"name"}),n.name&&n.name.message]}),o(t.Group,{children:[e(t.Label,{children:"Brand:"}),e(t.Control,{...r("brand",{required:i.req}),name:"brand",type:"text",placeholder:"brand"}),n.brand&&n.brand.message]}),o(u,{children:[e(u.Text,{children:"Processor:"}),e(t.Control,{...r("speed",{required:i.req}),name:"speed",step:".01",type:"number",placeholder:"speed"}),e(t.Control,{...r("type",{required:i.req}),name:"type",type:"text",placeholder:"type"})]}),o(u,{children:[e(u.Text,{children:"Display:"}),e(t.Control,{...r("size",{required:i.req}),name:"size",type:"number",step:".01",placeholder:"size"}),e(t.Control,{...r("resolution",{required:i.req}),name:"resolution",placeholder:"resolution",type:"text"})]}),o(u,{children:[e(u.Text,{children:"Cameras:"}),e(t.Control,{...r("front",{required:i.req}),name:"front",placeholder:"front",type:"text"}),e(t.Control,{...r("back",{required:i.req}),name:"back",placeholder:"back",type:"text"})]}),o(u,{children:[e(u.Text,{children:"Memory:"}),e(t.Control,{...r("ram",{required:i.req}),name:"ram",placeholder:"ram",step:".01",type:"number"}),e(t.Control,{...r("rom",{required:i.req}),name:"rom",placeholder:"rom",step:".01",type:"number"})]}),o(t.Group,{children:[e(t.Label,{children:"Battery:"}),e(t.Control,{...r("battery",{required:i.req}),name:"battery",placeholder:"battery",type:"number",step:".01"}),n.battery&&n.battery.message]}),o(t.Group,{children:[e(t.Label,{children:"Image:"}),e(t.Control,{...r("img",{required:i.req}),name:"img",placeholder:"img-url",type:"text"}),n.img&&n.img.message]}),o(t.Group,{children:[e(t.Label,{children:"Price:"}),e(t.Control,{...r("price",{required:i.req}),name:"price",placeholder:"price",type:"number",step:".01"}),n.price&&n.price.message]})]}),e(f,{type:"submit",children:"submit"})]})})},H=({id:r,name:n})=>{const[l,d]=h.exports.useState(!1),[c,a]=h.exports.useState(0),p=x(),i=async m=>{m.preventDefault();const y={price:Number(c)};p(A(r,y)),d(!1)};return e(v,{btnTitle:e(g,{icon:j}),head:`Change Price of ${n}`,show:l,setShow:d,children:o(t,{onSubmit:i,children:[e(t.Control,{type:"number",value:c,onChange:m=>a(m.target.value),placeholder:"Price",required:!0}),e("br",{}),e(f,{type:"submit",children:"Submit"})]})})},U=({id:r})=>{const n=x(),l=()=>{window.confirm("Do you want to delete it?")&&window.confirm("Do you really want to delete it?")&&n(z(r))};return e("div",{style:{color:"red",cursor:"pointer"},onClick:()=>l(),children:e(g,{icon:B})})},V=()=>{const r=L(s=>s.products.value),[n,l]=h.exports.useState(""),[d,c]=h.exports.useState("recents"),[a,p]=h.exports.useState(0);if(!r)return null;const i=new RegExp(n,"i"),m=r.filter(s=>i.test(s.name))||[],y=$[d]([...m])||[],b=y.slice(a,a+10);return o("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"flex-start"},children:[e("div",{style:{display:"grid",placeItems:"center",width:"100%"},children:e(t.Control,{type:"text",value:n,onChange:s=>l(s.target.value),placeholder:"Search Product",style:{width:"50%"}})}),o("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o(t.Select,{style:{width:"150px"},value:d,onChange:s=>c(s.target.value),children:[e("option",{value:"recents",children:"recents"}),e("option",{value:"older",children:"olders"}),e("option",{value:"lprice",children:"low prices"}),e("option",{value:"hprice",children:"high prices"})]}),e(W,{})]}),o(F,{size:"sm",striped:!0,bordered:!0,hover:!0,responsive:!0,children:[e("thead",{children:o("tr",{children:[e("th",{children:"Id"}),e("th",{children:"Date"}),e("th",{children:"Name"}),e("th",{children:"Price"}),e("th",{children:"Edit-Price"}),e("th",{children:"Delete"})]})}),e("tbody",{children:b.map(s=>{const P=new Date(s.createdAt).toUTCString().substring(0,16);return o("tr",{children:[e("td",{children:s.id}),e("td",{children:P}),e("td",{children:s.name}),o("td",{children:["$",s.price]}),e("td",{children:e(H,{id:s.id,name:s.name})}),e("td",{children:e(U,{id:s.id})})]},s.id)})})]}),e("div",{style:{display:"grid",placeItems:"center",width:"100%"},children:o(R,{children:[e(f,{onClick:()=>p(a-10),disabled:a<10,children:"Prev"}),e(f,{onClick:()=>p(a+10),disabled:a>=y.length-10,children:"Next"})]})})]})},J=()=>e("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-Start",alignItems:"center",paddingTop:"2rem"},children:e("div",{style:{width:"80%"},children:e(V,{})})}),Q=J;export{Q as default};
