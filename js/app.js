'use strict'

const body      =   document.getElementsByTagName('body')[0];
const tipsBtn   =   document.getElementById('tips-btn');
let popupWindow =   null;
let popup       =   null;

tipsBtn.addEventListener('click', (e)=>{

    createPopup();
    
    const signupBtn = document.getElementById('signup');

    signupBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const emailField = document.getElementById('email-field');
        const emailLabel = document.getElementById('email-label');
        const steps = document.getElementById('steps');
        const popupTitle = document.getElementById('popup-title');
        const stepLine = document.getElementById('step-line');

        if(!emailIsValid(email)){

            emailLabel.innerHTML = 'Please enter a valid email address';
            emailField.className = 'error';

        } else {

            emailLabel.innerHTML = 'Please enter your email here';
            emailField.classList.remove('error');

            setTimeout(function() {

                const signupForm = document.getElementById('popup-form');

                stepLine.classList.add('line2');
                steps.innerHTML = 'Step 2 of 2';
                popupTitle.innerHTML = 'Thank you!<br />The tips are on their way to your inbox.';
                // emailField.remove();
                // emailLabel.remove();
                signupForm.remove();


            }, 1000);
            
            
        }
    });
});

function createPopup() {

    popup = document.createRange().createContextualFragment(
        `<div id="popup-bg" class="popup-bg">
            <div id="popup" class="popup">
                <span id="x" onclick="deletePopup()">×</span>
                <p id="steps" class="steps">Step 1 of 2</p>
                <hr id="step-line" class="line">
                <h3 id="popup-title">Enter Your Email To Get <span class="green-txt">FREE</span><br />iPhone Photography Email Tips:</h3>
                <form id="popup-form" method="post">
                    <div id="email-field">
                        <input id="email" type="text" class="rectangle" required></input>
                        <label id="email-label" for="email">Please enter your email here</label>
                    </div>
                    <button id="signup" type="submit">Send Me The Tips »</button>
                </form>
            </div>
        </div>`
    );

    body.appendChild(popup);

    centerPopup();

}

function deletePopup() {

    popupWindow = document.getElementById('popup-bg');
    popupWindow.remove();
    popupWindow = null;
    popup = null;

}

function emailIsValid(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function centerPopup(node) {

    let y = window.innerHeight;
    y = (y - 310) / 2;
    
    popup = document.getElementById('popup');
    popup.setAttribute("style", "top: " + y + "px");

}