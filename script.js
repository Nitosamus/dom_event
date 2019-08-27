// fonctionnalité1
let footer = document.getElementsByTagName("footer")
	footer = addEventListener("click", clicFooter)

	function clicFooter(){
		console.log("clique");
	}

//fonctionnalité 1bis
let foot = document.getElementsByTagName("footer")[0];
	var x = 0
	foot.onclick = function() {
		if(foot){
			x++
			console.log(`tu clic ${x} fois`)
			
		}		
	}

//fonctionnalité 2
/*
let navHead = document.getElementById("#navbarHeader")
	navHead.addEventListener("click", unCollapse)
	
	function unCollapse(){
		this.classList.remove("collapse")
	}

	navHead.addEventListener("click", collapse)
	
	function collapse(){
		this.classList.add("collapse")
	}
*/
	// fonctionnalité 3
	var editBtn = document.querySelectorAll("div.btn-group > button.btn-outline-secondary")[0],
	 text = document.querySelectorAll("p.card-text")[0];

				editBtn.addEventListener("click", changeColor)
				function changeColor(){
				text.style.color = "red";
				};

// fonctionalité 4
var editBtn2 = document.querySelectorAll("div.btn-group > button.btn-outline-secondary")[1],
	text2 = document.querySelectorAll("p.card-text")[1],
	textStatus = false;

	editBtn2.addEventListener("click", resetColor2)
	function resetColor2(){
	text2.style.color = "";
	};
		   editBtn2.addEventListener("click", changeColor2)
		   function changeColor2(){
		   text2.style.color = "green";
		   };
		   





















/*
let para = document.querySelectorAll("p.text-muted")[0];
	let h4 = document.querySelectorAll("h4.text-white")[0];
	para.addEventListener("mouseover", function(event){
		h4.innerHTML = "je clique l'evenement" + event.target.className
	});
	para.addEventListener("mouseout", function(event){
		h4.innerHTML = "je clique l'evenement" + event.relatedTarget.className
	});

	let input = document.querySelectorAll("#form")[0];
	let p = document.querySelectorAll("#para")[0];
		input.addEventListener("keypress", function(e){
			
			p.innerHTML = "j' ajoute d'un carctère" + String.fromCharCode(e.keyCode)
		});
//fonctionnalite 2
*/
/*
// test lecon
var capt1 = document.getELementById("capt1"),
	capt2 = document.getELementById("capt2"),
	boul1 = document.getELementById("boul1"),
	boul2 = document.getELementById("boul2")

capt1.addEventListener("click", function() {
	alert("L'evenement du div vient de se declencher.");
}, true);

capt2.addEventListener("click", function() {

        alert("L'événement du span vient de se déclencher.");

    }, true);

  

    boul1.addEventListener('click', function() {

        alert("L'événement du div vient de se déclencher.");

    }, false);

  

    boul2.addEventListener('click', function() {

        alert("L'événement du span vient de se déclencher.");

    }, false);*/