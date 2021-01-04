//  const square = function (x){
// return x * x
//   }


// const square = (x) => {
//     return x * x 
// }

// const square = (x) => x * x


// console.log(square(4));

/* 
+       'this' is a reference to our object which means we can access properties object via this keyword
+       Arrow function are not suited for method function in object 
+       Arrow functions do not support 'this' keyword outside of their scope
+       forEach nested in a function will acess 'this' of the function
+       printGuestList : function with alternative syntax between old syn and arrow function. Supports 'this' keyword

*/
const eventOne = {
    name: 'Birthday party',
    guestList: ['Alexia', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        // Iterate through guest list to acess name where each name is an item / placeholder we choose to call guest
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)

        })
    }
}

eventOne.printGuestList();