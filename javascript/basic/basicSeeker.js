//==========================
//======== Seeker ==========
//==========================

//**** Variables ****
// Radio group channel to transmit on
let radioGroup = 1;

// radioName is the string used in the broadcasts and can technically be
// anything. Seekers should filter on this to locate a single beacon.
let radioName = "hide-1";

// The last adjusted RSSI value we have seen
let signalStrength = 0;

//**** Initial Setup ****
radio.setGroup(radioGroup);

//**** Main Program Loop ****
basic.forever(function () {
    // Display the signal strength for the user
    led.plotBarGraph(signalStrength, 86);

    // Decay the signal
    if (signalStrength > 0) {
        signalStrength--;
    }
})

radio.onReceivedString(function(receivedString) {
    // Only search for desired hider
    if (receivedString !== radioName) {
        return;
    }

    // Get the last RSSI and adjust it for ease of use
    signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128;
});
