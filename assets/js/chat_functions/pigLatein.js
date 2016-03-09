function pigLatein(str){
    var vowels = 'aeiouAEIOU';
    var vowelSounds = 'aeiouyAEIOUY';
    var pigArray = [];
    var pigString;
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++){
        if (vowels.includes(strArray[i].charAt(0))){//if it starts with a vowel
            pigString = [strArray[i],'yay'].join("");
            pigArray.push(pigString);
        } else if (strArray[i].substr(0,2) === "qu" || strArray[i].substr(0,2) === "Qu") {
            pigString = strArray[i].slice(2)
            pigString += "quay";
            pigArray.push(pigString);
        } else  { //if word starts with one or more consonants, move them to the end of the word and add 'ay'
            pigString = strArray[i].split("");
            for (var x=0; x< pigString.length; x++){
                if (vowelSounds.includes(pigString[x])){
                    consonants = pigString.slice(0, x);
                    pigString.push(consonants.join(""), "ay");
                    pigArray.push(pigString.join("").substr(x));
                    break;
                } else {
                }
        }
    }
    }
    return pigArray.join(" ");
}
