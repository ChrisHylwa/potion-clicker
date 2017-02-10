function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var pots = 0;

function potionClick(number){
    pots = pots + number;
    document.getElementById("pots").innerHTML = pots;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(pots >= cursorCost){                                      //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	pots = pots - cursorCost;                                //removes the pots spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('pots').innerHTML = pots;        //updates the number of pots for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	potionClick(cursors);
}, 1000);
