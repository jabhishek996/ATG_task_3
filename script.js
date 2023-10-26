var click_btn=document.querySelector("#click_btn");
var btn1=document.querySelector(".btn1");
var svg=document.querySelector("svg");
const state=1;


// --------Javascript to change button state----------

click_btn.addEventListener("click", function() {
   
   
    svg.style.display="block";
   
    setTimeout(() => {
        btn1.classList.remove("Primary_default_state");
        btn1.classList.add("Primary_disabled_state");
        svg.style.display="none";
        var state=0;
    }, 3000);
   
    
  });