let e;fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json())).then((l=>{console.log("users inside then callback: ",l),e=l,console.log("globalVariable inside fetch callback: ",e)})),console.log("globalVariable outside fetch: ",e);
//# sourceMappingURL=index.4a54a61e.js.map
