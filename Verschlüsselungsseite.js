let deleteprenulls = (number) => { //number as an Array; no null
    wasntnullbefore = true;
    for (let i = 0; i < number.length; i++) {
        if (number[0] === "0") {
            if (wasntnullbefore) {
                number.shift();
            }
        } else {
            wasntnullbefore = false
        }
    }
    return number;
}
let invertArr = (Arr) => {
    let Arrinverted = "";
    for (let i = 0; i < Arr.length; i++) {
        Arrinverted += Arr[Arr.length - 1 - i]
    }
    return Arrinverted;
}
let größer = (one, two) => { //input als String
    let Arrone = Array.from(one);
    let Arrtwo = Array.from(two);
    deleteprenulls(Arrone);
    deleteprenulls(Arrtwo);
    if (Arrone[0] == "-" && Arrtwo[0] == "-") {
        if (Arrone.length > Arrtwo.length) {
            return two; //Schaut anhand der länge nach der größeren Zahl
        } else if (Arrtwo.length > Arrone.length) {
            return one; //Schaut anhand der länge nach der größeren Zahl
        } else {
            for (let i = 0; i < Arrone.length; i++) {
                if (Arrone[i] < Arrtwo[i]) {
                    return one;
                    break;
                } else if (Arrtwo[i] < Arrone[i]) {
                    return two;
                    break;
                } //schaut anhand der Ziffernn (mit höchsten Prioritäten) nach der größeren Zahl
            }
            return "same"
        }
    } else if (Arrone[0] == "-" || Arrtwo[0] == "-") {
        if (Arrone[0] == "-") {
            return two
        } else if (Arrtwo == "-0") {
            return one
        }
    } else {
        if (Arrone.length > Arrtwo.length) {
            return one; //Schaut anhand der länge nach der größeren Zahl
        } else if (Arrtwo.length > Arrone.length) {
            return two; //Schaut anhand der länge nach der größeren Zahl
        } else {
            for (let i = 0; i < Arrone.length; i++) {
                if (Arrone[i] < Arrtwo[i]) {
                    return two;
                    break;
                } else if (Arrtwo[i] < Arrone[i]) {
                    return one;
                    break;
                } //schaut anhand der Ziffernn (mit höchsten Prioritäten) nach der größeren Zahl
            }
            return "same"
        }
    }
}
let plus = (sumone, sumtwo) => { // input als String
    let sumoneArr = Array.from(sumone);
    let sumtwoArr = Array.from(sumtwo);
    if (sumone == "0") {} else {
        sumoneArr = deleteprenulls(sumoneArr);
    }
    if (sumtwo == "0") {} else {
        sumtwoArr = deleteprenulls(sumtwoArr);
    }
    let übertragung = 0;
    let resultinverted = "";
    let result = "";
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
    } // die Zahl mit ursprünglich mehr Ziffer bekommt eine Null hinzugefügt, die andere so viele dass sie so viele hat wie die andere zuvor
    for (let i = 0; i < runthrow; i++) {
        if (parseInt(sumoneArr[sumoneArr.length - 1 - i]) +
            parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung < 10) {
            resultinverted += String(parseInt(sumoneArr[sumoneArr.length - 1 - i]) +
                parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung)
            übertragung = 0;
        } else {
            resultinverted += String(String(parseInt(sumoneArr[sumoneArr.length - 1 -
                i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung - 10))
            übertragung = 1;
        }
    } // für alle Ziffern wird von hinten nach vorne die Addition durchgeführt (bei größer 10 wird in übertragung gespeichert)
    let resultinvertedArr = Array.from(resultinverted)
    for (let i = 0; i < resultinvertedArr.length; i++) {
        result += resultinvertedArr[resultinvertedArr.length - 1 - i];
    } // result wird in die richtige reihfolge gebracht
    if (parseInt(result) != 0) {
        result = deleteprenulls(Array.from(result));
    }
    for (let i = 0; i < result.length; i++) {
        outputAsString += result[i];
    }
    return outputAsString;
}
let minus = (minuend, substrahend) => { //minuend-substrahend; input als String
    übertragung = 0;
    result = "";
    resultinverted = "";
    let resultinvertedArr = [];
    let minuendArr = Array.from(String(minuend));
    let substrahendArr = Array.from(String(substrahend));
    minuendArr = deleteprenulls(minuendArr);
    substrahendArr = deleteprenulls(substrahendArr);
    while (minuend.length > substrahendArr.length) {
        substrahendArr.unshift("0");
    }
    if (größer(minuend, substrahend) == substrahend) {
        return "-42" //wenn substarhend > minuend wird -42 zurückgegeben ist zwar nicht richtig aber wurzel schaut nur > 0
    } else {
        for (let i = 0; i < minuendArr.length; i++) {
            if (parseInt(minuendArr[minuendArr.length - 1 - i]) -
                parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung >= 0) {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 -
                    i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung)
                übertragung = 0;
            } else {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 -
                    i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung + 10)
                übertragung = 1;
            }
        } //führt die Subtraktion schritt für Schritt von hinten nach vorne aus
        resultinvertedArr = Array.from(resultinverted)
        for (let i = 0; i < resultinvertedArr.length; i++) {
            result += resultinvertedArr[resultinvertedArr.length - 1 - i];
        } // result wird in die richtige reihfolge gebracht
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
        }
        for (let k = 0; k < faktorTwoArr.length; k++) {
            if (größer(plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung), "10") == "10") {
                pushingIntoToAdd += plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung);
                übertragung = "0"
            } else {
                let ArrForLastDigit = Array.from(plus(String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k])), übertragung));
                pushingIntoToAdd += ArrForLastDigit[1];
                übertragung = ArrForLastDigit[0];
            }
        }
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
    }
    let result = "0";
    for (let i = 0; i < toAdd.length; i++) {
        result = plus(result, String(toAdd[i]))
    }
    return result;

}
let wurzelziehen = (underwurzel) => { // noch fehlerhaft
    let wurzelArr = Array.from(String(underwurzel));
    wurzelArr = deleteprenulls(wurzelArr);
    let wurzelArrNew = [];
    let wurzelArrNewInInt = [];
    let result = "0"
    let digitNumber = wurzelArr.length;
    if (digitNumber % 2 === 0) {
        for (let i = 0; i < wurzelArr.length / 2; i++) {
            let newinput = wurzelArr[mal("2", String(i))] + wurzelArr[plus(mal("2", String(i)), 1)];
            wurzelArrNew.push(newinput);
        }
    } else if (digitNumber % 2 === 1) {
        let newinput;
        for (let i = 0; i < wurzelArr.length / 2; i++) {
            if (i === 0) {
                newinput = wurzelArr[0];
            } else {
                newinput = wurzelArr[minus(mal('2', String(i)), '1')] + wurzelArr[mal("2", String(i))];
            }
            wurzelArrNew.push(newinput);
        }
    }
    // splits the number in parts of two
    for (let i = 0; i < wurzelArrNew.length; i++) {
        wurzelArrNewInInt.push(parseInt(wurzelArrNew[i]));
    } // makes ints from Strings
    let rest = "0";
    for (let i = 0; i <= wurzelArrNewInInt.length - 1; i++) {
        let numberforprocessStr;
        if (wurzelArrNewInInt[i] != 0) {
            numberforprocessStr = rest + String(wurzelArrNewInInt[i]);
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
    }
    let resultArr = Array.from(result);
    resultArr.shift();
    let giveback = ''
    for (let i = 0; i < resultArr.length; i++) {
        giveback += resultArr[i];
    }
    console.log(giveback)
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
let ready = (wert) => {
    let runthrow = 1
    let text = document.getElementById('text').value;
    let textArr = Array.from(text);
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
        }

    }
}

function encrypt() { // noch nicht geprüft
    let inputFromUserInArray = usertextArr;
    let sameposition = samepositionArr;
    let output = [];
    let outputToUser = [];
    let stringOutputToUser = "";
    let k = 0;
    let largestfromsamepostion = Math.max.apply(Math, sameposition) + 1;
    // checks the greatest position from the Arrays with all the samepositions
    for (let i = 0; i < largestfromsamepostion; i++) {
        if (i === sameposition[k]) {
            output.push(inputFromUserInArray[k]);
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
    }
    //makes an String from the Array
    if (inputFromUserInArray != []) {
        document.getElementById("output").innerHTML = stringOutputToUser;
    } else {
        window.alert("Keine Eingabe!");
    }
    //gives back the encrypted message 
    //or if the is no input an alert
}

function decrypt() { // noch nicht geprüft
    let inputFromUserInArray = usertextArr;
    let sameposition = samepositionArr;
    let output = [];
    let outputToUser = [];
    let stringOutputToUser = "";
    let k = 0;

    let largestfromsamepostion = Math.max.apply(Math, sameposition) + 1;
    // checks the greatest position from the Arrays with all the samepositions
    for (let i = 0; i < largestfromsamepostion; i++) {
        if (i === sameposition[k]) {
            k++;
            output.push(inputFromUserInArray[i])
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
    if (inputFromUserInArray != []) {
        document.getElementById("output").innerHTML = stringOutputToUser;
    } else {
        window.alert("Keine Eingabe!");
    }
    // gives the decrypted message back or if there was no input an alert
}