function hello(nm) {
	alert("Hello " + nm + "!");
}

function bg_change()
{
	document.body.style.backgroundColor = "rgb("
	+ Math.floor(Math.random() * 256) + ","
	+ Math.floor(Math.random() * 256) + ","
	+ Math.floor(Math.random() * 256)
	+ ")";
	setTimeout('bg_change()', 1250);
}

function change() {
	document.getElementById("chng").innerHTML 
	= "I'm a changed element!";
}

function addColor() {
	document.getElementById("tactic").className 
	= "colorific";
}

function notColor() {
	document.getElementById("tactic").className 
	= "notColor";
}

function show_prompt()
	{
		var name=prompt("Please enter your name", "Katy Perry");
		if (name!=null && name!="")
			{
				document.getElementById("hello").innerHTML = ("Hello " 
				+ name + "! How are you today?");
				alert("Hello " + name + "! How are you today?");
			}
	}
	
function currentDate(){
	var today = new Date();
	//today = today.getDay();
	document.getElementById("dateme").innerHTML = (" "+today);
}