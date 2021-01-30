1. 3
2. 150
3. 150
4. [50,100,150] is returned. For i=0, discountedPrice is 100(0.5)=50, so finalPrice is 50 and we push to discounted. For i=1, discountedPrice is 200(0.5)=100, so finalPrice is 100 and we push to discounted. For i=2, discountedPrice is 300(0.5)=150, so finalPrice is 150 and we push to discounted. i=3 is not less than prices.length, so we return discounted.
5. Error because i is defined inside the for loop. It is outside of scope when called on line 11.
6. Error because discountedPrice is defined inside the for loop. It is outside of scope when called on line 12.
7. 150
8. [50,100,150] is returned. For i=0, discountedPrice is 100(0.5)=50, so finalPrice is 50 and we push to discounted. For i=1, discountedPrice is 200(0.5)=100, so finalPrice is 100 and we push to discounted. For i=2, discountedPrice is 300(0.5)=150, so finalPrice is 150 and we push to discounted. i=3 is not less than prices.length, so we return discounted.
9. Error because i is defined inside the for loop. It is outside of scope when called on line 11.
10.  Error because discountedPrice is defined inside the for loop. It is outside of scope when called on line 12.
11.  0
12.  [0,0,0] is returned assuming there is no errors in previous lines. finalPrice with const value 0 is pushed to discounted 3 times in the for loop.
13. a) student.name\
    b) student['Grad Year']\
    c) student.greeting()\
    d) student['Favorite Teacher'].name\
    e) student.courseLoad[0]\
14. a) 32, script executes from left to right, so + acts as a concatentation.\
    b) 1, - operator acts as math, so '3' is converted to number.\
    c) 3, + operator acts as math because 3 is a number, and null is 0, so 3+0=3.\
    d) 3null, script executes from left to right, so 3 is a string, so + acts as concatentation.\
    e) 4, + operator acts as math. true==1, so 1+3=4.\
    f) 0, + operator acts as math, false==0, null==0, so 0+0=0.\
    g) 3undefined, + operator acts as concatentation because "3" is evaluated as a string.\
    h) NaN, it is an operation that involves a string and is not an addition operation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)\
15. a) true, string '2' becomes a number 2.\
    b) true, comparing two strings, the first character '2' is greater than '1'.\
    c) true, string '2' becomes a number 2.\
    d) false, they are not equal without type conversion.\
    e) false, true==1, and 1!=2, so the output is false.\
    f) true, Boolean(2) is true, and true===true is true.\
16. == is different than === because == supports checking if two operands are equal WITH type conversion. === outputs true only if both operands are equal without type conversion.
17. How are you? is printed. First, we know that 2==true is false, so we move to the next conditional statement. else if (2) has the 2 converted into a boolean value first. Boolean(2) outputs true, so we execute line 4.
18. See part1-question18.js
19. [6,8,10] will be the result. We step through the for loop of modifyArray. We call callback function which in the input is doSomething. Thus, we perform doSomething(array[i], function(x)). Evaluating doSomething gives function(array[i] + 2) = (array[i] + 2)(2). Since we evaluate the for loop for all elements of the original array [1,2,3], we get 1 --> (1+2)(2) = 6, 2 --> (2+2)(2) = 8, 3 --> (3+2)(2) = 10. Each of these is appended to newArr.
20. See part1-question20.js
21. 1\
    4\
    3\
    2\