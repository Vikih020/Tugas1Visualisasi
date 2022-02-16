let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  y = 94;
  j = 0;


}

function draw() {
  // put drawing code here
  background(200)
  line(200,0,200,200)

  //Atas Pala
  fill(255,0,0)
  line(100,48,100,60)
  ellipse(100,48,8,9)

  //Telinga
  fill(255,0,0)
  rect(120,65,5,6)
  rect(73,65,5,6)

  //tangan kiri
  fill(255,255,255)
  line(73,85,35,117)
  line(70,100,45,125)
  ellipse(39,122,10,13)
  ellipse(35,125,10,13)
  ellipse(73,94,15,20)

  //tangan kanan
  fill(255,255,255)
  ellipse(125,94,15,20)
  line(130,100,155,125)
  line(132,90,162,120)
  ellipse(155,120,10,13)
  ellipse(160,123,10,13)

  //Badan
  fill(255,0,0)
  rect(75,90,50,60)
  rect(85,105,30,30)
  rect(90,110,3,3)
  rect(98,110,3,3)
  rect(107,110,3,3)
  ellipse(91,129,4,4)
  ellipse(99,129,4,4)
  ellipse(108,129,4,4)
  ellipse(81,95,4,4)
  ellipse(119,95,4,4)
  ellipse(81,144,4,4)
  ellipse(119,144,4,4)
  
  //Leher
  fill(255,255,255)
  rect(90,80,20,10)

  //Pala
  fill(192,192,192)
  rect(80,60,40,20)

  //mata
  fill(255,255,255)
  rect(90,65,4,4)
  rect(105,65,4,4)

  //hidung
  fill(192,192,192)
  triangle(100,68,95,72,105,72)

  //mulut
  fill(255,255,255)
  arc(99,74,15,5, radians(0), radians(180))

  //Kakik
  rect(84,150,10,20)
  rect(107,150,10,20)

  //Jari
  arc(89,180,20,20,radians(180),radians(360))
  arc(112,180,20,20,radians(180),radians(360))

  //kedua ni bos
  var y = 100 + 20 * Math.sin(PI/10*j)
  j += 1
  
  //Atas Pala
  fill(255,0,0)
  line(300,48,300,60)
  ellipse(300,48,8,9)

  //Telinga
  fill(255,0,0)
  rect(320,65,5,6)
  rect(273,65,5,6)

  //tangan kiri
  fill(255,255,255)
  line(273,85,235,y)
  line(270,100,245,y)
  ellipse(239,y,10,13)
  ellipse(235,y,10,13)
  ellipse(273,94,15,20)

  //tangan kanan
  fill(255,255,255)
  ellipse(325,94,15,20)
  line(330,100,355,y)
  line(332,90,362,y)
  ellipse(355,y,10,13)
  ellipse(360,y,10,13)

  //Badan
  fill(255,0,0)
  rect(275,90,50,60)
  rect(285,105,30,30)
  rect(290,110,3,3)
  rect(298,110,3,3)
  rect(307,110,3,3)
  ellipse(291,129,4,4)
  ellipse(299,129,4,4)
  ellipse(308,129,4,4)
  ellipse(281,95,4,4)
  ellipse(319,95,4,4)
  ellipse(281,144,4,4)
  ellipse(319,144,4,4)
  
  //Leher
  fill(255,255,255)
  rect(290,80,20,10)

  //Pala
  fill(192,192,192)
  rect(280,60,40,20)

  //mata
  fill(255,255,255)
  rect(290,65,4,4)
  rect(305,65,4,4)

  //hidung
  fill(192,192,192)
  triangle(300,68,295,72,305,72)

  //mulut
  fill(255,255,255)
  arc(299,74,15,5, radians(0), radians(180))

  //Kakik
  rect(284,150,10,20)
  rect(307,150,10,20)

  //Jari
  arc(289,180,20,20,radians(180),radians(360))
  arc(312,180,20,20,radians(180),radians(360))
  
}