//Erica Egan //
//csc102-strings2//



function checkPalindrome()

{
    var input = document.getElementById("inputString").value; // gets the value of the input field with the ID "inputString" and assigns it to the variable "input"
    var strippedInput = input.replace(/\s/g, ""); // Removes spaces from the input by replacing all whitespace characters with an empty string
    
    var reversedInput = strippedInput.split("").reverse().join(""); // Splits the stripped input into an array of individual characters, reverses the order of the elements, and joins them back into a string
    
    if (strippedInput.toLowerCase() === reversedInput.toLowerCase()) // Checks if the lowercase version of the stripped input string is equal to the lowercase version of the reversed input string
    {
        document.getElementById("result").innerHTML = "\"" + input + "\" is a palindrome!"; // Sets the innerHTML of the element with the ID "result" to indicate that the input is a palindrome
    }
    else
    {
        document.getElementById("result").innerHTML = "\"" + input + "\" is not a palindrome."; // Sets the innerHTML of the element with the ID "result" to indicate that the input is not a palindrome
    }
    
    document.getElementById("inputString").value = ""; // Clears the value of the input field with the ID "inputString"
}
