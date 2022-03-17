// first given a string "s"
// write function to accept string
// iterate through the string, consider each character  within the string
// if character does not equal " ", add to a new string. 
// return string without spaces

function noSpaces(string){
    var newString =""
    for (var i =0;i<string.length;i++){
        if(string[i]!==" "){
            newString+=string[i]
        }
    }
    return newString
}
console.log(noSpaces("Hello my na me is Al ex"));
