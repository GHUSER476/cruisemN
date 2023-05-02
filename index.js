const noblox = require('noblox.js')
const confidentials = require('./confidential.json')
const cookie = confidentials.cookie
const prompt = require('prompt')
let banner = require('simple-banner');
banner.set("BruteTTK Sniper V1");

function buyitem() {

    prompt.start()

    prompt.get(['itemId'], function (err, result) {
        if (err) return onErr(Err)
        
        console.log('Buying Item ${result.itemId}.')
        noblox.buy(result.itemId)
        console.log("Successfully Bought That Item")
    })

}

// Setting our cookie

noblox.setCookie(cookie).then(function() { // we are getting our cookie to log in from the json file
    console.log('Logged in successfully')


    buyitem()


}).catch(function($err) {
    console.log('Error loggin in, full error: ${err}')
})

 