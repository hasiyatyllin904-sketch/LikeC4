var e=e=>{switch(e){case`index`:return`@startuml\r
title "Landscape view"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Client>>{\r
  BackgroundColor #6366f1\r
  FontColor #eef2ff\r
  BorderColor #4f46e5\r
}\r
skinparam rectangle<<EdgeNode>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Backend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Клиент" <<Client>> as Client\r
rectangle "==Edge Node\\n\\nTLS Terminator, Certificate Validator, Security Headers" <<EdgeNode>> as EdgeNode\r
rectangle "==Backend Service\\n\\nBusiness Logic" <<Backend>> as Backend\r
\r
Client .[#8D8D8D,thickness=2].> EdgeNode : <color:#8D8D8D>HTTPS-запрос\r
EdgeNode .[#8D8D8D,thickness=2].> Backend : <color:#8D8D8D>HTTP-запрос\r
@enduml\r
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};