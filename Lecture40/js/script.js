
/*
document.addEventListener("DOMContentLoaded",function (event) {

	function sayHello() {
	document.querySelector("button").innerHTML = "Said it !";
	var name = document.getElementById("name").value;
	if(name === "student"){
		var title = document.getElementById("title").innerHTML;
		title = title + " & Lovin it !";
		document.getElementById("title").innerHTML = title;
	}
	var message = "<h2>Hello " + name + "!</h2>";
	console.log(message);

	document.querySelector("#content").innerHTML = message;
}




document.querySelector("button").addEventListener("click",sayHello);

document.querySelector("body").addEventListener("mousemove",
	function (event) {
		if(event.shiftKey === true){
			console.log(event.clientX);
			console.log(event.clientY);
		}

		}
	);



	}
);

*/



document.addEventListener("DOMContentLoaded",
    function (event) {
		document.querySelector("button").addEventListener("click", function() {

			$ajaxUtils.sendGetRequest("/data/name.txt", function(request) {
				var name = request.responseText;
				document.querySelector('#content').innerHTML = "<h2>Hello " + name + "!";
			});
		});
	
    }
);



















