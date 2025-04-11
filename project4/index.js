// let's take all variable here

const addEntryButton = document.getElementById('add-entry')
const calorieCounter = document.getElementById('calorie-counter')
const entryDropdown = document.getElementById('entry-dropdown')
const budget = document.getElementById('budget')
const output = document.getElementById('output')
let isError = false;

// check input 

function cleanInputString(str){
  const regex = /[+-/s]/g;
  return str.replace(regex,'')
}

function isInvalid(str){
  const regex = /\d+e\d+/i;
  return str.match(regex);
}



// show input function
function showInputField(){
const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
const entryNumber = targetInputContainer.querySelectorAll('input[type = "text"]').length + 1;
const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}
// show result function 

function showResult(e){
e.preventDefault();
isError = false;

const breakfastNumberInput = document.querySelectorAll('#breakfast input[type = "number"]');
const lunchNumberInput = document.querySelectorAll('#lunch input[type = "number"]');
const dinnerNumberInput = document.querySelectorAll('#dinner input[type = "number"]');
const snacksNumberInput = document.querySelectorAll('#snacks input[type = "number"]');
const exerciseNumberInput = document.querySelectorAll('#exercise input[type = "number"]');
 
const breakfastCalories = getCaloriesFromInput(breakfastNumberInput);
const lunchCalories = getCaloriesFromInput(lunchNumberInput);
const dinnerCalories = getCaloriesFromInput(dinnerNumberInput);
const snacksCalories = getCaloriesFromInput(snacksNumberInput);
const exerciseCalories = getCaloriesFromInput(exerciseNumberInput);
const budgetCalories = getCaloriesFromInput([budget])

if(isError){
  return;
}

const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}

// get calories from input

function getCaloriesFromInput(list){
  let calories = 0;
  for(const item of list){
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalid(currVal);

    if(invalidInputMatch){
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal)
  }
 return calories;
}

// click event

addEntryButton.addEventListener('click', showInputField)
calorieCounter.addEventListener('submit', showResult)