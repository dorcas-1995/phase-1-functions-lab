// Code your solution in this file!

const hq = 42;
const distanceFromHqInBlocks = (pickUpLocation) => {
  // if (pickUpLocation < 42) {
  //   return hq - pickUpLocation
  // } else {
  //   return pickUpLocation - 42
  // }
  return pickUpLocation > 42 ? pickUpLocation - 42 : hq - pickUpLocation;
};

const distanceFromHqInFeet = (pickUpLocation) => {
  return distanceFromHqInBlocks(pickUpLocation) * 264;
};

const distanceTravelledInFeet = (start, destination) => {
  return destination > start
    ? (destination - start) * 264
    : (start - destination) * 264;
};

const calculatesFarePrice = (start, destination) => {
  let charges;

  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, destination) >= 400 &&
    distanceTravelledInFeet(start, destination) <= 2000
  ) {
    charges = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  } else if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) <= 2500
  ) {
    charges = 25;
  } else {
    return "cannot travel that far";
  }
  return charges;
};
