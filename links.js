const signinbtn = document.querySelectorAll('.signinbtn');
const signoutbtn = document.querySelectorAll('.signoutbtn');
const list = document.querySelector('.list-render');
const totalExpense = document.querySelector('.expense-list');
const workPill = document.querySelector('.workPill');



const setupUI = (user) => {
    if (user) {
        signinbtn.forEach(item => item.style.display = 'none');
        signoutbtn.forEach(item => item.style.display = 'block');
       
    }
    else {
        signinbtn.forEach(item => item.style.display = 'block');
        signoutbtn.forEach(item => item.style.display = 'none');
    }
}

const setupList = (data) => {

    let html = '';
    let htmlTwo = '';
    let li = '';
    let expenseLI = '';
    let newAmount = 0;
    let workTrans = 0;
    let personalTrans = 0;
    let workTotalSpending = 0;
    let personalTotalSpending = 0;
    
   


    data.forEach( doc => {

        const list = doc.data();
   //     const when = dateFns.format(
    //        list.createtime.toDate(),'MM/DD/YYYY'
     //   );
        newAmount += list.amount;
       

        if(list.typeofexpense === 'work') {
            workTrans++;
            workTotalSpending += list.amount;
            console.log(workTotalSpending)

          } else {
          personalTrans ++; 
          personalTotalSpending += list.amount;
        }
        
        
        
        
        if(list.typeofexpense === "work"){
        li = `
        <a href="#" class="list-group-item list-group-item-action liWork">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${list.typeofexpense}</h5>
         
        </div>
        <p class="mb-1"></p>
        <small>${list.expense}</small>
        <span class="badge badge-danger badge-pill float-right">$ ${list.amount}</span> 
      </a>
        `;
        } else {
        li =  `
        <a href="#" class="list-group-item list-group-item-action liPersonal">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${list.typeofexpense}</h5>
          
        </div>
        <p class="mb-1"></p>
        <small>${list.expense}</small>
        <span class="badge badge-danger badge-pill float-right">$ ${list.amount}</span> 
      </a>
        `;
        }
        html += li;

      
    });
    expenseLI = `
         <li class="list-group-item d-flex justify-content-between align-items-center totalExpense">
        
        Total Expense <span class="badge badge-danger badge-pill">$ ${newAmount}</span> 
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center totalExpense">
        
        Work Transaction <span class="badge badge-warning badge-pill workPill">${workTrans}</span>
        <span class="badge badge-danger badge-pill workPill">$${workTotalSpending}</span> 
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center totalExpense">
        
        Personal Transaction <span class="badge badge-warning badge-pill">${personalTrans}</span> 
        <span class="badge badge-danger badge-pill">$${personalTotalSpending}</span> 
        </li>

        `;
    htmlTwo += expenseLI;
    totalExpense.innerHTML = htmlTwo;
    list.innerHTML = html;
}