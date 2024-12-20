/*1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.*/
/*const  a = +prompt("ikireqemli eded daxil et")
for(let i=a;i<=106;i+=7){
console.log(i);
}*/

/*2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
Proqram N ədədini istifadəçidən soruşur.*/
/*const n=("I know how to use cycles")
const b=+prompt("1-10 arasi bir reqem daxil et")
document.write((n + "<br />").repeat(b))*/

/*3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,*/

duz sefdi sorus
/*const ad ="entiqe"
const soyad ="celilova"
console.log((`${ad} ${soyad}`).toUpperCase()); 
console.log((`${soyad} ${ad}`).toUpperCase()); */


/*4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.*/
/*const Number = prompt("Telefon nömrəsini daxil edin (+7 ilə başlasın)");
function isvalidnumber(Number) {
    if (Number.length === 11 && Number.startsWith("+7")) {
        console.log("Sizin telefon nömrəniz qeyd edildi.");
    } else if(Number.length != 11 || !(Number.startsWith("+7"))){
        console.log("Sizin telefon nömrəniz qeyd edilmədi.");
    }
}
isvalidnumber(Number);
*/

/*5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
Məsələn: "hell5o wor6ld" -> 56
getNumberFromString(number)*/
islemedi
/*const sentence="hell5o wor6ld"
function getNumber(sentence){
    const numbers=getNumberFromString(number)
    console.log(`${sentence} -> ${numbers}`);
}
getNumber(sentence);
*/


/*6.Remove all exclamation
Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
məsələn:
He!llo! !!FE-25 // netice olmalıdır Hello FE-25!*/
islemedi
/*const word="He!llo! !!FE-25"
function remove(word){
    console.log( `${word} -> ${word.removeAllExclamation}` + "!")
}
remove(word);
*/


/*7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın*/
 /*
let ad="entiqe"
 soyad="celilova"
 function user(){
    boyukad = ad.charAt(0).toUpperCase() + ad.slice(1);
    boyuksoyad = soyad.charAt(0).toUpperCase() + soyad.slice(1);  
    username = boyukad + " " + boyuksoyad;
    console.log(username);
}
user();
*/


/*8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın*/
/*
let ad="entiqe"
 soyad="celilova"
 function user(){
    boyukad = ad.toUpperCase();
    boyuksoyad = soyad.toUpperCase();  
    username = boyukad + " " + boyuksoyad;
    console.log(username);
}
user();
*/


/*9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın*/
/*
let ad="Entiqe"
 soyad="Celilova"
 function user(){
    boyukad = ad.toLowerCase();
    boyuksoyad = soyad.toLowerCase();  
    username = boyukad + " " + boyuksoyad;
    console.log(username);
}
user();

/*10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
ilkHerfiDeyis('Qara', "Y") // Yara*/
/*
let soz="qara"
 function word(){
    boyukherf = soz.charAt(0).toUpperCase() + soz.slice(1);
    ilkHerfiDeyis=boyukherf.replace("Q","Y");
    yara_Y_si=ilkHerfiDeyis.charAt(0).toUpperCase();
    console.log(`${boyukherf} ${yara_Y_si} ${ilkHerfiDeyis}`);
}
word();
*/

/*11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
nameFormat(str) —> Ramin Mammadzada-=> M. Ramin*/
/*
let ad=prompt("adinizi daxil edin")
 soyad=prompt("soyadinizi daxil edin")
 function user(){
    boyukherf_ad = ad.charAt(0).toUpperCase() + ad.slice(1);  
    boyukherf_soyad=soyad.charAt(0).toUpperCase()
    username = boyukherf_soyad + ". " + boyukherf_ad ;
    console.log(username);
}
user();
*/

/*12. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, abcdf@gmail.com meselen) //true*/
/*
let gmail=prompt("emailinizi daxil edin(...@gmail.com seklinde olmalidir)")
if (gmail.slice(-10) === "@gmail.com") {
    console.log(true) 
}
    else {
        console.log(false);
    }
/*
/*13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın*/
/*
let soz=prompt("soz daxil edin (butun herfler boyuk olmalidir)")
if (soz === soz.toUpperCase()) {
    console.log(true) 
}
    else {
        console.log(false);
    }
*/


/*14. Funksiya yazın.Cümlə alacaq parametr olaraq.Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq*/

/*const cumle="menjsoyrenirem"
function ilk5simvol(){
    ilk5simvol=cumle.slice(0,5);
    console.log(ilk5simvol)
}
ilk5simvol()*/

/*15. Funksiya yazın.Parametr alsın.Sözün içərisində nəqədər boşluq varsa hamsı - işarəsi olsun*/

/*const cumle="men js oy re ni rem"
function deyis(){
    deyis=cumle.replaceAll(" ","-");
    console.log(deyis)
}
deyis()*/