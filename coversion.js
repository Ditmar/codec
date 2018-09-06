var msn  = "Hola mundo"
console.log(codec(msn));
function codec(msn) {
  var data = [];
  for (var i = 0; i < msn.length; i++) {
    data.push(msn.charCodeAt(i).toString(16));
  }
  return data.toString().replace(/,/g,"");
}
