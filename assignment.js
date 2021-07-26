

function kilometerToMeter(n){
    return n*1000
}





function budgetCalculator(watch,phone,laptop){
    
    let watCh = watch * 50;
    let phoNe = phone * 100;
    let lapTop = laptop * 500;
    return watCh + phoNe + lapTop;
}




function hotelCost(day){
    let totalCost = 0;
    if (day <=10){
        totalCost =dey * 100
    }else if (day<=20){
        let firstPart = 10 * 100;
        let remaining = day - 10;
        let secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else{
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remaining = day - 20;
        let thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
        return totalCost
    }






function megaFriend(array){
    let result ="";
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if(currentElement.length > result.length){
            result = array[i];
        }
        
    }
    return result
}

