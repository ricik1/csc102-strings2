//Erica Egan //
//csc102-strings2//



function checkPalindrome()

//

{
    var input = document.getElementById("inputString").value;
    var strippedInput = input.replace(/\s/g, ""); // Remove spaces
    
    var reversedInput = strippedInput.split("").reverse().join("");
    
    if (strippedInput.toLowerCase() === reversedInput.toLowerCase())
     {
        document.getElementById("result").innerHTML = "\"" + input + "\" is a palindrome!";
    } 
    else
     {
        document.getElementById("result").innerHTML = "\"" + input + "\" is not a palindrome.";
    }
    
    document.getElementById("inputString").value = ""; // Clear input field
}