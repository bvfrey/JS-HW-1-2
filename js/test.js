function doExercise1() {

    var myNumber, myPower, myResult = 0;

    document.getElementById("exerciseHeader").innerHTML = "Exercise 1";

    document.getElementById("exerciseText").innerHTML = "Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать";

    myNumber = prompt("Please enter your number:");
    if (myNumber*0 != '0') {
        alert(myNumber + "? hmm... I am not sure this is a number. Please try again later \u26D4");
        return;
    }

    myPower = prompt("Please enter the power:");

    if (myPower*0 != '0') {
        alert(myPower + "? hmm... I am not sure I can do this \u26D4");
        return;
    }

    myResult = myNumber;

    switch (true) {
        case Math.abs(myPower) - Math.floor(Math.abs(myPower)) > 0:
            alert("Too difficult for me. I cannot do difficult calculations \u2639");
            return;
        case myPower === 0:
            myResult = 1;
            break;
        case myPower > 0:
            for (var i=1; i < myPower; i++) {
                myResult = myResult * myNumber;
            }
            break;
        case myPower < 0:
            for (var j=1; j < -myPower; j++) {
                myResult = myResult * myNumber;
            }
            myResult = 1/myResult;
            break;
        default:
            alert( 'This is out of my understanding. Sorry. \u26D4' );
    }

    console.log(myNumber + " to the power " + myPower + " is " + myResult);
    console.log("check " + Math.pow(myNumber, myPower));
}


function doExercise2() {
    document.getElementById("exerciseHeader").innerHTML = "Exercise 2";
    document.getElementById("exerciseText").innerHTML = "Создать программу, которая будет выполнять следующие действия:" + "<ul>" + "<li>" + "Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен" + "</li>" + "<li>" + "Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя" + "</li>" + "<li>" + "Введенное имя, циклом сравнивать с именами в массиве" + "</li>" + "<li>" + "Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке" + "</li>" + "<li>" + "Если есть совпадение - выводить сообщение Андрей, вы успешно вошли. Вместо Андрей должно быть имя текущего пользователя" + "</li>"+ "</ul>";

    var nameList, currentUser;

    nameList = nameListInit();
    currentUser = prompt("Who are you?");

    if (securityCheck(currentUser)) {
        alert ("Hi " + currentUser + ". Security check passed sucessfully \u2705");
    } else {
        alert ("Access denied \u26D4");
    }

    function nameListInit() {
        var myList = [];
        alert("Let's fill is the list of empoyees having access rights to this module");
        for (var i = 0; i < 5; i++) {
            myList[i] = prompt ("Please enter the name:");
        }
        return (myList);
    }

    function securityCheck(nameToCheck) {
        var max = nameList.length;
        for (var i = 0; i < max; i++) {
            if (nameToCheck === nameList[i]) {
                return 1;
            }
        }
        return 0;
    }
}
