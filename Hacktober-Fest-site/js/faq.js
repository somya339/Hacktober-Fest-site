// var answer=document.querySelectorAll(".ans");
// var icon=document.querySelectorAll(".fa-plus");

// selectors removed

for (let i = 0; i < answer.length; i++) {
    const element = answer[i];
    icon[i].addEventListener("click",function(){
        if(element.style.display=="none"){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    });   
}

