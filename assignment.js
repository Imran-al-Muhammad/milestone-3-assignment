function feetToMile(feet){
    if(feet<0){
        var warningMessage = "The value of distance can't be negative";
        return warningMessage;
    }
    else{
        var mile = feet/5280;
        return mile;
    }
}
var result_1 = feetToMile(-1);
console.log(result_1);





function woodCalculator(chair, table, bed){
    if(chair<0 || table<0 || bed<0){
        var warningMessage = "None of the value can't be negative";
        return warningMessage;
    }
    else{
        var totalCubicFeetWood = (chair + 3*table + 5*bed);
        return totalCubicFeetWood;
    }
}
var result_2 = woodCalculator(-2,2,2);
console.log(result_2);






function brickCalculator(buildingTola){
    if(buildingTola < 0){
        var warningMessage = "Building information is not correct";
        return warningMessage;
    }
    else if(buildingTola <= 10){
        var totalBricks = buildingTola*15*1000;
        return totalBricks;
    }
    else if(buildingTola <= 20){
        var totalBricks = (10*15 + (buildingTola-10)*12)*1000;
        return totalBricks;
    }
    else{
        var totalBricks = (10*15 + 10*12 + (buildingTola-20)*10)*1000;
        return totalBricks;
    }
}
var result_3 = brickCalculator(33);
console.log(result_3);





function tinyFriend(friendListArray){
    var smallestName = friendListArray[0];
    for(i =0 ; i <= friendListArray.length; i++){
        var currentName = friendListArray[i];
        if(currentName.length < smallestName.length){
            smallestName = currentName;
        }
    }
    return smallestName;
}
