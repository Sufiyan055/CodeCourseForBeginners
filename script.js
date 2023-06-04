
function myFunction() {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/* Search result show on touch the searchbar */

let myUL = document.getElementById("myUL");

myUL.style.maxHeight = '0px';

function displaymenu() {
  if (myUL.style.maxHeight == "0px") {
    myUL.style.maxHeight = "182px";
  }
  else {
    myUL.style.maxHeight = "0px";
  }
}

/* menulist top display */

let menulist = document.getElementById("menulist");

menulist.style.maxHeight = '0px';

function openmenu() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "250px";
  }
  else {
    menulist.style.maxHeight = "0px";
  }
}

/* 2nd page navbar Courses page */

/* Display the courses when click on any courses for eg html -> html courses (when click)*/

/* For html */
let popuppage = document.getElementById("popuppage");
function popupimg() {
  popuppage.classList.add("showimg");
};
function closepopup(){
  popuppage.classList.remove("showimg");
};

/* For css */
let popuppage2 = document.getElementById("popuppage2");
function popupimg2() {
  popuppage2.classList.add("showimg");
};
function closepopup2(){
  popuppage2.classList.remove("showimg");
};

let popuppage3 = document.getElementById("popuppage3");
function popupimg3() {
  popuppage3.classList.add("showimg");
};
function closepopup3(){
  popuppage3.classList.remove("showimg");
};

let popuppage4 = document.getElementById("popuppage4");
function popupimg4() {
  popuppage4.classList.add("showimg");
};
function closepopup4(){
  popuppage4.classList.remove("showimg");
};

let popuppage5 = document.getElementById("popuppage5");
function popupimg5() {
  popuppage5.classList.add("showimg");
};
function closepopup5(){
  popuppage5.classList.remove("showimg");
};

let popuppage6 = document.getElementById("popuppage6");
function popupimg6() {
  popuppage6.classList.add("showimg");
};
function closepopup6(){
  popuppage6.classList.remove("showimg");
};

let popuppage7 = document.getElementById("popuppage7");
function popupimg7() {
  popuppage7.classList.add("showimg");
};
function closepopup7(){
  popuppage7.classList.remove("showimg");
};

let popuppage8 = document.getElementById("popuppage8");
function popupimg8() {
  popuppage8.classList.add("showimg");
};
function closepopup8(){
  popuppage8.classList.remove("showimg");
};

/* ------------------Animation on scrolling-------------------------- */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
          entry.target.classList.add('show');
      }else{
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElementsleft = document.querySelectorAll('.hiddenleft');
hiddenElementsleft.forEach((el) => observer.observe(el));
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* --------------------Scrolling effect in courses page---------------------- */

