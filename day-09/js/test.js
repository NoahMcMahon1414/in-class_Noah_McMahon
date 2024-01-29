function bg_change()
	{
		document.body.style.backgroundColor = "rgb("
		+ Math.floor(Math.random() * 256) + ","
		+ Math.floor(Math.random() * 256) + ","
		+ Math.floor(Math.random() * 256)
		+ ")";
		setTimeout('bg_change()', 1250);
	}
	
function show_monkey()
	{
		document.getElementById("hello").className = "monkey";
	}
	
function remove_monkey()
	{
		document.getElementById("hello").className = "notmonkey";
	}
	
function show_prompt()
	{
		var name=prompt("Please enter your name", "Britney Spears");
		if (name!=null && name!="")
			{
				document.getElementById("hello").innerHTML = ("Hello " + name + "! How are you today?");
				alert("Hello " + name + "! How are you today?");
			}
	}