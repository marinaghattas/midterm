function setup() {
createCanvas(windowWidth, windowHeight);
    var x = -50;
    var y = 0;
   var winWidth = 1200;
    for(var i=0; i<100; i++){
        // console.log(i);
        drawPattern(x,y);

        //increment our x
        x += 100;
        //chev=ck if x is past the drid width
        if(x > winWidth){
            //set X back to the beginning
            x=-50;
            //move y down
            y += 200;
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
        triangle(startX+20,startY,startX+50,startY+60,startX+80,startY);
        //2nd large
        fill('AntiqueWhite')
triangle(startX+50,startY+100,startX+100,startY,startX+150,startY+100);
        //2nd small
        fill('red')
        triangle(startX+70,startY+100,startX+100,startY+40,startX+130,startY+100);
        //3rd large
        fill('BurlyWood')
        triangle(startX+50,startY+100,startX+100,startY+200,startX+150,startY+100);
        //3rd small
        fill('green')
        triangle(startX+70,startY+100,startX+100,startY+160,startX+130,startY+100);
        //4th large
        fill('AntiqueWhite')
        triangle(startX,startY+200,startX+50,startY+100,startX+100,startY+200);
        //4th small
        fill('red')
        triangle(startX+20,startY+200,startX+50,startY+140,startX+80,startY+200);

    }

