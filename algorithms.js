/** TIME CONVERSION 
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
 * Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 */
function timeConversion(s) {
  let period = s.slice(-2);
  let hours = s.slice(0, 2);
  let digitalTime = s.slice(2, 8);
  if (period == 'PM' && hours != 12) {
    hours = Number(hours) + 12;
  }
  if (period == 'AM' && hours == 12) {
    hours = '00';
  }
  return hours + digitalTime;
}

/**
 *  BREAKING RECORDS
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 * Given Maria's scores for a season, find and print the number of times 
 * she breaks her records for most and least points scored during the season.
 */
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      minCount += 1;
      min = scores[i]
    }
    if (scores[i] > max) {
      maxCount += 1;
      max = scores[i];
    }
  }
  const ansArr = [];
  ansArr.push(maxCount, minCount);
  return ansArr;
}


/**
 * GRADING STUDENTS
 * Sam is a professor at the university and likes to round each student's  according to these rules:
 * If the difference between the score and the next multiple of 5 is less than 3, round  up to the next multiple of 5. 
 * If the value of  is less than 38, no rounding occurs as the result will still be a failing grade.
 */
function gradingStudents(grades) {
  const finalGrades = grades.map(value => value < 38 ? value : value % 5 == 3 ? value + 2 : value % 5 == 4 ? value + 1 : value);
  return finalGrades;
}


/**
 * BIRTHDAY CAKE CANDLES
 * You are in charge of the cake for your niece's birthday
 * and have decided the cake will have one candle for each year of her total age.
 * When she blows out the candles, she’ll only be able to blow out the tallest ones.
 * Your task is to find out how many candles she can successfully blow out.
 */
function birthdayCakeCandles(ar) {
  const largestNumber = Math.max(...ar);
  const candlesBlown = ar.filter(val => val == largestNumber);
  return candlesBlown.length;
}


/**
 * MIGRATORY BIRDS
 * Complete the migratoryBirds function in the editor below. 
 * It should return the lowest type number of the most frequently sighted bird.
 */
function migratoryBirds(arr) {
  const val = arr.reduce((acc, val) => {
    if (val in acc) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
  const freq = Math.max(...Object.values(val));
  const ans = Object.keys(val).sort((a, b) => a - b).find(x => val[x] == freq);
  return ans[0];
}