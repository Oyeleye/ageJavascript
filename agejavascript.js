var clubAge= Number(prompt("How old are you?"));
//If you are younger than 18
if(clubAge < 18) {
alert ("Sorry, you are not allowed to enter the club");
}

//If you are between 18 and 21. This can be written as (clubAge > 18 < 21), but this is redundancy. It is enough to write (clubAge < 21), since (clubAge < 18) has already been established, under IF, and as such, ELSE IF, will only take effect, when the condition in IF is not the case, that is, you are are above 18 and below 21.
elseIf (clubAge < 21) {
alert ("You are allowed to enter the club, but do not drink");
}

//Otherwise, you can enter and drink beer. That is, if age is greater than 21 (that is, from 21 above)
else (clubAge > 21) {
alert("You are allowed to enter the club, and drink");
}