function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IemjJnZvD/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);

}

function gotResults(error,results){
 if(
  error
 ){
  console.error(error)

 } 
else{
  console.log (results)
  img1=document.getElementById("image1")
  img2=document.getElementById("image2")
  img3=document.getElementById("image3")
  img4=document.getElementById("image4")

  if(results[0].label=="rickrooled"){
    img1.src="RICKROLLED.gif";
    img2.src="mad_king.jpg"
img3.src="tresure.jpeg"
img4.src="Fortnite_logo.png"
  }
  else if(results[0].label=="hihihiha"){
  img1.src="sorpresa.png";
  img2.src="hihihiha.gif"
img3.src="tresure.jpeg"
img4.src="Fortnite_logo.png" 
  }
  else if(results[0].label=="chest"){
img1.src="sorpresa.png";
img2.src="mad_king.jpg"
img3.src="open_sea.jpeg"
img4.src="Fortnite_logo.png" 
}
else if(results[0].label=="fortinte"){
img1.src="sorpresa.png";
img2.src="mad_king.jpg"
img3.src="tresure.jpeg"
img4.src="Normal_peely.gif"}
}
}
