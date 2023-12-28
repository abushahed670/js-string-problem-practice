// const userName = 'blackPink';
// const userInput = 'blackPinK';
// if(userName === userInput){
//     console.log('valid user');
// }
// else{
//     console.log('invalid user');
// }
// to remove case sensative we have to use this code to valid answer 

const userName = 'blackPink';
const userInput = 'blackPinK';
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}