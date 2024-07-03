function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(
    fullName("tharsan","thavanesan")
)


// second question
var para="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(
    para
)

// Q. no3
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Q. No 4
const sentence = `There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool`;

// Convert the sentence to lower case to ensure case insensitivity
const lowerCaseSentence = sentence.toLowerCase();

// Split the sentence into words
const words = lowerCaseSentence.split(/\W+/);

// Filter out the occurrences of the word "and"
const andCount = words.filter(word => word === "and").length;

console.log(`The word "and" appears ${andCount} times.`);



    const books = [ 
        {
         title: "To Kill a Mockingbird",
         author: "Harper Lee", 
         genre: "Fiction",
         pages: 336, 
         publication_year: 1925, 
        }, 
        { 
        title: "1984", 
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328, 
        publication_year: 1949,
         }, 
        {
         title: "Pride and Prejudice", 
         author: "Jane Austen",
         genre: "Romance",
         pages: 432, 
         publication_year: 1813,
         }, 
        {
         title: "The Great Gatsby",
         author: "F. Scott Fitzgerald", 
         genre: "Classic", 
         pages: 180,
         publication_year: 1925,
         },
         ];


        //  Q no 12 filter 
        const filterBooksByPage = books.filter((books) => {
            return books.pages > 100;
        });
        console.log(filterBooksByPage);


        // Q no 13 filter
        const filterbook = books.filter((books) => {
            return books.pages < 200;
        });
        console.log(filterbook);
       



        // q no 13
        const greets = name => {
            console.log(`welcome ${name} to the team?`)

          };
          console.log(greets('Ran')); // "Welcome Ryan to the team?"
          console.log(greets('Sara')); // "Welcome  Sara to the team?"


        // q no 14
        const litres= time => {
            const water = time *0.5;
            return Math.floor(water);
        };
        console.log(litres(0)); // 0
        console.log(litres(2)); // 1
        console.log(litres(1.4)); // 0


        // q no 15
        const positiveSum = arr => {
            return arr.reduce((num,sum)=>{
                return num>0 ?num+sum:sum;
            },0)

          };
          
          console.log(positiveSum([1, 2, 3, 4, 5])); // 15
          console.log(positiveSum([1, -2, 3, 4, 5])); // 13
          console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
          console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
          console.log(positiveSum([])); // 0


        //   q no 16
        function calculateBMI(weight, height) {
            
            let bmi = weight / (height * height);
            
            
            let weightGroup;
            if (bmi < 18.5) {
                weightGroup = 'Underweight';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                weightGroup = 'Normal weight';
            } else if (bmi >= 25 && bmi <= 29.9) {
                weightGroup = 'Overweight';
            } else {
                weightGroup = 'Obese';
            }
        
            return {
                bmi: bmi.toFixed(2),
                weightGroup: weightGroup
            };
        }
        
        
        let weight = 70;  
        let height = 1.75;  
        
        let result = calculateBMI(weight, height);
        console.log(`BMI: ${result.bmi}, Weight Group: ${result.weightGroup}`);
        



// part 2 
    // condition

         // Q no 1
         function numberType(number){
            return number>0 ? "positive":number<0 ? "negative":"zero"

         };
         let number=1;
         let Result = numberType(number);
         console.log(`the number ${number} is ${Result}`);

        //  q no 2
        function checkNumber(Number){
            return number % 2 === 0 ? "even": "odd";
        }
        let Number= 10;
        
        console.log(
            `the number ${Number} is ${checkNumber(Number)}`
        );

        // Q no 3
        function greatnumber(num1,num2){
            return num1 > num2 ?num1:num2;
        }
        let num1 = 20;
        let num2 = 30;
        let results = greatnumber(num1, num2);
        console.log(
            `the greater number is ${results}`
        )

        // Q no 4 
        function ticketPrice(age){
            return age < 12 ? 5: age < 18 ? 10: age < 60 ? 20 : 15;
        }
        let age1 = 10;
        let age2 = 15;
        let age3 = 30;
        let age4 = 65;

        console.log(`The ticket price for age ${age1} is $${ticketPrice(age1)}.`);
        console.log(`The ticket price for age ${age2} is $${ticketPrice(age2)}.`);
        console.log(`The ticket price for age ${age3} is $${ticketPrice(age3)}.`);
        console.log(`The ticket price for age ${age4} is $${ticketPrice(age4)}.`);

        // Q no 5
        function isLeapYear(year) {
            return (year % 4 === 0) ? 
                ((year % 100 === 0) ? 
                    ((year % 400 === 0) ? true : false) 
                    : true) 
                : false;
        }
        
        // Example usage:
        let year1 = 2000;
        let year2 = 1900;
        let year3 = 2024;
        let year4 = 2023;
        
        console.log(`${year1} is a leap year: ${isLeapYear(year1)}`);
        console.log(`${year2} is a leap year: ${isLeapYear(year2)}`);
        console.log(`${year3} is a leap year: ${isLeapYear(year3)}`);
        console.log(`${year4} is a leap year: ${isLeapYear(year4)}`);
        
        // Q no 6
        
        

          
  
