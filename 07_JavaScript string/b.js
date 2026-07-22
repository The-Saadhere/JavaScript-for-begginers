var totalMoney = function(n) {
  let money=0
    let not =1
    for(let i =1;i <= n ;i++){
        if(i <= 7){

  let addmon = i
        money += addmon

        }
        else{
not++
money += not
console.log(not);
        }
      
    }
    return money
};
console.log(totalMoney(10))