const https = require("https");

function printMessage (userName, badgeCount, points){
    const message = `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
    console.log (message);
}



function getProfile(username) {

const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
    let body = "";
    response.on('data', data => {
    body += data.toString();
  });

    response.on('end', () => {
    const profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  });
});
}

// console.dir(process.argv);
// const users = process.argv.slice(2);
const users = ["antonmiroshkin", "chalkers"];
console.log(users);

getProfile("antonmiroshkin");
