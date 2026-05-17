const day = Number(prompt('Enter a day number from 1 to 31'));

if (day >= 1 && day <= 31) {
    if (day <= 10) {
        console.log('First decade');
    } else if (day <= 20) {
        console.log('Second decade');
    } else {
        console.log('Third decade');
    }
} else {
    console.log('Enter a valid day number from 1 to 31');
}
