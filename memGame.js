window.onload = function (){
  var clicks = 0;
  var colors= ['blue','blue','red','red','green','green','black','black','purple','purple','yellow','yellow','pink','pink','cyan','cyan','brown','brown','orange','orange'];
  var newColors = [];
  while (colors.length > 0){
  var random = Math.floor(Math.random()*colors.length);
  newColors.push(colors[random]);
  colors.splice(random,1);
}
  var newGAme = document.querySelector('button'); 
  newGAme.addEventListener('click',fresh);
  function fresh() {
  document.location.reload();
}
  var revealColor = document.querySelector('.cards');
  revealColor.addEventListener('click',reveal);
  function reveal(){
      revealColor.style.background = newColors[0];
      console.log(clicks);   
 }
  console.log(revealColor);
  console.log(newColors);
  

}