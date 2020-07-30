// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var a=(function(single_name){
  var helloSpeaker={};
  helloSpeaker.name=single_name;
var speakWord = "Hello";
 helloSpeaker.speak= function(single_name) {
  console.log(speakWord + " " + single_name);
  }
window.helloSpeaker=helloSpeaker;
})(name);
