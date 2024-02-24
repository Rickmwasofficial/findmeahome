let body = document.querySelector("#mybody")
let isLoggedIn = Boolean;
let availableHouses = [
    'pexels-carlos-diaz-709767.jpg',
    'pexels-max-rahubovskiy-6782581.jpg',
    'pexels-josh-sorenson-111093.jpg',
    'pexels-jovydas-dobilas-2462015.jpg'
]

function checkIfLoggedIn(state) {
    if (state) {
        topPage.innerHTML = `
            <a href="index.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Home</button></b></a>
            <a href="services.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Our Services</button></b></a>
            <a href="Aboutus.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">About Us</button></b></a>
            <a href="#contactus"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Contact us</button></b></a>
            <button class="login" onclick="logout()">
                <style>
                    .end svg {
                        margin: auto 0px;
                        margin: 10px;
                        color: white;
                    }
                    .end p {
                        margin-left: 5px;
                    }
                    .login {
                        width: auto;
                        border-radius: 10px;
                    }
                </style>
                <!--Import the profile temolate from bootstrap-->
                <abbr title="Your Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                </abbr> 
            </button>
    `;
    } else {
        topPage.innerHTML = `
            <a href="index.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Home</button></b></a>
            <a href="services.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Our Services</button></b></a>
            <a href="Aboutus.html"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">About Us</button></b></a>
            <a href="#contactus"><button class="tag" onclick="checkIfLoggedIn(isLoggedIn);" style="border: none; background: none; font-size: 19px;">Contact us</button></b></a>
            <button class="login" onclick="login()">
                <!--Import the profile temolate from bootstrap-->
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="justify-self: flex-start; align-self: center; border: none; padding-left: 6px;">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p class="txt">Create account</p>
            </button>
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

//search results 
function searchresult(){
    topcards.innerHTML = `<style>
        .tophouses {
            width: 0px;
            height: 0px;
        }
        .apartment {
            margin-top: -50px;
        }
    </style>`
}

let topPage = document.querySelector(".end");
let cards = document.querySelector('.apartment');
let topcards = document.querySelector(".tophouses");
topcards.innerHTML = `
    <style>
        @media (min-width: 1280px) {
            .scriptdesc {
                display: inline-flex;
                justify-content: space-between;
                width: 93%;
                height: auto;
                display: none;
            }
        }
        @media (min-width: 1024px) and (max-width: 1280px) {
            .scriptdesc {
                display: inline-flex;
                justify-content: space-between;
                width: 93%;
                height: auto;
                display: none;
            }
        }
    </style>
    <div class="scriptdesc"><h1>Our top most rated houses.</h1> <h1><a href="#">More</a></h1></div>
    
    <div class="topcards">
        <div class="card1 card" style="background: url('/public/pexels-carlos-diaz-709767.jpg'); background-size: cover; background-position: center;">
            <div class="topcardsdetail2">
                <h2>JC-FELT</h2>
                <h2>County: Embu</h2>
            </div>
        </div>
        <div class="card2 card" style="background: url('/public/pexels-carlos-diaz-709767.jpg'); background-size: cover; background-position: center;">
            <div class="topcardsdetail">
                <h2>JC-FELT</h2>
                <h2>County: Embu</h2>
            </div>
        </div>
        <div class="card3 card" style="background: url('/public/pexels-carlos-diaz-709767.jpg'); background-size: cover; background-position: center;">
            <div class="topcardsdetail2">
                <h2>JC-FELT</h2>
                <h2>County: Embu</h2>
            </div>
        </div>
    </div>
    
`

function change(direction, cardnum, currentCount) {
    console.log("Change was clicked")
    if (direction == "front" && currentCount < 3) {
        currentCount += 1
        console.log("Image changed")
        apartments(cardnum, availableHouses[currentCount], currentCount)
    } else if (direction == "back" && currentCount > 0) {
        currentCount -= 1
        apartments(cardnum, availableHouses[currentCount], currentCount)
    }   
}

function apartments(num, image, curr) {
    cards.innerHTML = ``
    for (let i = 0; i <= 11; i++){
        if (num === i) {
            console.log("Changed Image: " + image)
            cards.innerHTML += `
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
                    width: 10%;
                    height: 10%;
                    margin: 10px;
                    border-radius: 48.9%;
                    margin-top: 93%;
                    border: none;
                }
                @media (min-width: 412px) and (max-width: 819px) {
                    abbr button {
                        border: none;
                        margin: 0px auto;
                    }
                    abbr {
                        width: auto;
                        height: auto;
                        margin-top: 78%;
                        margin-left: -40px;
                        border: none;
                    }
                    #front, #back {
                        background: white;
                        width: 10%;
                        height: 10%;
                        margin: 10px;
                        border-radius: 48.9%;
                        margin-top: 58%;
                        border: none;
                    }
                }
                .cardimage${num} {
                    width: 100%;
                    height: 75%;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                    margin: 0px auto;
                    background: url(${image});
                    background-size: cover; 
                    background-position: center; 
                    background-blend-mode: darken;
                }
            </style>
            <div class="cardfull">
                <div class="cardimage${i}">
                    <div class="changeimage">
                        <button id="back" onclick="change('back', ${i}, ${curr })"><</button>
                            
                        <button id="front" onclick="change('front', ${i}, ${curr})">></button>
                    </div>
                </div>
                <a href="details.html" id="detaillink">
                    <div class="carddesc">
                        <div class="carddetail">
                            <div class="detail1">
                                <p><b>JC-FELT</b></p>
                                <p><b>Room Type: Bedsitter</b></p>
                                <p><b>Price: <b style="color: red;">KSH 4,000</b></b></p>
                                
                            </div>
                            <div class="detail2">   
                                <p><b>Rating: 5.0</b></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`
        } else {
            cards.innerHTML += `
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
                        width: 10%;
                        height: 10%;
                        margin: 10px;
                        border-radius: 48.9%;
                        margin-top: 93%;
                        border: none;
                    }
                    abbr {
                        width: auto;
                        height: auto;
                        margin-top: 93%;
                        margin-left: -40px;
                        border: none;
                    }
                    abbr button {
                        border: none;
                        margin: 0px auto;
                    }
                    @media (min-width: 412px) and (max-width: 819px) {
                        abbr button {
                            border: none;
                            margin: 0px auto;
                        }
                        abbr {
                            width: auto;
                            height: auto;
                            margin-top: 78%;
                            margin-left: -40px;
                            border: none;
                        }
                        #front, #back {
                            background: white;
                            width: 10%;
                            height: 10%;
                            margin: 10px;
                            border-radius: 48.9%;
                            margin-top: 58%;
                            border: none;
                        }
                    }
                    .cardimage${i} {
                        width: 100%;
                        height: 75%;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                        margin: 0px auto;
                        background: url("/public/pexels-carlos-diaz-709767.jpg");
                        background-size: cover; 
                        background-position: center; 
                        background-blend-mode: darken;
                    }

                </style>
                <div class="cardfull">
                    <div class="cardimage${i}">
                        <div class="changeimage">
                            <button id="back" onclick="change('back', ${i}, 0)"><</button>
                                 
                            <button id="front" onclick="change('front', ${i}, 0)">></button>
                        </div>
                    </div>
                    <a href="details.html" id="detaillink">
                        <div class="carddesc">
                            <div class="carddetail">
                                <div class="detail1">
                                    <p><b>JC-FELT</b></p>
                                    <p><b>Room Type: Bedsitter</b></p>
                                    <p><b>Price: <b style="color: red;">KSH 4,000</b></b></p>
                                    
                                </div>
                                <div class="detail2">
                                      
                                    <p><b>Rating: 5.0</b></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `
        }
    }
}

apartments(null)
let menbtn = document.querySelector(".menubtn")
function showpopup(num) {
    if (num === 1) {
        console.log("menbtn clicked")
        menbtn.innerHTML = `
        <style>
            .popup {
                position: fixed;
                margin-top: 65px;
                z-index: 1;
                background: ivory;
                padding: 20px;
                width: 100vw;
                margin-left: -5%;
                height: auto;
                display: inline-block;
                text-align: left;
            }
        </style>
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
