//window.onload = function () {
//document.querySelector("h1").style.color='red'
//document.querySelector("h1").style.fontSize='100px' //jgjhihiuhhj
//window.alert("hello")
//document.write("<h2> hello <span>page</span> </h2>");
//document.createElement(HELLO)
//console.log(" omda")
//console.table("omda","medo","adham")
//console.log("hello from %c mohamed emad" , "color :red ;font-size:40px")
//var myname="omda";
//console.log("hello " + myname)
/*
console.log(`hello ${myname}`);
console.log(typeof 55)
console.log(typeof [55, 44, 555 ,3])
console.log(typeof ['mo', "ah", "jd"] )
console.log(typeof true);
console.log(typeof {name:"mohamed", age: 15, country:"eg" });
console.log(typeof null)
console.log(typeof "omda")
*/
/*
 user = "omda",age = 17;
console.log(user);
console.log(hello);
console.log(age);
console.log(age);
hello.innerHTML="ayhaga"
console.log(hello);

var userName= "me";
var User= "omda"
console.log (userName);
console.log(User)
(var ,let, const)
let a = "medoo"
const  a=2
console.log(a)*/
/*
console.log('medo \\emad \'elomda\'');
console.log("medoemad \"elomda\"");
console.log("elaero\
 web\
 school\
")
console.log("elzero\nweb\nschool")
*/
/*
var a = "we love"
var b = " javascript"
let c = " "
document.write(a + b , " " )
document.write(a , b + " " ); ;
document.write(a + " " + b , " ");
document.write(a , c + b);

let a = 'we love '
let b = 'javascript'
let c = 'and'
let d = 'programming'
console.log(a + " " +b +"\n"+c+" "+d+" ")

console.log(`${a} ${b} 
    ${c} ${100*1}`)
    console.log(`${title} ${description} ${date}`)
console.log('medo')
    */

   /* ***challenge1***
   let title = "mohamed" ,description = "elzero web school" , date = "1923" ;
   let abc = `<div class="card">
   <h3>${title}</h3>
   <p> ${date}</p>
   <span>${description}</span>
</div>`
    document.write(abc.repeat(4));

console.log(2**10)
console.log(21%8)  //remove5
console.log(-100)
console.log(-"100")
console.log(-"-100")
console.log(-"osama")
console.log(+"osama")

let a= "10"
let b =20
let c = true
console.log(+a + b);
console.log("" - 2)
console.log(+a+ b+ c)

let a = 10
a=a+20
a+=20
a-=10
a/=2   ;a*=3
console.log(a)



//****ch2****(1)
let a= 10
let b = "20"
let c = 80
console.log(++a  + -a++ - +c++ + +b++);
console.log(++a + -b + +c++ - -a++ + +a);

//***ch2****
let d = "-100"
let e = "20"
let f =  30;
let g = true
console.log(-d * +e )

console.log((100).toString());
console.log(+"25")
console.log(Number("100"))
console.log(parseInt(" 10omda 353"))

console.log(Number.isInteger("100"))
console.log(Number.isInteger(100))
console.log(Number.isInteger(100.44))
*/
/*
console.log(Math.round(88.6));
console.log(Math.floor(88.9))
console.log(Math.ceil(88.1));
console.log(Math.trunc(88.7));
console.log(Math.trunc(88.7))
console.log(Math.min(100,23,66,44,21))
console.log(Math.pow(2,4))
console.log(Math.random())
*/

/*
//*****challenges***     video 26
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//1
console.log(Math.trunc(d));

//2
console.log((Math.trunc(a)*4) +Math.trunc(d)*300)

//3
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d))

//4
console.log((Math.trunc(b)/12)+Math.trunc(d)*25) ;   //66.6667

console.log(Math.ceil((Math.round(b)/12)+Math.trunc(d)*25))     //67
*/

/*
let Name ="  omda  "
console.log(Name);
console.log(Name[1]);
console.log(Name.charAt(2));

console.log(Name.length);
console.log(Name.trim());
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

//3ways
console.log(Name.trim()&&Name[2].toUpperCase());
console.log(Name.trim().charAt(2).toUpperCase());
console.log(Name.trim()[2].toUpperCase());

let a= "elzero web school"
console.log(a.indexOf("z"));

console.log(a.lastIndexOf("l"));
console.log(a.slice(0,6));                           //not including number og the end

console.log(a.slice(-5,-2)); 
console.log(a.repeat(5));

console.log(a.split(" "));
console.log(a.split(" ",2));

let a = 'elzero web school';
console.log(a.substring(3,6));        //not included end
console.log(a.substring(-10,4))        //elze   start from zero
console.log(a.length);
console.log(a.substring(a.length-5,a.length-3))

console.log(a.substr(0,4))  
console.log(a.substr(-3))
console.log(a.substr(-5,3))  
console.log(a.includes("web"));
console.log(a.startsWith("r",4))
console.log(a.endWith("e",4))      

//***ch***
let a = "Elzero Web School";
//ch1
console.log(a.charAt(2).toUpperCase(2)+a.slice(3,6));  //ch1
//ch2
console.log(a.charAt(13).toUpperCase(13).repeat(8));
abc=(a.charAt(13).toUpperCase(13));

console.log(abc.repeat(4));
//ch3

//ch4
console.log(a.substr(0,6)+" " + a.substr(-6))
//CH5
console.log(a.charAt(0).toLowerCase()+a.substr(1,15).toUpperCase()+a.charAt(16).toLowerCase())
*/


/*
console.log(10=="10");
console.log(10!="10");
console.log(10==="10");
console.log(10!=="10");

console.log(10=="10" && 10>=10 )
console.log(10=="10" || 10>= 37 )

let price = 100
let discount =false
let discountAmount = 30;
let country = "Egypt";
let country1 = "ksa";
let student = true;
let status = "poor"

if (discount === true ){
    price -= discountAmount  ;

}else if(country === "Egypt"  ){

    if (student === true){
        if (status = "poor"){
        price -= discountAmount +50}
        else{
        price -= discountAmount +30
        } 
    } 
    else {
        price -= discountAmount +20
    }


} else if(country1 === "gaza"){
    price -= 70;

} //else if(student == true ){price -= discountAmount + 20 ;} 
else {
    price-=10
} 
console.log(price)
*/
/*
let theName = "mona"
let theGender = "female"
let theAge = 60

if (theGender === "male"){
    console.log("mr")
}else {
        console.log("mrs")
}
// condition ? true : false
theGender === "male" ? console.log("mr") : console.log("mrs")
let result = theGender === "male" ? ("mr") : ("mrs");
document.write(result);
console.log(theGender === "male" ? ("mr") : ("mrs"));

console.log(`"hello" ${theGender === "male" ? ("mr") : ("mrs")} ${theName}`);

theAge < 20 ? console.log(20) : theAge > 20 && theAge <= 60 ? console.log("20 to 60") : theAge > 60 ? console.log("60") : console.log("error") 

let price = null;   //or unfid=fined ,0,"" 
console.log(`"the price is" ${price || 300} `)
console.log(`"the price is" ${price ?? 300} `)   //null or undefined only
//console.log("price = "+price) 

//*****ch if******
let a = 
a < 10 ? console.log("10") : a >= 10 && a <=40 ? console.log("10 to 40") : a>40 ? console.log(">40") : console.log("unknown");
let st = "Elzero Web School" 
if ((2* st.length).toString() === "34"){
    console.log("good")
};

if (st[st.indexOf("W")]==="W") {
    console.log("good")
};
if (st.length !== "string"){
    console.log("good")
}
if (typeof(st.length) === "number"){
    console.log("good")
}
if(st.slice(0,6).repeat(2)==="ElzeroElzero") {
    console.log("very good")
}
console.log(st.slice(0,6).repeat(2));
console.log(st.slice(0,6)+st.slice(0,6))
*/

/*
let day = "ok";
switch (day) {

    case (0) :
        console.log("friday");
    break;
    case 1 :
    console.log("saturday");
    break;
    default:
        console.log("unknown day")
}
*/
/*
//*****ch1**********
let job = "designer";
let salary = 0
switch (job){
    case "manager" :
    salary = 8000;
    console.log(salary);
    break;
    case "support" :
        salary = 4000;
        break; 
        case "it" :
            salary = 4000;
            break; 
            case "developer" : 
            case "designer" :
            salary = 7000;
            break; 
            default :
            salary =2000;
            break;
}
console.log(salary);

//*****ch2******
let holidays = 1
let money = 0

if (holidays === 0){
    money = 5000;
} else if(holidays === 1 || holidays === 2){
money = 4000
} else if (holidays === 3){
    money = 2000;
} 
else{
    money = 1000;
}

console.log("my money is "+money );
console.log(`your money is ${money}`);


let myfriends = ["Ahmed" , "Mohamed" , "Hazem", ["Marwan" ,"Hazem"]];
console.log(`hello ${myfriends[3][1][3]}`)

console.log(`${myfriends}`);
 myfriends [1] = "mozza";  
console.log(`${myfriends}`);
myfriends [3][1] = "medo";  
console.log(`${myfriends}`);

let myfriends = ["Ahmed" , "Mohamed" , "Hazem", "Marwan" ,"maryem"] ;
console.log(myfriends.length)
//myfriends[7] ="medo"
//lenth>index  1
myfriends[myfriends.length-1] = "mama"

myfriends[myfriends.length] = "mohamedi"

console.log(myfriends);
console.log(myfriends.length)
*/

let myfriends = ["Ahmed" , "Mohamed" , "Hazem"] ;
console.log(myfriends);
myfriends.unshift("medo" , "nabil");
console.log(myfriends)

myfriends.push("rere" , "lolo");

console.log(myfriends)
//myfriends.shift()
let first =myfriends.shift();

console.log(myfriends);
console.log(`my first name is ${first}`)

let last =myfriends.pop();

console.log(myfriends);
console.log(`my last name is ${last}`)

console.log(myfriends);
console.log(`my last name is ${last}`)
//omda