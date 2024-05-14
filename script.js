// Exercise 2.1 create a expression function for checking if a number is even
function checkEven(number) {
  if (number % 2 == 0) {
    console.log(number + " เป็นเลขคู่");
  } else {
    console.log(number + " เป็นเลขคี่");
  }
}
checkEven(3);
checkEven(2);

//  Exercise 2.2 converts the function from Exercise 2.1 into an arrow function

const checkEvenArrow = (number) => {
  if (number % 2 == 0) {
    console.log(number + " เป็นเลขคู่");
  } else {
    console.log(number + " เป็นเลขคี่");
  }
};
checkEvenArrow(3);
checkEvenArrow(4);

const checkEvenArrow2 = (number) =>
  number % 2 == 0
    ? console.log(number + " เป็นเลขคู่")
    : console.log(number + " เป็นเลขคี่");
checkEvenArrow2(5);
checkEvenArrow2(2);
