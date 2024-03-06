// practice question given by sir abdullah

//q1) write down the table of two till 10 using for loop

var table = 2;

for(let i=1;i<=10;i++) {
    document.write(table + "x" + i + "=" +  table*i + "<br>");
}

// q2) ask user the number and write down the table  of that number till 10 in console 

var table = prompt('Enter a Number: ');
table = parseInt(table);

for(let i=1; i<=10; i++){
    userInput = table * i;
        console.log(table + "x" + i + "=" +  table*i);
}

// q3) Ask user if user want to SignUp, if yes, then ask the name of user, and add the username in an existing array, after all console the array

var users = [];
var user = prompt("Do you want to signup");

if (user == "yes"){
    var name = prompt("Please enter your Name : ");
    if(name != ""){
        users.push(name);
    }
    console.log(users);
}else{
    alert('invalid');
}

// practice question from youTube 
// q1) print all even number from 0 to 100 


for(let i=0; i<=100; i++){
    // even number 
    // if(i % 2 === 0){
    //     console.log(i);
    // }
    // odd Number
    if(i % 2 !== 0){
        console.log(i);
    }
}


// q2) create a game  where you start with anu random number. Ask the user to keep guessing the number untill the user enter the correct number  

let num = 25;
var user = prompt('Enter The Number Between 10 to 30');
user = parseInt(user);

if(user !== num){
    prompt(user + " " + "You Win")
}else if(user === num)(
    alert('ivalid number')
)