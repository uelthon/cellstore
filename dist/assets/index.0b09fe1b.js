import{u as m,D as g,b as x,j as e,m as f,E as $,C as p,s as o,G as w,H as D,d as h,T as N,r as i,S as k,A as I,B as y}from"./index.99067196.js";const R=({id:t,status:s})=>{const c=m(),[a]=g(),d=a.get("offset")||0,n=x(),l=async()=>{const u=Number(d);try{return await p.disableUser(t),c(`/admin/users?offset=${u}&id=${t}&disable=${!s}`),n(s?o(["user was actived","success"]):o(["user was disabled","danger"]))}catch(r){console.log(r),n(o([r.response.data.error,"danger"]))}};return e("div",{style:{color:s?"red":"green",cursor:"pointer"},onClick:()=>l(),children:e(f,{icon:$})})},T=({id:t,isAdmin:s})=>{const c=m(),[a]=g(),d=a.get("offset")||0,n=x(),l=async()=>{const u=Number(d);try{return await p.adminUser(t),c(`/admin/users?offset=${u}&id=${t}&admin=${!s}`),n(s?o(["User role change to customer","danger"]):o(["User role change to Admin","success"]))}catch(r){console.log(r),n(o([r.response.data.error,"danger"]))}};return e("div",{style:{color:"#0d6efd",cursor:"pointer"},onClick:()=>l(),children:s?e(f,{icon:w}):e(f,{icon:D})})},j=({users:t})=>h(N,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[e("thead",{children:h("tr",{children:[e("th",{children:"Id"}),e("th",{children:"Username"}),e("th",{children:"Status"}),e("th",{children:"Role"}),e("th",{children:"Change Status"}),e("th",{children:"Change Role"})]})}),e("tbody",{children:t.length>0?t.map(s=>h("tr",{children:[e("td",{children:s.id}),e("td",{children:s.username}),e("td",{style:{color:s.disable?"red":"green",fontWeight:"bold"},children:s.disable?"Disable":"Active"}),e("td",{children:s.isAdmin?"Admin":"Customer"}),e("td",{children:e(R,{id:s.id,status:s.disable})}),e("td",{children:e(T,{id:s.id,isAdmin:s.isAdmin})})]},s.id)):null})]}),B=()=>{const[t,s]=i.exports.useState(0),[c,a]=i.exports.useState(!1),[d,n]=i.exports.useState(0),[l,u]=i.exports.useState([]),[r]=g(),b=r.get("offset")||0,S=r.get("disable")||!1,A=r.get("admin")||!1,C=r.get("id")||"",v=m();return i.exports.useEffect(()=>{s(Number(b))},[b]),i.exports.useEffect(()=>{a(!0),(async()=>{const U=await p.getAll(t);n(U.count),u(U.users),a(!1)})()},[t,S,C,A]),h("div",{style:{display:"flex",flexDirection:"column",width:"100%",paddingTop:"2rem",gap:"2rem",alignItems:"center"},children:[e("h1",{children:"Users Management"}),e("div",{style:{width:"80%"},children:e(j,{users:l})}),c?e(k,{animation:"border",role:"status",variant:"primary"}):null,e("div",{children:h(I,{children:[e(y,{onClick:()=>v(`?offset=${t-5}`),disabled:t<5,children:"prev"}),e(y,{onClick:()=>v(`?offset=${t+5}`),disabled:t>d-5,children:"next"})]})})]})},G=B;export{G as default};