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
    if (sumone == "0") {

    } else {
        sumoneArr = deleteprenulls(sumoneArr);
    }
    if (sumtwo == "0") {

    } else {
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
        if (parseInt(sumoneArr[sumoneArr.length - 1 - i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung < 10) {
            resultinverted += String(parseInt(sumoneArr[sumoneArr.length - 1 - i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung)
            übertragung = 0;
        } else {
            resultinverted += String(String(parseInt(sumoneArr[sumoneArr.length - 1 - i]) + parseInt(sumtwoArr[sumtwoArr.length - 1 - i]) + übertragung - 10))
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
        return "-42" //wenn substarhend > minuend wird -42 zurückgegeben ist zwar nicht richtig aber wurzel schaut nur >0
    } else {
        for (let i = 0; i < minuendArr.length; i++) {
            if (parseInt(minuendArr[minuendArr.length - 1 - i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung >= 0) {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 - i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung)
                übertragung = 0;
            } else {
                resultinverted += String(parseInt(minuendArr[minuendArr.length - 1 - i]) - parseInt(substrahendArr[substrahendArr.length - 1 - i]) - übertragung + 10)
                übertragung = 1;
            }
        } //führt die Subtraktion schritt für Schritt von hinten nach vorne aus
        resultinvertedArr = Array.from(resultinverted)
        for (let i = 0; i < resultinvertedArr.length; i++) {
            result += resultinvertedArr[resultinvertedArr.length - 1 - i];
        } // result wird in die richtige reihfolge gebracht
        let resultArr = Array.from(result)
        if (parseInt(result != 0)) {
            resultArr = deleteprenulls(resultArr);
        }
        let givebackresult = ""
        for (let i = 0; i < resultArr.length; i++) {
            givebackresult += resultArr[i]
        }
        return givebackresult;
    }
}

let mal = (faktorOne, faktorTwo) => { // noch nicht fertig
    let faktorOneArr = Array.from(faktorOne);
    let faktorTwoArr = Array.from(faktorTwo);
    let übertragung = "0";
    faktorOneArr = invertArr(faktorOneArr);
    faktorTwoArr = invertArr(faktorTwoArr);
    let toAdd = [];
    let pushingIntoToAdd = "";
    for (let i = 0; i < faktorOneArr.length; i++) {
        for (let k = 0; k < faktorTwoArr; k++) {
            if (größer(String(parseInt(faktorOneArr[i]) * parseInt(faktorOneArr[k])), "10") == "10") {
                pushingIntoToAdd += String(parseInt(faktorOneArr[i]) * parseInt(faktorTwoArr[k]));
                console.log(parseInt(faktorOneArr[i]), parseInt(faktorTwoArr[k]))
                übertragung = "0"
            } else {
                let ArrForLastDigit = Array.from(String(parseInt(faktorOneArr[i]) * parseInt(faktorOneArr[k])));
                pushingIntoToAdd += ArrForLastDigit[1];
                übertragung = ArrForLastDigit[0];
            }
        }
    }
}
mal("20", "2")

let wurzelziehen = (underwurzel) => {
    let wurzelArr = Array.from(String(underwurzel));
    wurzelArr = deleteprenulls(wurzelArr);
    let wurzelArrNew = [];
    let wurzelArrNewInInt = [];
    let result = "0"
    let digitNumber = wurzelArr.length;
    if (digitNumber % 2 === 0) {
        for (let i = 0; i < wurzelArr.length / 2; i++) {
            let newinput = wurzelArr[2 * i] + wurzelArr[2 * i + 1];
            wurzelArrNew.push(newinput);
        }
    } else if (digitNumber % 2 === 1) {
        let newinput;
        for (let i = 0; i < wurzelArr.length / 2; i++) {
            if (i === 0) {
                newinput = wurzelArr[0];
            } else {
                newinput = wurzelArr[2 * i - 1] + wurzelArr[2 * i];
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
        let calcstartStr = String(parseInt(result) * 2) + "1";
        let Arrzr = [];
        if (minus(numberforprocessStr, calcstartStr) >= 0) {
            for (let k = 0; größer(numberforprocessStr, "0") != 0; k++) {
                numberforprocessStr = minus(numberforprocessStr, plus(String(k * 2), calcstartStr));
                Arrzr.push(numberforprocessStr);
                console.log(numberforprocessStr)
                console.log(plus(String(k * 2), calcstartStr))
                if (größer(numberforprocessStr, "0") == "0") {

                } else {
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
    return result;
}









let paraone;
let paratwo;

let ersteWurzel = () => {
    let wurzel = document.getElementById("wurzel1").value;
    paraone = wurzelziehen(wurzel);
    console.log(paraone);
}

let zweiteWurzel = () => {
    let wurzel = document.getElementById("wurzel2").value;
    paratwo = wurzelziehen(wurzel);
    console.log(paratwo);
}

if (paraone && paratwo != 0) {
    console.log("runs")
}