console.log('person1: shows ticket');
console.log('person2: shows ticket');
// unlike regular function async function always returns a promise
//await always used in asyncfunction body
const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getCandy = new Promise((resolve, reject) => resolve('candy'));
    const getCoke = new Promise((resolve, reject) => resolve('coke'));
    let ticket = await promiseWifeBringingTicks;

    let [popcorn, candy, coke]= await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn}, ${candy}, ${coke}`);
    return ticket;
}; 

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');