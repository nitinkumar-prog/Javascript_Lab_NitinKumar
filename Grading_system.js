console.log("=== 12th Exam Grading System ===");


let sub1 = 12;
let sub2 = 60;
let sub3 = 80;
let sub4 = 90;

if (sub1 < 33 || sub2 < 33 || sub3 < 33 || sub4 < 33) {
  console.log("Result: FAIL");
} else {
  let total = sub1 + sub2 + sub3 + sub4;
  console.log("Total Marks:", total);

  if (total >= 300 && total <= 400) {
    console.log("Division: First Division");
  } else if (total >= 200 && total < 300) {
    console.log("Division: Second Division");
  } else {
    console.log("Division: Third Division");
  }
}