var e=e=>{switch(e){case`index`:return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  Client@{ icon: "fa:user", shape: rounded, label: "Клиент" }\r
  EdgeNode@{ shape: rectangle, label: "Edge Node" }\r
  Backend@{ shape: rectangle, label: "Backend Service" }\r
  Client -. "\`HTTPS-запрос\`" .-> EdgeNode\r
  EdgeNode -. "\`HTTP-запрос\`" .-> Backend\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};