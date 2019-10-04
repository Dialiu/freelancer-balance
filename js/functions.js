function getTableContent() {

    let HTMLcontent = '';

    for(let i=0; i < months.length; i++) {
        let dataObject = account.find(x => x.month === i+1);
        let income, expense, balance;

        if(dataObject.income == undefined) {
            income = 0;
        } else {
            income = dataObject.income;
        }

        if(dataObject.expense == undefined) {
            expense = 0;
        } else {
            expense = dataObject.expense;
        }
       
        balance = income - expense;

        HTMLcontent += 
        `<div class="table-row">
            <div class="cell">${dataObject.month}</div>
            <div class="cell">${months[i]}</div>
            <div class="cell">${income} Eur</div>
            <div class="cell">${expense} Eur</div>
            <div class="cell">${balance} Eur</div>
        </div>`;
    }

    return HTMLcontent;
}

function getTableFooter(){
    
    let allIncome = 0, allExpense = 0;

    for(let i=0; i < account.length; i++) {
        if(account[i].income !== undefined) {
            allIncome += account[i].income;
        }

        if(account[i].expense !== undefined) {
            allExpense += account[i].expense;
        }
    }
    
    return `<div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">${allIncome} Eur</div>
            <div class="cell">${allExpense} Eur</div>
            <div class="cell">${allIncome-allExpense} Eur</div>`;
}