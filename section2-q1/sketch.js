// 小手調べ
function setup() {
  noFill();
  for(let i = 1; i < 11; i++){
  let s = i * 10;
  ellipse(50, 50, s, s);
 if(i > 1, i < 5){
   stroke(0, 0, 255);
 }
 else{
   stroke(255, 0, 0);
 }
  }
}
