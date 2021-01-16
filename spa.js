let profile = {
    "btn":document.getElementById("character_btn"),
    "page":document.getElementById("profile_page"),

}

let adventure = {
    "btn": document.getElementById("adventure_btn"),
    "page": document.getElementById("adventure_page"),
}

let bie={
    "bieb":document.getElementById("exitpage"),
    "lvlupbtn":document.getElementById("lvlupbtn"),
    "rebtn":document.getElementById("re_btn"),
    "exitbtn":document.getElementById("exit_btn")
}

function init(){
    switch_to_profile();
}

function switch_to_adventure(){
    adventure.page.style.display = "block";
    adventure.btn.style.display = "none";
    profile.page.style.display = "none";
    profile.btn.style.display = "inline";
    bie.bieb.style.display="none";
    bie.rebtn.style.display="none";
    bie.exitbtn.style.display="inline";
    
}
function switch_to_profile(){
    adventure.page.style.display = "none";
    adventure.btn.style.display = "inline";
    profile.page.style.display = "block";
    profile.btn.style.display = "none";
    bie.bieb.style.display="none";
    bie.rebtn.style.display="none";
    bie.lvlupbtn.style.display="inline";
    bie.exitbtn.style.display="inline";
}

function switch_to_exitpage(){
    adventure.page.style.display = "none";
    adventure.btn.style.display = "none";
    profile.page.style.display = "none";
    profile.btn.style.display = "none";
    bie.lvlupbtn.style.display="none";
    bie.bieb.style.display="inline";
    bie.rebtn.style.display="inline";
    bie.exitbtn.style.display="none";
}

init();