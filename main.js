/*
Function - Random Argument Challenge 
====================================
Create Function showDetails
Function Accept 3 Parameters [a,b,c]
Data Types for Info Is
--- String ==> Name
--- Number ==> Age 
--- Boolean ==> Status
Argument Is Random
Data Is Not Sorted Output Depend On Data Types
--Use Ternary Conditional Operator
*/


function showDetails(a , b , c) {
    let Name , age, staus;
    if (typeof a === "string") {
        userName = a;
    }else if (typeof a === "number") {
        age = a;
    }else if (a === true){
        status = a;
    }

    if (typeof b === "string") {
        userName = b;
    }else if (typeof b === "number") {
        age = b;
    }else if (b === true){
        status = b;
    }

    if (typeof c === "string") {
        userName = c;
    }else if (typeof c === "number") {
        age = c;
    }else if (c === true){
        status = c;
    }
    if (a === true || b === true || c === true) {
        console.log(`Hello ${userName}, Your Age Is ${age}, You Are Available For Hire`);
    }else {
        console.log(`Hello ${userName}, Your Age Is ${age}, You Are "Not" Available For Hire`);
    }
}
showDetails("Osama", 38 , true ); //Hello Osama, Your Age Is 38, You Are Available For Hire
showDetails(24 , "Ahmed" , false); //Hello Ahmed, Your Age Is 24, You Are "Not" Available For Hire
showDetails(12, true ,"Fadi" ); //Hello Fadi, Your Age Is 12, You Are Available For Hire
showDetails(true, 33, "Ali" ); //Hello Ali, Your Age Is 33, You Are Available For Hire
showDetails(false, "Khedr", 23); //Hello Khedr, Your Age Is 23, You Are "Not" Available For Hire
