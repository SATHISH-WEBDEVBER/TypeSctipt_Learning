class User {
    name : string;
    static TotalUsers : number = 0;

    constructor(name : string) {
        this.name = name;
        User.TotalUsers++;
    }

    getName() {
        return this.name;
    }

    static getTotalUsers() {
        return User.TotalUsers;
    }
}

console.log(User.getTotalUsers()); //0

const user1 = new User("Alice");
console.log(user1.getName());
console.log(User.getTotalUsers()); //1

const user2 = new User("Bob");
console.log(user2.getName());
console.log(User.getTotalUsers()); //2

console.log(User.TotalUsers); //2