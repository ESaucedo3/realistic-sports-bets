// Bank
let bank = 100;

// Players
const players = [
  {teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums"},
  {teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: 'Tyroil Smoochie-Wallace'},
  {teamNumber: 1, emoji: '🏇', skill: 88, name: 'Jackmerius Tacktheratrix'},
  {teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: 'Javaris Jamar Javarison-Lamar'},
  {teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie"},
  {teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III"},
  {teamNumber: 1, emoji: '🤾', skill: 5, name: 'Leoz Maxwell Jilliumz'},
  {teamNumber: 1, emoji: '🏂', skill: 99, name: 'Hingle McCringleberry'},
  {teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot"},
  {teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: 'Xmus Jaxon Flaxon-Waxon'},
  {teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: 'Saggitariutt Jefferspin'},
  {teamNumber: 2, emoji: '🤺', skill: 34, name: 'Quatro Quatro'},
  {teamNumber: 2, emoji: '🏄', skill: 71, name: 'X-Wing @Aliciousness'},
  {teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: 'Bisquiteen Trisket'},
  {teamNumber: 2, emoji: '🤸', skill: 47, name: 'Scoish Velociraptor Maloish'},
  {teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: 'Donkey Teeth'},
  {teamNumber: 2, emoji: '🕴️', skill: 58, name: 'T.J. A.J. R.J. Backslashinfourth V'},
  {teamNumber: 2, emoji: '💃', skill: 99, name: 'Firstname Lastname'},
  {teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: 'Dan Smith'},
  {teamNumber: 2, emoji: '🐅', skill: 100, name: 'Tiger'},
];

// Upon intial load
drawTeam1();
drawTeam2();
drawBank();

// Acquired Elements
const betBlue5 = document.getElementById('bet-blue-5');
const betBlue25 = document.getElementById('bet-blue-25');
const betBlue100 = document.getElementById('bet-blue-100');
const betBlueAll = document.getElementById('bet-blue-all');

const betRed5 = document.getElementById('bet-red-5');
const betRed25 = document.getElementById('bet-red-25');
const betRed100 = document.getElementById('bet-red-100');
const betRedAll = document.getElementById('bet-red-all');

// Events
betBlue5.addEventListener('click', () => betTeam1(5));
betBlue25.addEventListener('click', () => betTeam1(25));
betBlue100.addEventListener('click', () => betTeam1(100));
betBlueAll.addEventListener('click', () => betTeam1(bank));

betRed5.addEventListener('click', () => betTeam2(5));
betRed25.addEventListener('click', () => betTeam2(25));
betRed100.addEventListener('click', () => betTeam2(100));
betRedAll.addEventListener('click', () => betTeam2(bank));

function drawTeam1() {
  const team1 = document.getElementById('team1');
  team1.innerHTML = '';
  let team1Players = players.filter((player) => player.teamNumber === 1);
  team1Players.forEach((player) => {
    team1.innerHTML += player.emoji;
  });
}

function drawTeam2() {
  const team2 = document.getElementById('team2');
  team2.innerHTML = '';
  let team2Players = players.filter((player) => player.teamNumber == 2);
  team2Players.forEach((player) => {
    team2.innerHTML += player.emoji;
  });
}

function betTeam1(bet) {
  let team1Players = players.filter((player) => player.teamNumber === 1);
  let team2Players = players.filter((player) => player.teamNumber === 2);

  let team1PlayersTotalSkill = 0;
  let team2PlayersTotalSkill = 0;

  team1Players.forEach((player) => {
    team1PlayersTotalSkill += player.skill;
  });

  team2Players.forEach((player) => {
    team2PlayersTotalSkill += player.skill;
  });

  if (team1PlayersTotalSkill > team2PlayersTotalSkill) {
    bank += bet;
    alert('WIN!');
  } else {
    bank -= bet;
    alert('LOSS!');
  }
  drawBank();
}

function betTeam2(bet) {
  let team1Players = players.filter((player) => player.teamNumber === 1);
  let team2Players = players.filter((player) => player.teamNumber === 2);

  let team1PlayersTotalSkill = 0;
  let team2PlayersTotalSkill = 0;

  team1Players.forEach((player) => {
    team1PlayersTotalSkill += player.skill;
  });

  team2Players.forEach((player) => {
    team2PlayersTotalSkill += player.skill;
  });

  if (team2PlayersTotalSkill > team1PlayersTotalSkill) {
    bank += bet;
    alert('WIN!');
  } else {
    bank -= bet;
    alert('LOSS');
  }
  drawBank();
}

function draftPlayers() {
  players.forEach((player) => {
    let newTeam = Math.round(Math.random() * 1 + 1);
    player.teamNumber = newTeam;
  });
  drawTeam1();
  drawTeam2();
}

function drawBank() {
  const bankElem = document.getElementById('bank');
  bankElem.textContent = bank;
  if (bank === 0) {
    alert('RIP Wallet!');
    return;
  } else if (bank < 0) {
    alert('You are in DEBT!');
    return;
  }
  draftPlayers();
}
