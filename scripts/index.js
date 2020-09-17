//IMAGES IN BUTTONS
const planeSearchImg = document.getElementById("plane-search-img");
const hotelSearchImg = document.getElementById("hotel-search-img");
const toursSearchImg = document.getElementById("tours-search-img");
const businessSearchImg = document.getElementById("business-search-img");
const trainSearchImg = document.getElementById("train-search-img");

//BUTTONS
const planeSearchBtn = document.getElementById("plane-btn-search")
const hotelSearchBtn = document.getElementById("hotel-btn-search")
const toursSearchBtn = document.getElementById("tours-btn-search")
const businessSearchBtn = document.getElementById("business-btn-search")
const trainSearchBtn = document.getElementById("train-btn-search")




const onHover = (btn) =>{
    if(btn === 1){
        planeSearchImg.src = "../assets/plane-active.svg"
    }else if (btn === 2){
        hotelSearchImg.src = "../assets/bed-active.svg"
    }else if (btn === 3){
        toursSearchImg.src = "../assets/tours-active.svg"
    }else if (btn === 4){
        businessSearchImg.src = "../assets/business-active.svg"
    }else if (btn === 5){
        trainSearchImg.src = "../assets/train-active.svg"
    }
    
}

const onLeave = (btn) =>{
    if(btn === 1){
        planeSearchImg.src = "../assets/plane.svg"
    }else if (btn === 2){
        hotelSearchImg.src = "../assets/bed.svg"
    }else if (btn === 3){
        toursSearchImg.src = "../assets/tours.svg"
    }else if (btn === 4){
        businessSearchImg.src = "../assets/business.svg"
    }else if (btn === 5){
        trainSearchImg.src = "../assets/train.svg"
    }
}



planeSearchBtn.addEventListener("mouseenter", ()=>{
    onHover(1)
})
planeSearchBtn.addEventListener("mouseleave", ()=>{
    onLeave(1)
})


hotelSearchBtn.addEventListener("mouseenter", ()=>{
    onHover(2)
})
hotelSearchBtn.addEventListener("mouseleave", ()=>{
    onLeave(2)
})

toursSearchBtn.addEventListener("mouseenter", ()=>{
    onHover(3)
})
toursSearchBtn.addEventListener("mouseleave", ()=>{
    onLeave(3)
})

businessSearchBtn.addEventListener("mouseenter", ()=>{
    onHover(4)
})
businessSearchBtn.addEventListener("mouseleave", ()=>{
    onLeave(4)
})

trainSearchBtn.addEventListener("mouseenter", ()=>{
    onHover(5)
})
trainSearchBtn.addEventListener("mouseleave", ()=>{
    onLeave(5)
})


console.log("SLK")


// mewtwo-tabs-tabs_list__item mewtwo-tabs-tabs_list__item--count2 mewtwo-tabs-tabs_list__item--flights mewtwo-tabs-tabs_list__item--active



