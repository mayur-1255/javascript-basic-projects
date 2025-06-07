let msg = document.querySelector("h5")

let btn = document.querySelector("#add")
let check = 0


btn.addEventListener("click",function(){
    if(check == 0){
        msg.innerHTML = "Friends"
        msg.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }
    else{
        msg.innerHTML = "Stranger"
        msg.style.color = "red"
         btn.innerHTML = "Add Friend"
        check = 0
    }
    
})
