
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var amrmeter = kilometerToMeter(56);
console.log(amrmeter)




function budgetCalculator(clock,phone,laptop){
    var result = clock*50+phone*100+laptop*500;
    return result;
}
var kinbo = budgetCalculator(10,50,30);
console.log(kinbo)


function hotelCost(day){
    var rent = 0;
    if(day<=10){
        rent = day*100;
    }else if (day<=20){
        var firstPart = 10*100;
        var remaining = day-10;
        var secondPart = remaining*80;
        rent = firstPart + secondPart; 
    }else {
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day-20;
        var thirdPart = remaining*50;
        rent = firstPart + secondPart + thirdPart; 
    }
    return rent ;
}
var cost = hotelCost(60)
console.log(cost)




function megaFriend(name) {
  var long = name[0];
  for (i = 0; i < name.length; i++) {
    if (name[i].length > long.length) {
      long = name[i];
    }
  }
  return long;
}

var bondhu = ["abul", "musfiqur", "shakib"];
console.log(megaFriend(bondhu));
    



