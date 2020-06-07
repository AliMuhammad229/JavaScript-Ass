                                       // Chapter: 01
                                       // Q: 01
                                       alert("Welcome To My Page!")

                                       // Q: 02
                                       alert("Error! Please enter a valid password")


                                       // Q: 03
                                       alert("Welcome to JS Land...\nHappy Coding!")

                                       // Q: 04
                                       alert("Welcome to JS Land...")
                                       alert("Happy Coding!\nPrevent this page from additional dialogues")

                                       // Q: 05
                                       alert("Hello... I can run JS through my web browser's console")






                                       // Chapter: 02
                                       // Q: 01
                                       var username = "Ali"


                                       // Q: 02
                                       var myName = "Ali Muhammad"


                                       // Q: 03
                                       var message = "Hello World"
                                       alert(message)


                                       // Q: 04
                                       var student_name = "John Doe"
                                       var age = "15 years old"
                                       var specialization = "Certified Mobile Application Development"
                                       alert(student_name)
                                       alert(age)
                                       alert(specialization)


                                       // Q: 09
                                       var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
                                       alert(a)


                                       // Q: 08
                                       var msg = "Yah! I can write HTML content thorugh JavaScript"
                                       document.write(msg)

                                       // Q: 07
                                       var book = "A Smarter Way To Learn Java Script"
                                       alert(book)

                                       // Q: 06
                                       var email = "aliqasim.am7@gmail.com"
                                       alert("My Email Address is " + email)


                                       // Q: 05
                                       var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
                                       alert(pizza)



                                       // Chapter: 03

                                       // Q: 01
                                       var age = 21
                                       alert("I am " + age + " years old")

                                       // Q: 02
                                       var noOfVisit = 44
                                       alert("You have visited this site " + noOfVisit + " times.")


                                       // Q: 03
                                       var birthYear = 1998
                                       document.write("My birth year is " + birthYear + "<br>")
                                       document.write("Data type of my declared variable is number" + "<br>")

                                       // Q: 04
                                       var visitorName = "Ali Muhammad"
                                       var product = "Shirts"
                                       var quantity = 10
                                       document.write(visitorName + " ordered " + quantity + " " + product + " on XYZ Clothing store")




                                       // Chapter: 04

                                       // Q: 01
                                       var firstname, lastname, gender

                                       // Q: 02
                                       var name
                                       var birthday
                                       var birhtyear
                                       var name_of_student
                                       var std
                                           // Illegal Var:
                                           // var 1stnumber
                                           // var my name
                                           // var @year
                                           // var while
                                           // var for


                                       // Q: 03
                                       document.write("<h1>" + "Rules for naming JS variables" + "</h1>")
                                       document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>")
                                       document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>")
                                       document.write(" Variable names are case sensitive" + "<br/>")
                                       document.write("Variable names should not be JS keywords" + "<br/>")


                                       // Chapter: 05

                                       // Q: 01
                                       var firstNum = prompt("Enter first number")
                                       var secondNum = prompt("Enter second number")
                                       var add = firstNum + secondNum
                                       document.write("Sum of " + firstNum + " and " + secondNum + " is " + add + "<br>")

                                       // Q: 02

                                       var sub = firstNum - secondNum
                                       document.write("Subtraction of " + firstNum + " and " + secondNum + " is " + sub + "<br>")
                                           // Multiplication
                                       var mul = firstNum * secondNum
                                       document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + mul + "<br>")
                                           // Division
                                       var div = firstNum / secondNum
                                       document.write("Division of " + firstNum + " and " + secondNum + " is " + div + "<br>")
                                           // Modulus
                                       var mod = firstNum % secondNum
                                       document.write("Modulus of " + firstNum + " and " + secondNum + " is " + mod + "<br>")


                                       // Q: 03
                                       var number
                                       document.write("Value after variable declaration is: " + number + "<br>")
                                       number = 5
                                       document.write("Initial value: " + number + "<br>")
                                       number++
                                       document.write("Value after increment is: " + number + "<br>")
                                       number += 7
                                       document.write("Value after addition is: " + number + "<br>")
                                       number--
                                       document.write("Value after decrement is: " + number + "<br>")
                                       number = number % 3
                                       document.write("The remainder is: " + number + "<br>")

                                       // Q: 04
                                       var ticketPrice = 800
                                       var total = ticketPrice * 5
                                       document.write("The total cost to buy 5 tickets to a movie is " + total + "PKR" + "<br>")

                                       // Q: 05

                                       var tableNumber = 5
                                       var i = 0
                                       document.write("Table of " + tableNumber + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")
                                       document.write(tableNumber + " X " + ++i + " = " + tableNumber * i + "<br>")

                                       // Q: 06
                                       var celsius = 30
                                       var fahrenheit = (celsius * 9 / 5) + 32
                                       fahrenheit = 59
                                       celsius = (fahrenheit - 32) * 5 / 9
                                       document.write(celsius + "C is " + fahrenheit + "F" + "<br/>")
                                       document.write(fahrenheit + "F is " + celsius + "C" + "<br/>")

                                       // Q: 07
                                       var itemprice1 = 150
                                       var itemprice2 = 350
                                       var quantityItem1 = 2
                                       var quantityItem2 = 4
                                       var shippingCharges = 100
                                       var total = (itemprice1 * quantityItem1) + (itemprice2 * quantityItem2) + shippingCharges
                                       document.write("Price of Item 1 is " + itemprice1 + "<br/>")
                                       document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>")
                                       document.write("Price of Item 2 is " + itemprice2 + "<br/>")
                                       document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>")
                                       document.write("Shipping Charges " + shippingCharges + "<br/>")
                                       document.write("<br/>")
                                       document.write("Total cost of your order is " + total)

                                       // Q: 08
                                       var totalMarks = 1100
                                       var marksObtained = 900
                                       var percentage = (marksObtained / totalMarks) * 100
                                       document.write("<h3>" + "Marks Sheet" + "</h3>")
                                       document.write("Total Marks: " + totalMarks + "<br/>")
                                       document.write("Marks Obtained: " + marksObtained + "<br/>")
                                       document.write("Percentage: " + percentage)

                                       // Q: 09
                                       var pkr = (10 * 104.80) + (25 * 28)
                                       document.write("<h3>" + "Currency Conversion in PKR" + "</h3>")
                                       document.write("Total Currency in PKR: " + pkr)

                                       // Q: 10
                                       var num = 5
                                       num = (((num + 5) * 10) / 2)
                                       document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>")
                                       document.write("Output: " + num)


                                       // Q: 11
                                       var year = 2020
                                       var birthday_year = 1998
                                       var age = year - birthday_year
                                       document.write("<h3>" + "Age Calculator" + "</h3>")
                                       document.write("Current Year: " + year + "<br/>")
                                       document.write("Birth Year: " + birthday_year + "<br/>")
                                       document.write("Your age is: " + age)

                                       // Q: 12
                                       document.write("<h3>" + "The Geometrizer" + "</h3>")
                                       var radius = 5
                                       document.write("Radius of a Circle: " + radius + "<br/>")
                                       var circumference = 2 * 3.142 * radius
                                       document.write("The circumference is: " + circumference + "<br/>")
                                       var area = 3.142 * radius * radius
                                       document.write("The area is: " + area)

                                       // Q:13
                                       document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>")
                                       var snack = "Chocalate Chip"
                                       var age = 23
                                       var maxAge = 50
                                       var amount = 3
                                       var eat = (60 - 23) * (365 * 3)
                                       document.write("Favorite Snack: " + snack + "<br/>")
                                       document.write("Current Age: " + age + "<br/>")
                                       document.write("Estimated Maximum Age: " + maxAge + "<br/>")
                                       document.write("Amount of snacks per day: " + amount + "<br/>")
                                       document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge)




                                       // Chapter: 06-09

                                       // Q: 01
                                       var a = prompt("Enter a number: ")

                                       document.write("<h3>" + "Pre and Post Increment/ Decrement Operation" + "</h3>")
                                       document.write("Result" + "<br/>")
                                       document.write("The value of a is: " + a + "<br/>")
                                       document.write("..............................................." + "<br/>")
                                       document.write("<br/>")

                                       // Pre-Increment
                                       document.write("The value of ++a is: " + ++a + "<br/>")
                                       document.write("Now the value of a is: " + a + "<br/>")
                                       document.write("<br/>")

                                       // Post- Increment
                                       document.write("The value of a++ is: " + a++ + "<br/>")
                                       document.write("Now the value of a is: " + a + "<br/>")
                                       document.write("<br/>")

                                       // Pre-Decrement
                                       document.write("The value of --a is: " + --a + "<br/>")
                                       document.write("Now the value of a is: " + a + "<br/>")
                                       document.write("<br/>")

                                       // Post-Decrement
                                       document.write("The value of a-- is: " + a-- + "<br/>")
                                       document.write("Now the value of a is: " + a + "<br/>")


                                       // Q: 02
                                       var a = 2,
                                           b = 1
                                       document.write("<h3>" + "Solving Complex Equation" + "</h3>")
                                       document.write("The value of a is " + a + "<br/>")
                                       document.write("The value of b is " + b + "<br/>")
                                       var result = --a - --b + ++b + b--
                                           document.write("The result is " + result + "<br/>" + "<br/>")

                                       document.write("<b>" + "Explainatory Solution" + "</b>" + "<br/>")
                                       document.write("a = 2, b = 1" + "<br/>")
                                       document.write("--a  -  --b  +  ++b  +  b--" + "<br/>")
                                       document.write("--2  -  --1  +  ++1  +  1--" + "<br/>")
                                       document.write("1  -  0  +  1  +  1" + "<br/>")
                                       document.write(" 1 + 1 + 1 " + "<br/>")
                                       document.write("3" + "<br/>")

                                       // Q: 03
                                       var name = prompt("Enter your name: ")
                                       document.write("Hello " + name + "<br/>")

                                       // Q: 04
                                       var num = 5,
                                           count = 1
                                       num = +prompt("Enter Number for Multiplication of a Table: ")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")
                                       document.write(num + " x " + ++count + " = " + (num * count) + "<br/>")


                                       // Q: 05

                                       document.write("<h3>" + "Marksheet" + "</h3>")
                                       subjectName1 = prompt("Enter Name of Subject 1: ")
                                       subjectName2 = prompt("Enter Name of Subject 2: ")
                                       subjectName3 = prompt("Enter Name of Subject 3: ")
                                       var totalMarks = 300
                                       subjectMarks1 = +prompt("Enter Marks of " + subjectName1)
                                       subjectMarks2 = +prompt("Enter Marks of " + subjectName2)
                                       subjectMarks3 = +prompt("Enter Marks of " + subjectName3)
                                       var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3)
                                       var percentage = (obtainedMarks / totalMarks) * 100
                                       percentage = percentage.toFixed(2)
                                       var percentage1 = (subjectMarks1 / 100) * 100
                                       var percentage2 = (subjectMarks2 / 100) * 100
                                       var percentage3 = (subjectMarks3 / 100) * 100

                                       document.write("<Table>")

                                       document.write("<tr>")
                                       document.write("<th>" + "Subject" + "</th>")
                                       document.write("<th>" + "Total Marks" + "</th>")
                                       document.write("<th>" + "Obtained Marks" + "</th>")
                                       document.write("<th>" + "Percentage" + "</th>")
                                       document.write("</tr>")

                                       document.write("<tr>")
                                       document.write("<td>" + subjectName1 + "</td>")
                                       document.write("<td>" + 100 + "</td>")
                                       document.write("<td>" + subjectMarks1 + "</td>")
                                       document.write("<td>" + percentage1 + "%" + "</td>")
                                       document.write("</tr>")

                                       document.write("<tr>")
                                       document.write("<td>" + subjectName2 + "</td>")
                                       document.write("<td>" + 100 + "</td>")
                                       document.write("<td>" + subjectMarks2 + "</td>")
                                       document.write("<td>" + percentage2 + "%" + "</td>")
                                       document.write("</tr>")

                                       document.write("<tr>")
                                       document.write("<td>" + subjectName3 + "</td>")
                                       document.write("<td>" + 100 + "</td>")
                                       document.write("<td>" + subjectMarks3 + "</td>")
                                       document.write("<td>" + percentage3 + "%" + "</td>")
                                       document.write("</tr>")

                                       document.write("<tr>")
                                       document.write("<th>" + "</th>")
                                       document.write("<th>" + 300 + "</th>")
                                       document.write("<th>" + obtainedMarks + "</th>")
                                       document.write("<th>" + percentage + "%" + "</th>")
                                       document.write("</tr>")

                                       document.write("</Table>")




                                       // Chapter: 04

                                       // Q: 01
                                       var firstname, lastname, gender

                                       // Q: 02
                                       var name
                                       var birthday
                                       var birhtyear
                                       var name_of_student
                                       var std
                                           // Illegal Var:
                                           // var 1stnumber
                                           // var my name
                                           // var @year
                                           // var while
                                           // var for


                                       // Q: 03
                                       document.write("<h1>" + "Rules for naming JS variables" + "</h1>")
                                       document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>")
                                       document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>")
                                       document.write(" Variable names are case sensitive" + "<br/>")
                                       document.write("Variable names should not be JS keywords" + "<br/>")


                                       // Chapter: 09-11

                                       // Q: 01
                                       var city = prompt("Enter City Name: ")
                                       if (city === "Karachi")
                                           alert("Welcome to city of lights")

                                       // Q: 02
                                       var gender = prompt("Enter Your Gender")
                                       if (gender === "male")
                                           alert("Good Morning Sir")

                                       if (gender === "female")
                                           alert("Good Morning Mam")


                                       // Q: 03
                                       var color = prompt("Enter the color of traffic road signal: \n Red, Yellow or Green")
                                       if (color === "Red")
                                           alert("Must Stop")

                                       if (color === "Yellow")
                                           alert("Ready to Move")

                                       if (color === "Green")
                                           alert("Move Now")


                                       // Q: 04
                                       var fuel = +prompt("Enter your remaining fuel in car in litres: ")
                                       if (fuel < 0.25)
                                           alert("Please refill your fuel in car")



                                       // Q: 05

                                       var a = 4
                                       if (++a === 5)
                                           alert("given condition for variable a is true")


                                       var b = 82
                                       if (b++ === 83)
                                           alert("given condition for variable b is true")



                                       var c = 12
                                       if (c++ === 13)
                                           alert("condition 1 is true")


                                       if (c === 13)
                                           alert("condition 2 is true")


                                       if (++c < 14)
                                           alert("condition 3 is true")


                                       if (c === 14)
                                           alert("condition 4 is true")


                                       var materialCost = 20000
                                       var laborCost = 2000
                                       var totalCost = materialCost + laborCost
                                       if (totalCost === laborCost + materialCost)
                                           alert("The cost equals")

                                       if (true)
                                           alert("True")


                                       if (false)
                                           alert("False")



                                       if ("car" < "cat")
                                           alert("car is smaller than cat")



                                       // Q: 06
                                       var obtainedMarks = prompt("Enter Obtained Marks in three subjects: ")
                                       var totalMarks = prompt("Enter total Marks: ")
                                       var percentage = (obtainedMarks / totalMarks) * 100

                                       document.write("<h3>" + "Mark Sheet" + "<h3>")
                                       document.write("Total Marks: " + totalMarks + "</br>")
                                       document.write("Marks Obtained: " + obtainedMarks + "</br>")
                                       document.write("Percentage: " + percentage + "</br>")

                                       if (percentage >= 80 && percentage < 100) {
                                           document.write("Grade: A-one" + "<br>")
                                           document.write("Remarks: Excellent" + "<br>")
                                       } else if (percentage >= 70 && percentage < 80) {
                                           document.write("Grade: A" + "<br>")
                                           document.write("Remarks: Good" + "<br>")
                                       } else if (percentage >= 60 && percentage < 70) {
                                           document.write("Grade: B" + "<br>")
                                           document.write("Remarks: You need to improve" + "<br>")
                                       } else if (percentage < 60) {
                                           document.write("Grade: Fail" + "<br>")
                                           document.write("Remarks: Sorry" + "<br>")
                                       } else {
                                           document.write("Invalid Input" + "<br>")
                                       }


                                       // Q: 07
                                       var secret = 7
                                       var guess = prompt("Guess the Number: \nBetween 1-10")
                                       if (secret === guess) {
                                           alert("Bingo! Correct Answer: ")
                                       } else if (++secret === guess) {
                                           alert("Close enough to the correct answer")
                                       } else {
                                           alert("Sorry Wrong Guess")
                                       }

                                       // Q: 08
                                       var num = +prompt("Enter number to check number is divisible by 3 or not: ")
                                       if (num % 3 === 0)
                                           alert(num + " is divisble by 3")

                                       else
                                           alert(num + " is not divisible by 3")


                                       // Q: 09
                                       var num = +prompt("Enter number to check number is even or odd")
                                       if (num % 2 === 0)
                                           alert(num + " is even number")

                                       else
                                           alert(num + " is odd number")


                                       // Q: 10
                                       var temperature = prompt("Enter your city temperature: ")
                                       if (temperature > 40)
                                           alert("It is too hot outside")

                                       else if (temperature > 30)
                                           alert("The weather today is Normal")

                                       else if (temperature > 20)
                                           alert("Today's Weather is cool")

                                       else
                                           alert("OMG! Today's weather is so Cool")


                                       // Q: 11
                                       var firstNumber = prompt("Enter First Number: ")
                                       var secondNumber = prompt("Enter Second Number: ")
                                       var operator = prompt("Choose your operator: \n( + , - , * , / , % )")
                                       document.write("<h3>" + "Calculator" + "</h3>")
                                       document.write("First Number: " + firstNumber + "</br>")
                                       document.write("Second Number: " + secondNumber + "</br>")
                                       if (operator === "+")
                                           document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))


                                       else if (operator === "-")
                                           document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber))


                                       else if (operator === "*")
                                           document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber))


                                       else if (operator === "/")
                                           document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber))


                                       else if (operator === "%")
                                           document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber))


                                       else
                                           document.write("Wrong Input")



                                       // Chapter: 12-13

                                       // Q: 01
                                       var character = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter")
                                       var value = character.charCodeAt(0)

                                       //Checking for Number
                                       if (value >= 48 && value <= 57)
                                           alert(character + " is number")


                                       //Checking for UpperCase Letters
                                       else if (value >= 65 && value <= 90)
                                           alert(character + " is Uppercase Letter")


                                       //Checking for LowerCase Letters
                                       else if (value >= 97 && value <= 122)
                                           alert(character + " is Lowercase Letter")


                                       else
                                           alert("Given input is not a number or letter")

                                       // Q: 02
                                       var firstNumber = prompt("Enter First Number: ")
                                       var secondNumber = prompt("Enter Second Number: ")

                                       if (firstNumber > secondNumber)
                                           alert(firstNumber + " is larger than " + secondNumber)


                                       else if (firstNumber < secondNumber)
                                           alert(secondNumber + " is larger than " + firstNumber)


                                       else
                                           alert(firstNumber + " and " + secondNumber + " both are eqaul")


                                       // Q: 03
                                       var num = prompt("Enter a number to check its state: ")

                                       if (num > 0)
                                           alert(num + " is Positive")


                                       else if (num < 0)
                                           alert(num + " is Negative")


                                       else
                                           alert("The number is " + num)


                                       // Q: 04
                                       var character = prompt("Enter character to check vowel or not")

                                       if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
                                           alert(character + " is vowel")
                                       } else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
                                           alert(character + " is vowel")
                                       } else {
                                           alert(character + " is not vowel")
                                       }


                                       // Q: 05
                                       var password = "ali123"
                                       var check = prompt("Enter your password: ")
                                       if (check === "")
                                           check = prompt("Please enter your password")

                                       if (check === password)
                                           alert("Correct! The password you entered matches the original password")

                                       else
                                           alert("Incorrect Password")


                                       // Q: 06
                                       var greeting
                                       var hour = 13
                                       if (hour < 18) {
                                           greeting = "Good day"
                                           alert(greeting)
                                       } else {
                                           greeting = "Good evening"
                                           alert(greeting)
                                       }

                                       // Q: 07
                                       var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.")
                                       if (time >= 0000 && time < 1200)
                                           alert("Good Morning")


                                       else if (time >= 1200 && time < 1700)
                                           alert("Good Afternoon")


                                       else if (time >= 1700 && time < 2100)
                                           alert("Good Evening")


                                       else if (time >= 2100 && time <= 2359)
                                           alert("Good Night")


                                       else
                                           alert("Invalid Input")


                                       // Chapter: 14-16

                                       // Q: 01
                                       var students = []

                                       // Q: 02
                                       var students = new Array()

                                       // Q: 03
                                       var colors = ["Yellow", "Orange", "Red", "Purple", "Blue"]
                                       document.write("String Array: " + colors + "<br/>" + "<br/>" + "<br/>")


                                       // Q: 04
                                       var marks = [203, 212, 288, 233, 264]
                                       document.write("Number Array: " + marks + "<br/>" + "<br/>" + "<br/>")



                                       // Q: 05

                                       var bool = [true, false, false, true]
                                       document.write("Boolean Array: " + bool + "<br/>" + "<br/>" + "<br/>")

                                       // Q: 06

                                       var data = ["Ali", "Muhammad", 21, true]
                                       document.write("Mixed Array: " + data + "<br/>" + "<br/>" + "<br/>")

                                       // Q: 07
                                       var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"]
                                       var count = 0
                                       var i = 0

                                       document.write("Qualification" + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>")
                                       document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>")


                                       // Q: 08
                                       var studentNames = ["Ali", "Tabarak", "Humayoun"]
                                       var studentMarks = [467, 475, 389]
                                       var index = 0

                                       document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>")
                                       document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>")
                                       document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>")
                                       document.write("<br/>" + "<br/>")


                                       // Q: 09

                                       var colorNames = []

                                       var input = prompt("What color you wants to add to the beginning?")
                                       colorNames.push(input)

                                       document.write("Updated array: " + colorNames + "<br/>")
                                       input = prompt("What color you wants to add to the end?")
                                       colorNames.push(input)

                                       document.write("Updated array: " + colorNames + "<br/>")

                                       input = prompt("Add two more color to the beginning/nEnter first color: ")
                                       colorNames.unshift(input)
                                       input = prompt("Add two more color to the beginning/nEnter second color: ")
                                       colorNames.unshift(input)

                                       document.write("Updated array: " + colorNames + "<br/>")

                                       colorNames.shift()

                                       document.write("Updated array: " + colorNames + "<br/>")

                                       colorNames.pop()

                                       document.write("Updated array: " + colorNames + "<br/>")

                                       var indexNo = +prompt("Which index you wants to add a color: ")
                                       input = prompt("Please enter your color name: ")
                                       colorNames.splice(indexNo, 0, input)

                                       document.write("Updated array: " + colorNames + "<br/>")

                                       indexNo = +prompt("At which index you wants to delete a color: ")
                                       var deleteCount = +prompt("how many colors you want to delete ")
                                       colorNames.splice(indexNo, deleteCount)

                                       document.write("Updated array: " + colorNames + "<br/>")


                                       // Q: 10

                                       var studentMarks = [45, 98, 34, 53, 67, 88]
                                       document.write("Score of Students: " + studentMarks + "<br/>")
                                       document.write("Ordered Score of Students: " + studentMarks.sort() + "<br/>" + "<br/>" + "<br/>")




                                       // Q: 11
                                       var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"]
                                       document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>")
                                       var selectedCities = []
                                       selectedCities = cities.slice(2, 5)
                                       document.write("Selected cities List:" + "<br/>" + selectedCities + "<br/>" + "<br/>" + "<br/>")


                                       // Q: 12
                                       var arr = ["This", "is", "my", "cat"]
                                       document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>")
                                       var joinarr = arr.join(" ")
                                       document.write("String:" + "<br/>" + joinarr + "<br/>" + "<br/>" + "<br/>")

                                       // Q:13
                                       var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]
                                       var out
                                       document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>")

                                       out = devices.shift()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.shift()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.shift()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.shift()
                                       document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>")

                                       // Q: 14
                                       var devices = ["Keyboard", "Mouse", "Printer", "Monitor"]
                                       var out
                                       document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>")

                                       out = devices.pop()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.pop()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.pop()
                                       document.write("Out:" + "<br/>" + out + "<br/>")
                                       out = devices.pop()
                                       document.write("Out:" + "<br/>" + out + "<br/>" + "<br/>" + "<br/>")


                                       // Q: 15
                                       var phonecompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
                                       var index = 0
                                       document.write("<select>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("<option>" + phonecompanies[index++] + "<option>")
                                       document.write("</select>")



                                       // Chapter: 17-20

                                       // Q: 01
                                       var students = [
                                           [],
                                           []
                                       ]

                                       // Q: 02
                                       var students = [
                                           [1, 2, 3, 4],
                                           [1, 2, 3, 4],
                                           [1, 2, 3, 4]
                                       ]

                                       // Q: 03
                                       for (i = 1; i <= 10; i++) {
                                           document.write(i + "<br>")
                                       }


                                       // Q: 04
                                       var tableNumber = +prompt("Enter a number to show its multiplication table")
                                       var tableLength = +prompt("Enter length multiplication table")
                                       document.write("Multiplication table of " + tableNumber + "<br>")
                                       document.write("Length " + tableLength + "<br>")
                                       for (i = 1; i <= tableLength; i++) {
                                           document.write(tableNumber + " X " + i + " = " + tableNumber * i + "<br>")
                                       }


                                       // Q: 05
                                       var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
                                       for (i = 0; i < fruits.length; i++) {
                                           document.write(fruits[i] + "<br>")
                                       }
                                       for (j = 0; j < fruits.length; j++) {
                                           document.write("Element at index " + j + " is " + fruits[i] + "<br>")
                                       }

                                       // Q: 06
                                       document.write("<h4>" + "Counting" + "</h4>")
                                       for (i = 1; i <= 15; i++) {
                                           document.write(i + ", ")
                                       }
                                       document.write("<h4>" + "Reverse Counting" + "</h4>")
                                       for (i = 10; i > 0; i--) {
                                           document.write(i + ", ")
                                       }
                                       document.write("<h4>" + "Even" + "</h4>")
                                       for (i = 0; i <= 20; i = i + 2) {
                                           document.write(i + ", ")
                                       }
                                       document.write("<h4>" + "Odd" + "</h4>")
                                       for (i = 1; i <= 20; i = i + 2) {
                                           document.write(i + ", ")
                                       }
                                       document.write("<h4>" + "Series" + "</h4>")
                                       for (i = 2; i <= 20; i = i + 2) {
                                           document.write(i + "k, ")
                                       }

                                       // Q: 07
                                       var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
                                       var check = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
                                       for (i = 0; i < arr.length; i++) {
                                           if (check === arr[i]) {
                                               document.write(arr[i] + " is available at index " + i + " in our bakery")
                                               break;
                                           } else {
                                               document.write("We are sorry." + check + " is not avaible in our bakery")
                                               break;
                                           }
                                       }


                                       // Q: 08
                                       var arr = [24, 53, 78, 91, 12]
                                       var largestNumber = arr[0]
                                       for (i = 0; i < arr.length; i++) {
                                           if (arr[i] > largestNumber) {
                                               largestNumber = arr[i]
                                           }
                                       }
                                       document.write("Array items: " + arr + "<br>")
                                       document.write("The largest number is " + largestNumber)

                                       // Q: 09

                                       var arr = [24, 53, 78, 91, 12]
                                       var smallestNumber = arr[0]
                                       for (i = 0; i < arr.length; i++) {
                                           if (arr[i] < smallestNumber) {
                                               smallestNumber = arr[i]
                                           }
                                       }
                                       document.write("Array items: " + arr + "<br>")
                                       document.write("The smallest number is " + smallestNumber)

                                       // Q: 10
                                       for (i = 5; i <= 100; i = i + 5) {
                                           document.write(i + ", ")
                                       }