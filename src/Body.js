import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function Body(){

    const [name, setName ] =useState('');
    const [email, setEmail] =useState('');

    let mail = ''
    let names =''
    function displaymail(f){

        f.preventDefault();
        mail = f.target.value
        
    }
    function displayname(f){
        f.preventDefault();
        names = f.target.value
    }

    function buttonclick(d){

        d.preventDefault()

        let username = names;
        let usermail = mail

        
    
         if(usermail  === '' || usermail.length <8 ){
            alert('PASSWORD MUST BE MINIMUM OF 8 CHARACTERS')
         }else if(!username){
            alert('username input cannot be empty!')
         }else{alert( 'USERNAME: ' + username+ " " +' '+'PASSWORD: '+ usermail );
         setName('Your new username is: ' + username);
         setEmail( 'Your new Password is: ' + usermail);}
         ;

         
    
    }

    return(
        <div>

            <h4 className=" container-fluid text-center input-text">
                Input a Username and a Password in the form input bar below to create an account
            </h4>
            <form className="container-fluid">
                <label className="text-center container fs-4">USERNAME</label>

                <input onChange={displayname} className="input-bar" placeholder="Input your username"/>

                <label className="text-center container fs-3">PASSWORD</label>

                <input onChange={displaymail} className="input-bar" type='password' required placeholder="********"/>

                <div className="container-fluid">
                    <button 
                        onClick={buttonclick} 
                        className=" submit-button"
                        >SUBMIT</button>
                </div>
            </form>

            <p>
                {name}
            </p>
            <p>
               {email}
            </p>
        </div>
    )
}

export default Body;