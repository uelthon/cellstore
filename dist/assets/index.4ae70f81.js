import{u as s,j as i,b as d,C as t,k as o,L as l,l as m,m as u,N as h}from"./index.fc6d9256.js";const p=({brand:a,id:n})=>{const c=s(e=>e.products.value);if(!c)return i("h1",{children:"Loading..."});const r=c.filter(e=>e.brand===a&&e.id!==n);return d("div",{style:{padding:"1rem"},children:[d("h3",{children:["More ",a,"'s products"]}),i("div",{className:"container-gallery-responsive",children:r.map(e=>i(t,{item:e},e.id))})]})};const v=()=>{const a=s(e=>e.products.value),n=o("/product/:id"),c=n.params.id;if(!a||!n)return i(l,{});const r=(a==null?void 0:a.find(e=>e.id===c))||null;return d("div",{style:{padding:"2rem"},children:[r?d("div",{children:[d("div",{className:"container-product",children:[i("div",{className:"container-product-img",children:i("img",{src:r.img})}),d("div",{className:"container-details",children:[i("h1",{children:r.name}),d("div",{children:[d("div",{children:["Brand: ",r.brand]}),d("div",{children:["Processor: ",r.procesador.type," ",r.procesador.speed,"Ghz"]}),d("div",{children:["Display: ",r.display.size,'" ',r.display.resolution,"pixels"]}),d("div",{children:["Back Camera: ",r.camera.back]}),d("div",{children:["Front Camera: ",r.camera.front]}),d("div",{children:["Ram: ",r.memory.ram,"Gb"]}),d("div",{children:["Storage: ",r.memory.rom,"Gb"]}),d("div",{children:["Battery: ",r.battery]})]}),d("div",{children:[d("h3",{children:["Price: $",r.price]}),i(m,{id:r.id})," ",i("br",{}),i(u,{item:r,label:"Compare"})]})]})]}),i(p,{brand:r.brand,id:r.id})]}):null,r?null:i(h,{})]})},y=v;export{y as default};
