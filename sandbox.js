window.onload = function(){

  // referencing span tag
  var span = document.querySelector("span");

  // referencing button tag
  var button = document.querySelector("button");

  // referencing body tag
  var body = document.querySelector("body");

  // defining hexadecimal values by one in an array
  var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  // making an event listener for click event
  button.addEventListener("click", function(){
    var hex = "#";
    for(var i = 0; i < 6; i++){
      // defining hexcolorindex as the index of random item in hexValues array
      var hexColorIndex = Math.floor(Math.random() * hexValues.length);

      // appending iz to hex variable 6 times, as long as i is less than 6
      hex += hexValues[hexColorIndex];
    }

    span.textContent = hex;
    body.style.backgroundColor = hex;
  });


}
