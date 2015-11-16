//globals
var myArray;

function setup() {
createCanvas(windowWidth, windowHeight);
    myArray = [];
     drawPattern();

    }



     //console.log('myArray',myArray);
 //end setup


    function drawPattern(startX,startY){

        var x = -50;
        var y = 0;
        var winWidth = 1200;

        for(var i=0; i<100; i++){
        // console.log(i);
//        drawPattern(x,y);

            //first two large triangle
        var red = new RedTriangle(x,y);
        red.drawTriangle();
        myArray.push(red);
        var green =new GreenTriangle(x,y);
        green.drawTriangle();
        myArray.push( green);
            //second two large triangle
        red = new RedTriangle(x-50,y+100);
        red.drawTriangle();
        myArray.push(red);
        green =new GreenTriangle(x+50,y+100);
        green.drawTriangle();
        myArray.push( green);
        //increment our x
        x += 100;
        //chev=ck if x is past the drid width
        if(x > winWidth){
            //set X back to the beginning
            x=-50;
            //move y down
            y += 200;
        } // end if

    }
    }



//        //3rd large
//        fill('BurlyWood')
//        triangle(startX+50,startY+100,startX+100,startY+200,startX+150,startY+100);
//        //3rd small
//        fill('green')
//        triangle(startX+70,startY+100,startX+100,startY+160,startX+130,startY+100);
//
//
//        //  ==============================>>
//
//        //4th large
//        fill('AntiqueWhite')
//        triangle(startX,startY+200,startX+50,startY+100,startX+100,startY+200);
//        //4th small
//        fill('red')
//        triangle(startX+20,startY+200,startX+50,startY+140,startX+80,startY+200);



function mousePressed() {
    console.log('mousepressed');
//    console.log('myArray',myArray);
    var d;
   for(var i=0; i < myArray.length; i++){

d = dist(mouseX,mouseY,myArray[i].x,myArray[i].y); //
//       console.log("distance",d);
       if(d < myArray[i].r){
           console.log('clicked on');
           myArray[i].changeColor();

}
   }
}


function GreenTriangle(startX,startY){
    //create x and y properties (variables)
    this.x =startX ;
    this.y =startY ;
    //set the center of the triangles
    this.cX = startX+45;
    this.cY = startY+20;
    this.r = 50;
    this.fillOuter = 'burlywood' ;
    this.fillInner = 'green';
    this.changeInner = 'lightgreen';

    //method: draw the triangle
    this.drawTriangle = function(){
        //1st large
        fill(this.fillOuter)
        triangle(startX,startY,startX+50,startY+100,startX+100,startY);
        //1st small
        fill(this.fillInner)
        triangle(startX+20,startY,startX+50,startY+60,startX+80,startY);

        //draw hit area to visulze
      //  ellipse(this.cX,this.cY,60,60);
    }

    this.changeColor = function(){
        this.fillInner = this.changeInner;
        this.drawTriangle();
    }
}//end greentriangle

function RedTriangle(startX,startY){
    //create x and y properties (variables)
    this.x =startX+50 ;
    this.y =startY+100 ;
    //set the center of the triangles
    this.cX = startX+45+55;
    this.cY = startY+20+55;
    this.r= 50;
    this.fillOuter = 'AntiqueWhite' ;
    this.fillInner = 'red';
    this.changeInner = 'pink';
    //method: draw the triangle
    this.drawTriangle = function(){

        //2nd large
        fill(this.fillOuter)
        triangle(startX+50,startY+100,startX+100,startY,startX+150,startY+100);
        //2nd small
        fill(this.fillInner)
        triangle(startX+70,startY+100,startX+100,startY+40,startX+130,startY+100);
         //draw hit area to visulze
      //  ellipse(this.cX,this.cY,60,60);

    }

    this.changeColor = function(){
        this.fillInner = this.changeInner;
        this.drawTriangle();
    }
}//end redtriangle
