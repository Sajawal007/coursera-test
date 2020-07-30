// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var a=(function (single_name){
  var byeSpeaker={};
  byeSpeaker.single_name=single_name;
  console.log(single_name.length);
var speakWord = "Good Bye";
  byeSpeaker.speak=function(single_name) {
  console.log(speakWord + " " + single_name);
}
window.byeSpeaker=byeSpeaker;
})(name);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
