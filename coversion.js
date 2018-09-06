var msn  = "Hola mundo"

// a ti te toco lo mas facil
console.log(codec(msn));
function codec(msn) {
  var data = [];
  for (var i = 0; i < msn.length; i++) {
    data.push(msn.charCodeAt(i).toString(16));
  }
  return data.toString().replace(/,/g,"");
}
var msncode = "486f6c61206d756e646f";
console.log(decode(msncode));
function decode (msncode){
	var data = []
	for (var i = 0; i < msncode.length; i += 2) {
		data.push(msncode.substr(i,2));
	}
	var cad = "";
	for (var j = 0; j < data.length; j++) {
		//console.log(data[j]);
		var n = Number(parseInt(data[j], 16).toString(10));
		cad += String.fromCharCode(n);
		
	} 
	return cad;
}