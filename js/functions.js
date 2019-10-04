function tableContent() {

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
    </div>`
    }

    return HTMLcontent;
}