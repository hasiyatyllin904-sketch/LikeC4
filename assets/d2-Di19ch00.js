var e=e=>{switch(e){case`index`:return`direction: down\r
\r
Client: {\r
  label: "Клиент"\r
  shape: c4-person\r
}\r
EdgeNode: {\r
  label: "Edge Node"\r
}\r
Backend: {\r
  label: "Backend Service"\r
}\r
\r
Client -> EdgeNode: "HTTPS-запрос"\r
EdgeNode -> Backend: "HTTP-запрос"\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};