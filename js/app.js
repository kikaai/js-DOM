/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:


Tay-Tay*/
var newName = document.getElementById("name1");
newName.innerHTML= "Tay Tay";


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var khaledPosition = document.getElementById("position2");
khaledPosition.innerHTML = "Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var pikoChange = document.getElementById("alias3");
pikoChange.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divElem = document.getElementsByClassName("profile")
console.log(divElem);
divElem[0].innerHTML = "Purple rain, purple rain";




/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var divProf = document.getElementsByClassName("profile")
console.log(divProf);
divElem[1].innerHTML = "Wataaah";



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divAli = document.getElementsByClassName("alias")
console.log(divAli);
divAli[2].innerHTML = "Snake's on the plan guy";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newDivv = document.createElement("div");
newDivv.id = "name7";
newDivv.innerHTML= "Peter Griffin";
nameParent.appendChild(newDivv);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var newDiA = document.createElement("div");
newDiA.id = "alias8";
newDiA.innerHTML= "Old Man Riverwalk";
aliasParent.appendChild(newDiA);

//Final Boss
/*9. Create your own profile.*/


// var divProf = document.getElementsByClassName("profile")
// console.log(divProf);
// divElem[1].innerHTML = "Wataaah";
// var ImgNew = document.getElementsByClassName("block3 col-sm-4")
var newImgEl = document.getElementsByTagName("img");
newImgEl[8].src ="https://vignette2.wikia.nocookie.net/dccu/images/6/6f/JL_Wonder_Woman.jpg/revision/latest?cb=20160914003449";




