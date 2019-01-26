var date = new Date();
date.setDate(date+5);

var today = new Date();

if(today > date){
    console.log('发生错误')
}else{
    console.log('时间正确')
}