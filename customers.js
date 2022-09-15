//displaying successful or un successful meesgae after submitting the form
const handleMessage= (message,colors)=>{
    document.getElementById('displayMessage').innerHTML = message;
    document.getElementById('displayMessage').style.color = colors;
    setTimeout(function(){
       document.getElementById("displayMessage").innerHTML = '';
    }, 10000);
}
const setCustomrsInfo=(user)=>{
    document.getElementById('userId').innerHTML = user.userId;
    document.getElementById('fn').innerHTML = user.firstName;
    document.getElementById('ln').innerHTML = user.lastName;
    document.getElementById('ph').innerHTML = user.phone;
    document.getElementById('em').innerHTML = user.email;
}
//Get customer
const getUser = (customersId) => {
    if(customersId){
    axios.get(`https://osasapi.herokuapp.com/customers/${customersId}`)
        .then(response => {
            //return response.data;
            console.log("Response",response.data.email)
            setCustomrsInfo(response.data);
           // handleMessage(`Registration is successful, your id is ${response.data._id}`,'green');
        })
        .catch(error => {
            handleMessage(`Registration is unsuccessful!!`,'red');
        }
        );
    }else{
        handleMessage("You Must need to enter an id", 'red')
        
    }

};
const form = document.getElementById('myForm');
const formEvent = form.addEventListener('submit', event => {//
    event.preventDefault();
        const customersId= document.getElementById('customerId').value.trim();
        custId=customersId ? customersId : false;
        console.log("printing ",custId)
     getUser(custId);
})