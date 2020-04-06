const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];
 
//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

let democratOnly = presidents.filter(function(x){
  return x.party.includes("D");
})
console.log(democratOnly)
 
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

let oneTermRepublican = presidents.filter(function(y){
  if (y.terms < 2)
  return y.party.includes("R");
})
console.log(oneTermRepublican)

//3) return only the last three presidents

let lastThree = presidents.slice(0,3)
console.log(lastThree)

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

let twoTermDem = presidents.filter(function(f){
  if (f.terms > 1)
  return f.party.includes("D")
})
console.log(twoTermDem)

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"