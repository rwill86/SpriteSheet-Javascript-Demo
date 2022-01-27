$(document).ready(function(e){
     var canvas;
     var context; 
	 var width;
     var height;
	 var x;
	 var y; 
	 var app = "Demo";
	 var tickCount = 0;
	 var timer = 0;
	 var run = false;
	 var start = true;
	 var menu = false;
	 var pause = false;
	 var won = false;
	 var sprite = null;
	 var introCount = 60;
	 var tileSize = 8;
     var sprite = 0;
     var level = 1;
     var curLevel = 0;	
	 var maxlevel = 6;
     //Start Board
	 tile = [        						
		         [4,5,4,5,4,5,4,5,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2, ], //0
                 [6,7,6,7,6,7,6,7,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3, ],
                 [4,5,4,5,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [6,7,6,7,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4,5,4,5,4,5, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,6,7,6,7,6,7, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,4,5, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,6,7, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,8,9,8,9, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,10,11,10,11, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,9,8,9,8,9,8,9,8,9, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,10,11,10,11,10,11,10,11, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ],     
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], //0
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ],  
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ]  
	 ];
	 //Player
	 var xm = 30;
	 var ym = 30;
	 var xp = 5;
	 var yp = 5; 
	 var ysize = 1;
	 var xsize = 1;
	 var left = false;                           
	 var right = false;                          
	 var down = false;
	 var up = false; 
	 var animeCount = 0;
	 //Lost
	 function lost(){
		 run = false;
		 start = true;
	 }
	 //Anime
	 function anime(){
		 if(animeCount < 1){
			 animeCount = animeCount + 1;
		 } else{
			  animeCount = 0;
		 }
	 }
	 //Run
	 function running(){	 
         if(run){
			 if(!pause){
                 if(menu){
				     menuGUI();
			     } else{
		             tickCount++;					 
                     render();
					 tick();
			     }
			 } else{
				 pauseGUI();
			 }
		 } 
		 requestAnimFrame(function(){
			 running();
		 });
	 }
	 //Change Level
     function changeLevel(){
		 if(curLevel == 0){
			 tile = [        						
				 [4,5,4,5,4,5,4,5,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2, ], //0
                 [6,7,6,7,6,7,6,7,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3, ],
                 [4,5,4,5,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [6,7,6,7,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4,5,4,5,4,5, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,6,7,6,7,6,7, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,4,5, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,6,7, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,8,9,8,9, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,10,11,10,11, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,9,8,9,8,9,8,9,8,9, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,10,11,10,11,10,11,10,11, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ],     
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], //0
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], 
                 [1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], 
                 [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ],
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ],  
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ]  	 
	         ];
			 xm = 30;
	         ym = 30;
		 } 

		 if(curLevel == 1){
			 tile = [        						
		         [2,2,2,2,2,2,4,5,1,1,1,1,1,1,1,1,1,1,1,1,8,9,8,9,8,9,8,9,8,9, ], //0
                 [3,3,3,3,3,3,6,7,1,1,1,1,1,1,1,1,1,1,1,1,10,11,10,11,10,11,10,11,10,11, ], //1
                 [4,5,4,5,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ], //2
                 [6,7,6,7,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3, ], //3
                 [4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,4,5,4,5,4,5, ], //4
                 [6,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,6,7,6,7,6,7, ], //5
                 [4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,4,5, ], //6
                 [6,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,6,7, ], //7
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,5,4,5,4,5,4,5,8,9,8,9, ], //8
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,7,6,7,6,7,6,7,10,11,10,11, ], //9
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,9,8,9,8,9,8,9,8,9, ], //10
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,10,11,10,11,10,11,10,11, ], //11
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], //12
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], //13  
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1, ], //14 
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1, ], //15      
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1, ], //0
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1, ], //1
                 [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1, ], //2
                 [1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1, ], //3
                 [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1, ], //4
                 [1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1, ], //5
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1, ], //6
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1, ], //7
                 [1,1,1,1,1,1,1,1,1,1,1,1,12,13,12,13,12,13,2,2,1,1,1,1,1,1,1,1,1,1, ], //8
                 [1,1,1,1,1,1,1,1,1,1,1,1,13,12,13,12,13,12,3,3,1,1,1,1,1,1,1,1,1,1, ], //9
                 [1,1,1,1,1,1,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,1,1,1,1,1,1,1,1, ], //10
                 [1,1,1,1,1,1,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,1,1,1,1,1,1,1,1, ], //11
                 [12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,1,1,1,1,1,1,1,1,1,1, ], //12
                 [13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,13,12,1,1,1,1,1,1,1,1,1,1, ], //13  
                 [12,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ], //14 
                 [13,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ] //15      
	         ];
			 xm = 30;
	         ym = 30;
		 }
	 }	
     //Reset Player
     function resetplayer(){
         xm = 30;
	     ym = 30;
	     xp = 5;
	     yp = 5;
	     left = false;                           
	     right = false;                          
	     down = false;
	     up = false; 
     }	 
	 
     //Draw Player
     function drawplayer(sprite, xo, yo){
		 context.fillStyle = "";
		 context.fillRect((xp * tileSize) + xo, (yp * tileSize) + yo, tileSize, tileSize);

		 if(animeCount == 0){
		     renderSprite(sprite, (0 * 8), (2 * 8), 8, 8, (xp * tileSize) + xo, (yp * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (1 * 8), (2 * 8), 8, 8, ((xp + 1) * tileSize) + xo, (yp * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (0 * 8), (3 * 8), 8, 8, ((xp) * tileSize) + xo, ((yp + 1) * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (1 * 8), (3 * 8), 8, 8, ((xp + 1) * tileSize) + xo, ((yp + 1) * tileSize) + yo, tileSize, tileSize);
		 }
		 
		 if(animeCount == 1){
			 renderSprite(sprite, (2 * 8), (2 * 8), 8, 8, (xp * tileSize) + xo, (yp * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (3 * 8), (2 * 8), 8, 8, ((xp + 1) * tileSize) + xo, (yp * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (2 * 8), (3 * 8), 8, 8, ((xp) * tileSize) + xo, ((yp + 1) * tileSize) + yo, tileSize, tileSize);
		     renderSprite(sprite, (3 * 8), (3 * 8), 8, 8, ((xp + 1) * tileSize) + xo, ((yp + 1) * tileSize) + yo, tileSize, tileSize);
		 }
	 }
	 //Clear
	 function clearScreen(){
		 context.clearRect(0, 0, width, height);
	 }
     //Menu GUI
     function menuGUI(){
		 context.rect(x, y, width, height);
	     context.fillStyle = '#F5F5F5';
	     context.fill();
		 context.fillStyle = '#000000';
		 context.font = "14px sans-serif";
		 context.fillText("Controls", (width / 2) - 16, (height / 2));
		 context.fillText("WASD", (width / 2) - 15, (height / 2) + 30); 
	 }
	 //Won GUI
     function wonGUI(){
		 context.rect(x, y, width, height);
	     context.fillStyle = '#F5F5F5';
	     context.fill();
		 context.fillStyle = '#000000';
		 context.font = "14px sans-serif";
         context.fillText("Won", (width / 2) - 10, height / 2);
		 context.fillText("Thanks for Playing", (width / 2) - 50, (height / 2) + 30);
	 }
     //Pause GUI
     function pauseGUI(){
		 context.rect(x, y, width, height);
	     context.fillStyle = '#F5F5F5';
	     context.fill();
		 context.fillStyle = '#000000';
		 context.font = "14px sans-serif";
         context.fillText("Pause", (width / 2) - 10, height / 2);
	 }	 
	 //Reset
     function reset(){
		 init();
     }
	 //render Sprite
	 function renderSprite(img, sx, sy, sw, sh, cx, cy, cw, ch){
		 context.drawImage(img, sx, sy, sw, sh, cx, cy, cw, ch); 
	 }
	 //Init
	 function init(){
       	 canvas = document.getElementById("gameCanvas");
	     context = canvas.getContext("2d");
         width = canvas.width;
	     height = canvas.height;
		 x = 0;
		 y = 0;
		 context.rect(x, y, width, height);
	     context.fillStyle = '#F5F5F5';
	     context.fill();
		 context.fillStyle = '#000000';
         level = 1;
         curLevel = 0;	
		 run = true;
		 won = false;
		 start = true;
		 introCount = 100;
		 changeLevel();
		 resetplayer();
		 //Sheet
		 sprite = document.getElementById("sheet");  
         running();  		 
	 }
	 //Tick
     function tick(){		 		 
		 if(tickCount % 60 == 0){
		     anime();
		 }			 
	 }		 
	 //Render Background
	 function renderBackground(){
		 context.rect(x, y, width, height);
		 context.fillStyle = '#000000';
	     context.fill();
	 }
	 //Render
	 function render(){
		 context.clearRect(0, 0, width, height);
		 renderBackground();
		 //tick();
		 var xo = (width - xm * tileSize) / 2;
		 var yo = 20;
		 for(var i = 0; i < xm; i++){ 
			 for(var j = 0; j < ym; j++){
				 if(tile[j][i] == 0){
					 context.fillStyle = "#000000";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	

				 if(tile[j][i] == 1){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (1 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 //Walls
				 if(tile[j][i] == 2){
					 context.fillStyle = "#E0E0E0";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (2 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }

                 if(tile[j][i] == 3){
					 context.fillStyle = "#202020";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (2 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
                 if(tile[j][i]== 4){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (8 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
				 if(tile[j][i] == 5){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (9 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
				 if(tile[j][i] == 6){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (8 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
				 if(tile[j][i] == 7){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (9 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
				 if(tile[j][i] == 8){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (10 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }	
				 
				 if(tile[j][i] == 9){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (11 * 8), (0 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }
				 
				 if(tile[j][i] == 10){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (10 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }
				 
				 if(tile[j][i] == 11){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (11 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }
				 
				  if(tile[j][i] == 12){
					 context.fillStyle = "#FFFFFF";
		             context.fillRect((i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
					 renderSprite(sprite, (0 * 8), (1 * 8), 8, 8, (i * tileSize) + xo, (j * tileSize) + yo, tileSize, tileSize);
				 }
			 }
		 }
		 
		 //Play				 
		 drawplayer(sprite, xo, yo);
	 }  
	 //Collision
     function collision(){
         if(xp + xsize > xm){
			 xp = xm;
		 }	

         if(xp + xsize < 0){
			 xp = 0;
		 }
		 
		 if(yp + ysize > ym){
			 yp = ym;
		 }	

         if(yp + ysize < 0){
			 yp = 0;
		 }		 
     }
	 //Bounds
     function bounds(x, y){
		 if(x + xsize > xm){
			 return false;
		 }	

         if(x + xsize < 0){
			 return false;
		 }
		 
		 if(y + ysize > ym){
			 return false;
		 }	

         if(y + ysize < 0){
			 return false;
		 }	
		 
	     return true;
	 }
	 //Animation Frame
	 window.requestAnimFrame = (function(callback){
		 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		 function(callback){
			 window.setTimeout(callback, 1000 / 60); //FPS Change if you want 30
		 };
	})();
	 //Down Arrow
	 $(document).on('click','.zeta-downArrow',function(e){ 
	     e.preventDefault();
		 $('.zeta-downArrow').disabled = true;
		 if(!pause && !menu && run){
			 if(bounds(xp, yp + 1)){
		         yp += 1;
				 left = false;                           
	             right = false;                          
	             down = true;
	             up = false;
			 } else{
				 left = false;                           
	             right = false;                          
	             down = true;
	             up = false;
			 }
		 } 
		 $('.zeta-downArrow').disabled = false;
         return false;     	 
     });
	 //Up Arrow
	 $(document).on('click','.zeta-upArrow',function(e){ 
	     e.preventDefault();
		 $('.zeta-upArrow').disabled = true;
		 if(!pause && !menu && run){
			 if(bounds(xp, yp - 1)){
		         yp -= 1;
				 left = false;                           
	             right = false;                          
	             down = false;
	             up = true;
				 
			 } else{
				 left = false;                           
	             right = false;                          
	             down = false;
	             up = true; 
			 }
		  }
		 $('.zeta-upArrow').disabled = false;
         return false;     	 
     });
	 //Left Arrow
	  $(document).on('click','.zeta-leftArrow',function(e){ 
	     e.preventDefault();
         $('.zeta-leftArrow').disabled = true;
		 if(!pause && !menu && run){
			 if(bounds(xp - 1, yp)){
		         xp -= 1;
				 left = true;                           
	             right = false;                          
	             down = false;
	             up = false;
			 } else{
				 left = true;                           
	             right = false;                          
	             down = false;
	             up = false;
			 }
		 } 
		 $('.zeta-leftArrow').disabled = false;
         return false;     	 
     });	
     //Right Arrow
	  $(document).on('click','.zeta-rightArrow',function(e){ 
	     e.preventDefault();
         $('.zeta-rightArrow').disabled = true;
		 if(!pause && !menu && run){
			 if(bounds(xp + 1, yp)){
		         xp += 1;
				 left = false;                           
	             right = true;                          
	             down = false;
	             up = false;
			 } else{
				 left = false;                           
	             right = true;                          
	             down = false;
	             up = false;
			 }
		 } 
		 $('.zeta-rightArrow').disabled = false;
         return false;      	 
     });
	 //Select
	 $(document).on('click','.zeta-controlSelectButton',function(e){ 
	     e.preventDefault();
         $('.zeta-controlSelectButton').disabled = true;
		 if(pause){
			 pause = false;
		 } else{
			 pause = true;
		 }
		 $('.zeta-controlSelectButton').disabled = false;
         return false;     	 
     });	 
	 //Start 
	 $(document).on('click','.zeta-controlStartButton',function(e){ 
	     e.preventDefault();
         $('.zeta-controlStartButton').disabled = true;
		 if(!pause && run){
		     if(menu){
			     menu = false;
		     } else{
			     menu = true;
		     }
		 }
		 $('.zeta-controlStartButton').disabled = false;
         return false;     	 
     });
     //B
	 $(document).on('click','.zeta-controlCirB',function(e){ 
	     e.preventDefault();
         $('.zeta-controlCirB').disabled = true;
		 //Action
		 $('.zeta-controlCirB').disabled = false;
         return false;     	 
     });
     //A
	 $(document).on('click','.zeta-controlCirA',function(e){ 
	     e.preventDefault();
         $('.zeta-controlCirA').disabled = true;
		 //Action
		 $('.zeta-controlCirA').disabled = false;
         return false;     	 
     });	 
	 init();	 
});
