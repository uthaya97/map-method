var b=["mango","orange","apple","banana"];
document.write("b=mango,orange,apple,banana"+"<br>"+"<br>")
var output=b.map (function(e){
	return e.toUpperCase();
})
document.write(output);