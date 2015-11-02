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

    function drawPattern(){
        //1st large
        triangle(0,0,50,100,100,0);
        //1st small
        triangle(20,20,50,80,80,20);
        //2nd large
        triangle(50,100,100,0,150,100);
        //2nd small
        triangle(70,80,100,20,130,80);
        //3rd large
        triangle(50,100,100,200,150,100);
        //3rd small
        triangle(70,120,100,180,130,120);
        //4th large
        triangle(0,200,50,100,100,200);
        //4th small
        triangle(20,180,50,120,80,180);

    }

