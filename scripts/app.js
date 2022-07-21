function hello() {
  console.log('Sergio Inzunza');
}

function sayHello(name) {
  let lastName = 'Inzunza';
  console.log('Hello ' + name + ' ' + lastName + '!!');

  {
    let x = 1123;
    var y = 123;
  }

  // x does not exist here
  // but y does
}

function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function exec1() {
  // print numbers from 0 to 20
  // except 7 and 13
  for (let i = 0; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }

  let name = '';
  // show an error if name is empty
  if (!name) {
    console.error('Name is required');
  }
}

function exce2() {
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];

  // A - print every number in the array
  // B - sum  all the numbers and print the results
  // C - print every negative number
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    console.log(item);
    total = total + item;

    if (item < 0) {
      console.log('Is negative', item);
    }
  }

  // HACKER RANK
  // print total
  console.log(total);
}

function init() {
  console.log('Intro page!');

  hello();

  let myName = 'Sergio';
  sayHello(myName); // Hello Sergio!!

  let res = sum(21, 21); // console log 42
  console.log(res);

  exec1();

  exce2();
}

window.onload = init;
