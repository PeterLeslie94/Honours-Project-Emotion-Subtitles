// global array for storing animated elements
	animatedElements=[];
	// function to display the welcome text in the beginning
	function myFunction()
	{
		document.getElementById("editText").innerHTML = "Welcome";
	}
	// function to display the text written in text field on the display screen
	function DisplayText()
	{
		document.getElementById("editText").innerHTML = document.editor.text.value;
	}
	// changes font family of the text
	function changeFontStyle(){
		document.getElementById("editText").style.fontFamily = document.getElementById("textFont").value;
	}
	// changes size of the text
	function changeTextSize(){
		document.getElementById("editText").style.fontSize = document.getElementById("textSize").value+"px";
	}
	// changes color of the text
	function changeTextColor(){
		document.getElementById("editText").style.color = document.getElementById("textColor").value;
	}
	//changes background color of the display screen
	function ChangeBgColor()
	{
		document.getElementById("displayScreen").style.backgroundColor = document.getElementById("backgroundColor").value;
	}
	//changes animation style using animate.css classes
	function changeAnimation()
	{
	     var element = document.getElementById("editText");
		var animationClass = "animate__animated animate__"+ document.getElementById("animation").value+" animate__delay-"+ document.getElementById("animationDelay").value+"s";		
		element.className = animationClass;
		
	}
	
	//this funtion will save the state of animated text
	function saveStates()
	{
	    //we get all the values from fields in the variables
	    var txt =  document.editor.text.value;
		var txtFontStyle = document.getElementById("textFont").value;
		var txtSize = document.getElementById("textSize").value+"px";
		var txtColor = document.getElementById("textColor").value;
		var bgcolor = document.getElementById("backgroundColor").value;
		var animationClass = "animate__animated animate__"+ document.getElementById("animation").value+" animate__delay-"+ document.getElementById("animationDelay").value+"s";	
		var dlay = document.getElementById("animationDelay").value;
		
		// store the state of animated text in object
		const animatedElement = { text: txt,textFont:txtFontStyle, textSize: txtSize ,textColor: txtColor, bgColor: bgcolor ,animation: animationClass,delay:dlay};
        // store the bject in array of objects
		animatedElements.push(animatedElement);
		//use javascript local storage for storing states in the browser
		localStorage.setItem('elements', JSON.stringify(animatedElements));
		
		alert("Animated Element Saved");

	}
	
	// this function retrieves the stored states of text and create a video   
	function playAnimation()
	{
	  //get states stored in local storage in array
	  var animatedElements = JSON.parse(localStorage.getItem("elements") || "[]");

	  //function to play animation for the specified time delay
	  (function timeDelay  (n) {
	
		  if (n < animatedElements.length) setTimeout(function () {  
			timeDelay ( n ); // Redo if n < animatedElements.length means that there are still elements in the array
		  }, (1000*animatedElements[n].delay)+1500); //animation delay timer
  
			document.getElementById("editText").innerHTML = animatedElements[n].text;
			document.getElementById("editText").style.fontFamily = animatedElements[n].textFont;
			document.getElementById("editText").style.fontSize = animatedElements[n].textSize;
			document.getElementById("editText").style.color = animatedElements[n].textColor;
			document.getElementById("displayScreen").style.backgroundColor = animatedElements[n].bgColor;
			var element = document.getElementById("editText");
			element.className = animatedElements[n].animation;
			
			n++;

} (0)); 

	}
	
	