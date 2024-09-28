function checkProbabilityTheory(count) {

    // створюємо функцію для виведення рандомного цілого числа в межах від 100 до 1000 включно
    function rnd(min, max) {
    min = 100;
    max = 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // створюємо список з отриманими рандомними числами під час кожної ітерації
    let randNum = [];
    for (let i = 0; i < count; i++) {
        randNum.push(rnd())        
    }

    // console.log(randNum)

    // визначаємо кількість парних та непарних чисел у списку randNum
    let evenNum = 0;
    let oddNum = 0;

    for (let i = 0; i < randNum.length; i++) {
        if (randNum[i] % 2 === 0) {
            evenNum++;
        }
        else{
            oddNum++;
        }
    }

    // рахуємо кількість парних та непарних чисел у відсотках
    let evenCount = (evenNum / count) * 100;
    let oddCount = (oddNum / count)* 100;

    // виводимо результат обчислень
    console.log("Кількість парних чисел: " + evenNum);
    console.log("Кількість непарних чисел: " + oddNum);
    console.log("Співвідношення парних до непарних: " + evenCount.toFixed(2) + "%" + " до " + oddCount.toFixed(2) + "%");

    return randNum;
}

checkProbabilityTheory(2037);
