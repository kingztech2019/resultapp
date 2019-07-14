function enter(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for english
			var ecellOne=parseInt(document.getElementById('e1').value||0)
			  //display font color
			if(ecellOne<=5){
				document.getElementById('e1').style.color='red';

			} 
			if(ecellOne>=5){
				document.getElementById('e1').style.color='blue';

			} 

			  var ecellTwo=parseInt(document.getElementById('e2').value||0)
			  //display font color
			if(ecellTwo<=5){
				document.getElementById('e2').style.color='red';

			} 
			if(ecellTwo>=5){
				document.getElementById('e2').style.color='blue';

			} 
			var ecellThree=parseInt(document.getElementById('e3').value||0)
			  //display font color
			if(ecellThree<=5){
				document.getElementById('e3').style.color='red';

			} 
			if(ecellThree>=5){
				document.getElementById('e3').style.color='blue';

			} 
			var ecellFour=parseInt(document.getElementById('e4').value||0)
			  //display font color
			if(ecellFour<=39){
				document.getElementById('e4').style.color='red';

			} 
			if(ecellFour>39){
				document.getElementById('e4').style.color='blue';

			} 
			
			 //basic calculation
				var englishTotal=ecellOne+ecellTwo+ecellThree+ecellFour 
					 
					document.getElementById('etotal').innerHTML=parseInt(englishTotal)
					if(englishTotal<=39){
				document.getElementById('etotal').style.color='red';

			} 
			if(englishTotal>39){
				document.getElementById('etotal').style.color='blue';

			} 

					var ecellFive=parseInt(document.getElementById('etotal').value||0)

					 var ecellSix=parseInt(document.getElementById('ecumm').value||0)

					  
					 	if(ecellSix<=39){
				document.getElementById('ecumm').style.color='red';

			} 
			if(ecellSix>39){
				document.getElementById('ecumm').style.color='blue';

			}
			if(ecellSix==0){
				var englishDivide=ecellFive+ecellSix
					 var displayScore=englishDivide/1
					 var englishDisplay=displayScore.toFixed();
					 document.getElementById('ecumscore').innerHTML=parseInt(englishDisplay)

			}else{
				var englishDivide=ecellFive+ecellSix
					 var displayScore=englishDivide/2
					 var englishDisplay=displayScore.toFixed();
					 document.getElementById('ecumscore').innerHTML=parseInt(englishDisplay)

			}
					 
					 

					  var ecellSeven=parseInt(document.getElementById('ecumscore').value||0)
					  if(ecellSeven>=75){
					document.getElementById('egrades').innerHTML="A+"
					document.getElementById('eremarks').innerHTML="Excellent"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					  if(ecellSeven<=74){
					document.getElementById('egrades').innerHTML="A"
					document.getElementById('eremarks').innerHTML="V.Good"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					   if(ecellSeven<=69){
					document.getElementById('egrades').innerHTML="B"
					document.getElementById('eremarks').innerHTML="Good"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					  if(ecellSeven<=59){
					document.getElementById('egrades').innerHTML="C"
					document.getElementById('eremarks').innerHTML="Average"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					   if(ecellSeven<=49){
					document.getElementById('egrades').innerHTML="D"
					document.getElementById('eremarks').innerHTML="B.Average"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					  if(ecellSeven<=44){
					document.getElementById('egrades').innerHTML="E"
					document.getElementById('eremarks').innerHTML="Pass"
					document.getElementById('eremarks').style.color="blue"
					document.getElementById('egrades').style.color="blue"
					document.getElementById('ecumscore').style.color="blue"
					  }
					  if(ecellSeven<=39){
					document.getElementById('egrades').innerHTML="F"
					document.getElementById('egrades').style.color="red"
					document.getElementById('eremarks').innerHTML="Fail"
					document.getElementById('eremarks').style.color="red"
					document.getElementById('ecumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//yoruba calculation
		function enterYoruba(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for english
			var ycellOne=parseInt(document.getElementById('y1').value||0)
			  //display font color
			if(ycellOne<=5){
				document.getElementById('y1').style.color='red';

			} 
			if(ycellOne>=5){
				document.getElementById('y1').style.color='blue';

			} 

			  var ycellTwo=parseInt(document.getElementById('y2').value||0)
			  //display font color
			if(ycellTwo<=5){
				document.getElementById('y2').style.color='red';

			} 
			if(ycellTwo>=5){
				document.getElementById('y2').style.color='blue';

			} 
			var ycellThree=parseInt(document.getElementById('y3').value||0)
			  //display font color
			if(ycellThree<=5){
				document.getElementById('y3').style.color='red';

			} 
			if(ycellThree>=5){
				document.getElementById('y3').style.color='blue';

			} 
			var ycellFour=parseInt(document.getElementById('y4').value||0)
			  //display font color
			if(ycellFour<=39){
				document.getElementById('y4').style.color='red';

			} 
			if(ycellFour>39){
				document.getElementById('y4').style.color='blue';

			} 
			
			 //basic calculation
				var yorubaTotal=ycellOne+ycellTwo+ycellThree+ycellFour 
					 
					document.getElementById('ytotal').innerHTML=parseInt(yorubaTotal)
					if(yorubaTotal<=39){
				document.getElementById('ytotal').style.color='red';

			} 
			if(yorubaTotal>39){
				document.getElementById('ytotal').style.color='blue';

			} 

					var ycellFive=parseInt(document.getElementById('ytotal').value||0)

					 var ycellSix=parseInt(document.getElementById('ycumm').value||0)
					 	if(ycellSix<=39){
				document.getElementById('ycumm').style.color='red';

			} 
			if(ycellSix>39){
				document.getElementById('ycumm').style.color='blue';

			}
			if(ycellSix==0){
				var yorubaDivide=ycellFive+ycellSix
					 var displayYscore=yorubaDivide/1
					 var yorubaDisplay=displayYscore.toFixed();
					 document.getElementById('ycumscore').innerHTML=parseInt(yorubaDisplay)

			}else{
				var yorubaDivide=ycellFive+ycellSix
					 var displayYscore=yorubaDivide/2
					 var yorubaDisplay=displayYscore.toFixed();
					 document.getElementById('ycumscore').innerHTML=parseInt(yorubaDisplay)

			}
					 
					 
					  
				

					  var ycellSeven=parseInt(document.getElementById('ycumscore').value||0)
				 		  if(ycellSeven>=75){
					document.getElementById('ygrades').innerHTML="A+"
					document.getElementById('yremarks').innerHTML="Excellent"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					  if(ycellSeven<=74){
					document.getElementById('ygrades').innerHTML="A"
					document.getElementById('yremarks').innerHTML="V.Good"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					   if(ycellSeven<=69){
					document.getElementById('ygrades').innerHTML="B"
					document.getElementById('yremarks').innerHTML="Good"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					  if(ycellSeven<=59){
					document.getElementById('ygrades').innerHTML="C"
					document.getElementById('yremarks').innerHTML="Average"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					   if(ycellSeven<=49){
					document.getElementById('ygrades').innerHTML="D"
					document.getElementById('yremarks').innerHTML="B.Average"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					  if(ycellSeven<=44){
					document.getElementById('ygrades').innerHTML="E"
					document.getElementById('yremarks').innerHTML="Pass"
					document.getElementById('yremarks').style.color="blue"
					document.getElementById('ygrades').style.color="blue"
					document.getElementById('ycumscore').style.color="blue"
					  }
					  if(ycellSeven<=39){
					document.getElementById('ygrades').innerHTML="F"
					document.getElementById('ygrades').style.color="red"
					document.getElementById('yremarks').innerHTML="Fail"
					document.getElementById('yremarks').style.color="red"
					document.getElementById('ycumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//French calculation
		function enterFrench(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var fcellOne=parseInt(document.getElementById('f1').value||0)
			  //display font color
			if(fcellOne<=5){
				document.getElementById('f1').style.color='red';

			} 
			if(fcellOne>=5){
				document.getElementById('f1').style.color='blue';

			} 

			  var fcellTwo=parseInt(document.getElementById('f2').value||0)
			  //display font color
			if(fcellTwo<=5){
				document.getElementById('f2').style.color='red';

			} 
			if(fcellTwo>=5){
				document.getElementById('f2').style.color='blue';

			} 
			var fcellThree=parseInt(document.getElementById('f3').value||0)
			  //display font color
			if(fcellThree<=5){
				document.getElementById('f3').style.color='red';

			} 
			if(fcellThree>=5){
				document.getElementById('f3').style.color='blue';

			} 
			var fcellFour=parseInt(document.getElementById('f4').value||0)
			  //display font color
			if(fcellFour<=39){
				document.getElementById('f4').style.color='red';

			} 
			if(fcellFour>39){
				document.getElementById('f4').style.color='blue';

			} 
			
			 //basic calculation
				var frenchTotal=fcellOne+fcellTwo+fcellThree+fcellFour 
					 
					document.getElementById('ftotal').innerHTML=parseInt(frenchTotal)
					if(frenchTotal<=39){
				document.getElementById('ftotal').style.color='red';

			} 
			if(frenchTotal>39){
				document.getElementById('ftotal').style.color='blue';

			} 

					var fcellFive=parseInt(document.getElementById('ftotal').value||0)

					 var fcellSix=parseInt(document.getElementById('fcumm').value||0)
					 	if(frenchTotal<=39){
				document.getElementById('fcumm').style.color='red';

			} 
			if(frenchTotal>39){
				document.getElementById('fcumm').style.color='blue';

			}
			if(fcellSix==0){
				 var frenchDivide=fcellFive+fcellSix
					 var displayFscore=frenchDivide/1
					 var frenchDisplay=displayFscore.toFixed();
					 document.getElementById('fcumscore').innerHTML=parseInt(frenchDisplay)

			}else{
				 var frenchDivide=fcellFive+fcellSix
					 var displayFscore=frenchDivide/2
					 var frenchDisplay=displayFscore.toFixed();
					 document.getElementById('fcumscore').innerHTML=parseInt(frenchDisplay)

			}
					 
					
					  
				

					  var fcellSeven=parseInt(document.getElementById('fcumscore').value||0)
				 		  if(fcellSeven>=75){
					document.getElementById('fgrades').innerHTML="A+"
					document.getElementById('fremarks').innerHTML="Excellent"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					  if(fcellSeven<=74){
					document.getElementById('fgrades').innerHTML="A"
					document.getElementById('fremarks').innerHTML="V.Good"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					   if(fcellSeven<=69){
					document.getElementById('fgrades').innerHTML="B"
					document.getElementById('fremarks').innerHTML="Good"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					  if(fcellSeven<=59){
					document.getElementById('fgrades').innerHTML="C"
					document.getElementById('fremarks').innerHTML="Average"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					   if(fcellSeven<=49){
					document.getElementById('fgrades').innerHTML="D"
					document.getElementById('fremarks').innerHTML="B.Average"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					  if(fcellSeven<=44){
					document.getElementById('fgrades').innerHTML="E"
					document.getElementById('fremarks').innerHTML="Pass"
					document.getElementById('fremarks').style.color="blue"
					document.getElementById('fgrades').style.color="blue"
					document.getElementById('fcumscore').style.color="blue"
					  }
					  if(fcellSeven<=39){
					document.getElementById('fgrades').innerHTML="F"
					document.getElementById('fgrades').style.color="red"
					document.getElementById('fremarks').innerHTML="Fail"
					document.getElementById('fremarks').style.color="red"
					document.getElementById('fcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//maths calculation
		function enterMath(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var mcellOne=parseInt(document.getElementById('m1').value||0)
			  //display font color
			if(mcellOne<=5){
				document.getElementById('m1').style.color='red';

			} 
			if(mcellOne>=5){
				document.getElementById('m1').style.color='blue';

			} 

			  var mcellTwo=parseInt(document.getElementById('m2').value||0)
			  //display font color
			if(mcellTwo<=5){
				document.getElementById('m2').style.color='red';

			} 
			if(mcellTwo>=5){
				document.getElementById('m2').style.color='blue';

			} 
			var mcellThree=parseInt(document.getElementById('m3').value||0)
			  //display font color
			if(mcellThree<=5){
				document.getElementById('m3').style.color='red';

			} 
			if(mcellThree>=5){
				document.getElementById('m3').style.color='blue';

			} 
			var mcellFour=parseInt(document.getElementById('m4').value||0)
			  //display font color
			if(mcellFour<=39){
				document.getElementById('m4').style.color='red';

			} 
			if(mcellFour>39){
				document.getElementById('m4').style.color='blue';

			} 
			
			 //basic calculation
				var mathTotal=mcellOne+mcellTwo+mcellThree+mcellFour 
					 
					document.getElementById('mtotal').innerHTML=parseInt(mathTotal)
					if(mathTotal<=39){
				document.getElementById('mtotal').style.color='red';

			} 
			if(mathTotal>39){
				document.getElementById('mtotal').style.color='blue';

			} 

					var mcellFive=parseInt(document.getElementById('mtotal').value||0)

					 var mcellSix=parseInt(document.getElementById('mcumm').value||0)
					 	if(mcellSix<=39){
				document.getElementById('mcumm').style.color='red';

			} 
			if(mcellSix>39){
				document.getElementById('mcumm').style.color='blue';

			}
			if(mcellSix==0){
				 var mathDivide=mcellFive+mcellSix
					 var displayMscore=mathDivide/1
					 var mathDisplay=displayMscore.toFixed();
					 document.getElementById('mcumscore').innerHTML=parseInt(mathDisplay)

			}else{
				 var mathDivide=mcellFive+mcellSix
					 var displayMscore=mathDivide/2
					 var mathDisplay=displayMscore.toFixed();
					 document.getElementById('mcumscore').innerHTML=parseInt(mathDisplay)
					  

			}
					 
					
				

					  var mcellSeven=parseInt(document.getElementById('mcumscore').value||0)
				 		  if(mcellSeven>=75){
					document.getElementById('mgrades').innerHTML="A+"
					document.getElementById('mremarks').innerHTML="Excellent"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					  if(mcellSeven<=74){
					document.getElementById('mgrades').innerHTML="A"
					document.getElementById('mremarks').innerHTML="V.Good"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					   if(mcellSeven<=69){
					document.getElementById('mgrades').innerHTML="B"
					document.getElementById('mremarks').innerHTML="Good"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					  if(mcellSeven<=59){
					document.getElementById('mgrades').innerHTML="C"
					document.getElementById('mremarks').innerHTML="Average"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					   if(mcellSeven<=49){
					document.getElementById('mgrades').innerHTML="D"
					document.getElementById('mremarks').innerHTML="B.Average"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					  if(mcellSeven<=44){
					document.getElementById('mgrades').innerHTML="E"
					document.getElementById('mremarks').innerHTML="Pass"
					document.getElementById('mremarks').style.color="blue"
					document.getElementById('mgrades').style.color="blue"
					document.getElementById('mcumscore').style.color="blue"
					  }
					  if(mcellSeven<=39){
					document.getElementById('mgrades').innerHTML="F"
					document.getElementById('mgrades').style.color="red"
					document.getElementById('mremarks').innerHTML="Fail"
					document.getElementById('mremarks').style.color="red"
					document.getElementById('mcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//business calculation
		function enterBusiness(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var bcellOne=parseInt(document.getElementById('b1').value||0)
			  //display font color
			if(bcellOne<=5){
				document.getElementById('b1').style.color='red';

			} 
			if(bcellOne>=5){
				document.getElementById('b1').style.color='blue';

			} 

			  var bcellTwo=parseInt(document.getElementById('b2').value||0)
			  //display font color
			if(bcellTwo<=5){
				document.getElementById('b2').style.color='red';

			} 
			if(bcellTwo>=5){
				document.getElementById('b2').style.color='blue';

			} 
			var bcellThree=parseInt(document.getElementById('b3').value||0)
			  //display font color
			if(bcellThree<=5){
				document.getElementById('b3').style.color='red';

			} 
			if(bcellThree>=5){
				document.getElementById('b3').style.color='blue';

			} 
			var bcellFour=parseInt(document.getElementById('b4').value||0)
			  //display font color
			if(bcellFour<=39){
				document.getElementById('b4').style.color='red';

			} 
			if(bcellFour>39){
				document.getElementById('b4').style.color='blue';

			} 
			
			 //basic calculation
				var busTotal=bcellOne+bcellTwo+bcellThree+bcellFour 
					 
					document.getElementById('btotal').innerHTML=parseInt(busTotal)
					if(busTotal<=39){
				document.getElementById('btotal').style.color='red';

			} 
			if(busTotal>39){
				document.getElementById('btotal').style.color='blue';

			} 

					var bcellFive=parseInt(document.getElementById('btotal').value||0)

					 var bcellSix=parseInt(document.getElementById('bcumm').value||0)
					 	if(bcellSix<=39){
				document.getElementById('bcumm').style.color='red';

			} 
			if(bcellSix>39){
				document.getElementById('bcumm').style.color='blue';

			}
			if(bcellSix==0){
				var busDivide=bcellFive+bcellSix
					 var displayBscore=busDivide/1
					 var busDisplay=displayBscore.toFixed();
					 document.getElementById('bcumscore').innerHTML=parseInt(busDisplay)

			}else{
				 var busDivide=bcellFive+bcellSix
					 var displayBscore=busDivide/2
					 var busDisplay=displayBscore.toFixed();
					 document.getElementById('bcumscore').innerHTML=parseInt(busDisplay)

			}
					 
					
					  
				

					  var bcellSeven=parseInt(document.getElementById('bcumscore').value||0)
				 		  if(bcellSeven>=75){
					document.getElementById('bgrades').innerHTML="A+"
					document.getElementById('bremarks').innerHTML="Excellent"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					  if(bcellSeven<=74){
					document.getElementById('bgrades').innerHTML="A"
					document.getElementById('bremarks').innerHTML="V.Good"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					   if(bcellSeven<=69){
					document.getElementById('bgrades').innerHTML="B"
					document.getElementById('bremarks').innerHTML="Good"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					  if(bcellSeven<=59){
					document.getElementById('bgrades').innerHTML="C"
					document.getElementById('bremarks').innerHTML="Average"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					   if(bcellSeven<=49){
					document.getElementById('bgrades').innerHTML="D"
					document.getElementById('bremarks').innerHTML="B.Average"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					  if(bcellSeven<=44){
					document.getElementById('bgrades').innerHTML="E"
					document.getElementById('bremarks').innerHTML="Pass"
					document.getElementById('bremarks').style.color="blue"
					document.getElementById('bgrades').style.color="blue"
					document.getElementById('bcumscore').style.color="blue"
					  }
					  if(bcellSeven<=39){
					document.getElementById('bgrades').innerHTML="F"
					document.getElementById('bgrades').style.color="red"
					document.getElementById('bremarks').innerHTML="Fail"
					document.getElementById('bremarks').style.color="red"
					document.getElementById('bcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}
		//social studies calculation
		function enterSocial(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var scellOne=parseInt(document.getElementById('s1').value||0)
			  //display font color
			if(scellOne<=5){
				document.getElementById('s1').style.color='red';

			} 
			if(scellOne>=5){
				document.getElementById('s1').style.color='blue';

			} 

			  var scellTwo=parseInt(document.getElementById('s2').value||0)
			  //display font color
			if(scellTwo<=5){
				document.getElementById('s2').style.color='red';

			} 
			if(scellTwo>=5){
				document.getElementById('s2').style.color='blue';

			} 
			var scellThree=parseInt(document.getElementById('s3').value||0)
			  //display font color
			if(scellThree<=5){
				document.getElementById('s3').style.color='red';

			} 
			if(scellThree>=5){
				document.getElementById('s3').style.color='blue';

			} 
			var scellFour=parseInt(document.getElementById('s4').value||0)
			  //display font color
			if(scellFour<=39){
				document.getElementById('s4').style.color='red';

			} 
			if(scellFour>39){
				document.getElementById('s4').style.color='blue';

			} 
			
			 //basic calculation
				var socialTotal=scellOne+scellTwo+scellThree+scellFour 
					 
					document.getElementById('stotal').innerHTML=parseInt(socialTotal)
					if(socialTotal<=39){
				document.getElementById('stotal').style.color='red';

			} 
			if(socialTotal>39){
				document.getElementById('stotal').style.color='blue';

			} 

					var scellFive=parseInt(document.getElementById('stotal').value||0)

					 var scellSix=parseInt(document.getElementById('scumm').value||0)
					 	if(scellSix<=39){
				document.getElementById('scumm').style.color='red';

			} 
			if(scellSix>39){
				document.getElementById('scumm').style.color='blue';

			}
			if(scellSix==0){
				 var socialDivide=scellFive+scellSix
					 var displaySscore=socialDivide/1
					 var socialDisplay=displaySscore.toFixed();
					 document.getElementById('scumscore').innerHTML=parseInt(socialDisplay)

			}else{
				 var socialDivide=scellFive+scellSix
					 var displaySscore=socialDivide/2
					 var socialDisplay=displaySscore.toFixed();
					 document.getElementById('scumscore').innerHTML=parseInt(socialDisplay)

			}
					 
					
					  
				

					  var scellSeven=parseInt(document.getElementById('scumscore').value||0)
				 		  if(scellSeven>=75){
					document.getElementById('sgrades').innerHTML="A+"
					document.getElementById('sremarks').innerHTML="Excellent"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					  if(scellSeven<=74){
					document.getElementById('sgrades').innerHTML="A"
					document.getElementById('sremarks').innerHTML="V.Good"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					   if(scellSeven<=69){
					document.getElementById('sgrades').innerHTML="B"
					document.getElementById('sremarks').innerHTML="Good"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					  if(scellSeven<=59){
					document.getElementById('sgrades').innerHTML="C"
					document.getElementById('sremarks').innerHTML="Average"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					   if(scellSeven<=49){
					document.getElementById('sgrades').innerHTML="D"
					document.getElementById('sremarks').innerHTML="B.Average"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					  if(scellSeven<=44){
					document.getElementById('sgrades').innerHTML="E"
					document.getElementById('sremarks').innerHTML="Pass"
					document.getElementById('sremarks').style.color="blue"
					document.getElementById('sgrades').style.color="blue"
					document.getElementById('scumscore').style.color="blue"
					  }
					  if(scellSeven<=39){
					document.getElementById('sgrades').innerHTML="F"
					document.getElementById('sgrades').style.color="red"
					document.getElementById('sremarks').innerHTML="Fail"
					document.getElementById('sremarks').style.color="red"
					document.getElementById('scumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//C.R.K calculation
		function enterChris(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var ccellOne=parseInt(document.getElementById('c1').value||0)
			  //display font color
			if(ccellOne<=5){
				document.getElementById('c1').style.color='red';

			} 
			if(ccellOne>=5){
				document.getElementById('c1').style.color='blue';

			} 

			  var ccellTwo=parseInt(document.getElementById('c2').value||0)
			  //display font color
			if(ccellTwo<=5){
				document.getElementById('c2').style.color='red';

			} 
			if(ccellTwo>=5){
				document.getElementById('c2').style.color='blue';

			} 
			var ccellThree=parseInt(document.getElementById('c3').value||0)
			  //display font color
			if(ccellThree<=5){
				document.getElementById('c3').style.color='red';

			} 
			if(ccellThree>=5){
				document.getElementById('c3').style.color='blue';

			} 
			var ccellFour=parseInt(document.getElementById('c4').value||0)
			  //display font color
			if(ccellFour<=39){
				document.getElementById('c4').style.color='red';

			} 
			if(ccellFour>39){
				document.getElementById('c4').style.color='blue';

			} 
			
			 //basic calculation
				var chrisTotal=ccellOne+ccellTwo+ccellThree+ccellFour 
					 
					document.getElementById('ctotal').innerHTML=parseInt(chrisTotal)
					if(chrisTotal<=39){
				document.getElementById('ctotal').style.color='red';

			} 
			if(chrisTotal>39){
				document.getElementById('ctotal').style.color='blue';

			} 

					var ccellFive=parseInt(document.getElementById('ctotal').value||0)

					 var ccellSix=parseInt(document.getElementById('ccumm').value||0)
					 	if(ccellSix<=39){
				document.getElementById('ccumm').style.color='red';

			} 
			if(ccellSix>39){
				document.getElementById('ccumm').style.color='blue';

			}
			if(ccellSix==0){
				 var chrisDivide=ccellFive+ccellSix
					 var displayCscore=chrisDivide/1
					 var chrisDisplay=displayCscore.toFixed();
					 document.getElementById('ccumscore').innerHTML=parseInt(chrisDisplay)

			}else{
				 var chrisDivide=ccellFive+ccellSix
					 var displayCscore=chrisDivide/2
					 var chrisDisplay=displayCscore.toFixed();
					 document.getElementById('ccumscore').innerHTML=parseInt(chrisDisplay)

			}
					 
					
					  
				

					  var ccellSeven=parseInt(document.getElementById('ccumscore').value||0)
				 		  if(ccellSeven>=75){
					document.getElementById('cgrades').innerHTML="A+"
					document.getElementById('cremarks').innerHTML="Excellent"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					  if(ccellSeven<=74){
					document.getElementById('cgrades').innerHTML="A"
					document.getElementById('cremarks').innerHTML="V.Good"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					   if(ccellSeven<=69){
					document.getElementById('cgrades').innerHTML="B"
					document.getElementById('cremarks').innerHTML="Good"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					  if(ccellSeven<=59){
					document.getElementById('cgrades').innerHTML="C"
					document.getElementById('cremarks').innerHTML="Average"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					   if(ccellSeven<=49){
					document.getElementById('cgrades').innerHTML="D"
					document.getElementById('cremarks').innerHTML="B.Average"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					  if(ccellSeven<=44){
					document.getElementById('cgrades').innerHTML="E"
					document.getElementById('cremarks').innerHTML="Pass"
					document.getElementById('cremarks').style.color="blue"
					document.getElementById('cgrades').style.color="blue"
					document.getElementById('ccumscore').style.color="blue"
					  }
					  if(ccellSeven<=39){
					document.getElementById('cgrades').innerHTML="F"
					document.getElementById('cgrades').style.color="red"
					document.getElementById('cremarks').innerHTML="Fail"
					document.getElementById('cremarks').style.color="red"
					document.getElementById('ccumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}


		//Agric calculation
		function enterAgric(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var acellOne=parseInt(document.getElementById('a1').value||0)
			  //display font color
			if(acellOne<=5){
				document.getElementById('a1').style.color='red';

			} 
			if(acellOne>=5){
				document.getElementById('a1').style.color='blue';

			} 

			  var acellTwo=parseInt(document.getElementById('a2').value||0)
			  //display font color
			if(acellTwo<=5){
				document.getElementById('a2').style.color='red';

			} 
			if(acellTwo>=5){
				document.getElementById('a2').style.color='blue';

			} 
			var acellThree=parseInt(document.getElementById('a3').value||0)
			  //display font color
			if(acellThree<=5){
				document.getElementById('a3').style.color='red';

			} 
			if(acellThree>=5){
				document.getElementById('a3').style.color='blue';

			} 
			var acellFour=parseInt(document.getElementById('a4').value||0)
			  //display font color
			if(acellFour<=39){
				document.getElementById('a4').style.color='red';

			} 
			if(acellFour>39){
				document.getElementById('a4').style.color='blue';

			} 
			
			 //basic calculation
				var agricTotal=acellOne+acellTwo+acellThree+acellFour 
					 
					document.getElementById('atotal').innerHTML=parseInt(agricTotal)
					if(agricTotal<=39){
				document.getElementById('atotal').style.color='red';

			} 
			if(agricTotal>39){
				document.getElementById('atotal').style.color='blue';

			} 

					var acellFive=parseInt(document.getElementById('atotal').value||0)

					 var acellSix=parseInt(document.getElementById('acumm').value||0)
					 	if(acellSix<=39){
				document.getElementById('acumm').style.color='red';

			} 
			if(acellSix>39){
				document.getElementById('acumm').style.color='blue';

			}
			if(acellSix==0){
				 var agricDivide=acellFive+acellSix
					 var displayAscore=agricDivide/1
					 var agricDisplay=displayAscore.toFixed();
					 document.getElementById('acumscore').innerHTML=parseInt(agricDisplay)

			}else{
				 var agricDivide=acellFive+acellSix
					 var displayAscore=agricDivide/2
					 var agricDisplay=displayAscore.toFixed();
					 document.getElementById('acumscore').innerHTML=parseInt(agricDisplay)

			}
					 
					
					  
				

					  var acellSeven=parseInt(document.getElementById('acumscore').value||0)
				 		  if(acellSeven>=75){
					document.getElementById('agrades').innerHTML="A+"
					document.getElementById('aremarks').innerHTML="Excellent"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					  if(acellSeven<=74){
					document.getElementById('agrades').innerHTML="A"
					document.getElementById('aremarks').innerHTML="V.Good"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					   if(acellSeven<=69){
					document.getElementById('agrades').innerHTML="B"
					document.getElementById('aremarks').innerHTML="Good"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					  if(acellSeven<=59){
					document.getElementById('agrades').innerHTML="C"
					document.getElementById('aremarks').innerHTML="Average"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					   if(acellSeven<=49){
					document.getElementById('agrades').innerHTML="D"
					document.getElementById('aremarks').innerHTML="B.Average"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					  if(acellSeven<=44){
					document.getElementById('agrades').innerHTML="E"
					document.getElementById('aremarks').innerHTML="Pass"
					document.getElementById('aremarks').style.color="blue"
					document.getElementById('agrades').style.color="blue"
					document.getElementById('acumscore').style.color="blue"
					  }
					  if(acellSeven<=39){
					document.getElementById('agrades').innerHTML="F"
					document.getElementById('agrades').style.color="red"
					document.getElementById('aremarks').innerHTML="Fail"
					document.getElementById('aremarks').style.color="red"
					document.getElementById('acumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//Basic calculation
		function enterBasic(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var bacellOne=parseInt(document.getElementById('ba1').value||0)
			  //display font color
			if(bacellOne<=5){
				document.getElementById('ba1').style.color='red';

			} 
			if(bacellOne>=5){
				document.getElementById('ba1').style.color='blue';

			} 

			  var bacellTwo=parseInt(document.getElementById('ba2').value||0)
			  //display font color
			if(bacellTwo<=5){
				document.getElementById('ba2').style.color='red';

			} 
			if(bacellTwo>=5){
				document.getElementById('ba2').style.color='blue';

			} 
			var bacellThree=parseInt(document.getElementById('ba3').value||0)
			  //display font color
			if(bacellThree<=5){
				document.getElementById('ba3').style.color='red';

			} 
			if(bacellThree>=5){
				document.getElementById('ba3').style.color='blue';

			} 
			var bacellFour=parseInt(document.getElementById('ba4').value||0)
			  //display font color
			if(bacellFour<=39){
				document.getElementById('ba4').style.color='red';

			} 
			if(bacellFour>39){
				document.getElementById('ba4').style.color='blue';

			} 
			
			 //basic calculation
				var basicTotal=bacellOne+bacellTwo+bacellThree+bacellFour 
					 
					document.getElementById('batotal').innerHTML=parseInt(basicTotal)
					if(basicTotal<=39){
				document.getElementById('batotal').style.color='red';

			} 
			if(basicTotal>39){
				document.getElementById('batotal').style.color='blue';

			} 

					var bacellFive=parseInt(document.getElementById('batotal').value||0)

					 var bacellSix=parseInt(document.getElementById('bacumm').value||0)
					 	if(bacellSix<=39){
				document.getElementById('bacumm').style.color='red';

			} 
			if(bacellSix>39){
				document.getElementById('bacumm').style.color='blue';

			}
			if(bacellSix==0){
				var basicDivide=bacellFive+bacellSix
					 var displayBascore=basicDivide/1
					 var basicDisplay=displayBascore.toFixed();
					 document.getElementById('bacumscore').innerHTML=parseInt(basicDisplay)

			}else{
				 var basicDivide=bacellFive+bacellSix
					 var displayBascore=basicDivide/2
					 var basicDisplay=displayBascore.toFixed();
					 document.getElementById('bacumscore').innerHTML=parseInt(basicDisplay)

			}
					 
					
					  
				

					  var bacellSeven=parseInt(document.getElementById('bacumscore').value||0)
				 		  if(bacellSeven>=75){
					document.getElementById('bagrades').innerHTML="A+"
					document.getElementById('baremarks').innerHTML="Excellent"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					  if(bacellSeven<=74){
					document.getElementById('bagrades').innerHTML="A"
					document.getElementById('baremarks').innerHTML="V.Good"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					   if(bacellSeven<=69){
					document.getElementById('bagrades').innerHTML="B"
					document.getElementById('baremarks').innerHTML="Good"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					  if(bacellSeven<=59){
					document.getElementById('bagrades').innerHTML="C"
					document.getElementById('baremarks').innerHTML="Average"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					   if(bacellSeven<=49){
					document.getElementById('bagrades').innerHTML="D"
					document.getElementById('baremarks').innerHTML="B.Average"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					  if(bacellSeven<=44){
					document.getElementById('bagrades').innerHTML="E"
					document.getElementById('baremarks').innerHTML="Pass"
					document.getElementById('baremarks').style.color="blue"
					document.getElementById('bagrades').style.color="blue"
					document.getElementById('bacumscore').style.color="blue"
					  }
					  if(bacellSeven<=39){
					document.getElementById('bagrades').innerHTML="F"
					document.getElementById('bagrades').style.color="red"
					document.getElementById('baremarks').innerHTML="Fail"
					document.getElementById('baremarks').style.color="red"
					document.getElementById('bacumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//Tech calculation
		function enterTech(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var tcellOne=parseInt(document.getElementById('t1').value||0)
			  //display font color
			if(tcellOne<=5){
				document.getElementById('t1').style.color='red';

			} 
			if(tcellOne>=5){
				document.getElementById('t1').style.color='blue';

			} 

			  var tcellTwo=parseInt(document.getElementById('t2').value||0)
			  //display font color
			if(tcellTwo<=5){
				document.getElementById('t2').style.color='red';

			} 
			if(tcellTwo>=5){
				document.getElementById('t2').style.color='blue';

			} 
			var tcellThree=parseInt(document.getElementById('t3').value||0)
			  //display font color
			if(tcellThree<=5){
				document.getElementById('t3').style.color='red';

			} 
			if(tcellThree>=5){
				document.getElementById('t3').style.color='blue';

			} 
			var tcellFour=parseInt(document.getElementById('t4').value||0)
			  //display font color
			if(tcellFour<=39){
				document.getElementById('t4').style.color='red';

			} 
			if(tcellFour>39){
				document.getElementById('t4').style.color='blue';

			} 
			
			 //basic calculation
				var techTotal=tcellOne+tcellTwo+tcellThree+tcellFour 
					 
					document.getElementById('ttotal').innerHTML=parseInt(techTotal)
					if(techTotal<=39){
				document.getElementById('ttotal').style.color='red';

			} 
			if(techTotal>39){
				document.getElementById('ttotal').style.color='blue';

			} 

					var tcellFive=parseInt(document.getElementById('ttotal').value||0)

					 var tcellSix=parseInt(document.getElementById('tcumm').value||0)
					 	if(tcellSix<=39){
				document.getElementById('tcumm').style.color='red';

			} 
			if(tcellSix>39){
				document.getElementById('tcumm').style.color='blue';

			}

			if(tcellSix==0){
				 var techDivide=tcellFive+tcellSix
					 var displayTscore=techDivide/1
					 var techDisplay=displayTscore.toFixed();
					 document.getElementById('tcumscore').innerHTML=parseInt(techDisplay)

			}else{
				 var techDivide=tcellFive+tcellSix
					 var displayTscore=techDivide/2
					 var techDisplay=displayTscore.toFixed();
					 document.getElementById('tcumscore').innerHTML=parseInt(techDisplay)

			}
					 
					
					  
				

					  var tcellSeven=parseInt(document.getElementById('tcumscore').value||0)
				 		  if(tcellSeven>=75){
					document.getElementById('tgrades').innerHTML="A+"
					document.getElementById('tremarks').innerHTML="Excellent"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					  if(tcellSeven<=74){
					document.getElementById('tgrades').innerHTML="A"
					document.getElementById('tremarks').innerHTML="V.Good"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					   if(tcellSeven<=69){
					document.getElementById('tgrades').innerHTML="B"
					document.getElementById('tremarks').innerHTML="Good"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					  if(tcellSeven<=59){
					document.getElementById('tgrades').innerHTML="C"
					document.getElementById('tremarks').innerHTML="Average"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					   if(tcellSeven<=49){
					document.getElementById('tgrades').innerHTML="D"
					document.getElementById('tremarks').innerHTML="B.Average"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					  if(tcellSeven<=44){
					document.getElementById('tgrades').innerHTML="E"
					document.getElementById('tremarks').innerHTML="Pass"
					document.getElementById('tremarks').style.color="blue"
					document.getElementById('tgrades').style.color="blue"
					document.getElementById('tcumscore').style.color="blue"
					  }
					  if(tcellSeven<=39){
					document.getElementById('tgrades').innerHTML="F"
					document.getElementById('tgrades').style.color="red"
					document.getElementById('tremarks').innerHTML="Fail"
					document.getElementById('tremarks').style.color="red"
					document.getElementById('tcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}
//computer calculation
		function enterCom(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var cocellOne=parseInt(document.getElementById('co1').value||0)
			  //display font color
			if(cocellOne<=5){
				document.getElementById('co1').style.color='red';

			} 
			if(cocellOne>=5){
				document.getElementById('co1').style.color='blue';

			} 

			  var cocellTwo=parseInt(document.getElementById('co2').value||0)
			  //display font color
			if(cocellTwo<=5){
				document.getElementById('co2').style.color='red';

			} 
			if(cocellTwo>=5){
				document.getElementById('co2').style.color='blue';

			} 
			var cocellThree=parseInt(document.getElementById('co3').value||0)
			  //display font color
			if(cocellThree<=5){
				document.getElementById('co3').style.color='red';

			} 
			if(cocellThree>=5){
				document.getElementById('co3').style.color='blue';

			} 
			var cocellFour=parseInt(document.getElementById('co4').value||0)
			  //display font color
			if(cocellFour<=39){
				document.getElementById('co4').style.color='red';

			} 
			if(cocellFour>39){
				document.getElementById('co4').style.color='blue';

			} 
			
			 //basic calculation
				var comTotal=cocellOne+cocellTwo+cocellThree+cocellFour 
					 
					document.getElementById('cototal').innerHTML=parseInt(comTotal)
					if(comTotal<=39){
				document.getElementById('cototal').style.color='red';

			} 
			if(comTotal>39){
				document.getElementById('cototal').style.color='blue';

			} 

					var cocellFive=parseInt(document.getElementById('cototal').value||0)

					 var cocellSix=parseInt(document.getElementById('cocumm').value||0)
					 	if(cocellSix<=39){
				document.getElementById('cocumm').style.color='red';

			} 
			if(cocellSix>39){
				document.getElementById('cocumm').style.color='blue';

			}
			if(cocellSix==0){
				 var comDivide=cocellFive+cocellSix
					 var displayCoscore=comDivide/1
					 var comDisplay=displayCoscore.toFixed();
					 document.getElementById('cocumscore').innerHTML=parseInt(comDisplay)

			}else{

					 var comDivide=cocellFive+cocellSix
					 var displayCoscore=comDivide/2
					 var comDisplay=displayCoscore.toFixed();
					 document.getElementById('cocumscore').innerHTML=parseInt(comDisplay)
			}
					 				  
				

					  var cocellSeven=parseInt(document.getElementById('cocumscore').value||0)
				 		  if(cocellSeven>=75){
					document.getElementById('cogrades').innerHTML="A+"
					document.getElementById('coremarks').innerHTML="Excellent"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					  if(cocellSeven<=74){
					document.getElementById('cogrades').innerHTML="A"
					document.getElementById('coremarks').innerHTML="V.Good"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					   if(cocellSeven<=69){
					document.getElementById('cogrades').innerHTML="B"
					document.getElementById('coremarks').innerHTML="Good"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					  if(cocellSeven<=59){
					document.getElementById('cogrades').innerHTML="C"
					document.getElementById('coremarks').innerHTML="Average"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					   if(cocellSeven<=49){
					document.getElementById('cogrades').innerHTML="D"
					document.getElementById('coremarks').innerHTML="B.Average"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					  if(cocellSeven<=44){
					document.getElementById('cogrades').innerHTML="E"
					document.getElementById('coremarks').innerHTML="Pass"
					document.getElementById('coremarks').style.color="blue"
					document.getElementById('cogrades').style.color="blue"
					document.getElementById('cocumscore').style.color="blue"
					  }
					  if(cocellSeven<=39){
					document.getElementById('cogrades').innerHTML="F"
					document.getElementById('cogrades').style.color="red"
					document.getElementById('coremarks').innerHTML="Fail"
					document.getElementById('coremarks').style.color="red"
					document.getElementById('cocumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//creative calculation
		function enterCreat(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var crcellOne=parseInt(document.getElementById('cr1').value||0)
			  //display font color
			if(crcellOne<=5){
				document.getElementById('cr1').style.color='red';

			} 
			if(crcellOne>=5){
				document.getElementById('cr1').style.color='blue';

			} 

			  var crcellTwo=parseInt(document.getElementById('cr2').value||0)
			  //display font color
			if(crcellTwo<=5){
				document.getElementById('cr2').style.color='red';

			} 
			if(crcellTwo>=5){
				document.getElementById('cr2').style.color='blue';

			} 
			var crcellThree=parseInt(document.getElementById('cr3').value||0)
			  //display font color
			if(crcellThree<=5){
				document.getElementById('cr3').style.color='red';

			} 
			if(crcellThree>=5){
				document.getElementById('cr3').style.color='blue';

			} 
			var crcellFour=parseInt(document.getElementById('cr4').value||0)
			  //display font color
			if(crcellFour<=39){
				document.getElementById('cr4').style.color='red';

			} 
			if(crcellFour>39){
				document.getElementById('cr4').style.color='blue';

			} 
			
			 //basic calculation
				var crTotal=crcellOne+crcellTwo+crcellThree+crcellFour 
					 
					document.getElementById('crtotal').innerHTML=parseInt(crTotal)
					if(crTotal<=39){
				document.getElementById('crtotal').style.color='red';

			} 
			if(crTotal>39){
				document.getElementById('crtotal').style.color='blue';

			} 

					var crcellFive=parseInt(document.getElementById('crtotal').value||0)

					 var crcellSix=parseInt(document.getElementById('crcumm').value||0)
					 	if(crcellSix<=39){
				document.getElementById('crcumm').style.color='red';

			} 
			if(crcellSix>39){
				document.getElementById('crcumm').style.color='blue';

			}
			if(crcellSix==0){
				var crDivide=crcellFive+crcellSix
					 var displayCrscore=crDivide/1
					 var crDisplay=displayCrscore.toFixed();
					 document.getElementById('crcumscore').innerHTML=parseInt(crDisplay)

			}else{
				 var crDivide=crcellFive+crcellSix
					 var displayCrscore=crDivide/2
					 var crDisplay=displayCrscore.toFixed();
					 document.getElementById('crcumscore').innerHTML=parseInt(crDisplay)

			}
					 
					
					  
				

					  var crcellSeven=parseInt(document.getElementById('crcumscore').value||0)
				 		  if(crcellSeven>=75){
					document.getElementById('crgrades').innerHTML="A+"
					document.getElementById('crremarks').innerHTML="Excellent"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					  if(crcellSeven<=74){
					document.getElementById('crgrades').innerHTML="A"
					document.getElementById('crremarks').innerHTML="V.Good"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					   if(crcellSeven<=69){
					document.getElementById('crgrades').innerHTML="B"
					document.getElementById('crremarks').innerHTML="Good"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					  if(crcellSeven<=59){
					document.getElementById('crgrades').innerHTML="C"
					document.getElementById('crremarks').innerHTML="Average"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					   if(crcellSeven<=49){
					document.getElementById('crgrades').innerHTML="D"
					document.getElementById('crremarks').innerHTML="B.Average"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					  if(crcellSeven<=44){
					document.getElementById('crgrades').innerHTML="E"
					document.getElementById('crremarks').innerHTML="Pass"
					document.getElementById('crremarks').style.color="blue"
					document.getElementById('crgrades').style.color="blue"
					document.getElementById('crcumscore').style.color="blue"
					  }
					  if(crcellSeven<=39){
					document.getElementById('crgrades').innerHTML="F"
					document.getElementById('crgrades').style.color="red"
					document.getElementById('crremarks').innerHTML="Fail"
					document.getElementById('crremarks').style.color="red"
					document.getElementById('crcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//civic calculation
		function enterCivic(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var cicellOne=parseInt(document.getElementById('ci1').value||0)
			  //display font color
			if(cicellOne<=5){
				document.getElementById('ci1').style.color='red';

			} 
			if(cicellOne>=5){
				document.getElementById('ci1').style.color='blue';

			} 

			  var cicellTwo=parseInt(document.getElementById('ci2').value||0)
			  //display font color
			if(cicellTwo<=5){
				document.getElementById('ci2').style.color='red';

			} 
			if(cicellTwo>=5){
				document.getElementById('ci2').style.color='blue';

			} 
			var cicellThree=parseInt(document.getElementById('ci3').value||0)
			  //display font color
			if(cicellThree<=5){
				document.getElementById('ci3').style.color='red';

			} 
			if(cicellThree>=5){
				document.getElementById('ci3').style.color='blue';

			} 
			var cicellFour=parseInt(document.getElementById('ci4').value||0)
			  //display font color
			if(cicellFour<=39){
				document.getElementById('ci4').style.color='red';

			} 
			if(cicellFour>39){
				document.getElementById('ci4').style.color='blue';

			} 
			
			 //basic calculation
				var ciTotal=cicellOne+cicellTwo+cicellThree+cicellFour 
					 
					document.getElementById('citotal').innerHTML=parseInt(ciTotal)
					if(ciTotal<=39){
				document.getElementById('citotal').style.color='red';

			} 
			if(ciTotal>39){
				document.getElementById('citotal').style.color='blue';

			} 

					var cicellFive=parseInt(document.getElementById('citotal').value||0)

					 var cicellSix=parseInt(document.getElementById('cicumm').value||0)
					 	if(cicellSix<=39){
				document.getElementById('cicumm').style.color='red';

			} 
			if(cicellSix>39){
				document.getElementById('cicumm').style.color='blue';

			}
			if(cicellSix==0){
				var ciDivide=cicellFive+cicellSix
					 var displayCiscore=ciDivide/1
					 var ciDisplay=displayCiscore.toFixed();
					 document.getElementById('cicumscore').innerHTML=parseInt(ciDisplay)

			}else{
				var ciDivide=cicellFive+cicellSix
					 var displayCiscore=ciDivide/2
					 var ciDisplay=displayCiscore.toFixed();
					 document.getElementById('cicumscore').innerHTML=parseInt(ciDisplay)

			}
					 
					 
					  
				

					  var cicellSeven=parseInt(document.getElementById('cicumscore').value||0)
				 		  if(cicellSeven>=75){
					document.getElementById('cigrades').innerHTML="A+"
					document.getElementById('ciremarks').innerHTML="Excellent"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					  if(cicellSeven<=74){
					document.getElementById('cigrades').innerHTML="A"
					document.getElementById('ciremarks').innerHTML="V.Good"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					   if(cicellSeven<=69){
					document.getElementById('cigrades').innerHTML="B"
					document.getElementById('ciremarks').innerHTML="Good"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					  if(cicellSeven<=59){
					document.getElementById('cigrades').innerHTML="C"
					document.getElementById('ciremarks').innerHTML="Average"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					   if(cicellSeven<=49){
					document.getElementById('cigrades').innerHTML="D"
					document.getElementById('ciremarks').innerHTML="B.Average"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					  if(cicellSeven<=44){
					document.getElementById('cigrades').innerHTML="E"
					document.getElementById('ciremarks').innerHTML="Pass"
					document.getElementById('ciremarks').style.color="blue"
					document.getElementById('cigrades').style.color="blue"
					document.getElementById('cicumscore').style.color="blue"
					  }
					  if(cicellSeven<=39){
					document.getElementById('cigrades').innerHTML="F"
					document.getElementById('cigrades').style.color="red"
					document.getElementById('ciremarks').innerHTML="Fail"
					document.getElementById('ciremarks').style.color="red"
					document.getElementById('cicumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

				//civic calculation
		function enterHome(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var hcellOne=parseInt(document.getElementById('h1').value||0)
			  //display font color
			if(hcellOne<=5){
				document.getElementById('h1').style.color='red';

			} 
			if(hcellOne>=5){
				document.getElementById('h1').style.color='blue';

			} 

			  var hcellTwo=parseInt(document.getElementById('h2').value||0)
			  //display font color
			if(hcellTwo<=5){
				document.getElementById('h2').style.color='red';

			} 
			if(hcellTwo>=5){
				document.getElementById('h2').style.color='blue';

			} 
			var hcellThree=parseInt(document.getElementById('h3').value||0)
			  //display font color
			if(hcellThree<=5){
				document.getElementById('h3').style.color='red';

			} 
			if(hcellThree>=5){
				document.getElementById('h3').style.color='blue';

			} 
			var hcellFour=parseInt(document.getElementById('h4').value||0)
			  //display font color
			if(hcellFour<=39){
				document.getElementById('h4').style.color='red';

			} 
			if(hcellFour>39){
				document.getElementById('h4').style.color='blue';

			} 
			
			 //basic calculation
				var hTotal=hcellOne+hcellTwo+hcellThree+hcellFour 
					 
					document.getElementById('htotal').innerHTML=parseInt(hTotal)
					if(hTotal<=39){
				document.getElementById('htotal').style.color='red';

			} 
			if(hTotal>39){
				document.getElementById('htotal').style.color='blue';

			} 

					var hcellFive=parseInt(document.getElementById('htotal').value||0)

					 var hcellSix=parseInt(document.getElementById('hcumm').value||0)
					 	if(hcellSix<=39){
				document.getElementById('hcumm').style.color='red';

			} 
			if(hcellSix>39){
				document.getElementById('hcumm').style.color='blue';

			}
			if(hcellSix==0){
				var hDivide=hcellFive+hcellSix
					 var displayHscore=hDivide/1
					 var hDisplay=displayHscore.toFixed();
					 document.getElementById('hcumscore').innerHTML=parseInt(hDisplay)

			}else{
				var hDivide=hcellFive+hcellSix
					 var displayHscore=hDivide/2
					 var hDisplay=displayHscore.toFixed();
					 document.getElementById('hcumscore').innerHTML=parseInt(hDisplay)

			}
					 
					 
					  
				

					  var hcellSeven=parseInt(document.getElementById('hcumscore').value||0)
				 		  if(hcellSeven>=75){
					document.getElementById('hgrades').innerHTML="A+"
					document.getElementById('hremarks').innerHTML="Excellent"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					  if(hcellSeven<=74){
					document.getElementById('hgrades').innerHTML="A"
					document.getElementById('hremarks').innerHTML="V.Good"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					   if(hcellSeven<=69){
					document.getElementById('hgrades').innerHTML="B"
					document.getElementById('hremarks').innerHTML="Good"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					  if(hcellSeven<=59){
					document.getElementById('hgrades').innerHTML="C"
					document.getElementById('hremarks').innerHTML="Average"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					   if(hcellSeven<=49){
					document.getElementById('hgrades').innerHTML="D"
					document.getElementById('hremarks').innerHTML="B.Average"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					  if(hcellSeven<=44){
					document.getElementById('hgrades').innerHTML="E"
					document.getElementById('hremarks').innerHTML="Pass"
					document.getElementById('hremarks').style.color="blue"
					document.getElementById('hgrades').style.color="blue"
					document.getElementById('hcumscore').style.color="blue"
					  }
					  if(hcellSeven<=39){
					document.getElementById('hgrades').innerHTML="F"
					document.getElementById('hgrades').style.color="red"
					document.getElementById('hremarks').innerHTML="Fail"
					document.getElementById('hremarks').style.color="red"
					document.getElementById('hcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}

		//physical calculation
		function enterPhysical(){
	window.onkeypress=function(event){
		if(event.keyCode==13){
				//for french
			var pcellOne=parseInt(document.getElementById('p1').value||0)
			  //display font color
			if(pcellOne<=5){
				document.getElementById('p1').style.color='red';

			} 
			if(pcellOne>=5){
				document.getElementById('p1').style.color='blue';

			} 

			  var pcellTwo=parseInt(document.getElementById('p2').value||0)
			  //display font color
			if(pcellTwo<=5){
				document.getElementById('p2').style.color='red';

			} 
			if(pcellTwo>=5){
				document.getElementById('p2').style.color='blue';

			} 
			var pcellThree=parseInt(document.getElementById('p3').value||0)
			  //display font color
			if(pcellThree<=5){
				document.getElementById('p3').style.color='red';

			} 
			if(pcellThree>=5){
				document.getElementById('p3').style.color='blue';

			} 
			var pcellFour=parseInt(document.getElementById('p4').value||0)
			  //display font color
			if(pcellFour<=39){
				document.getElementById('p4').style.color='red';

			} 
			if(pcellFour>39){
				document.getElementById('p4').style.color='blue';

			} 
			
			 //basic calculation
				var pTotal=pcellOne+pcellTwo+pcellThree+pcellFour 
					 
					document.getElementById('ptotal').innerHTML=parseInt(pTotal)
					if(pTotal<=39){
				document.getElementById('ptotal').style.color='red';

			} 
			if(pTotal>39){
				document.getElementById('ptotal').style.color='blue';

			} 

					var pcellFive=parseInt(document.getElementById('ptotal').value||0)

					 var pcellSix=parseInt(document.getElementById('pcumm').value||0)
					 	if(pcellSix<=39){
				document.getElementById('pcumm').style.color='red';

			} 
			if(pcellSix>39){
				document.getElementById('pcumm').style.color='blue';

			}
			if(pcellSix==0){
				 var pDivide=pcellFive+pcellSix
					 var displayPscore=pDivide/1
					 var pDisplay=displayPscore.toFixed();
					 document.getElementById('pcumscore').innerHTML=parseInt(pDisplay)

			}else{
				var pDivide=pcellFive+pcellSix
					 var displayPscore=pDivide/2
					 var pDisplay=displayPscore.toFixed();
					 document.getElementById('pcumscore').innerHTML=parseInt(pDisplay)

			}
					 
					 
					  
				

					  var pcellSeven=parseInt(document.getElementById('pcumscore').value||0)
				 		  if(pcellSeven>=75){
					document.getElementById('pgrades').innerHTML="A+"
					document.getElementById('premarks').innerHTML="Excellent"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					  if(pcellSeven<=74){
					document.getElementById('pgrades').innerHTML="A"
					document.getElementById('premarks').innerHTML="V.Good"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					   if(pcellSeven<=69){
					document.getElementById('pgrades').innerHTML="B"
					document.getElementById('premarks').innerHTML="Good"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					  if(pcellSeven<=59){
					document.getElementById('pgrades').innerHTML="C"
					document.getElementById('premarks').innerHTML="Average"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					   if(pcellSeven<=49){
					document.getElementById('pgrades').innerHTML="D"
					document.getElementById('premarks').innerHTML="B.Average"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					  if(pcellSeven<=44){
					document.getElementById('pgrades').innerHTML="E"
					document.getElementById('premarks').innerHTML="Pass"
					document.getElementById('premarks').style.color="blue"
					document.getElementById('pgrades').style.color="blue"
					document.getElementById('pcumscore').style.color="blue"
					  }
					  if(pcellSeven<=39){
					document.getElementById('pgrades').innerHTML="F"
					document.getElementById('pgrades').style.color="red"
					document.getElementById('premarks').innerHTML="Fail"
					document.getElementById('premarks').style.color="red"
					document.getElementById('pcumscore').style.color="red"
					  }
					    


			 
		}
	}	 
		 
		}



		function numbersOnly(input){
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}

function genPDF(){
       var doc=new jsPDF();
       doc.fromHTML($('#resultbot').get(0), 20, 20,{
       	'width':500
       });
       doc.save('test.pdf')

       
    }