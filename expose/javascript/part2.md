1. Line 12 will print 3. 
   Line 12 prints `i` that we define `i` as variable and variable is function scope that it can be accessed anywhere inside the function it is defined in regardless of the block. In this function call ```discountPrices([100, 200, 300], 0.5)```, since the `prices` list length is three and `i` keeps track of the times of looping, the for loop inside the function will loop 3 times so `i` will be 3 when the for loop ends.
2. Line 13 will print 150. 
   Line 13 prints `disountedPrice` that is a variable that called everytime inside of the for loop. In this function call, `discounedPrice` at the end will be the discounted pice of the last element in the `prices` list. So when line 13 wants to print `discountedPrice`, we get 150 in the output.
3. Line 14 prints 150. 
   Line 14 prints `finalPrice` that is a variable that called everytime inside of the for loop. Inside of the for loop in this function, `finalPrice` at the end will be rounded up `discountedPrince` of the last element in the `prices` list. So when line 14 wants to print `discountedPrice`, we get 150 in the output.
4. This function will return [50, 100, 150] - a list of three integers that are the discounted prices from the original price ([100, 200, 300]) and discount (0.5) we get.
   In this function, we define every value as `valuable` (access anywhere inside the function) and use a for loop to loop every element in the orignial price list and calculate each discounted price given original price and the discount. Then we round up each discounted price and push them to a list called `discounted`. After we loop the price list, we return the `discounted` list at the end of the function.
5. The code returns an error on line 12. 
   >ReferenceError: i is not defined

   Line 12 is trying to print `i`. It is a reference error because the `let` keyword `i` in this funsction can only be accessed within the `for` loop statement block. However, line 12 calls the `let` keyword `i` outside the `for` loop statement, so the code returns an error.
6. The code returns an error on line 13 
   >ReferenceError: discountedPrice is not defined

   Line 13 is trying to print `disocuntedPrice` It is a reference error because the `let` keyword `disocuntedPrice` in this funsction can only be accessed within the `for` loop statement block. However, line 13 calls the `let` keyword `disocuntedPrice` outside the `for` loop statement, so the code returns an error.
7. Line 14 will print 150. 
   Line 14 prints `finalPrice` and we define the `let` keyword `finalPrice` in the function block, so we can access `finalPrice` anywhere inside the function block. 
8. This function will return [50, 100, 150] - a list of three integers that are the discounted prices from the original price ([100, 200, 300]) and discount (0.5) we get.
   In this function, we define every value as `let` keyword(access anywhere inside the block it defines in), luckily each `let` keyword is used inside their defined block scope so there is no error. The function also uses a for loop to loop every element in the orignial price list and calculate each discounted price given original price and the discount. Then we round up each discounted price and push them to a list called `discounted`. After we loop the price list, we return the `discounted` list at the end of the function.
9.  The code returns an error on line 11. 
    >ReferenceError: i is not defined
    
    We print `i` in line 11. It is a reference error because the `let` keyword `i` in this funsction can only be accessed within the `for` loop statement block. However, line 12 calls the `let` keyword `i` outside the `for` loop statement, so the code returns an error.
10. Line 12 will print 3. 
    We print the `const` keyword `length` in line 12. Since we defin `length` in the function block and the code does not reassign the value to `length` afrer it is assigned, we can successfully access `length` anywhere in the function block.
11. This function will return [50, 100, 150] - a list of three integers that are the discounted prices from the original price ([100, 200, 300]) and discount (0.5) we get. 
     In this function, we define every value as `const` keyword and `let` kwyword(access anywhere inside the block it defines in), luckily each `let` and `const` keyword is used inside their defined block scope so there is no error. In addition, we didn't reassign value to `const` keyword after it is assigned. The function also uses a for loop to loop every element in the orignial price list and calculate each discounted price in `disountedPrice` (we redefine this `const` keyword everytime during looping) given original price and the discount, then push them to a list called `discounted`. After we loop the price list, we return the `discounted` list at the end of the function.
12. A. student.name <br>
    B. student['Grad Year'] <br>
    C. student.greeting(); <br>
    D. student['Favorite Teacher'].name <br>
    E. student.courseLoad[0]
13. A. 32. Because the first variable is string data type, any variable after the "+" operator will be concatenated to data
    B. 1. When subtraction `-` is applied to non-numbers, numeric conversion happens automatically and string `3` are converted to number.
    C. 3. When addition `+` is applied to non-numbers, numeric conversion happens automatically. Due to the numeric conversion rules, `null` becomes 0, so `3 + null` becomes `3 + 0`
    D. 3null. Because the first variable is string data type, any variable after the "+" operator will be concatenated to data
    E. Output: 4. Due to the numeric conversion rules, `true` becomes 1, so `3 + null` becomes `3 + 1`
    F. 0. When addition `+` is applied to non-numbers, numeric conversion happens automatically. Due to the numeric conversion rules, `null` becomes 0 and `false` becomes 0, so `false + null` becomes `0 + 0`
    G. 3undefined. Because the first variable is string data type, any variable after the "+" operator will be concatenated to data
    H. NaN. Since it is `-`, both value should convert to number data type, however, 3 cannot subtract undefined valule, thus the output is NaN.
14. A. true. When comparing values of different types, JavaScript converts the value to numbers. Since the number 2 is larger than 1 thus we get true
    B. false. This is dictionary comparison, first char of 2 is greater than first char of 12 which is '1'.
    C. true. When comparing values of different types, JavaScript converts the value to numbers. String 2 will convert to number 2 thus they are equal.
    D. false. Since `===` is strict euqality check, the values are different because each of them is a different type.
    E. false. When comparing values of different types, JavaScript converts the value to numbers. Due to the numeric conversion rules, `true` becomes 1 and 1 is not equal to 2
    F. true. `Boolean(2)` is true and boolean data type, thus they are euqal.

15. `==` is non-strict equality check. If two values are equal regardless of the type of the value, output true. On the other hand, `===` is strict equality check. Even the value we see are the same, as long as they are different data type, `===` will mark them as false.
16. [link](part2-question16.js)
17. The function will return a list [2, 4, 6].
    `doSomething()` will return a number that is twice the parameter
    `modifyArray([1,2,3], doSomething)` will loop through the list [1,2,3]. In each iteration, it will call `doSomething` to double the current number of list and then push the new number into a list called `newArr`. After looping, the function returns `newArr`.
18. [link](part2-question18.js)
19. 1<br>4<br>3<br>2