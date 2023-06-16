// Write your solution in this file!
let customerName = 'bob';
const FavoriteCustomer = 'leastFavoriteCustomer';

function FixTheScope(){
    return customerName
}
FixTheScope()
function upperCaseCustomerName(){
    return customerName.toUpperCase()
}
upperCaseCustomerName()
function setBestCustomer(){
    let bestCustomer = 'not bob';
    return bestCustomer
    
}
setBestCustomer()
function overwriteBestCustomer(){
    let newname = setBestCustomer();
    return newname.replace('maybe bob')
}
overwriteBestCustomer()

function changeLeastFavoriteCustomer(){
     FavoriteCustomer = "Least Favoured customer";
    return FavoriteCustomer;
}
changeLeastFavoriteCustomer()
