let topPage = document.querySelector(".end");
let isLoggedIn = Boolean;

function load() {
    document.querySelector("#load").innerHTML = `
    <style>
    :root {
        --hue: 223;
        --bg: hsl(var(--hue),90%,95%);
        --fg: hsl(var(--hue),90%,5%);
        --trans-dur: 0.3s;
        font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
    }
    main {
        padding: 1.5em 0;
        width: 40vw;
        color: var(--fg);
        font: 10px/1.5 sans-serif;
        height: auto;
        display: grid;
        place-items: center;
        transition: background-color var(--trans-dur);
        margin: 0px auto;
        margin: auto;
        margin-top: 15vw;
    }
    .ip {
        width: 16em;
        height: 8em;
    }
    .ip__track {
        stroke: hsl(var(--hue),90%,90%);
        transition: stroke var(--trans-dur);
    }
    .ip__worm1,
    .ip__worm2 {
        animation: worm1 2s linear infinite;
    }
    .ip__worm2 {
        animation-name: worm2;
    }

    /* Dark theme */
    @media (prefers-color-scheme: dark) {
        :root {
            --bg: hsl(var(--hue),90%,5%);
            --fg: hsl(var(--hue),90%,95%);
        }
        .ip__track {
            stroke: hsl(var(--hue),90%,15%);
        }
    }

    /* Animation */
    @keyframes worm1 {
        from {
            stroke-dashoffset: 0;
        }
        50% {
            animation-timing-function: steps(1);
            stroke-dashoffset: -358;
        }
        50.01% {
            animation-timing-function: linear;
            stroke-dashoffset: 358;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes worm2 {
        from {
            stroke-dashoffset: 358;
        }
        50% {
            stroke-dashoffset: 0;
        }
        to {
            stroke-dashoffset: -358;
        }
    }
    </style>
    
    <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#5ebd3e" />
                <stop offset="33%" stop-color="#ffb900" />
                <stop offset="67%" stop-color="#f78200" />
                <stop offset="100%" stop-color="#e23838" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stop-color="#e23838" />
                <stop offset="33%" stop-color="#973999" />
                <stop offset="67%" stop-color="#009cdf" />
                <stop offset="100%" stop-color="#5ebd3e" />
            </linearGradient>
        </defs>
        <g fill="none" stroke-linecap="round" stroke-width="16">
            <g class="ip__track" stroke="#ddd">
                <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
            </g>
            <g stroke-dasharray="180 656">
                <path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                <path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
            </g>
        </g>
        
    </svg>
    <h1 style="margin: 0px auto; margin-top: 20px;">Just a moment please</h1>
    
    `
    setTimeout(function () {
        // Hide the loader and display the main content
        document.querySelector("#load").style.display = "none";
        document.querySelector("#load").innerHTML = "";
        document.querySelector(".secondbody").style.display = "block";
        document.querySelector(".top").style.display = "inline-flex";
    document.querySelector(".footer").style.display = "block";
    }, 2000); // Replace 3000 with the duration of your loading process
}

document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (you can replace this with your actual loading logic)
    document.querySelector(".secondbody").style.display = "none";
    document.querySelector(".top").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    load();  
});

function checkIfLoggedIn(state) {
    if (state) {
        topPage.innerHTML = `
        <a href="index.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Home</button></b></a>
        <a href="services.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Our Services</button></b></a>
        <a href="Aboutus.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">About Us</button></b></a>
        
        <a href="login.html">
            <button class="signin" onclick="login()">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="justify-self: flex-start; align-self: center; border: none; padding-left: 6px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p class="txt">Sign in</p>
                
            </button></a>
        <a href="login.html">
            <button class="login" onclick="login()">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="justify-self: flex-start; align-self: center; border: none; padding-left: 6px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p class="txt">Create account</p>
                
            </button></a>
    `;
    } else {
        topPage.innerHTML = `
        <a href="index.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Home</button></b></a>
        <a href="services.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Our Services</button></b></a>
        <a href="Aboutus.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">About Us</button></b></a>
        
        <a href="login.html">
            <button class="signin" onclick="login()">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="justify-self: flex-start; align-self: center; border: none; padding-left: 6px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p class="txt">Sign in</p>
                
            </button></a>
        <a href="login.html">
            <button class="login" onclick="login()">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="justify-self: flex-start; align-self: center; border: none; padding-left: 6px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p class="txt">Create account</p>
                
            </button></a>
    `
    }
}

let createLogin = document.querySelector(".logincont")
function showcreate() {
    createLogin.innerHTML = `
    <style>
    /*start*/
    .logincont {
        width: 98vw;
        height: 520px;
        margin: 30px auto;
        background: white;
        border: 2px solid black;
        border-radius: 20px;
        margin-top: 80px;
    }
    
    .logincreate {
        display: inline-flex;
        width: 99%;
        margin: 10px auto;
        height: 50px;
        text-align: center;
        justify-content: space-between;
        margin-bottom: 0px;
    }
    
    
    .logincreate button {
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-align: center;
        border: none;
        background: none;
    }
    
    .logincreate button:hover {
        color: red;
        text-decoration: underline;
    }
    
    form {
        width: 60%;
        height: auto;
        margin-top: -10px;
        display: inline-block;
        text-align: left;
        padding: 2px;
    }
    form input {
        width: 100%;
        height: 25px;
        border: 1px solid black;
        border-radius: 2px;
    }
    
    form p {
        align-self: left;
        margin-bottom: 5px;
    }
    form button {
        margin: 25px auto;
        width: 100%;
        height: 40px;
        background: rgb(128, 193, 219);
        border: none;
        border-radius: 5px;
        color: white;
    }

    .logincont b {
        font-size: 20px;
    }
    @media (min-width: 375px) and (max-height: 411px) {
        .logincont {
            width: 98vw;
            height: 480px;
            margin: 30px auto;
            background: white;
            border: 2px solid black;
            border-radius: 20px;
            margin-top: 80px;
        }
    }
    
    </style>
                <div class="logincreate">
                    <button><p class="c" onclick="showcreate()">Create</p></button>
                    <button><p class="l" onclick="showlogin()">Login </p></button>
                </div>
                <hr>
                <form id="newuser" onsubmit="getData()">
                    <p>Name: </p>
                    <input type="text" id="username" name="username" required>
                    <p>E-mail: </p>
                    <input type="email" id="useremail" name="useremail" required placeholder="example you@gmail.com">
                    <p>Phone: </p>
                    <input type="text" id="usernum" name="usernum" required>
                    <p>Are You a: </p>
                    <select id="usertype" name="usertype" required>
                        <!-- Each option element represents an option in the dropdown -->
                        <option value="Tenant">Tenant</option>
                        <option value="Landlord">Landlord</option>
                    </select>
                    <p>Password: </p>
                    <input type="password" required placeholder="Strong password required" id="userpass" name="userpass"><br>
                    <button type="submit">Create</button>
                </form>
    `
}
function getData() {
    // Get form data
    var formData = new FormData(document.getElementById("newuser"));
    
    // Display form data
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    showcreate()
}

function checkData(){
    var formData = new FormData(document.getElementById("otheruser"));

    //Display
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1])
    }
    showlogin()
}
function showlogin(){
    createLogin.innerHTML = `
    <style>
    /*start*/
    
    .logincont {
        width: 98vw;
        height: 480px;
        margin: 30px auto;
        background: white;
        border: 2px solid black;
        border-radius: 20px;
        margin-top: 80px;
    }
    
    .logincreate {
        display: inline-flex;
        width: 99%;
        margin: 10px auto;
        height: 50px;
        text-align: center;
        justify-content: space-between;
        margin-bottom: 0px;
    }
    .logincont b {
        font-size: 20px;
    }
    
    .logincreate button {
        width: 100%;
        height: 100%;
        font-size: 18px;
        text-align: center;
        border: none;
        background: none;
    }
    
    .logincreate button:hover {
        color: red;
        text-decoration: underline;
    }
    
    form {
        width: 60%;
        height: auto;
        display: inline-block;
        text-align: left;
        padding: 2px;
    }
    form input {
        width: 100%;
        height: 25px;
        border: 1px solid black;
        border-radius: 2px;
    }
    
    form p {
        align-self: left;
        margin-bottom: 5px;
    }
    form button {
        margin: 25px auto;
        width: 100%;
        height: 40px;
        background: rgb(128, 193, 219);
        border: none;
        border-radius: 5px;
        color: white;
    }
    @media (min-width: 375px) and (max-height: 411px) {
        .logincont {
            width: 300px;
            height: 480px;
            margin: 30px auto;
            background: white;
            border: 2px solid black;
            border-radius: 20px;
            margin-top: 80px;
        }
    }
    
    </style>
                <div class="logincreate">
                    <button><p class="c" onclick="showcreate()">Create</p></button>
                    <button><p class="l" onclick="showlogin()">Login </p></button>
                </div>
                <hr>
                <form id="otheruser" onsubmit="checkData()">
                    <p>Name: </p>
                    <input type="text" id="username" name="username" required>
                    <p>Phone: </p>
                    <input type="text" id="usernum" name="usernum" required>
                    <p>Password: </p>
                    <input type="password" required id="userpass" name="userpass"><br>
                    <button type="submit">Create</button>
                </form>`
}
function logout() {
    isLoggedIn = false;
    checkIfLoggedIn(isLoggedIn)
}
function login() {
    isLoggedIn = true;
    checkIfLoggedIn(isLoggedIn)
}
let menbtn = document.querySelector(".menubtn")
function showpopup(num) {
    if (num === 1) {
        console.log("menbtn clicked")
        menbtn.innerHTML = `
        <style>
            .popup {
                position: fixed;
                margin-top: 53px;
                z-index: 1;
                background: ivory;
                padding: 20px;
                width: 100vw;
                margin-left: -5%;
                height: auto;
                display: inline-block;
                text-align: left;
            }
            .popup .tag {
                margin-left: 50px;
                margin-bottom: 30px;
            }
            
            .menubtn {
                display: inline-flex;
                justify-content: space-between;
                height: auto;
                vertical-align: middle;
            }
            #closer {
                margin: auto 0px;
                margin-top: 45%;
                margin-right: 4px;
            }
            
            
        </style>
        <p id="closer">Close</p>
        <button class="end2" onclick="showpopup(0)" style="background: url('sort.png'); background-size: cover; background-position: center;">
                        
                    </button>`
    } else if (num === 0) {
        console.log("menbtn clicked")
        menbtn.innerHTML = `
        <style>
            .popup {
                width: 100vw;
                height: auto;
                display: inline-block;
                text-align: center;
                display: none; 
            }
        </style>
        <button class="end2" onclick="showpopup(1)" style="background: url('menu-bar.png'); background-size: cover; background-position: center;">
                        
                    </button>`
    }
    
}
