The function cubeChecker takes in two parameters: volume and side.
first check if either volume or side is less than or equal to 0, which would make the input invalid. If either input is invalid, we return false.
calculate the volume of a cube using the formula side * side * side, which is the same as side ** 3.
compare the volume of the given cuboid (volume) with the volume of a cube (cubeVolume). If they are equal, we return true because the given cuboid could have equal sides. Otherwise return false