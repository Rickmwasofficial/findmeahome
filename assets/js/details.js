let topPage = document.querySelector(".end");
let isLoggedIn = Boolean;
let availableHouses = [
    'pexels-carlos-diaz-709767.jpg',
    'pexels-max-rahubovskiy-6782581.jpg',
    'pexels-josh-sorenson-111093.jpg',
    'pexels-jovydas-dobilas-2462015.jpg'
]

let housedetails = [
    "JC-FELT", "Embu", "Kangaru", "Bedsitter", "Free Wifi Available", 4500, 30, 5, "University Of Embu", "Gated", "Personal Bathrooms"
]

let house = document.querySelector('.detailscont');

house.innerHTML = `
        <div class="moreimage">
        <div class="leftforimage">

        </div>
        <div class="rightfordetails">
            
        </div>
        </div>
        <style>
            .bookdirect {
                position: fixed;
                margin: 0px auto;
                margin-top: 80vh;
                background: white;
                width: 120px;
                height: 30px;
                border-radius: 30px;
                border: 1px solid black;
                margin-left: -62vw;
                padding-top: 12px;
            }
        </style>
        <a class="bookdirect" href='#reviewtext'>Book Room</a>
        <div class="contdet">
        <div class="morecont">
            <div class="textdet">
                <div class="housedet">
                    <div class="det1">
                        <h1>${housedetails[0]}</h1>
                        <b>County: ${housedetails[1]}, Kenya</b><br>
                        <b>Location: ${housedetails[2]}</b><br>
                        <b>Room Type: ${housedetails[3]}</b><br>
                        <b>${housedetails[4]}</b><br>
                    </div>
                    <div class="det2">
                        <b>Near: ${housedetails[8]}</b><br>
                        <b>${housedetails[9]}</b><br>
                        <b>${housedetails[10]}</b><br>
                    </div>
                </div>
                <div class="review">
                    <h2>Reviews</h2>
                    <div class="reviewer">
                        <img src="me.jpg">
                        <div class="reviwerdet">
                            <b style="padding-top: 4px;">John Doe</b><br>
                            <b>Tenant</b><br>
                            <b>Rating: 4.5/5.0</b>
                        </div>
                    </div>
                    <div class="reviewtext" id="reviewtext">
                        
                        <p>Despite its compact size, the room is efficiently designed to maximize functionality and comfort. The layout is well-planned, with designated areas for sleeping, studying, and relaxing. The bed is cozy and equipped with storage drawers underneath, perfect for keeping belongings organized in a limited space. The desk provides ample workspace for studying, with enough room for a laptop and textbooks.</p>
                    </div>
                </div>
            </div>
            <div class="book">
                <div class="bookdiv" id="bookdiv">
                    <b style="font-size: 20px;">Ksh ${housedetails[5]} per month</b>
                    <div class="in">
                        <b>Rooms: ${housedetails[6]}</b><hr>
                        <b>Vacancies: ${housedetails[7]}</b>
                    </div>
                    <button class="bookbutton">
                        <b>Book Room</b>
                    </button>
                    <button class="addcart">
                        <b>Add to Cart</b>
                    </button>
                    <button class="report">
                        <b>Report House</b>
                    </button>
                    
                </div>

            </div>
        </div>
        </div>
`
document.querySelector('.bookdirect').addEventListener("click", function(){            
    document.querySelector('.bookdirect').innerHTML = `
    <style>
    .bookdirect {
        display: none;
    }
</style>`;

});


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

let cards = document.querySelector(".leftforimage")
let moreimg = document.querySelector(".rightfordetails")

for (i = 0; i < availableHouses.length; i++) {
    moreimg.innerHTML += `
        <style>
            @media (min-width: 1024px) and (max-width: 1280px) {
                .img${i} {
                    height: 60px;
                }
            }
        </style>
        <div class="img${i}" style="background: url(${availableHouses[i]}); background-size: cover; background-blend-mode: darken;"></div>
    `
}
function change(direction, currentCount) {
    console.log("Change was clicked")
    if (direction == "front" && currentCount < 3) {
        currentCount += 1
        console.log("Image changed")
        apartments(availableHouses[currentCount], currentCount)
    } else if (direction == "back" && currentCount > 0) {
        currentCount -= 1
        apartments(availableHouses[currentCount], currentCount)
    } else if (direction == "front" && currentCount === 3) {
        apartments(availableHouses[0], 0)
    } else if (direction == "back" && currentCount === 0) {
        apartments(availableHouses[3], 3)
    }
}

function apartments(image, curr) {
    console.log("Changed Image: " + image)
    cards.innerHTML = `
    <style>
        .changeimage {
            width: 100%;
            height: 100%;
            background: none;
            display: inline-flex;
            justify-content: space-between;
        }
        #front, #back {
            background: white;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 25px;
            margin-top: 93%;
            border: none;
        }
        .cardimage {
            width: 100%;
            height: 100%;
            margin: 0px auto;
            background: url(${image});
            background-size: cover; 
            background-position: center; 
            background-blend-mode: darken;
            box-shadow: 0px 0px 1px 0px grey;
        }

    </style>
    <div class="cardfull">
        <div class="cardimage">
            <div class="changeimage">
                <button id="back" onclick="change('back', ${curr})"><</button>
                <button id="front" onclick="change('front', ${curr})">></button>
            </div>

        </div>
    </div>`
        
}

apartments('/public/pexels-carlos-diaz-709767.jpg', 0)
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
