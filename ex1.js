var h1 = require('http');
var server = h1.createServer(function(req,res){
    console.log("http demo");
    res.end("hello world");
});
server.listen(8080);


var person = {

    firstname : "ABC",
    lastname : "xyz",
    age : "34",
    mobile : "123456789"

};
 console.log(person.firstname);
//console.log(person["fistname"]);
exports.g1 = person;

console.log("hello world");



var log = {

info : function(info){
    console.log('info ' + info);
},
warning : function(warning){
    console.log("warning " + warning);

},
error : function(error){
console.log("error " + error);

}

};



 






var x= 10;
exports.myfun = function(a)
{
    console.log("my fun a is " + a);
}
function myfun1(){
    return 4*8;
}
var x1 = function()
{
    return 4*9;
}

var x2 = ()=> 
{
    return 6*6;
}
exports.q1 = x1;
console.log("from x2 " + x2());
console.log("from x1 " + x1());
console.log(myfun1());
console.log(x);
