/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
function bottlesOfBeer(bottles) {
    var bottleSong = "";
    var bottleSongFirst = " bottles of beer on the wall, \n";
    var bottleSongSecond = " bottles of beer! \n";
    var bottleSongThird = "Take one down, pass it around, \n";
    var bottleSongLast = " bottles of beer on the wall! \n\n";
    for(i = bottles; i >= 2; i--) {                                                   //Main song logic
        bottleSong += i + bottleSongFirst + i + bottleSongSecond + bottleSongThird;
        if (i - 1 === 1) {
            bottleSong += "1 bottle of beer on the wall \n\n";
        }
        else {
            bottleSong += (i - 1) + bottleSongLast;
        }
    }
    bottleSong += "1 bottle of beer on the wall, \n" +"1 bottle of beer,\n" + "Take one down, pass it around, \n" +"No bottles of beer on the wall!\n\n";
    //The special case of 1 bottle of beer
    bottleSong += "No bottles of beer on the wall,\n" + "no bottles of beer\n"+"Take one down, pass it around, \n" + "No bottles of beer on the wall!";
    //The special case of no bottles of beer on the wall
    return bottleSong;
};
