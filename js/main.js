function setup() {
createCanvas(windowWidth, windowHeight);
    var x = 40;
    var y = 40;
   var gridWidth = 900;
    for(var i=0; i<100; i++){
        // console.log(i);
        drawPattern(x,y);

        //increment our x
        x += 170;
        //chev=ck if x is past the drid width
        if(x > gridWidth){
            //set X back to the beginning
            x=40;
            //move y down
            y += 300;
        } // end if
    } //end for loop

} //end setup

    function draw(){
}

    function drawPattern(startX,startY){
        //1st large
        fill('BurlyWood')
        triangle(startX,startY,startX+50,startY+100,startX+100,startY);
        //1st small
        fill('green')
        triangle(startX+20,startY+20,startX+50,startY+80,startX+80,startY+20);
        //2nd large
        fill('AntiqueWhite')
        triangle(startX+50,startY+100,startX+100,startY,startX+150,startY+100);
        //2nd small
        fill('red')
        triangle(startX+70,startY+80,startX+100,startY+20,startX+130,startY+80);
        //3rd large
        fill('BurlyWood')
        triangle(startX+50,startY+100,startX+100,startY+200,startX+150,startY+100);
        //3rd small
        fill('green')
        triangle(startX+70,startY+120,startX+100,startY+180,startX+130,startY+120);
        //4th large
        fill('AntiqueWhite')
        triangle(startX,startY+200,startY+50,startX+100,startY+100,startY+200);
        //4th small
        fill('red')
        triangle(startX+20,startY+180,startX+50,startY+120,startX+80,startY+180);

    }

