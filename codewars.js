
// returns the final grade of a student based on exam score and number of projects completed

function finalGrade (exam, projects) {
    let result;
     if (exam > 90 || projects > 10) {
        result = 100;
     } else if 
        (exam > 75 && projects >= 5) {
        result = 90;
      } else if 
        (exam > 50 && projects >= 2) {
        result = 75; 
       } else 
        result = 0;
  return result
  }


//  Description:
//  Clock shows h hours, m minutes and s seconds after midnight.

function past(h, m, s){
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  }

  
//  Write a function to split a string and convert it into an array of words.
  function stringToArray(string){
    return string.split(' ')
  
  }

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//   Examples:
  
//   solution('abc', 'bc') // returns true
//   solution('abc', 'd') // returns false

  function solution(str, ending){
    return str.endsWith(ending);
  }


//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.
  

function validatePIN (pin) {
    if((pin.length === 4 || pin.length === 6) && +pin !== 'NaN' && Number.isInteger(+pin)){
      console.log(+pin)
      return true
    }
    return false
  }