let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while(isNaN(money) || money=='' || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof(a)=== "string") && (typeof(a)!= null) && (typeof(b)!= null && a!= '' && b != '' && a.length <50)){
                appData.expenses[a] = b;
            } else {
                i--;
            };
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay<=100){
            console.log('Минимальный уровень жизни')
        } else if (appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
            console.log("Средний уровень зароботка")
        } else {
            console.log("Высокий ровень достатка")
        };
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt('Какова сумма накопленый?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save/100/12*percent;
            alert('Доход за мезяц состовляет: '+appData.monthIncome);    
        }
    },
    choostOptExpenses: function(){
        for(let i=1;i<4;i++){
            let OptExpenses= +prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i]=OptExpenses;
            console.log(appData.optionalExpenses);
        };
    },
    chooseIncome: function(){
        let items = prompt('что принесет доп.доход? (Перечислте через запятую)', '');
        while((items == '') || (typeof(items) == null) || (typeof(items) != "string")){
            items = prompt('что принесет доп.доход? (Перечислте через запятую)', '')
        };
        appData.income = items.split(", ");
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function(vall, index){
            alert('Способ заработка номер'+ (index+1) + '-' + vall)
        });

    }
};

for (let a in appData){
    console.log('Наша программа включает в сеюя :'+a+'-'+appData[a])
}

