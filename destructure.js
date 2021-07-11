const person = {name:'jack William', age: 20, job:'facebooker',gfName:'Ema Watson',address:'Mirpur', phone:21512202518, friends: ['Tom Cruise', 'Tom Hancks','Tom yearn']};


const { phone, gfName } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);


const complexObject = {
    name: 'Niloy',
    info: {
        address:'Puran Dhaka',
        leader: 'Tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader);

const friends = ['Hasib', 'Sagor', 'Dipu', 'Nahiyan', 'Habib'];

const [firstFriend,...restFriends] = friends;

console.log (firstFriend, restFriends);