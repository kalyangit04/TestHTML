let coffeeCup={
    color:'white',
    size:'m',
    hasSaucer:true,
    printWhatudo:function(){
        console.log("I contain either Coffee or Tea");
    }
};

//Dot Notation
/*console.log('The coffee Cup is of size :'+coffeeCup.size);

//Array Notation
if(coffeeCup['hasSaucer']==true){
    console.log('The coffee cup has a saucer');
}*/

coffeeCup.size='L';

console.log(coffeeCup);
coffeeCup.yearOfMake=2015;

console.log(coffeeCup);
delete coffeeCup.hasSaucer;

console.log(coffeeCup);

coffeeCup.printWhatudo();