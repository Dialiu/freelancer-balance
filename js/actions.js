document.querySelector('.table-content').innerHTML = getTableContent();

document.querySelector('.table-footer').innerHTML = getTableFooter();

document.getElementsByClassName('value')[0].innerHTML = getMinIncome();

document.getElementsByClassName('value')[1].innerHTML = getMaxIncome();

document.getElementsByClassName('value')[2].innerHTML = getMinExpense();

document.getElementsByClassName('value')[3].innerHTML = getMaxExpense();