//function defination 
function sayName(name, callback) { //name is formal arg
    console.log("hello " + name);
    //callback();
}
function sayHow(name) {
    console.log(`how are you ${name}`);
}
//calling the function
sayName('Harshita', sayHow(" Harshita jain")); //actual perameter  //cbfn


function example2() {
    console.log('hello world');
}
function name2(name) { //formal arg
    console.log("hello" + " " + name);
}
//calling the function
setTimeout(example2, 2000);
name2("Harshita Jain"); //actual arg