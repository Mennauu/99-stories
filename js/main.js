var d = document;

d.querySelector('select').onchange = function() {myFunction()};

// When option has been selected start myFunction
function myFunction() {
  d.querySelector(".popup").style.display= "block";
  d.querySelector("main").style.filter = "brightness(40%)";
  window.setTimeout(partB,1500);
}

function partB() {
  d.querySelector(".popup").style.display= "none";
  d.getElementById("emoties").style.display = "grid";
  d.getElementById("personen").style.display = "none";
  d.querySelector(".change_information").style.opacity = 0;
	d.querySelector("main h3").innerHTML = "3 resultaten in Emoties";
  window.setTimeout(partC,300);
}

function partC() {
  d.querySelector("main").style.filter = "brightness(100%)";
  d.querySelector(".change_information").style.opacity = 1;
  d.querySelector(".change_information").innerHTML = "Hoe ervaar ik hetzelfde verhaal maar met een andere emotie? Hoe zou ik het beleefd hebben als ik blij was of juist verdrietig?";
}

// How to add class (active) on specific “li” on user click with jQuery
// https://stackoverflow.com/questions/21111946/how-to-add-class-active-on-specific-li-on-user-click-with-jquery

var selector, elems, makeActive;

selector = 'body > section:first-of-type div:nth-of-type(2) a';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active_menu');

    this.classList.add('active_menu');
		d.querySelector("main").style.filter = "brightness(40%)";
		window.setTimeout(partB,1500);
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
	

