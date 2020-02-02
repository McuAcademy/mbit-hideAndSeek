//==========================
//======== Hider ===========
//==========================

//**** Variables ****
// Radio group channel to transmit on
let radioGroup = 1;

// radioName is the string used in the broadcasts and can technically be
// anything. Seekers should filter on this to locate a single beacon.
let radioName = "hide-1";

// timeBetweenBroadcasts is the delay in milliseconds before sending more data
let timeBetweenBroadcasts = 200;

//**** Initial Setup ****
radio.setGroup(radioGroup);

//**** Main Program Loop ****
basic.forever(function () {
    radio.sendString(radioName);
    basic.pause(timeBetweenBroadcasts);
})
