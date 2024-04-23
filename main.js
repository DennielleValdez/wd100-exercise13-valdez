// FOR COMPARISON OPERATORS EXPECTED RESULTS ARE IN BOOLEAN

    // let x = 8;
    // let y = 10;
    // let d = "Dennielle";
    // let f = "Cleofe";

    // let result = x === y;

    // alert(result);


// LOGICAL OPERATORS - using BOOLEAN not STRING (" ")
    // - AND - &&
    // - OR - ||

    // let x = false;
    // let y = false;

    // let result = x || y;

    // alert(result);

// COMBINATION OF LOGICAL OPERATORS AND COMPARISON OPERATORS

    // let x = (25 + 5 / 2) > (10 + 6 / 2);
    // let y = 5 > 2;

    // let result = x && y;

    // alert(result);


// IF STATEMENT

// const ageCalculation = () => {
//     let age = Number(document.querySelector("#ageInput").value);
//     // alert(age);
//     // let age = 15;
//     if (age >= 18){
//         alert ("You can now vote!");
//     } else if (age > 12){
//         alert ("You are still in hs");
//     } else if(age >= 0 && age <= 12){
//         alert ("You are still a minor");
//     } else{
//         alert ("Not a valid age");
//     }
// }
/*

age is greater than or equal 18 = "You can now vote"
age is greater than 12 and less than 18 = "You are still in hs"
age is less than  12 = "You are still a minor"


*/

// SIMPLE SWITCH CASE

    // let fruit = "orange";

    // switch(fruit){
    //     case "apple":
    //         alert("Wow you have chosen apple!");
    //     break;
    //     case "banana":
    //         alert("Wow you have chosen banana!");
    //     break;
    //     default:
    //         alert("None of the above");
    // }


    // let age = -2;

    // switch(true){
    //     case (age >= 18):
    //         alert("You can now vote!");
    //     break;
    //     case (age > 12):
    //         alert ("You are still in hs");
    //     break;
    //     case (age >= 0 && age <= 12):
    //         alert ("You are still a minor");
    //     break;
    //     default:
    //         alert ("Not a valid age");

    // }

// PHASES OF LIFE
const enterAge = () => {
    let age = Number(document.querySelector("#ageInput").value);
    let phase = "";

        switch(true){
            case (age >= 61 ):
                phase = "Elderly";
            break;

            case (age >= 36):
                phase = "Adolescence";
            break;

            case (age >= 20):
                phase = "Early Adolescence";
            break;

            case (age >= 17):
                phase = "Late Teenager";
            break;

            case (age >= 13):
                phase = "Early Teenager";
            break;

            case (age >= 8):
                phase = "Childhood";
            break;

            case (age >= 0 && age <= 7):
                phase = "Early Childhood";
            break;

            default:
                phase = "Not a valid age";
        }

    document.querySelector("#phaseOutput").value = phase;
}



