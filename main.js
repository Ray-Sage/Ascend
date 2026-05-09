
function goTo(){
   window.location.href="getStarted.html";
 

};
function goBack() {
  window.history.back();
}   


function loading(){
    document.querySelector('.loader').classList.toggle('hidden');
    
}
function load(){
    forEach(() => {
        const li = document.querySelectorAll('.li');
        li.addEventListener('click', loading);
    })
};



//Dashboard content
const showMenu = document.querySelector('.dashboardMenu');
let humberger = document.querySelectorAll(".hamburger");

function toggleMenu(){

    showMenu.classList.toggle('toggleMenu');
    humberger.forEach(function (humberger){
        humberger.classList.toggle('activeHumberger');
    });
    
}

   
 
 let theme = document.getElementById("body");
 let x = document.querySelector(".Theme1");

 let getTheme = localStorage.getItem("Theme");
 
function toggleTheme(){         

    if(getTheme === "Light"){
        localStorage.setItem("Theme", "Dark");
        
    
    } else{
         localStorage.setItem("Theme", "Light");
    }
    
    window.location.reload();
      
}


if(getTheme === "Dark"){
    const theme = document.querySelector(".theme");
    const li = document.querySelectorAll("li");
    
    
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");
    const main = document.querySelectorAll(".sections");
    
    console.log("DarkTheme On");
    document.body.style.background = "black";
    document.body.style.color = "white";
    header.style.background = "rgb(15, 31, 61)";
    showMenu.style.background = "rgb(15, 31, 61)";
    
    
    li.forEach(function(li){
        li.style.color = "white";
        
    });
     main.forEach(function(main){
        main.style.background = "rgb(24, 27, 46";
        
    });
    theme.checked = true;
    
} else if(getTheme === "Light"){
    const card = document.querySelectorAll(".card");
    const span = document.querySelectorAll(".span");
    span.forEach(function (span) {
        span.style.background = "green";
    });
    console.log("AscendX, together we can.");
    card.forEach(function(card){card.style.background = "white"});
} 



function navigate(section){
    const activeClass = document.querySelector(".active");
    activeClass.classList.remove("active");
    activeClass.classList.add("inactive");
    const idName = document.getElementById(section);
    idName.classList.remove("inactive");
    idName.classList.add("active");
    toggleMenu();
    
    
    
    
    
}

// admin Check

let adminId = "paulZulu"; 
let userId = localStorage.getItem("userId");
function userDetails(){
    
    const idName = document.getElementById("in").value;
    localStorage.setItem("userId", idName)
       
}

if (userId !== adminId){
  document.querySelector(".admin").classList.add("hiddenSection");
    } 









function CourseCategory(id){
     const idtype = document.getElementById(id);
     const allCategories = document.querySelectorAll(".span1");
    
    
    
       
        allCategories.forEach(function deactivateactiveCategory(each){
            if(each.classList.contains("activeCategory")){
            each.classList.remove("activeCategory");
            }
        })
        idtype.classList.add("activeCategory");
    
    }
   

    



//Courses logic





//let courseName = document.getElementById("courseName");
//let courseDescription = document.getElementById("courseDescription");
//let lessonLocation = document.getElementById("lessonLocation");
    
//let courseCategory = document.getElementById("select");
   

     
        
      
      