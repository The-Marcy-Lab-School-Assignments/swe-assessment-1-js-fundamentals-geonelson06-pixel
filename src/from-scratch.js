/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log("Missing information. Please provide a valid pet.");
    return;
  }

  if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log("What an...interesting pet.");
  }

};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // If the string is empty, do nothing
  if (str === "") {
    return;
  }

  // Loop through each character
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toUpperCase() + "!");
  }

};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Initialize counters
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else {
      neither++;
    }
  }

  // Return the counts as an object
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    neither: neither
  };
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedyGnomes = [];

  for (let i = 0; i < gnomes.length; i++) {
    const gnome = gnomes[i];
    if (gnome.stolenDecorations.length > 1) {
      greedyGnomes.push(gnome.name);
    }
  }

  return greedyGnomes;

};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
