function distanceFromHqInBlocks(someValue) {
  const initialPoint = 42
  const ReturnVal = Math.abs(someValue - initialPoint);
  return ReturnVal;
}


function distanceFromHqInFeet(someValue) {
 const initialPoint = 42;
 const ReturnVal = Math.abs(someValue-initialPoint) * 264;

 return ReturnVal;
}

 function distanceTravelledInFeet(start, destination) {  
       return Math.abs((destination - start) * 264);
 }

  function calculatesFarePrice(start, destination) {
    let distance  = destination-start *264;

    if(distance < 400){
        return "cannot travel that far";
    }else if(distance-400 > 0 && distance < 2000){
     return (distance-400) * 2;
    }
  }
