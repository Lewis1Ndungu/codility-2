function cubeChecker(volume, side){
    if(volume <= 0 || side <= 0){ // check for invalid inputs
      return false;
    }
    
    const cubeVolume = side * side * side; // calculate the volume of a cube
    
    if(volume === cubeVolume){ // compare the volume of the given cuboid with the volume of a cube
      return true;
    } else {
      return false;
    }
  }

  
