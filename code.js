//Reset Button : Refreshes page
let reset_btn = document.querySelector('.reset');
let refresh_page =()=>{
    history.go(0);
};
reset_btn.addEventListener('click',refresh_page);

//Next Round button
let nextRoundBtn=document.querySelector('.next-round');
let nextRound = () =>{
    box.forEach((val)=>{
        val.textContent='';
    })
    stat='x';
    itemOnScreen=0;
    win_cond='false';
    whose_turn(stat,win_cond);
};
nextRoundBtn.addEventListener('click',nextRound);

//Adds The x or o in the div and checks the other conditions
let stat='x';
let itemOnScreen=0;
let box = document.querySelectorAll('.box');
console.log(box);
function addItem(idx){
    if(box[idx].textContent==='✖️'||box[idx].textContent==='⭕'){
        console.log('This is against the rules');
        return 0;
    } else {
        if(stat==='x'){
            box[idx].textContent='✖️';
            stat='o';
        } else if(stat==='o'){
            box[idx].textContent='⭕';
            stat='x';
        }
    }
    itemOnScreen++;
    let win_cond;
    if(itemOnScreen>=5 && itemOnScreen<=9){
        win_cond=wincheck();
    }
    if(itemOnScreen==9 && win_cond=='false'){
        return console.log('It was a draw');
    }
    whose_turn(stat,win_cond);
}

//Checks the win condition
function wincheck(){
    for(let j=0;j<3;j++){
        if(box[(3*j)].textContent===box[(3*j)+1].textContent && box[(3*j)].textContent===box[(3*j)+2].textContent && box[(3*j)].textContent!==''){ //Row checks
            console.log(`${box[(3*j)].textContent} has won`);
            return 'true';
        } else if(box[j].textContent===box[3+(j)].textContent && box[j].textContent===box[6+(j)].textContent && box[j].textContent!==''){ //Column checks
            console.log(`${box[j].textContent} has won`);
            return 'true';
        } else if(((box[0].textContent===box[4].textContent && box[0].textContent===box[8].textContent) || (box[2].textContent===box[4].textContent && box[2].textContent===box[6].textContent)) && box[4].textContent!==''){ //diagonal Checks
            console.log(`${box[4].textContent} has won`);
            return 'true';
        }
    }
    return 'false';
}

//Returns whose turn it is
let x_turn = document.getElementById('x-turn');
let o_turn = document.getElementById('o-turn');
function whose_turn(status,win_cond){
    if(win_cond=='true'){
        score(status);
    } else {
        if(status=='x'){
            x_turn.style.backgroundColor = 'rgba(240, 128, 128, 0.753)';
            x_turn.style.border = '1px solid red';
            x_turn.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            o_turn.style.backgroundColor='transparent';
            o_turn.style.border='none';
            o_turn.style.boxShadow='none';
        } else if(status=='o'){
            o_turn.style.backgroundColor = 'rgba(240, 128, 128, 0.753)';
            o_turn.style.border = '1px solid red';
            o_turn.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            x_turn.style.backgroundColor='transparent';
            x_turn.style.border='none';
            x_turn.style.boxShadow='none';
        }
    }
}

//Counts the score
let x_wins = 0;
let o_wins = 0;
let x_score_disp = document.getElementById('x-wins');
let o_score_disp = document.getElementById('o-wins');
x_score_disp.textContent = `0`;
o_score_disp.textContent = `0`;
function score(status){
    if(status==='x'){
        o_wins++;
    } else {
        x_wins++;
    }
    x_score_disp.textContent = `${x_wins}`;
    o_score_disp.textContent = `${o_wins}`;
}




