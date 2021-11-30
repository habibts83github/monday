let age = 10;
if (age >= 5 && age <= 10) {
  console.log("you are in elementary school");
} else if (age >= 11 && age <= 13) {
  console.log("you are in middle school");
} else if (age >= 14 && age <= 17) {
  console.log("you are a high scholl student");
} else console.log("you are eligible to drive");
//switch
day = 2;
switch (day) {
  case 1: {
    console.log("you entered sunday");
    break;
  }
  case 2: {
    console.log("you entered monday");
    break;
  }
  case 3: {
    console.log("you entered tuesday");
    break;
  }
  case 4: {
    console.log("you entered wednesday");
    break;
  }
  case 5: {
    console.log("you entered thursday ");
    break;
  }
  case 6: {
    console.log("you entered friday ");
    break;
  }
  case 7: {
    console.log("you entered saturday");
    break;
  }
  default:
      console.log("enter days of the week")
}
