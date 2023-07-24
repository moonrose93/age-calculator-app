// Get the input fields
const dayInput = document.querySelector('.day input');
const monthInput = document.querySelector('.month input');
const yearInput = document.querySelector('.year input');
const notValid1 =  document.getElementById("not-valid1");
const notValid2 =  document.getElementById("not-valid2");
const notValid3 =  document.getElementById("not-valid3");
const visibilityVisible = document.querySelector('.visible');


// Get the result elements
const yearsResult = document.getElementById('years');
const monthsResult = document.getElementById('months');
const daysResult = document.getElementById('days');

// Calculate age based on input values
function calculateAge() {
    // Clear any previous error messages
    
    // Get the user input values
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value) - 1; // Months in JavaScript are zero-based (0-11)
    const year = parseInt(yearInput.value);

    // Check if any of the input fields are empty or not a number
    if (isNaN(day)){
      notValid1.classList.add("not-valid1")
    }else{
      notValid1.classList.remove("not-valid1")
      notValid1.classList.add("visible")

    }

    if (isNaN(month)){
      notValid2.classList.add("not-valid2")
    }else{
      notValid2.classList.remove("not-valid2")
      notValid2.classList.add("visible")

    }

    if (isNaN(year)){
      notValid3.classList.add("not-valid3")
    }else{
      notValid3.classList.remove("not-valid3")
      notValid3.classList.add("visible")

    }

    // Create the birth date using the user input values
    const birthDate = new Date(year, month, day);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age in milliseconds
    const ageInMilliseconds = currentDate - birthDate;

    // Convert milliseconds to years, months, and days
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const millisecondsPerMonth = millisecondsPerYear / 12;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
    const ageInMonths = Math.floor(ageInMilliseconds / millisecondsPerMonth) % 12;
    const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay) % 30;

    // Display the calculated age
    yearsResult.textContent = ageInYears;
    monthsResult.textContent = ageInMonths;
    daysResult.textContent = ageInDays;
    
    };


