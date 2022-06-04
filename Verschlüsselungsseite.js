// input as an Array; input not ['0']
let deleteprenulls = (number) => {
    wasntnullbefore = true;
    for (let i = 0; i < number.length; i++) {
        if (number[0] === "0") {
            if (wasntnullbefore) {
                number.shift();
            }
        } else {
            wasntnullbefore = false;
        }
    }
    return number;
}
// inverts the order of an Array
// input as an Arr 
let invertArr = (Arr) => {
    let Arrinverted = "";
    for (let i = 0; i < Arr.length; i++) {
        Arrinverted += Arr[Arr.length - 1 - i]
    }
    return Arrinverted;
}
//inputs as Strings
let größer = (one, two) => {
    let Arrone = Array.from(one);
    let Arrtwo = Array.from(two);
    deleteprenulls(Arrone);
    deleteprenulls(Arrtwo);
    if (Arrone[0] == "-" && Arrtwo[0] == "-") { //for both strings negativ
        if (Arrone.length > Arrtwo.length) {
            return two;
        } else if (Arrtwo.length > Arrone.length) {
            return one; //Search by the length of the Array from input-strings
        } else {
            for (let i = 0; i < Arrone.length; i++) {
                if (Arrone[i] < Arrtwo[i]) {
                    return one;
                    break;
                } else if (Arrtwo[i] < Arrone[i]) {
                    return two;
                    break;
                } //Search by the digits for the greater number
            }
            return "same"
        }
    } else if (Arrone[0] == "-" || Arrtwo[0] == "-") { //for only one Array negativ
        if (Arrone[0] == "-") {
            return two
        } else if (Arrtwo == "-0") {
            return one
        }
    } else { // for both Arrays positiv
        if (Arrone.length > Arrtwo.length) {
            return one;
        } else if (Arrtwo.length > Arrone.length) {
            return two; //Search by the length of the Array from input-strings
        } else {
            for (let i = 0; i < Arrone.length; i++) {
                if (Arrone[i] < Arrtwo[i]) {
                    return two;
                    break;
                } else if (Arrtwo[i] < Arrone[i]) {
                    return one;
                    break;
                } //Search by the digits for the greater number
            }
            return "same"
        }
    }
}
// input als String
let plus = (sumone, sumtwo) => {
    let sumoneArr = Array.from(sumone);
    let sumtwoArr = Array.from(sumtwo);
    if (sumone == "0") {} else {
        sumoneArr = deleteprenulls(sumoneArr);
    }
    if (sumtwo == "0") {} else {
        sumtwoArr = deleteprenulls(sumtwoArr);
    }
    let transmission = 0;
    let resultinverted = "";
    let result = [];
    let outputAsString = "";
    let runthrow;
    if (sumoneArr.length > sumtwoArr.length) {
        runthrow = sumoneArr.length;
        while (sumtwoArr.length < sumoneArr.length) {
            sumtwoArr.unshift("0")
        }
        sumoneArr.unshift("0");
    } else {
        runthrow = sumtwoArr.length;
        while (sumtwoArr.length > sumoneArr.length) {
            sumoneArr.unshift("0");
        }
        sumtwoArr.unshift("0")
    } // the number with more digits gets another 0 in frontposition, the other as many as the other had before, so that the digits can be added one by one
    for (let i = 0; i < runthrow; i++) {
        if (parseInt(sumoneArr[sumoneArr.length - 1 - i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + transmission < 10) {
            resultinverted += String(parseInt(sumoneArr[sumoneArr.length - 1 - i]) +
                parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + transmission)
            transmission = 0;
        } else {
            resultinverted += String(String(parseInt(sumoneArr[sumoneArr.length - 1 - i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + transmission - 10))
            transmission = 1;
        }
    } // all digits getting added one by one from the back forward (if greater 10 saved for next digit pair in transmission)
    let resultinvertedArr = Array.from(resultinverted);
    result = invertArr(resultinvertedArr);
    if (result != ["0"]) {
        result = deleteprenulls(Array.from(result));
    }
    for (let i = 0; i < result.length; i++) {
        outputAsString += result[i];
    }
    return outputAsString;
}
// input as Strings
let minus = (minuend, substrahend) => {
    let transmission = 0;
    let result = "";
    let resultinverted = "";
    let resultinvertedArr = [];
    let minuendArr = Array.from(String(minuend));
    let substrahendArr = Array.from(String(substrahend));
    minuendArr = deleteprenulls(minuendArr);
    substrahendArr = deleteprenulls(substrahendArr);
    while (minuend.length > substrahendArr.length) {
        substrahendArr.unshift("0");
    }
    if (größer(minuend, substrahend) == substrahend) {
        return "-42" // if result is negativ returns "-42"; later on just looked wether greater null or not 
    } else {
        for (let i = 0; i < minuendArr.length; i++) {
            if (parseInt(minuendArr[minuendArr.length - 1 - i]) -
                parseInt(substrahendArr[substrahendArr.length - 1 - i]) - transmission >= 0) {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 - i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - transmission);
                transmission = 0;
            } else {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 - i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - transmission + 10);
                transmission = 1;
            }
        } // all digits getting substracted one by one from the back forward (if greater 10 saved for next digit pair in transmission)
        resultinvertedArr = Array.from(resultinverted)
        for (let i = 0; i < resultinvertedArr.length; i++) {
            result += resultinvertedArr[resultinvertedArr.length - 1 - i];
        } // brings result in right order
        let resultArr = Array.from(result)
        if (parseInt(result) != 0) {
            resultArr = deleteprenulls(resultArr);
        }
        let givebackresult = ""
        for (let i = 0; i < resultArr.length; i++) {
            givebackresult += resultArr[i]
        }
        return givebackresult;
    }
}
let mal = (faktorOne, faktorTwo) => {
    let faktorOneArr = Array.from(faktorOne);
    let faktorTwoArr = Array.from(faktorTwo);
    faktorOneArr = invertArr(faktorOneArr);
    faktorTwoArr = invertArr(faktorTwoArr);
    let übertragung = "0";
    let toAdd = [];
    let pushingIntoToAdd = "";
    for (let i = 0; i < faktorOneArr.length; i++) {
        for (let j = 0; j < i; j++) {
            pushingIntoToAdd += "0"
        } //adds the amount of 0s needed for correct addition
        for (let k = 0; k < faktorTwoArr.length; k++) {
            if (größer(plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung), "10") == "10") {
                pushingIntoToAdd += plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung);
                übertragung = "0"
            } else {
                let ArrForLastDigit = Array.from(plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung));
                pushingIntoToAdd += ArrForLastDigit[1];
                übertragung = ArrForLastDigit[0];
            }
        } // multiplies the Arrays number by number (if greater ten saves in transmission)
        pushingIntoToAdd += übertragung;
        toAdd.push(pushingIntoToAdd);
        pushingIntoToAdd = "";
        übertragung = "0"
    }
    for (let i = 0; i < toAdd.length; i++) {
        let invertedNumberArr = invertArr(Array.from(toAdd[i]))
        let invertedNumber = "";
        for (let k = 0; k < invertedNumberArr.length; k++) {
            invertedNumber += invertedNumberArr[k];
        }
        toAdd[i] = invertedNumber;
    } //inverts all elements in toAdd
    let result = "0";
    for (let i = 0; i < toAdd.length; i++) {
        result = plus(result, String(toAdd[i]))
    } //adds all elements in to Add
    return result;
}
let wurzelziehen = (rootOf) => {
    let rootOfArr = Array.from(String(rootOf));
    rootOfArr = deleteprenulls(rootOfArr);
    let rootOfArrNew = [];
    let rootOfArrNewInInt = [];
    let result = "0"
    if (rootOfArr.length % 2 === 0) {
        for (let i = 0; i < rootOfArr.length / 2; i++) {
            let newinput = rootOfArr[mal("2", String(i))] + rootOfArr[plus(mal("2", String(i)), 1)];
            rootOfArrNew.push(newinput);
        }
    } else if (rootOfArr.length % 2 === 1) {
        let newinput;
        for (let i = 0; i < rootOfArr.length / 2; i++) {
            if (i === 0) {
                newinput = rootOfArr[0];
            } else {
                newinput = rootOfArr[minus(mal('2', String(i)), '1')] + rootOfArr[mal("2", String(i))];
            }
            rootOfArrNew.push(newinput);
        }
    }
    // splits the number in parts of two digits
    for (let i = 0; i < rootOfArrNew.length; i++) {
        rootOfArrNewInInt.push(parseInt(rootOfArrNew[i]));
    } // makes ints from Strings
    let rest = "0";
    for (let i = 0; i <= rootOfArrNewInInt.length - 1; i++) {
        let numberforprocessStr;
        if (rootOfArrNewInInt[i] != 0) {
            numberforprocessStr = rest + String(rootOfArrNewInInt[i]);
        } else {
            numberforprocessStr = rest + "00"
        } //gives the correct value for numberforprocessStr
        let calcstartStr = mal(result, "2") + "1"
        let Arrzr = [];
        if (minus(numberforprocessStr, calcstartStr) >= 0) {
            for (let k = 0; größer(numberforprocessStr, "0") != 0; k++) {
                numberforprocessStr = minus(numberforprocessStr, plus(mal(String(k), "2"), calcstartStr));
                Arrzr.push(numberforprocessStr);
                if (größer(numberforprocessStr, "0") == "0") {} else {
                    rest = numberforprocessStr;
                }
            }
            if (Arrzr[Arrzr.length - 1] === 0) {
                result += String(Arrzr.length)
            } else {
                result += String(Arrzr.length - 1)
            }
        } else {
            result += "0"
            rest = numberforprocessStr;
        }
    } //algorithm for the root
    let resultArr = Array.from(result);
    resultArr.shift();
    let giveback = ''
    for (let i = 0; i < resultArr.length; i++) {
        giveback += resultArr[i];
    } //delete the 0 in beginning
    return giveback;
}
let randomchar = () => {
    let double = Math.random() * 10000;
    if (double > 9442) {
        return "a";
    } else if (double > 9388) {
        return "ä";
    } else if (double > 9192) {
        return "b";
    } else if (double > 8876) {
        return "c";
    } else if (double > 8378) {
        return "d";
    } else if (double > 6685) {
        return "e";
    } else if (double > 6536) {
        return "f";
    } else if (double > 6234) {
        return "g";
    } else if (double > 5736) {
        return "h";
    } else if (double > 4934) {
        return "i";
    } else if (double > 4910) {
        return "j";
    } else if (double > 4778) {
        return "k";
    } else if (double > 4418) {
        return "l";
    } else if (double > 4163) {
        return "m";
    } else if (double > 3128) {
        return "n";
    } else if (double > 2904) {
        return "o";
    } else if (double > 2874) {
        return "ö";
    } else if (double > 2807) {
        return "p";
    } else if (double > 2805) {
        return "q";
    } else if (double > 2116) {
        return "r"
    } else if (double > 2079) {
        return "ß"
    } else if (double > 1437) {
        return "s"
    } else if (double > 858) {
        return "t"
    } else if (double > 475) {
        return "u"
    } else if (double > 410) {
        return "ü"
    } else if (double > 326) {
        return "v"
    } else if (double > 148) {
        return "w"
    } else if (double > 143) {
        return "x"
    } else if (double > 138) {
        return "y"
    } else {
        return "z"
    }
} // gets a random character in the commenness of german

let samepositionArr = [];
let usertextArr = [];
let runthrow = 1;
let ready = (wert) => {
    let text = document.getElementById('text').value;
    let Arrtext = Array.from(text);
    let textwithoutspace = '';
    for (let i = 0; i < Arrtext.length; i++) {
        if (Arrtext[i] == 'a' || Arrtext[i] == 'b' || Arrtext[i] == 'c' || Arrtext[i] == 'd' || Arrtext[i] == 'e' || Arrtext[i] == 'f' || Arrtext[i] == 'g' || Arrtext[i] == 'h' || Arrtext[i] == 'i' || Arrtext[i] == 'j' || Arrtext[i] == 'k' || Arrtext[i] == 'l' || Arrtext[i] == 'm' || Arrtext[i] == 'n' || Arrtext[i] == 'o' || Arrtext[i] == 'p' || Arrtext[i] == 'q' || Arrtext[i] == 'r' || Arrtext[i] == 's' || Arrtext[i] == 't' || Arrtext[i] == 'u' || Arrtext[i] == 'v' || Arrtext[i] == 'w' || Arrtext[i] == 'x' || Arrtext[i] == 'y' || Arrtext[i] == 'z' || Arrtext[i] == 'ß' || Arrtext[i] == 'ä' || Arrtext[i] == 'ö' || Arrtext[i] == 'ü') {
            textwithoutspace += Arrtext[i];
        }
        let textArr = Array.from(textwithoutspace);
        let wurzelzahl1 = String(document.getElementById('wurzel1').value);
        let wurzelzahl2 = String(document.getElementById('wurzel2').value);
        let wurzel1 = "";
        let wurzel2 = "";
        let smallestlength;
        let sameposition = [];
        if (document.getElementById('toDo').value == "encrypt") {
            for (let i = 0; i < textArr.length * wert; i++) {
                wurzelzahl1 += "00"
                wurzelzahl2 += "00"
            }
        } else if (document.getElementById('toDo').value == "decrypt") {
            for (let i = 0; i < textArr.length; i++) {
                wurzelzahl1 += "00"
                wurzelzahl2 += "00"
            }
        }
        wurzel1 = wurzelziehen(wurzelzahl1);
        wurzel2 = wurzelziehen(wurzelzahl2);
        let wurzel1Arr = Array.from(wurzel1);
        let wurzel2Arr = Array.from(wurzel2);

        if (wurzel1Arr.length < wurzel2Arr.length) {
            smallestlength = wurzel1Arr.length;
        } else {
            smallestlength = wurzel2Arr.length;
        }
        // looks if the firstpara or the secondpara has more digits

        for (let i = 0; i < smallestlength; i++) {
            if (wurzel1Arr[i] === wurzel2Arr[i]) {
                sameposition.push(i + 1)
            }
        } // finds out when the digits on the sameposition are the same and safes it in Array 'sameposition'
        if (sameposition.length < textArr.length && document.getElementById("toDo").value == "encrypt") {
            ready(Math.pow(wert, (runthrow * 1.3)));
            runthrow++;
        } else {
            samepositionArr = sameposition;
            usertextArr = textArr;
            if (document.getElementById("toDo").value == "decrypt") {
                decrypt();
            }
            if (document.getElementById("toDo").value == "encrypt") {
                encrypt();
            } // triggers the needed method
        }
    }
}

function encrypt() {
    let output = [];
    let outputToUser = [];
    let stringOutputToUser = "";
    let k = 0;
    let largestfromsamepostion = Math.max.apply(Math, samepositionArr) + 1;
    // checks the greatest position from the Arrays with all the samepositions
    for (let i = 0; i < largestfromsamepostion; i++) {
        if (i === samepositionArr[k]) {
            output.push(usertextArr[k]);
            k++;
        } else {
            let char = randomchar();
            output.push(char);
        }
    }
    // checks whether in output must be pushed an random char or part of the message
    // random char if on one position are not to same digits from the paras
    for (let i = 0; i < output.length; i++) {
        if (output[i] != undefined) {
            outputToUser.push(output[i]);
        } else {
            break;
        }
    }
    // find out if there are less letters in the message then places where the digits of the paras are the same
    //and breaks befor the first undefind
    for (let i = 0; i < outputToUser.length; i++) {
        stringOutputToUser += outputToUser[i];
        let breite = screen.availWidth;
        console.log(breite);
        if (i % Math.round(0.13 * breite) == Math.round(0.13 * breite) - 1) {
            stringOutputToUser += "<br />";
        }
    }
    //makes an String from the Array
    if (usertextArr != []) {
        document.getElementById("output").innerHTML = stringOutputToUser;
    } else {
        window.alert("Keine Eingabe!");
    }
    //gives back the encrypted message 
    //or if the is no input an alert
}

function decrypt() {
    let output = [];
    let outputToUser = [];
    let stringOutputToUser = "";
    let k = 0;

    let largestfromsamepostion = Math.max.apply(Math, samepositionArr) + 1;
    // checks the greatest position from the Arrays with all the samepositions
    for (let i = 0; i < largestfromsamepostion; i++) {
        if (i === samepositionArr[k]) {
            k++;
            output.push(usertextArr[i])
        }
    }
    // checks whether the Arrays content of the encrypted message is on the keyposition or not
    // and pushs it into the Array for the output if it is on the keyposition
    for (let i = 0; i < output.length; i++) {
        if (output[i] != undefined) {
            outputToUser.push(output[i]);
        } else {
            break;
        }
    }
    // find out if there are less letters in the message then places where the digits of the paras are the same
    // and breaks befor the first undefind
    for (let i = 0; i < outputToUser.length; i++) {
        stringOutputToUser += outputToUser[i];
    }
    // makes an String from the Array
    if (usertextArr != []) {
        document.getElementById("output").innerHTML = stringOutputToUser;
    } else {
        window.alert("Keine Eingabe!");
    }
    // gives the decrypted message back or if there was no input an alert
}