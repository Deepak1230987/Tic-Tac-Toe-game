let boxes=document.querySelectorAll(".box");

let reset_btn=document.querySelector("#reset-btn");

let new_btn=document.querySelector("#new-game");
let msg=document.querySelector(".msg");
let wmsg=document.querySelector("#wmsg");
let turnO;
let count=0;
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = [0,1];
  shuffle(arr);
 console.log(arr);
 let turn=arr[0];
 if(turn===0){
    turnO=true;
 }
 else{
    turnO=false;
 }

let winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
          turnO=true;
        }
        box.disabled=true;
        count++;
       let iswinner=checkwinner();
if(count===8 && !iswinner){
 gamedraw();
}
    });

});

const disabledbox=()=>{
for(let box of boxes){
    box.disabled=true;
}
}

const checkwinner=()=>{
    for(let pattern of winpattern){
        //console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val&&pos2val===pos3val){
                 showwinner(pos1val);
             return true;
        }}

    }
} ;

const showwinner=(winner)=>{ 
    wmsg.innerText='Congratulation !!,\nWinner is ${winner}';
    msg.classList.remove("hide");
    disabledbox();
}



const resetgame=()=>{
    turnO=true;
     enableboxes();
    msg.classList.add("hide");

};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const gamedraw=()=>{
    wmsg.innerText='Oops !  Game Draw';
    msg.classList.remove("hide");
    disabledbox();
}

new_btn.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame);
