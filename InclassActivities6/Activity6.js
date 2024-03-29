let button = document.getElementById('game-button');
let clicks = 0;
let level = 1;
let timeout = 500;

function clickAction()
{
    clicks++;

    if(clicks >= 3) 
    {
        clicks = 0;
        level++;
        timeout -= 100;
        alert("Level Up! ");
    }

    if(level == 6)
    {
        alert("You won the game");
    }
    
}

function moveButton()
{
    let button = document.getElementById('game-button');
    let randomX = Math.random()*750+"px";
    let randomY = Math.random()*750+"px";

    button.style.marginTop = randomX;
    button.style.marginLeft = randomY;
}

function overAction()
{
    setTimeout(moveButton, timeout);
}
