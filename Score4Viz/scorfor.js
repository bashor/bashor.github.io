//  written by Eric Ingamells
//  December, 2011

paper = "";
Grid = new Array();
PegArr = new Array(1,5,9,13,2,6,10,14,3,7,11,15,4,8,12,16);
Turn = true;
Player = new Array();
MoveCount = 0;
RedCircles = new Array();
PegNums = new Array();
WhosTurn = "";
White = "White"
Black = "Black"
PlayerName = ""

function Start(){
  Player[0] = new Array();
  Player[0][1] = 0;
  Player[1] = new Array();
  Player[1][1] = 0;
  Player[2] = new Array();
  Player[2][1] = 0;
  SetupField();
}

function SetupField(){
  if (document.getElementById("firstmove").value == "1"){
    Turn = true;
  } else if (document.getElementById("firstmove").value == "0"){
    Turn = false;
  }
  if (paper != ""){
    paper.remove();
  }
  MoveCount = 0;
  paper = new Raphael(document.getElementById("field"), 850, 550);
  paper.text(230, 520, White).attr({"font-size":20});
  paper.text(430, 520, Black).attr({"font-size":20});
  paper.text(630, 520, "Kat").attr({"font-size":20});
  Player[0][0] = paper.text(280, 520, ""+Player[0][1]).attr({"font-size":20});
  Player[1][0] = paper.text(480, 520, ""+Player[1][1]).attr({"font-size":20});
  Player[2][0] = paper.text(670, 520, ""+Player[2][1]).attr({"font-size":20});
  for (i=0;i<5;i++){
    Grid[i] = new Array();
  for (k=0;k<5;k++){
      Grid[i][k] = "";
      Grid[i][k] = new Array("","","","");
  } }
  for (d=1;d<17;d++){
    Start = GetStart(d);
    paper.path("M"+Start[0]+","+ (Start[1]-15) +"v200");
    PegNums[d] = "";
    PegNums[d+17] = "";
  }
  ShowNumbers();
  // PlayerName = Black;
  // if (Turn){
  //   PlayerName = White;
  // }
  WhosTurn = paper.text(110, 20, "Current Player: "+PlayerName).attr({"font-size":18});
}

function GetStart(Peg){
  Start = new Array();
  Start[0] = (((Peg-1)%4) * 200) + (50*(parseInt((Peg-1)/4)+1));
  Start[1] = (parseInt((Peg-1)/4) * 50) + 115;
  return Start;
}

function DropDown(Peg, C, Lvl){
  if (C){
    Color = '#DCBE96';
  } else{
    Color = '#191919';
  }
  Stop = ((4-Lvl)*50)+20;
  Start = GetStart(Peg);
  Beads(Start[0],Start[1],C).animate({"cx": Start[0],"cy": (Start[1]+Stop)},(1250-(250*Lvl)));
}

function GetGrid(Peg){
  X = (Peg-1)%4;
  Y = parseInt((Peg-1)/4);
  return Array(X, Y);
}

function buttonClick(e) {
  if (!document.all) {
    // alert(e.pageX);alert(e.pageY)
    posX = e.pageX - document.getElementById("field").offsetLeft + 3;
    posY = e.pageY - document.getElementById("field").offsetTop;
  } else {
    posX = event.x + document.body.scrollLeft + 2;
    posY = event.y + document.body.scrollTop;
  }
  TheGrid = GetGrid(PegArr[parseInt((posX-25)/50)]);
  Lvl = 0;
  for (i=0;i < 4;i++){
    if (Grid[TheGrid[0]][TheGrid[1]][i] == ""){
      Lvl = i+1;
      break;
  } }
  Start = GetStart(PegArr[parseInt((posX-25)/50)]);
  if (MoveCount > 64){
    Lvl = 0;
  }
  if ((posY < Start[1]-40) || (posY > Start[1]+190) ){
    Lvl = 0;
  }
  if (Lvl != 0){
    if (Turn){
      Grid[TheGrid[0]][TheGrid[1]][Lvl-1] = "W";
    } else {
      Grid[TheGrid[0]][TheGrid[1]][Lvl-1] = "B";
    }
    DropDown(PegArr[parseInt((posX-25)/50)], Turn,Lvl);
    Turn = !Turn;
    // if (Turn){
    //   PlayerName = White;
    // } else {
    //   PlayerName = Black;
    // }
    WhosTurn.attr({text: "Current Player: "+PlayerName});
    MoveCount++;
    CheckIt();
} }

//  written by Eric Ingamells
//  December, 2011

function CheckIt(){
  Winner = new Array("","");
  for (i=1;i<17;i++){
    TheGrid = GetGrid(i);
    if ((Grid[TheGrid[0]][TheGrid[1]][0] == Grid[TheGrid[0]][TheGrid[1]][1]) && (Grid[TheGrid[0]][TheGrid[1]][1] == Grid[TheGrid[0]][TheGrid[1]][2]) && (Grid[TheGrid[0]][TheGrid[1]][2] == Grid[TheGrid[0]][TheGrid[1]][3]) && (Grid[TheGrid[0]][TheGrid[1]][3] != "")){
      Winner[0] = Grid[TheGrid[0]][TheGrid[1]][0];
      Winner[1] = "V:" + i + "::";
  } }
  if (Winner[0] == ""){
    for (i=0;i<4;i++){
      for (k=0;k<4;k++){
        if ((Grid[i][0][k] == Grid[i][1][k]) && (Grid[i][1][k] == Grid[i][2][k]) && (Grid[i][2][k] == Grid[i][3][k]) && (Grid[i][3][k] != "")){
          Winner[0] = Grid[i][0][k];
          Winner[1] = "AH:" + i +"::"+ k;
      } }
      if ((Grid[i][0][0] == Grid[i][1][1]) && (Grid[i][1][1] == Grid[i][2][2]) && (Grid[i][2][2] == Grid[i][3][3]) && (Grid[i][3][3] != "")){
        Winner[0] = Grid[i][0][0];
        Winner[1] = "AD1:" + i +"::";
      }
      if ((Grid[i][0][3] == Grid[i][1][2]) && (Grid[i][1][2] == Grid[i][2][1]) && (Grid[i][2][1] == Grid[i][3][0]) && (Grid[i][3][0] != "")){
        Winner[0] = Grid[i][0][3];
        Winner[1] = "AD2:" + i +"::";
  } } }
  if (Winner[0] == ""){
    for (i=0;i<4;i++){
      for (k=0;k<4;k++){
        if ((Grid[0][i][k] == Grid[1][i][k]) && (Grid[1][i][k] == Grid[2][i][k]) && (Grid[2][i][k] == Grid[3][i][k]) && (Grid[3][i][k] != "")){
          Winner[0] = Grid[0][i][k];
          Winner[1] = "HH:" + i +"::"+ k;
      } }
      if ((Grid[0][i][0] == Grid[1][i][1]) && (Grid[1][i][1] == Grid[2][i][2]) && (Grid[2][i][2] == Grid[3][i][3]) && (Grid[3][i][3] != "")){
        Winner[0] = Grid[0][i][0];
        Winner[1] = "HD1:" + i +"::";
      }
      if ((Grid[0][i][3] == Grid[1][i][2]) && (Grid[1][i][2] == Grid[2][i][1]) && (Grid[2][i][1] == Grid[3][i][0]) && (Grid[3][i][0] != "")){
        Winner[0] = Grid[0][i][3];
        Winner[1] = "HD2:" + i +"::";
  } } }
  if (Winner[0] == ""){
    for (k=0;k<4;k++){
      if ((Grid[0][0][k] == Grid[1][1][k]) && (Grid[1][1][k] == Grid[2][2][k]) && (Grid[2][2][k] == Grid[3][3][k]) && (Grid[3][3][k] != "")){
        Winner[0] = Grid[0][0][k];
        Winner[1] = "DH:::"+ k;
    } }
    if ((Grid[0][0][0] == Grid[1][1][1]) && (Grid[1][1][1] == Grid[2][2][2]) && (Grid[2][2][2] == Grid[3][3][3]) && (Grid[3][3][3] != "")){
      Winner[0] = Grid[0][0][0];
      Winner[1] = "DD1:::";
    }
    if ((Grid[0][0][3] == Grid[1][1][2]) && (Grid[1][1][2] == Grid[2][2][1]) && (Grid[2][2][1] == Grid[3][3][0]) && (Grid[3][3][0] != "")){
      Winner[0] = Grid[0][0][3];
      Winner[1] = "DD2:::";
  } }
  if (Winner[0] == ""){
    i = 4;
    for (k=0;k<4;k++){
      if ((Grid[0][3][k] == Grid[1][2][k]) && (Grid[1][2][k] == Grid[2][1][k]) && (Grid[2][1][k] == Grid[3][0][k]) && (Grid[3][0][k] != "")){
        Winner[0] = Grid[0][3][k];
        Winner[1] = "TH:::"+ k;
    } } 
    if ((Grid[0][3][0] == Grid[1][2][1]) && (Grid[1][2][1] == Grid[2][1][2]) && (Grid[2][1][2] == Grid[3][0][3]) && (Grid[3][0][3] != "")){
      Winner[0] = Grid[0][3][0];
      Winner[1] = "TD1:::";
      }
    if ((Grid[0][3][3] == Grid[1][2][2]) && (Grid[1][2][2] == Grid[2][1][1]) && (Grid[2][1][1] == Grid[3][0][0]) && (Grid[3][0][0] != "")){
      Winner[0] = Grid[0][3][3];
      Winner[1] = "TD2:::";
  } }
  if (MoveCount == 64){
    Winner[0] = "K";
  }
  if (Winner[0] != ""){
    if (Winner[0] == "W"){
      Player[0][1]++;
      Player[0][0].attr({text: ""+Player[0][1]});
      WhosTurn.attr({text: "Winner: " + PlayerName});
    } else if (Winner[0] == "B"){
      Player[1][1]++;
      Player[1][0].attr({text: ""+Player[1][1]});
      WhosTurn.attr({text: "Winner: " + PlayerName});
    } else if (Winner[0] == "K"){
      Player[2][1]++;
      Player[2][0].attr({text: ""+Player[2][1]});
      WhosTurn.attr({text: "Winner: Tie"});
    }
    ShowWin(Winner[1]);
} }

function ShowWin(Winner){
  Peg = 0;
  Lvl = 0;
  increment = 1;
  Winner = Winner.split(":");
  if (Winner[0] == "V"){
    Peg = Winner[1];
	increment = 0;
  } else if (Winner[0].substr(0,1) == "A"){
    Peg = (Winner[1]*1)+1;
	increment = 4;
  } else if (Winner[0].substr(0,1) == "H"){
    Peg = ((Winner[1]*1)*4)+1;
	increment = 1;
  } else if (Winner[0].substr(0,1) == "D"){
    Peg = 1;
	increment = 5;
  } else if (Winner[0].substr(0,1) == "T"){
    Peg = 13;
	increment = -3;
  }
  Peg = Peg * 1;
  for (i=0;i<4;i++){
    if (Winner[0] == "V"){
      Lvl = i + 1;
    } else if (Winner[0].substr(1,1) == "H") {
      Lvl = (Winner[3]*1)+1;
    } else if (Winner[0].substr(1,2) == "D1") {
      Lvl = i+1;
    } else if (Winner[0].substr(1,2) == "D2") {
      Lvl = 4-i;
    }
    Start = GetStart(Peg);
	  Peg += increment;
    RedCircles[i] = paper.add([{type: "circle",cx: Start[0],cy: (Start[1]+((4-Lvl)*50)+19),r: 16,stroke: "#FF0000","stroke-width":3}]);
  }
  MoveCount = 65;
}

function ShowNumbers(){
  Where = document.getElementById("numbers").value;
  for (k=1;k<17;k++){
    Start = GetStart(k);
    if ((Where == "0") || (Where == "2")){
	  if (PegNums[k]){
	    PegNums[k].attr({text: ""+k});
	  } else {
	    PegNums[k] = paper.text(Start[0], Start[1]-30, ""+k).attr({"font-size":18});
	  }
	} else {
	  if (PegNums[k]){
        PegNums[k].remove();
        PegNums[k] = "";
    } }
    if ((Where == "1") || (Where == "2")){
	  if (PegNums[k+17]){
	    PegNums[k+17].attr({text: ""+k});
	  } else {
	    PegNums[k+17] = paper.text(Start[0], Start[1]+200, ""+k).attr({"font-size":18});
	  }
	} else {
	  if (PegNums[k+17]){
        PegNums[k+17].remove();
		PegNums[k+17] = "";
} } } }

function Beads(X,Y,C){
  if (C){
    Color = '#DCBE96';
    Color2 = '#735F5F';
  } else{
    Color = '#191919';
    Color2 = '#5F5F5F';
  }
  return paper.add([{
      type: "circle",cx: X,cy: Y,r: 15,fill: Color
    },{
      type: "ellipse",cx: X,cy: Y,rx: 10,ry: 15,stroke: Color2
    },{
      type: "ellipse",cx: X,cy: Y,rx: 6,ry: 15,stroke: Color2
    },{
      type: "ellipse",cx: X,cy: Y,rx: 2,ry: 15,stroke: Color2
  } ]);
}
//  written by Eric Ingamells
//  December, 2011
