var mycar = new Array();
mycar[0] = "a";
mycar[1] = 'b';
mycar[2] = 'c';
mycar[3] = 'd';

var mycar1 = new Array("e",'f','g');

var mycar2 = ['h','i','g'];

console.log(mycar[0]);

console.log(mycar1[0]);

console.log(mycar2[0]);

Array.prototype.myucase = function(){
    for(i = 0;i < this.length;i++){
        this[i] = this[i].toUpperCase();
    }
}
mycar.myucase();
console.log(mycar[0]);