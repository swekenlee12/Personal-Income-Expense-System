


auth.onAuthStateChanged(user => {
    if(user){
        db.collection('expense').onSnapshot(snapshot => {
            setupList(snapshot.docs)
          //  graphSetUp(snapshot.docs);
        });
        setupUI(user);
    }
    else {        
        setupUI();
        setupList([]);
      //  graphSetUp([]);
    }
})


//sign in
const signin = document.querySelector('.sign-in-form');
const modal = document.querySelector('#modal');

signin.addEventListener('submit', (e) => {
    e.preventDefault();

//get user info
const email = signin['email'].value;
const password = signin['password'].value;

//firebase auth code
auth.signInWithEmailAndPassword(email, password)
    .then(
       modal.style.display = 'none'
     );
});

//sign out
const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})

//create new expense input
const createExpense = document.querySelector('.expense-form');
createExpense.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('expense').add({
       // createtime: firebase.firestore.FieldValue.serverTimestamp(),
        typeofexpense: createExpense.typeofexpense.value,
        expense: createExpense.expense.value,
        amount: parseInt(createExpense.amount.value)
    })
    .then(
        
    )
})