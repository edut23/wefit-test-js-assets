//Menu
var menu = document.getElementsByClassName("btn-group-vertical");
var menuButton = document.getElementsByClassName("btn btn-secondary");

menu[0].style.flexDirection = "row";
menu[0].style.whiteSpace = "nowrap";

Array.from(menuButton).forEach(element => {
    element.style.borderRadius = "5px";
    element.style.marginRight = "5px";
});


//Header
var header = document.getElementsByClassName("jumbotron");
var headerButton = document.getElementsByClassName("btn btn-primary btn-lg");

header[0].style.backgroundColor = "#6b757e";
header[0].style.color = "#ffffff";
header[0].style.textAlign = "end";
headerButton[0].style.backgroundColor = "#27a844";
headerButton[0].style.border = "none";


//Cards
var card = document.getElementsByClassName("col-lg-3");
var cardButton = document.getElementsByClassName("btn btn-primary");
var container = document.getElementsByClassName("row");

cardButton[1].style.backgroundColor = "#27a844";
cardButton[1].style.border = "none";

var cardArray = [card[3], card[0], card[2], card[1]];

card = cardArray;

cardArray.forEach((element) => {
    console.log(element);
    container[2].appendChild(element);
});


//Lista
var list = document.getElementsByClassName("list-group-item");
var listGroup = document.getElementsByClassName("col-lg-4");
var fourth = list[0].cloneNode(true);
var fifth = fourth.cloneNode(true);

fourth.textContent = "Quarto item";
fourth.className = "list-group-item active";
fifth.textContent = "Quinto item";
fifth.className = "list-group-item";

list[0].className = "list-group-item";
listGroup[0].appendChild(fourth);
listGroup[0].appendChild(fifth);
