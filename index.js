"use-strict"

const body = document.querySelector("body")
const bg =document.querySelector(".background")
const colorModeBtn = document.querySelector(".mode-icon")
const boxes =document.querySelectorAll(".box")
const checks = document.querySelectorAll(".circle")
const checkSigns = document.querySelectorAll(".check-sign")
const activities = document.querySelectorAll(".activity")
const option = document.querySelector(".option")
const allActsBtn = document.querySelector(".all-act") 
const activeActsBtn = document.querySelector(".active-act")
const completedActsBtn = document.querySelector(".completed-act")
const filters = document.querySelectorAll(".filter > p")

console.log(body.style.backgroundColor)

const changeMode = () =>{
    console.log("Change Mode")
    boxes.forEach(box => box.classList.toggle("dark-mode-box"))
    checks.forEach(ele => ele.classList.toggle("dark-circle"))
    activities.forEach(ele => ele.classList.toggle("dark-activity"))
    colorModeBtn.classList.toggle("dark-mode-icon")
    option.classList.toggle("dark-option")

    if(bg.classList.contains("background")){
        bg.classList.add("dark-mode-background")
        bg.classList.remove("background")
        body.style.cssText = "background-color: hsl(235, 21%, 11%);"
    }else{
        bg.classList.remove("dark-mode.background")
        bg.classList.add("background")
        body.style.backgroundColor="#fff"
    }
}

colorModeBtn.addEventListener("click", changeMode)


for(let i = 0 ; i < checks.length ; i++){
    checks[i].addEventListener("click", function(){
        if(!checks[i].classList.contains("check")){
            checkSigns[i].style.visibility = "visible"
        }else{
            checkSigns[i].style.visibility = "hidden"
        }
        checks[i].classList.toggle("check")
        activities[i-1].classList.toggle("done")
})}



const allActivities = () =>{
    allActsBtn.classList.toggle("active")
    activeActsBtn.classList.remove("active")
    completedActsBtn.classList.remove("active")
}

const activeActivities = () =>{
    activeActsBtn.classList.toggle("active")
    allActsBtn.classList.remove("active")
    completedActsBtn.classList.remove("active")
}

const completedActivities = () =>{
    completedActsBtn.classList.toggle("active")
    activeActsBtn.classList.remove("active")
    allActsBtn.classList.remove("active")
}

allActsBtn.addEventListener("click", allActivities)
activeActsBtn.addEventListener("click", activeActivities)
completedActsBtn.addEventListener("click", completedActivities)