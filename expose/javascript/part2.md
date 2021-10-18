1. Line 12 will print 3. 
   Line 12 prints `i` that we define `i` as variable and variable is function scope that it can be accessed anywhere inside the function it is defined in regardless of the block. In this function call ```discountPrices([100, 200, 300], 0.5)'```, since the `prices` list length is three and `i` keeps track of the times of looping, the for loop inside the function will loop 3 times so `i` will be 3 when the for loop ends.
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
    C. student.greeting();
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. 
