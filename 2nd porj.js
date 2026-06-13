console.log("welcome to budget buddy");
let income=Number(localStorage.getItem("income")) || 0;
let expense=Number(localStorage.getItem("expense")) || 0;
document.getElementById("income").innerText ="₹ "+ income;
document.getElementById("expense").innerText ="₹ "+ expense;
document.getElementById("balance").innerText ="₹ "+ (income-expense);
let transactions=JSON.parse(localStorage.getItem("transactions")) ||[];
function addtran(){
    
    let desc=
    document.getElementById("desc").value;
    let amount=
    Number(document.getElementById("amount").value);
    if(amount<=0){
        alert("⚠️ Amount must be a postive number");
        return;}
    let type=
    document.getElementById("type").value;
    let now = new Date();
    let date =now.toLocaleDateString();
    let time=now.toLocaleTimeString();
    if(type=="income"){
        income+= amount;
        document.getElementById("income").innerText="₹ "+income;
    }
    else{
        expense+=amount;
        document.getElementById("expense").innerText="₹ "+expense;

    }
    let balance =income - expense;
    document.getElementById("balance").innerText=" ₹ "+balance;

    let list= document.getElementById("transaction-list");
    let li=document.createElement("li");
    
   
    if(type=="income"){
        li.innerText = desc + " = + ₹  "+ amount  +" 💵 |" + date +" |" + time;
    }
    else{
        li.innerText = desc + " = - ₹  " + amount +" 💸 |" + date +" |" +time;
    }
     list.appendChild(li);
     transactions.push({
        desc:desc,
        amount: amount,
        type : type,
        date:date,
        time:time

     });
     localStorage.setItem("transactions",JSON.stringify(transactions));
     localStorage.setItem("income",income);
     localStorage.setItem("expense",expense);


}
transactions.forEach(function(t) {
    let li =document.createElement("li");
    if(t.type=="income"){
        li.innerText=t.desc +"= + ₹"+t.amount+"|"+t.date +"|"+t.time;
    }
    else{
                li.innerText=t.desc +"= - ₹"+t.amount+"|"+t.date +"|"+t.time;
    }
    document.getElementById("transaction-list").appendChild(li);

    }
    
);
function clearData(){
    localStorage.clear();
    income=0;
    expense=0;
    transaction =[];
    document.getElementById("income").innerText="₹0";
    document.getElementById("expense").innerText="₹0";
    document.getElementById("balance").innerText="₹0";
    document.getElementById("transaction-list").innerHTML="";

}
