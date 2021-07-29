'use strict'
let readLineSync = require('readline-sync');
let score =0;
let questions =[
   {question:"Where do I live ?",
    answer:"Bhubaneswar"},
    {
    question:"My favourite superhero would be ?",
    answer:"Iron man"},
    {
  question:"My favourite movie is ?",
  answer:"Kal ho na ho"
}];
let highScores =[{name:"Pratyush",score:3},{name:"Anjali",score:2}];
let userName = readLineSync.question('What is Your Name ? \n');
console.log("Welcome "+userName+' to DO YOU KNOW Pratyush ?');

//creating the function play

function play(question,answer)
{
  let userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log("you are right");
    score = score+=1
  }
  else
  {
    console.log('oops! you get it wrong');

  }
  console.log("score is "+score);
  console.log("----------------");
}
//creating a function to check if the player has beaten the highScores

function isBeat(score)
{
  for(let i=0;i<highScores.length;i++)
  {
    if(score>highScores[i].score)
    {
      console.log("You have beaten the score of "+highScores[i].name);
      console.log("To update your name send me a screenshot");
    }
  }
}

//creating the question

 
for(let i=0;i<questions.length;i++)
{ let currQuestion = questions[i]
  play(currQuestion.question,currQuestion.answer);
}

console.log("Your final score is "+score);
console.log("Current high scores are ");
for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name +" : "+highScores[i].score );
}
isBeat(score);


