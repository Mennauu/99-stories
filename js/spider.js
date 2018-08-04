var sitewidth = 2400,
		siteheight = 1000;

var rangeToRange = function(oldVal, oldMax, oldMin, newMax, newMin){
	return ( ( ( oldVal - oldMin ) * ( newMax - newMin ) ) / ( oldMax - oldMin ) ) + newMin;
};

	// Animates the Spider for the halloween landing page

	var $spider = $('#spider'),
		spiderWidth = $spider.width(),
		spiderHeight = $spider.height();

	var ps = function(x, y){

		var values = {
			x: rangeToRange(x, 100, 0, sitewidth + spiderWidth, 0),
			y: rangeToRange(y, 100, 0, siteheight + spiderHeight, 0)
		};

		return values;

	};

	var spiderAnimate = function(){

		TweenMax
			.to($spider, 8, {
				bezier: {
					type: 'soft',
					values: [
						ps(0, 10),
						ps(20, 30),
						ps(60, -10)
					],
					autoRotate: true
				},
				ease: Power1.easeInOut,
				force3D: true
			});

		TweenMax
			.to($spider, 8, {
				bezier: {
					type: 'soft',
					values: [
						ps(0, 40),
						ps(110, 40)
					],
					autoRotate: true
				},
				ease: Power1.easeInOut,
				delay: 7,
				force3D: true,
				onComplete: function(){

					TweenMax
						.set($spider, {
							x: 0,
							y: 0
						});

					setTimeout(spiderAnimate, 0);

				}
			});

	};

spiderAnimate();
	
	
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

$(document).ready(function(){
	setup();
});

function setup(){
	
	var $passage = $('#weirdtext');
	
	//get the inner HTML of the #weirdtext paragraph
	var rawtxt = $passage.html();
	
	//Get the length of the string for use in loop
	var len = rawtxt.length;
	
	//empty string used to store final text that includes spans
	var newtext = '';

	
	//For each character inside #weirdtext string (this is why we got length)
	for(var i = 0; i < len; i ++){
		
		//get a random num between 1 and 5
		var rng = Math.floor(Math.random() * 5) + 1;
		
		//get the i-th character from the string
		var currentchar = rawtxt.charAt(i);
		if(currentchar == ' '){
			//if it's a space, add an empty .space span
			var newchar = '<span class="space"></span>';
		}
		else{
			//otherwise, wrap it with a span, and give it class effectN, where N is a random int as before
			var newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
		}
		//add this new "char" (actually it's a char with spans wrapping it) to the empty string
		newtext = newtext + newchar;
	}
	
	//replace #weirdtext paragraphs inner HTML with the newly created string
	$passage.html(newtext);
	
}







