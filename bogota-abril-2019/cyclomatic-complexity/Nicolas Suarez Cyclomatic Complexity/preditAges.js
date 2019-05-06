function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var ages = [age1,age2,age3,age4,age5,age6,age7,age8];
  var sum = 0;
  for(let a of ages){
    sum = sum + a*a;
  }    
  var res  = Math.floor(Math.sqrt(sum) / 2);
  return res;
}

