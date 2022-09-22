// if else statement 

let myMath = 34;
if(myMath>=30){
    console.log("This is True");
}else{
    console.log("This is False");
}

let today = "Monday";
if(today==="Tuesday"){
    console.log("This is Tuesday");
}else if(today==="Monday"){
    console.log("This is Monday");
}else if(today==="Wednesday"){
    console.log("This is Wednesday");
}else if(today==="Thursday"){
    console.log("This is Thursday");
}else if(today==="Friday"){
    console.log("This is Friday");
}else if(today==="Saturday"){
    console.log("This is Saturday");
}else if(today==="Sunday"){
    console.log("This is Sunday");
}else{
    console.log("This is default day");
}


// switch statement 
let familyMem = "Abdul Alim";
switch(familyMem){
    case 'Rahim':
        console.log("This is Rahim");
        break;
        case 'Karim':
            console.log("This is Karim");
            break;
            case 'Jamal':
                console.log("This is Jamal");
                break;
                case 'Habib':
                    console.log("This is Habib");
                    break;
                    case 'Manik':
                        console.log("This is Manik");
                        break;
                        case 'Abdul Alim':
                            console.log("This is Abdul Alim");
                            break;
                            default:
                                console.log("This is default name");
}