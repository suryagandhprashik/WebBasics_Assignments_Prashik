// Implement following assignment using find, filter, map, reduce methods with arrow function(do not use annonymous functions)

// Consider following Book Price Array
// [567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9]

// 1. Find all prices less than 500
// 2. Find the first price greater than 600
// 3. Find all prices between 500 and 600
// 4. Display sum of all prices
// 5. Display sum of all prices but initial value of sum should be 100
// 6. Double every price from array and display new prices
// 7. Display sum of prices which are less than 500

// Consider following Book Names Array
// ['Learn Java','Basics of Python','Advanced java Concepts','Web Basics', 'Easy learnng Python', 'Web Fundamentals', 'JAVA fundamentals']

// 1. Find all books starting with 'Web'  : ['Web Basics','Web Fundamentals']
// 2. Find all books which are related to Java :['Learn Java', 'Advanced java Concepts','JAVA fundamentals']
// 3. Prepend 'Neo-' to every Book Name and Display new book name
// 4. Display sum of length of every bookname




const bookPrices = [567.58, 345.40, 767.45, 567.68, 600, 400, 230, 450, 350.50, 560.40, 800.56, 890.9];

// 1. Find all prices less than 500
const pricesLessThanFiveHundres = bookPrices.filter(price => price < 500);
document.getElementById("Q1").innerHTML = "All prices less than five hundred "+pricesLessThanFiveHundres;
console.log(pricesLessThanFiveHundres);

// 2. Find the first price greater than 600
const firstPriceGreaterThanSixHundred = bookPrices.find(price => price > 600);
document.getElementById("Q2").innerHTML = " first price greater than six hundred "+firstPriceGreaterThanSixHundred;
console.log(firstPriceGreaterThanSixHundred);

// 3. Find all prices between 500 and 600
const pricesBetween = bookPrices.filter(price => price >= 500 && price <= 600);
document.getElementById("Q3").innerHTML = " prices between 500 and 600 = "+pricesBetween;
console.log(pricesBetween);

// 4. Display sum of all prices
const sumOfPrice = bookPrices.reduce((sum, price) => sum + price, 0);
document.getElementById("Q4").innerHTML = " Display sum of all price = "+sumOfPrice;
console.log(sumOfPrice);

// 5. Display sum of all prices but initial value of sum should be 100
const sumWithInitialValue = bookPrices.reduce((sum, price) => sum + price, 100);
document.getElementById("Q5").innerHTML = " sum of all prices but initial value of sum should be 100 = "+sumWithInitialValue;
console.log(sumWithInitialValue);

// 6. Double every price from array and display new prices
const doublePrice = bookPrices.map(price => price * 2);
document.getElementById("Q6").innerHTML = " Double every price from array = "+doublePrice;
console.log(doublePrice);

// 7. Display sum of prices which are less than 500
const lessThanFiveHundred = bookPrices.reduce((sum, price) => {
  if (price < 500) {
    return sum + price;
  }
  return sum;
}, 0);
document.getElementById("Q6").innerHTML = " sum of prices which are less than 500 = "+lessThanFiveHundred;
console.log(lessThanFiveHundred);


// ################################################################################################# 

const bookNames = ['Learn Java', 'Basics of Python', 'Advanced java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals'];

// 1. Find all books starting with 'Web'  : ['Web Basics','Web Fundamentals']
const startingWeb = bookNames.filter(name => name.startsWith('Web'));
document.getElementById("Q7").innerHTML = " all books starting with 'Web' = "+startingWeb;
console.log(startingWeb);

// 2. Find all books which are related to Java :['Learn Java', 'Advanced java Concepts','JAVA fundamentals']
const javaBooks = bookNames.filter(name => name.toLowerCase().includes('java'));
document.getElementById("Q8").innerHTML = " all books which are related to Java = "+javaBooks;
console.log(javaBooks);

// 3. Prepend 'Neo-' to every Book Name and Display new book name
const neoNames = bookNames.map(name => 'Neo-' + name);
document.getElementById("Q9").innerHTML = " Prepend 'Neo-' to every Book Name = "+neoNames;
console.log(neoNames);

// 4. Display sum of length of every bookname
const sumOfBookLengths = bookNames.reduce((sum, name) => sum + name.length, 0);
document.getElementById("Q10").innerHTML = " sum of length of every book name = "+sumOfBookLengths;
console.log(sumOfBookLengths);