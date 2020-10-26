const { connected } = require('process');

var errortext = "Error | An error occurred - This user might not exist.";

console.log();
console.log("This is a Roblox Friend Checker.");
console.log();

console.log("* | contact | *");
console.log()
console.log("github | https://github.com/Scripped");
console.log("roblox | https://www.roblox.com/users/1957038621/profile");

// -----------------------------------//

const prompt = require('prompt-sync')({sigint:true});
console.log();
var userid = prompt('Enter user ID:')


setTimeout(() => { console.log("Connecting to user:" + userid); }, 2000);

// -----------------------------------//

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = "https://www.roblox.com/users/"+ userid + "/friends#!/friends";

// -----------------------------------//

puppeteer
    .launch()
    .then(function(browser) {
        return browser.newPage();
    })
    .then(function(page) {
        return page.goto(url).then(function() {
            return page.content();
        })
    })
    .then(function(html) {
        $('.friends-title',html).each(function() {
            console.log(("Displaying ") + $(this).text());
        })
        $('.avatar-card-caption',html).each(function() {
            console.log();
            console.log($(this).text());
        })
    })
    .catch(function(err) {
        console.log(errortext)
    })

    
console.log("Click CTRL + C when you've finished reading.");