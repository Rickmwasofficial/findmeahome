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
                margin-top: 70px;
                z-index: 1;
                background: ivory;
                padding: 20px;
                width: 100vw;
                margin-left: -55%;
                height: auto;
                display: inline-block;
                text-align: left;
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
