let teams = [
  {
    name: "RCB",
    img : "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    captain: "Rajat Patidar",
    primary: "red",
    secondary: "black",
    trophies: 1,
  },
  {
    name: "CSK",
    img:"https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    captain: "M S Dhoni",
    primary: "yellow",
    secondary: "blue",
    trophies: 5,
  },
  {
    name: "SRH",
    img:"https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    captain: "Pat Cummins",
    primary: "orange",
    secondary: "black",
    trophies: 1,
  },
  {
    name: "MI",
    img:"https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    captain: "Hardik Pandya",
    primary: "blue",
    secondary: "gold",
    trophies: 5,
  },
  {
    name: "PBKS",
    img:"https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    captain: "Shreyas Iyer",
    primary: "red",
    secondary: "white",
    trophies: 0,
  },
  {
    name: "GT",
    img:"https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
    captain: "Shubman Gill",
    primary: "darkblue",
    secondary: "yellow",
    trophies: 1,
  },
  {
    name: "LSG",
    img:"https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
    captain: "Rishabh Pant",
    primary: "royalblue",
    secondary: "red",
    trophies: 0,
  },
  {
    name: "DC",
    img:"https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    captain: "Axar Patel",
    primary: "blue",
    secondary: "red",
    trophies: 0,
  },
  {
    name: "KKR",
    img:"https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    captain: "Ajinkya Rahane",
    primary: "purple",
    secondary: "gold",
    trophies: 3,
  },
  {
    name: "RR",
    img:"https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
    captain: "Kumar Sangakkara",
    primary: "royalblue",
    secondary: "pink",
    trophies: 1,
  }
];


let main = document.querySelector('main');
let box = document.querySelector('#box');
let btn = document.querySelector('button');
let t_name = document.querySelector('#team-name');
let captain = document.querySelector('#cap-name');
let img = document.querySelector('img')

btn.addEventListener('click',function(){

    let winner = Math.floor(Math.random()*teams.length)
    t_name.innerHTML = `TEAM : ${teams[winner].name}`;
    captain.innerHTML = `CAPTAIN : ${teams[winner].captain}`;
    main.style.backgroundColor = teams[winner].secondary;
    box.style.backgroundColor = teams[winner].primary;
    img.src = teams[winner].img
    

})