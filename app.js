 function incomfield (Income){
  const incomeInput = document.getElementById('income-input')
  const incomeInputValue = incomeInput.value;
  const incomeInputTotal = parseInt(incomeInputValue)
  return incomeInputTotal
  ;
 }
function expenses(totalCostMoney){
  const foodInput = document.getElementById(totalCostMoney);
  const foodValue = foodInput.value;
  const foodCost = parseInt(foodValue);
  foodInput.value = '';
  return foodCost
}
  

document.getElementById('button-first').addEventListener('click', function(){
  
  const incomeInputTotal = incomfield();
  if(incomeInputTotal < 0){
    return alert('please give valide Number income field');
  }

   

const foodCost = expenses('food-input');

if(isNaN(foodCost) == true || foodCost < 0){
  return alert('please give number food field!!')
}

 const rentCost = expenses('rent-input');

 if(isNaN(rentCost) == true || rentCost < 0){
   return alert('please give valide number rent field,without absd, and -23,-34')
 }

 const clothesCost = expenses('clothes-input');

 if(isNaN(clothesCost) == true || clothesCost < 0){
   return alert('please valid number give clothes field !!!')
 }

 const totalCost = clothesCost + rentCost + foodCost;
 if(incomeInputTotal < totalCost){
   return alert('not anough balanch avalable')
 }

 const texttotal = document.getElementById('total-expenses');
  const texttotalText = texttotal.innerText;
  const texttotalCount = parseInt(texttotalText);

  const balance = document.getElementById('balance');
  const balanceText = balance.innerText;
  const balancevalue = parseInt(balanceText);


 const expensesTotal = texttotalCount + totalCost;
 texttotal.innerText = expensesTotal;

const balanceTotal = incomeInputTotal - expensesTotal;
 balance.innerText = balanceTotal;
 
})

document.getElementById('button-second').addEventListener('click', function(){
  const inputSave = document.getElementById('input-save');
  const inputSavetext = inputSave.value
  const savevalue = parseInt(inputSavetext);
  

   const incomeInputTotal = incomfield()
  const parsentesCount = (incomeInputTotal * savevalue) / 100;
  inputSave.value = '';
 const savingAmount = document.getElementById('saving-amount');
 const savingAmountTex = savingAmount.innerText;
 const savingAmountValue = parseInt(savingAmountTex)
 const savingAmounttotal = savingAmountValue + parsentesCount;
 savingAmount.innerText = savingAmounttotal;
 
 const balanceField = document.getElementById('balance');
 const balanceFieldText = balanceField.innerText;
 const balanceFieldValue = parseInt(balanceFieldText);
  
 ;
 if(savingAmounttotal > balanceFieldValue || isNaN (savingAmounttotal) == true || savingAmounttotal < 0){
  return alert('not anough balance avalable for saving')
}
 const remeaningBalance = balanceFieldValue - savingAmounttotal;

const remeaningField = document.getElementById('remeaning-amount');
const remeaningFieldText = remeaningField.innerText;
const remeaningBalancevalue = parseInt(remeaningFieldText);
const remeaningtotal = remeaningBalancevalue + remeaningBalance;
remeaningField.innerText = remeaningtotal;

})
  