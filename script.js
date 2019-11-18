
// fonctionnalité 1
let fter = document.getElementsByTagName("footer")[0];

fter.addEventListener("click", footerClick)
function footerClick(){
		console.log("clique");
}

// fonctionnalité 1 bis
fter.addEventListener("click", footerClickCount)

numClicks = 0
function footerClickCount(){
		numClicks++;
		console.log(`clic numero ${numClicks}`);
		console.log("--------");
}

// fonctionnalité 2
let navBarHeader = document.getElementById("navbarHeader");
let burger = document.getElementsByClassName("navbar-toggler")[0];

burgerStatus = false;
burger.addEventListener("click", releaseClick)

function releaseClick(){
	if (burgerStatus == false){
		navBarHeader.classList.remove('collapse');
		burgerStatus = true;
	}
	else if (burgerStatus == true){
		navBarHeader.classList.add('collapse');
		burgerStatus = false;
	}
}

// fonctionnalité 3
let firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0];
let firstCardBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
firstCardBtn.addEventListener("click", btnClick)
function btnClick(){
		firstCard.style.color = "red";
}
// fonctionnalité 4
let secondCard = document.getElementsByClassName("card mb-4 box-shadow")[1];
let secondCardBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
secondCardStatus = false;
secondCardBtn.addEventListener("click", btnClick2)

function btnClick2(){
	if (secondCardStatus == false){ //j'aurai pu faire color != de #212529
		secondCard.style.color = "green";
		secondCardStatus = true;
	}
	else if (secondCardStatus == true){
		secondCard.style.color = "#212529";
		secondCardStatus = false;
	}
}
// fonctionnalité 5 - bien rappuyer sur JS&Events par ex si vous voulez que ca marche
let bootstrapLink = document.getElementsByTagName("link")[0];
let navBarHeader2 = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];

navBarHeader2.addEventListener("dblclick", nuclearFct)
navBarHeaderCardStatus = false;
function nuclearFct(){
	if (navBarHeaderCardStatus == false){
		bootstrapLink.removeAttribute("href");
		navBarHeaderCardStatus = true;
	}
	else if (navBarHeaderCardStatus == true){
		bootstrapLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
		navBarHeaderCardStatus = false;
	}
}
//fonctionnalité 6
let arrayViewBtn = document.getElementsByClassName("btn btn-sm btn-success");

for(var i = 0; i < arrayViewBtn.length; i++) {
       arrayViewBtn[i].addEventListener("mouseover", reductCard);
 }

function reductCard(){
	pointedCard = (this.parentNode.parentNode.parentNode.parentNode) //appelle la carte concernée -- faire en partant de la carte aurait été plu simple
	if (pointedCard.getElementsByClassName("card-text")[0].style.display != "none"){
		pointedCard.getElementsByClassName("card-text")[0].style.display = "none"; // fait disparaitre le texte
		pointedCard.getElementsByTagName("img")[0].style.width ="20%" ;
		pointedCard.getElementsByTagName("img")[0].style.margin ="auto" ; //la place au milieu
	}
	else {
		pointedCard.getElementsByClassName("card-text")[0].style.display = "block";
		pointedCard.getElementsByTagName("img")[0].style.width ="100%" ;
	}
}
//fonctionnalité 7
let rightBtn = document.getElementsByClassName("btn btn-secondary my-2")[0];
let arrayCard = document.getElementsByClassName("col-md-4");
let cardsRow = document.getElementsByClassName("row")[1];

rightBtn.addEventListener("click", changeCard);

function changeCard(){
	cardsRow.insertBefore(arrayCard[arrayCard.length-1],arrayCard[0]);
}
//fonctionnalité 8
let leftBtn = document.getElementsByClassName("btn btn-primary my-2")[0];
leftBtn.addEventListener("click", changeCard2);

function changeCard2(){
	leftBtn.removeAttribute("href");
	cardsRow.insertBefore(arrayCard[0],cardsRow.nextSiblings);
}
//fonctionnalité 9
let logo = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
//logo.addEventListener("click", footerClick);
logo.addEventListener("keypress", keyPressLogo);

function keyPressLogo(event) {
        if (event.key == "a"){
        	document.getElementsByTagName("body")[0].setAttribute("class","col-4");
        } //
        else if (event.key == "y"){
        	document.getElementsByTagName("body")[0].setAttribute("class","col-4 offset-md-4");
        }
        else if (event.key == "p"){ 
        	document.getElementsByTagName("body")[0].setAttribute("class","col-4 offset-md-8");
        }
        else if (event.key == "b"){
        	document.getElementsByTagName("body")[0].removeAttribute("class");
        }
 } 
