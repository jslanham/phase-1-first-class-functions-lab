// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => {
    let end = drivers.length - 1;
    return drivers.slice(end - 1);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(i){
    return (function (fare){
        return (fare * i);
    })
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers,f){
   return f(drivers);
}
