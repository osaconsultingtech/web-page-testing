//displaying successful or un successful meesgae after submitting the form
const handleMessage= (message,colors)=>{
    document.getElementById('displayMessage').innerHTML = message;
    document.getElementById('displayMessage').style.color = colors;
    setTimeout(function(){
       document.getElementById("displayMessage").innerHTML = '';
    }, 10000);
}

//add customer
const createUser = (user) => {
    axios.post('https://osasapi.herokuapp.com/customers', user)
        .then(response => {
            handleMessage(`Registration is successful, your id is ${response.data._id}`,'green');
        })
        .catch(error => {
            handleMessage(`Registration is unsuccessful!!`,'red');
        }
        );
        firstName.value="";
        lastName.value="";
        email.value="";
        phone.value="";
};
const form = document.getElementById('myForm');
const formEvent = form.addEventListener('submit', event => {//
    event.preventDefault();
    const user={  
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
}
    createUser(user);
});
