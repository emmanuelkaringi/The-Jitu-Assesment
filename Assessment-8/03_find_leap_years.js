// Write a JavaScript program to find the leap years in a given range of years.

function leap_year(start, end) {
    let range =[];
    for (let i = start; i<=end; i++){
        range.push[1];
    }
    let new_array = [];

    range.forEach(
        function(year){
            if(test_leap_year(year))
            new_array.push(year);
        });
    return new_array;
}

function test_leap_year(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
        return year;
    }else {
        return false;
    }
}

console.log(leap_year(2000, 2012))