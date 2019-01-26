person = function(firstname,lastname,age,eyecolor)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;

    this.changename = changename
    function changename(firstname)
    {
        this.firstname = firstname;
    }
}

myFather = new person("john",'Deo',50,"blue");
console.log(myFather.firstname);
myFather.changename('hello')
console.log(myFather.firstname)

var x;
var txt = " ";
for(x in myFather){
    txt = txt + myFather[x];
}
console.log(txt);