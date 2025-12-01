onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(1, 255),randomNumber(1, 255),randomNumber(1, 255),0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/OsamaSon---Function.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXhJ1lcSZXiuAGBXT6Ln3Fh90rcAdZpVApA&s");
});
