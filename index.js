const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const { getSystemErrorMap } = require("util");
const userTeam = [];

let choicesQ = [
  {
    type: "list",
    message: "Do you wish to add another employee",
    choices: ["Engineer", "Intern", "Finish"],
    name: "userChoice",
  },
];
let managerQ = [
  {
    type: "input",
    message: "What is the managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the managers employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What if the managers email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
  },
];
let engineerQ = [
  {
    type: "input",
    message: "What is the engineers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineers employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What if the engineers email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineers github?",
    name: "github",
  },
];
let internQ = [
  {
    type: "input",
    message: "What is the interns name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the interns employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What if the interns email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the interns school?",
    name: "school",
  },
];

// First prompt asks for the managers information for the team
function getTeam() {
  inquirer.prompt(managerQ).then((res) => {
    manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    userTeam.push(manager);
    userChoice();
  });
}

// Presents the user with a choice between creating an intern, an engineer, or finishing the team
function userChoice() {
  inquirer.prompt(choicesQ).then((res) => {
    if (res.userChoice === "Intern") {
      getIntern();
    } else if (res.userChoice === "Engineer") {
      getEngineer();
    } else {
      generateHtml();
    }
  });
}

// Prompts the questions for an intern
function getIntern() {
  inquirer.prompt(internQ).then((res) => {
    intern = new Intern(res.name, res.id, res.email, res.school);
    userTeam.push(intern);
    userChoice();
  });
}

// Prompts the questions for an engineer
function getEngineer() {
  inquirer.prompt(engineerQ).then((res) => {
    engineer = new Engineer(res.name, res.id, res.email, res.github);
    userTeam.push(engineer);
    userChoice();
  });
}

// Generates HTML file when the user selects finished
function generateHtml() {
  let htmlSheet = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='style.css'>
        <title>My Team</title>
    </head>
    <body>
        <div id='header'>
            <h1 id='header'>My Team</h1>
        </div>
        
        <div id='user-team'>
            ${generateTeam(userTeam)}
        </div>
    </body>
    </html>`;

  fs.writeFile(`./dist/index.html`, htmlSheet, (err) =>
    err ? console.error(err) : console.log("HTML file created!")
  );
}

// Generates the team based on the user inputs to be given to rendered to the HTML file
function generateTeam(userTeam) {
  let htmlCard = ``;

  userTeam.forEach((element) => {
    if (element.role === "Manager") {
      //Append using manager card
      htmlCard =
        htmlCard +
        `<div id='card'>
                <div id='card-header'>
                    <h2>${manager.getName()}</h2>
                    <h3>☕ ${manager.getRole()}</h3>
                </div>
                <div id='card-body'>
                    <div>
                        <p>ID: ${manager.getId()}</p>
                        <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p>Office Number: ${manager.getOffice()}</p>
                    </div>
                </div>
            </div>`;
    } else if (element.role === "Engineer") {
      //Append using engineer card
      htmlCard =
        htmlCard +
        `<div id='card'>
                <div id='card-header'>
                    <h2>${engineer.getName()}</h2>
                    <h3>👓 ${engineer.getRole()}</h3>
                </div>
                <div id='card-body'>
                    <div>
                        <p>ID: ${engineer.getId()}</p>
                        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p>Github: <a href="https://github.com/${engineer.getGithub()}" target='_blank'>${engineer.getGithub()}</a></p>
                    </div>
                </div>
            </div>`;
    } else if (element.role === "Intern") {
      //Append using the intern card
      htmlCard =
        htmlCard +
        `<div id='card'>
                <div id='card-header'>
                    <h2>${intern.getName()}</h2>
                    <h3>🎓 ${intern.getRole()}</h3>
                </div>
                <div id='card-body'>
                    <div>
                        <p>ID: ${intern.getId()}</p>
                        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                        <p>School: ${intern.getSchool()}</p>
                    </div>
                </div>
            </div>`;
    }
  });

  return htmlCard;
}

// Initializes
getTeam();
