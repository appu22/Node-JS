// const square = function(x){
//     return x*x;

// }

// const sqaure = (x) =>{
//     return x * x
// }

// const square = (x) => x*x

// console.log(square(3));

const event = {
    name: 'Birthday party ',
    guestList : ['appu','basu','kira'],
    printGuestList(){
        console.log("Guest list for " + this.name)
        // const that = this
        this.guestList.forEach((guest) =>{
            console.log( guest +' is atteding '+this.name );
        })
    }
}
event.printGuestList();







