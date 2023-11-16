// var Abu = 165;
// var Kelin = 160;
// var uydagilar = true;
// var amalar = true;

// if(Abu >= Kelin & uydagilar == amalar) {
//     console.log("Toy bosin");
// }else {
//     console.log("Mashq qilamiz!");
// }

var elHeading = document.querySelector(".heading")
var UserName = prompt("Kisada qancha borligini yozing...")
var Pul = 10824718

if(Pul <= UserName) {
    elHeading.textContent = "Oq yo'l"
}else {
    elHeading.textContent = "Damoy"
}
