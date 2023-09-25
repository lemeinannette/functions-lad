function distanceFromHqInBlocks(blockNumber) {
    const hq = 42; 
    return Math.abs(blockNumber - hq); 
  }
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, end) {
    if (start < end){
      return (end - start) * 264
    } else {
      return (start - end) * 264
    }
  }
  function calculatesFarePrice(startBlock, endBlock) {
      const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
      let calculatedFare;
      if (feetTravelled <= 400) { //if feet travelled is less that 400 feet
          return 0; //fare is free
          } else if (feetTravelled > 400 && feetTravelled <= 2000) { //if feet is more than 400 but less than 2000 feet
          return (feetTravelled - 400) * 0.02; // fare is gonna be feet travelled * 2 cents
          } else if (feetTravelled > 2000 && feetTravelled <= 2500) { // if feet is more than 2000 feet but less than 2500
          return 25 ; // fare is gonna be 25 dollars
          } else {
        calculatedFare = "cannot travel that far"; // feet is more than 2500, not applicable 
      }
       return calculatedFare;
  }