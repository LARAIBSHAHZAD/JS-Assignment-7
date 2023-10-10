// ----------------------------Events-----------------------------\\

// Chapter 46-48

// Question 1 

// function greet() 
// {
//     alert("Hello Users..")
// }

// Question 2 

// Question 3 

// Done

// Question 4 

// function ScrollToTop()
// {
//     window.scrollTo(0, 0);
// }

// Question 5 

// function PlaySound()
// {
//     var audio = new audio('epic-hybrid-logo-157092.mp3');
//     audio.play();
// }

// Question 6 

// Done

// Question 7 

// function button()
// {
//     alert("Welcome Users..")
// }

// Question 8

// Done

// Question 9 

// var playsound = document.getElementById("playButton");

// var audio = document.getElementById("Audio");

// function playSound()
// {
//     audio.play();
// }

// playButton.onclick = playSound;

// Question 10

// function Car()
// {
//     alert("WOW.. Nice Car..")
// }

// Question 11 

// function hideElement(element) 
// {
//     element.style.display = 'none';
// }

// Question 12 

// var newWindow;

// function openNewWindow() 
// {
//     var mouseX = window.event.clientX || 100;
//     var mouseY = window.event.clientY || 100;

//     newWindow = window.open('', '_blank', `width=${mouseX}, height=${mouseY}`);

//     newWindow.document.write('<h1>New Window Content</h1>');
//     newWindow.document.write('<button onclick="closeWindow();">Close Window</button>');
// }

// function closeWindow() 
// {
//     if (newWindow) {
//         newWindow.close();
//     }
// }

// End of chp 46-48

// Chapter 49-50

// Question 1 

// function set()
// {
//     var input = document.getElementById("number");

//     console.log(input.value);
// }

// Question 2 

// function CheckBox()
// {
//     var res = document.getElementById("checkbox");
//     console.log(res.value);
// }

// Question 3 

// function SelectBox()
// {
//     var result = document.getElementById("Select").value;
//     console.log(result);
// }

// Question 4 

// function Submit()
// {
//     var div = document.getElementById("content");

//     console.log(div.value);
// }

// Question 5 

// function checkMaritalStatus() 
// {
//     var married = document.getElementById("maritalStatus").checked;
//     var statusField = document.getElementById("status");

//     if (!married) {
//         statusField.textContent = "available";
//     } else {
//         statusField.textContent = "Married";
//     }
// }

// Question 6 

// var userInput = prompt("Enter a value:");

// if (!userInput) {
//     userInput = "Default Value";
// }
// console.log("Input: " + userInput);

// Question 7

// function RegistrationForm()
// {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var selectbox = document.getElementById("selectBox").value;
//     var checkbox = document.getElementById("CheckBox").value;
//     var file = document.getElementById("file").value;
//     var result = name + email + selectbox + checkbox + file;
//     console.log(result);
// }

// End of chp 49-50