/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the 
console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average 
odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but
 in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game 
object, don't hardcode them (except for "draw"). HINT: Note how 
the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains 
the names of the players who scored as properties, and 
the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} scored by ${player}`);
// 2
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamstr} ${odd}`);
}
// bonus
const scorers = {};
for (const players of game.scored)
  scorers[players] ? scorers[players]++ : (scorers[players] = 1);
console.log(scorers);

// coding challenge1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);
// 3
const allplayers = [...players1, ...players2];
console.log(allplayers);
// 4
const players1final = [...players1, "Thiago", "Countinho"];
console.log(players1final);
// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printgoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};
printgoals(...game.scored);

// 7
team1 < team2 && console.log("Team 1 is ore likely to win");
team1 > team2 && console.log("Team 2 is ore likely to win");

// sets
const playersets = new Set([
  "Messi",
  "Ronaldo",
  "Neymar",
  "Messi",
  "Neymar",
  "Pogba",
]);
console.log(playersets);

console.log(new Set("Apoorv"));
// OUTPUT IS A p o r v
console.log(playersets.size);

console.log(playersets.has("Messi")); // returns true or false
console.log(playersets.has("Lukaku"));

playersets.add("Lukaku"); // adds the element if not present in the set
console.log(playersets);

playersets.delete("Lukaku");
console.log(playersets);
// playersets.clear(); empties the set

const teamposition = [
  "Defender",
  "Goalkeeper",
  "Midfielder",
  "Midfielder",
  "Forward",
  "Forward",
];
// sets converted to array
const teampositionUnique = [...new Set(teamposition)];
console.log(teampositionUnique);

// maps
const games = new Map();
games.set("name", "Barcelona");
games.set("rival 1", "Real madrid");
console.log(games.set("rival 2", "Bayern Munich"));

console.log(games.get("name"));

// quiz app

const questions = new Map([
  ["question", "What is the best programing language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct🎉"],
  [false, "Try again!"],
]);

console.log(questions.get("question"));

for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}
const answer = 3; //Number(prompt("Your answer"));
console.log(answer);

console.log(questions.get(questions.get("correct") === answer));

// convert map to array
console.log(...questions);

// coding challenge
/* 
Let's continue with our football betting app! This time, we have a 
map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the
 minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different 
game events that happened (no duplicates)
2. After the game has finished, is was found 
that the yellow card from minute 64 was unfair. So remove this
 event from the game events log.
3. Print the following string to the
 console: "An event happened, on average, every 9 minutes"
  (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console,
 marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(
  `An event happened, on average,every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average,every ${time / gameEvents.size} minutes`
);
//4
for (const [min, values] of gameEvents) {
  const half = min > 45 ? "Second" : "First";
  console.log(`[${half} HALF]  ${min} : ${values}`);
}

// strings

const airlines = "TAP Air portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airlines.length);

console.log(airlines.indexOf("r"));
console.log(airlines.lastIndexOf("r")); // gives the last occurenceof letter
console.log(airlines.indexOf("portugal"));

console.log(airlines.slice(4)); //it deletes the string before the mentioned array OR it satrts the array after the mentioned index
console.log(airlines.slice(4, 9)); // always gives the string from (end - beginning)

console.log(airlines.slice(0, airlines.indexOf(" ")));
console.log(airlines.slice(airlines.lastIndexOf(" ") + 1));

console.log(airlines.slice(-2));
console.log(airlines.slice(1, -1));

const checkmiddleseat = (seat) => {
  // B and E are middle seats
  const s = seat.slice(-1);
  //console.log(s);
  const check =
    s === "B" || s === "E" ? "It is middle seat" : "It is not middle seat";
  console.log(check);
};
checkmiddleseat("11B");
checkmiddleseat("23C");
checkmiddleseat("23E");

console.log(new String("Apoorv"));
console.log(typeof new String("Apoorv"));
console.log(typeof new String("Apoorv").slice(1)); // any string methods gives the primitive data type

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// fix capitilization in name
const passenger = "aPoOrv";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const capitlize = (noun) => {
  const lowercase = noun.toLowerCase();
  const correct = lowercase[0].toUpperCase() + lowercase.slice(1);
  console.log(correct);
};
capitlize("aPoORv");

// comparing emails
const email = "apoorvkumarvbcv@gmail.com";
const userinput = "aPoOrvkumarvBCV@gmail.COM   ";

const correct = email.toLocaleLowerCase().trim(); //trim excludes the useless spaces in the email
console.log(correct);
console.log(email === correct);

// replacing
const priceGB = "₹200,20";
const priceUS = priceGB.replace("₹", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23,Boarding door 23";
console.log(announcement);
// const regex = /door/g;
console.log(announcement.replaceAll("door", "gate"));

// pratice exercise

console.log("a+very+nice+string".split("+"));
console.log("Apoorv kumar".split(" "));

const [firstName, lastName] = "Apoorv kumar".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizefirst = (name) => {
  const names = name.split(" ");
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    // 1st method
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // 2nd method
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizefirst("apoorv aman chavi shrish shriyam");
capitalizefirst("apoorv kumar");

// padding a string

const message = "Go to gate 23";

console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Apoorv".padStart(20, "+").padEnd(30, "+"));

// masking credit card
const maskCreditcard = function (number) {
  const str = number + ""; // changing data type to string
  const last = str.slice(-4);

  return last.padStart(str.length, "*");
};

console.log(maskCreditcard(123456789123));
console.log(maskCreditcard("123456"));

// coding Challenge

// test data

// underscore_case     -> underscoreCase
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

const poll = {
  question: "What is the favourite programming language ?",
  options: ["0: Javascript", "1:Python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n (Write option number)`
      )
    );
    typeof answer === "number" &&
      this.answer < this.answers.length &&
      this.answers[answer]++;
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
