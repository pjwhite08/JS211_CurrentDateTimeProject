// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const convertToString = () => {
  const newString = document.getElementById("numberToConvert").value.toString();
  console.log("This is now a string: " + newString + typeof newString)
  document.getElementById("displayElementString").innerHTML = newString ;
}

// // Write a JavaScript program to convert a string to the number.
const convertToNumber = () => {
 const newNumber = Number(document.getElementById("stringToConvert").value);
 console.log("This is now a number: " + newNumber + typeof newNumber)
  document.getElementById("displayElementNumber").innerHTML = newNumber ;
}

// // Write a JavaScript program that takes in different datatypes and prints out whether they are 

const tellType = () => {
  const type = typeof document.getElementById("inputTextNumber").value;
  document.getElementById("displayElementType").innerHTML = type;
}
// The tellType function above always responds with string when rendered in the DOM, so...
const tellType2 = (x) => {
  const type = typeof x
  return type
}
console.log(tellType2(true))
console.log(tellType2(3))


// // Write a JavaScript program that adds 2 numbers together.
const findSum = (num1, num2) => {
  num1 = Number(document.getElementById("inputFirstNumber").value);
  num2 = Number(document.getElementById("inputSecondNumber").value);
  const num3 = num1 + num2
  document.getElementById("displaySum").innerHTML = num3;
}

// Write a JavaScript program that runs only when 2 things are true.
// // Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true. 
  //I think this last instruction was to get us to use the inequality operator, but if I put these all together, the "else" functions the same way
const areTrue = (input1, input2) => {
  input1 = Number(document.getElementById("inputAny1").value);
  input2 = Number(document.getElementById("inputAny2").value);
  if (input1 > 0 && input2 > 0) {
    document.getElementById("displayTrue").innerHTML =  ("Those are both positive")
  }
  else if (input1 > 0 || input2 > 0) {
    document.getElementById("displayTrue").innerHTML =  ("At least one is positive")
  }
  else {
    document.getElementById("displayTrue").innerHTML =  ("Neither are positive")
  }
}

// This is what I originally had for the final instruction: Write a JavaScript program that runs when both things are not true. 
//I read it as Boolean true or false (truthy or falsey?), so when I tried to render it to the DOM, it didn't make sense because the inputs were all strings.
const notTrue = (input1, input2)  => {
  if (input1 != true && input2 != true) {return "Those are not true"}
}
console.log(notTrue(null, "pamela"))

// // ***************************
// //         PART TWO
// // ***************************

// // 1. download Live-Server by Ritwick Dey, 
// // 2. reload VS Code, 
// // 3. click the "Go Live" button
// // 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// // 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// // 6. go to `index.html` 
// // 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// // Additional Resources
// // Video1: https://player.vimeo.com/video/377147232
// // Video2: https://www.youtube.com/embed/bkvH28PXLWc
// // Video3: https://www.youtube.com/embed/TrGI9Yki-24
