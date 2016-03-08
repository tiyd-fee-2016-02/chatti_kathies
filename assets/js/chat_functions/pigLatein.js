function pigLatein(str){
    var pigArray = [];
    var strArray = str.split(" ");
    // console.log(strArray);
    // console.log(strArray[0].charAt(0));
    // console.log([strArray[0],'ay'].join(""));

    for (var i = 0; i < strArray.length; i++){
        if (strArray[i].charAt(0) === "a" || strArray[i].charAt(0) === "e" || strArray[i].charAt(0) === "i" || strArray[i].charAt(0) === "o" || strArray[i].charAt(0) === "u"){
        var pigString = [strArray[i],'ay'].join("");
        console.log(pigString);
        pigArray.push(pigString);
        return pigArray;
        } else  { //if word starts with one or more consonants, move them to the end of the word and add 'ay'

        }
    }


}
