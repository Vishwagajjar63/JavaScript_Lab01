// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- userName for the name field

- generateButton for the button
- storyParagraph for the paragraph that outputs the final story
*/
var userName = document.getElementById("customname");
var generateButton = document.querySelector(".randomize");
var storyParagraph = document.querySelector(".story");

/* STEP 3: Create the variable that contains the story string that will be modified 
- use var storyTemplate to contain the following:
'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
*/
var storyTemplate = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create three arrays, characterX, locationY, and actionZ, assigning them the following array values respectively:
Donald Trump, Jackie Chan, Santa Claus
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/
var characterX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var locationY = ['Area 51', 'Death Valley', 'Aruba'];
var actionZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: Have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete generateStory() function below */
function generateStory() {
    // STEP 7: Create a new variable called updatedStory and 
    // set it to the value of storyTemplate - we don't want to overwrite the original story!
    var updatedStory = storyTemplate; 

    /* STEP 8: Use the randomValueFromArray() function to generate a value for 
    each of three new variables - xElement, yElement, and zElement
    Call up the function and for each variable, pass it the array from 
    which to grab a random string */
    var xElement = randomValueFromArray(characterX); 
    var yElement = randomValueFromArray(locationY); 
    var zElement = randomValueFromArray(actionZ);

    /* STEP 9: Replace the three placeholders in the updatedStory 
    string — :insertx:, :inserty:, and :insertz: — with the strings stored in 
    xElement, yElement, and zElement. Each time, be sure to update the variable updatedStory 
    (with =). You might need to do one of the above replacements twice! */
    updatedStory = updatedStory.replace(':insertx:', xElement);  
    updatedStory = updatedStory.replace(':inserty:', yElement);  
    updatedStory = updatedStory.replace(':insertz:', zElement); 

    /* STEP 10: If the user has typed a name in the userName field, replace the name 'Bob' in the story with whatever they typed */
    var userInputName = document.getElementById('customname').value;  // Get the value from the custom name field

    if(userInputName) {  // If the user has typed something in the input field
        updatedStory = updatedStory.replace('Bob', userInputName);  // Replace 'Bob' with the custom name
    }

    /* STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story */
    if (document.getElementById("metric").checked) {
        // STEP 11a: Create a variable called weightInKg and convert the 300lbs to kgs (1lb = 0.453592kg)
        var weightInKg = 300 * 0.453592;

        // STEP 11b: Replace the string 300 pounds with the updated weight in kg
        updatedStory = updatedStory.replace('300 pounds', weightInKg.toFixed(1) + ' kg'); 
    }

    // STEP 12a: Create a variable called tempInCelsius and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9
    if (document.getElementById("metric").checked) {
        var tempInCelsius = (94 - 32) * 5 / 9;

        // STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
        updatedStory = updatedStory.replace('94 fahrenheit', tempInCelsius.toFixed(1) + ' celsius');
    }

    /* STEP 13: Make the textContent property of the storyParagraph variable (which references the paragraph) equal to updatedStory */
    storyParagraph.textContent = updatedStory;

    // The following line makes the paragraph visible
    storyParagraph.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the generateButton variable 
so that when the button it represents is clicked, the generateStory() function is run. */
generateButton.addEventListener("click", generateStory); 
