!function(){var e;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(o){console.log("users inside then callback: ",o),e=o,console.log("globalVariable inside fetch callback: ",e)})),console.log("globalVariable outside fetch: ",e)}();
//# sourceMappingURL=index.5351975a.js.map
