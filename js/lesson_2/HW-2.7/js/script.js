const time = +(prompt('Enter a number from 0 to 59'));

if (time >= 0 && time <= 59) {
    if (time <= 14) {
        console.log('First quarter');
    } else if (time <= 29) {
        console.log('Second quarter');
    } else if (time <= 44) {
        console.log('Third quarter');
    } else {
        console.log('Fourth quarter');
    }
} else {
    console.log('Enter a valid number from 0 to 59');
}
