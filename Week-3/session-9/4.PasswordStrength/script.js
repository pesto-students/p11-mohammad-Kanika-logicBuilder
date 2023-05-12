"use strict"
function isStrongPassword(password)
{
    // regular expreession to check wether uppercase exist in string or not
    const regex = /[A-Z]+/;
    /* if condition has three && seperared condition
       1. check the length of the password 
       2. check wether uppercase exist in string or not 
       3. see wether string contians a substring "password"
    */
    if(password.length>=8 &&  regex.test(password)&& !(password.toLowerCase().includes("password"))  ) {
        return true;
    }
    
    return false;
    

}

