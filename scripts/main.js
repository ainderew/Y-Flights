const tourForm = document.getElementById("powered_by_1150");
const flightsForm = document.querySelector(".mewtwo-flights--xl");
const flightFormMobile = document.querySelector(".mewtwo-widget--touch");
const tourBtn = document.querySelector(".tourBtn");
const backBtn = document.querySelector(".backBtn");

console.log("working");

const onTourBtn = () =>{
    if (screen.width <= 768){
        flightFormMobile.style.display = "none";
    }else{
        flightsForm.style.display = "none";
    }
    
    tourBtn.style.display = "none"
    tourForm.style.display = "block"
    backBtn.style.display = "flex"
}

const onBackBtn = () =>{
    if (screen.width <= 768){
        flightFormMobile.style.display = "block";
    }else{
        flightsForm.style.display = "block"
    }

    tourBtn.style.display = "flex"
    tourForm.style.display = "none"
    backBtn.style.display = "none"
}


tourForm.style.display = "none"

tourBtn.addEventListener("click", onTourBtn)
backBtn.addEventListener("click", onBackBtn)