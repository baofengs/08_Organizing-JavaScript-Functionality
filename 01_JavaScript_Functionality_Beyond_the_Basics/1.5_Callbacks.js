function bar() {
  console.log("Hello World");
}
setTimeout(bar, 1000);



function resp(content) {
  console.log(content)
}

ajax("http://some.url.1", resp);

// lub 

var resp = ajax("http://some.url.1");