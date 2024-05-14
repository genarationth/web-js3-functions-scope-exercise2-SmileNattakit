// Exercise 2.1 create a expression function for checking if a number is even
function checkEven(number) {
  if (number % 2 == 0) {
    console.log("เป็นเลขคู่");
  } else {
    console.log("เป็นเลขคี่");
  }
}
checkEven(2);

//  Exercise 2.2 converts the function from Exercise 2.1 into an arrow function

const checkEvenArrow = (number) => {
  if (number % 2 == 0) {
    console.log("เป็นเลขคู่");
  } else {
    console.log("เป็นเลขคี่");
  }
};
checkEvenArrow(4);

