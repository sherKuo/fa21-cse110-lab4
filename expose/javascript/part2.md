## Part 2 of Lab 4- Sherilyn Kuo A16552806
Q1: Line 12 will print 3 because we input three numbers that the for loop iterates through and we log/print the final iteration count. 
Q2: Line 13 will print 150 because it prints the most recently calculated discountPrice that was iterated in the for loop which was thr third value of 300.
Q3: Line 14 will print also print 150 because like line 13 it is the most recently calculated discouptPrice as well and the 150 has already been rounded to the hundredth place and thus would not change. 
Q4: The return function returns all the newly calculated and rounded discounted prices  of [50, 100, 150] in the order that they were inputted in.  

Q5: Line 12 will run into an error since the i is declared with a let type and thus is block scoped and when we call i in line 12 it is outside of the for loop it is declared in and thus returns an undefined variable. 
Q6: Line 13 will run into the same error of undeclared variables for the same reason as line 12.
Q7: Line 14 will be able to return 150 as the final price since it is not bound by a scope.
Q8: The return function will return all the calculated discounted prices  of [50, 100, 150] just like it would in question 4.  The fact that most of the variables were changed to 'let' would not affect the result of this function. 

Q9: Line 11 will run into an error because the 'const i = 0;' cannot be reassigned a new value when the for loop iterates and thus runs into the issue of value re-assignment.
Q10: Line 12 will print out 3 because there are three elements in the input array and the length has been set once at the top to the prices.length of 3.
Q11: The return function will still return all the calculated discounted prices of [50, 100, 150] because discounted is an array type object and while the array is set constant, the values inside of it can be updated. 

12a. alert( student.name );
12b. alert( student['Grad Year']);
12c. student.greeting();
12d. alert( student['Favorite Teacher'.name]);
12e. alert( student.courseLoad[1]);

Q13 Arithmetics:
A. ‘3’ + 2      will print 32 because it treats the three like a string and concatenates the two numbers together without a space.
B. ‘3’ - 2      will print 1 because the - is viewed as a subtraction despite the quotation marks.
C. 3 + null     will just print 3 because both elements are treated like numerical values and 3 added with nothing is still 3.
D. ‘3’ + null   will print 3null because the quotation marks coupled with the + treat each elements like strings and concatenates the two together. 
E. true + 3     will print 4 because true holds the value of 1 so 1+3 is 4.
F. false + null will print 0 because fals holds the value of 0 and null is a non value holding value and added together is still 0.
G. '3' + undefined  will print 3undefined because the quotation marks coupled with the + treat each elements like strings and concatenates the two together. 
H. '3' - undefined  will print NaN because there is no value for it to print out as the value being subtracted is unknown. 

Q14 Comparisons:
A. ‘2’ > 1      will print true since both the value of two and its alphabetical rank are greater than that of one.  
B. ‘2’ < ‘12’   will print false because 1 (in the 12) is alphabetically smaller than 2 and thus the '2' is considered greater than '12'
C. 2 == ‘2’     will print true because it converts one of the elements to either interger or string and thus they are the same. 
D. 2 === ‘2’    will print false because the triple equals does not convert the second value and thus it is unable to compare the different value types and returns false.  
E. true == 2    will return false because true also has the value of 1 which is still not equal to 2. 
F. true === Boolean(2)  will return true because the value of boolean(2) is true which is equal to true on the other side which can be compared without any convertion. 

Q15. The double equals == converts the values being compared to the same type before comparing them.  Whereas the triple equals === does not convert the values and will only return a true comparision if the values and the types are identical.
