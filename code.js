//Reset Button : Refreshes page
let reset_btn = document.querySelector('button');
let refresh_page =()=>{
    history.go(0);
};
reset_btn.addEventListener('click',refresh_page);

//Adds The x or o in the div
let stat='x';
let itemOnScreen=0;
let box = document.querySelectorAll('.box');
console.log(box);
function addItem(idx){
    if(box[idx].textContent==='✖️'||box[idx].textContent==='⭕'){
        console.log('This is against the rules');
    } else {
        if(stat==='x'){
            box[idx].textContent='✖️';
            stat='o';
            itemOnScreen++;
            console.log(itemOnScreen);
            if(itemOnScreen>=4){
                wincheck();
            }
        } else if(stat==='o'){
            box[idx].textContent='⭕';
            stat='x';
            itemOnScreen++;
            console.log(itemOnScreen);
            if(itemOnScreen>=4){
                wincheck();
            }
        }
    }
}

//Checks the win condition
function wincheck(){
    for(let j=0;j<3;j++){
        if(box[(3*j)].textContent==box[(3*j)+1].textContent && box[(3*j)].textContent==box[(3*j)+2].textContent){ //Row checks
            console.log(`${box[(3*j)].textContent} has won`);
            break;
        } else if(box[j].textContent==box[3+(j)].textContent && box[j].textContent==box[6+(j)].textContent){ //Column checks
            console.log(`${box[j].textContent} has won`);
            break;
        } else if((box[0].textContent==box[4].textContent && box[0].textContent==box[8].textContent) || (box[2].textContent==box[4].textContent && box[2].textContent==box[6].textContent)){ //diagonal Checks
            console.log(`${box[4].textContent} has won`);
            break;
        } else {
            console.log('no one has won yet');
        }
    }
}



