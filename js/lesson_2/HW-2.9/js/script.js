const dayNumber = +(prompt('Enter a day number from 1 to 7'));

switch (dayNumber) {
    case 1:
        console.log('Monday - study JavaScript');
        break;
    case 2:
        console.log('Tuesday - practice arrays');
        break;
    case 3:
        console.log('Wednesday - practice objects');
        break;
    case 4:
        console.log('Thursday - do homework');
        break;
    case 5:
        console.log('Friday - repeat material');
        break;
    case 6:
        console.log('Saturday - rest');
        break;
    case 7:
        console.log('Sunday - prepare for next week');
        break;
    default:
        console.log('Enter a valid day number from 1 to 7');
}
