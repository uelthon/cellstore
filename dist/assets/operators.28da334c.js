const u=t=>new Date(t).getTime(),n={recents:t=>t.sort((r,e)=>u(e.createdAt)-u(r.createdAt)),older:t=>t.sort((r,e)=>u(r.createdAt)-u(e.createdAt)),hprice:t=>t.sort((r,e)=>e.price-r.price),lprice:t=>t.sort((r,e)=>r.price-e.price)},a={brand:(t,r)=>!!(!r||r.length===0||r.includes(t)),rom:(t,r)=>!r||r===0||t>=r,ram:(t,r)=>!r||r===0||t>=r?r===0||r>=10&&t>=10?!0:!(t>=Number(r)+2):!1,display:(t,r)=>!r||r===0||t<=r,battery:(t,r)=>!r||r===0||t>=r,price:(t,r)=>!r||r===0||t<=r?t>Number(r)-300:!1},s=(t,r)=>t.filter(e=>a.brand(e.brand,r.brand)&&a.rom(e.memory.rom,r.rom)&&a.ram(e.memory.ram,r.ram)&&a.display(e.display.size,r.display)&&a.price(e.price,r.price)&&a.battery(e.battery,r.battery));export{n as o,s as p};
