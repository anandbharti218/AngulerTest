Steps For Run Setup & Run The Project

Go to the firebase_storage directory and follow the steps

-----------------------------------------

Step 1: First Execute the command `npm i or npm install`

Step 2: Then Execute the command `npm run start`

Now the project is up and running.

---------------------------------------

/**
    Question 1: ( compulsory )
	Create a file upload feature in Angular that accepts any image or video files, less than 10 MB and upload the file to the firebase storage. Add some some interactions or animations like upload progress and file upload status
	Add a preview of the file that has been uploaded.
	Place appropriate validations and error messages wherever required
 */
 URL

http://3.110.122.52/anand/browser/


-----------------------------------------

Question number 2-4 are developed using the AngulerJS library in single html file.

---------------------------------------

/**
    Question 2: 
	Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
	The application should be performant at scale to handle larger numbers without slowing down exponentially.
 */
 URL

http://3.110.122.52/anand/fibonacci/

/**
 * Question 3:

    A string is balanced if it consists of exactly two different characters and both of those
    characters appear exactly the same number of times. For example: "aabbab" is
    balanced (both 'a' and 'b’ occur three times) but "aabba" is not balanced (‘a' occurs three
    times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three
    different letters).A substring of string S is a string that consists of consecutive letters in
    S. For example: "“ompu" is a substring of "computer" but "cmptr” is not.Write a function
    solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an
    array of the longest balanced substring of S.Examples:

    1. Given S = “cabbacc", the function should return ["abba"] because it is the longest
    balanced substring.

    2. Given S = “abababa”, the function should return ["ababab", "bababa"] which are the
    longest balanced substrings.

    3. Given S = “aaaaaaa", the function should return [] since S does not contain a
    balanced substring.Write an efficient algorithm for the following assumptions:

    - N is an integer within the range [1..100,000];

    - string S is made only of lowercase letters (a-z).

 */
 URL

http://3.110.122.52/anand/balancedstring/

/**
 * 
 * Question 4:

    You're given 3 plates (A, B, C) and an N number of rings labelled according to the
    diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than
    Ring 4 (4cm diameter) and Ring 3 (83cm diameter) etc.Write a function solution named
    “migrateRings(N, A, B, C)” that accepts a positive integer input; N denoting the number
    of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings
    are sorted in ascending order on Plate A denoted by the input A. The task is to move all
    the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function
    should return an array of the steps required to migrate N Rings from Plate A to Plate B.
    At the end of the solution, all Rings should be sorted on Place B just as it was on Plate
    A.Examples:

    1. Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which
    corresponds to the movements of each Ring on each Plate.

    2. Given N = 3, the function should return ["1: A to B", "2: A to C", "1: B to C", "3: A to B",
    "4: C to A", "2: C to B", "1: A to B"]

    3. Given N = 1, the function should return ["1: A to B"]Write an algorithm that assumes
    the following conditions:

    - Only one Ring can be moved at a time

    - A larger Ring cannot be placed on top of a smaller Ring. Example, Ring 4 can only be
    placed on Ring 5+ and not on any of Ring 3-

    - Ring diameter cannot be negative
 * 
 */
URL

http://3.110.122.52/anand/ring_migration/
