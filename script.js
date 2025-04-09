// 1. Library Book Management
// - Create a `Book` class with properties `title`, `author`, and `yearPublished`.
// - Add a method `getBookInfo()` that returns a formatted string of the book details.
// - Create multiple book instances and display their information.
class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    getBookInfo() {
        return `${this.title} by ${this.author} published in the year ${this.yearPublished}`;
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book5 = new Book("Great Liberty", "George Orwell", 1949);

const books = [book1, book2, book3, book4, book5];
console.table(books);

  
//   2. Employee Payroll System
//   - Create an `Employee` class with properties `name`, `position`, and `salary`.
//   - Add a method `getAnnualSalary()` to return the total salary for a year.
//   - Create instances for multiple employees and display their annual salaries.
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}

const salary1 = new Employee("Kola", "Manager", 5000);
const salary2 = new Employee("Tunde", "Accountant", 4000);
const salary3 = new Employee("Gbenga", "Production Manager", 3000);

const employees = [
    { name: salary1.name, position: salary1.position, annualSalary: salary1.getAnnualSalary() },
    { name: salary2.name, position: salary2.position, annualSalary: salary2.getAnnualSalary() },
    { name: salary3.name, position: salary3.position, annualSalary: salary3.getAnnualSalary() }
];
console.table(employees);


//   3. Vehicle Registration System (Inheritance)
// - Create a `Vehicle` class with properties `brand`, `model`, and `year`.
// - Create a `Car` subclass that extends `Vehicle` and adds a new property `fuelType`.
// - Add a method `getCarDetails()` to return the car’s details.
// - Create multiple car instances and display their information.
class Vehicle {
    constructor(brand, model, year ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      getCarDetails() {
        return `${this.brand} ${this.model} ${this.year}`;
      }
  }

class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
        super(brand, model, year);
        this.fuelType = fuelType;
    }
    getCarDetails() {
        return `${super.getCarDetails()}, Fuel Type: ${this.fuelType}`;
    }
}

const car1 = new Car("Toyota", "Corolla", 2024, "Petrol");
const car2 = new Car("Toyota", "Hilux", 2024, "Petrol");
const car3 = new Car("Mikano", "Geely", 2024, "CNG");

console.log(car1.getCarDetails());
console.log(car2.getCarDetails());
console.log(car3.getCarDetails());


//   4. Online Shopping Cart (Static Methods)
// - Create a `ShoppingCart` class with a static method `calculateTotal(cartItems)`.
// - The method should take an array of item prices and return the total price.
// - Test the static method with different shopping cart values.

class ShoppingCart {
    static calculateTotal(cartItems) {
        return cartItems.reduce((total, price) => total + price, 0);
    }
}
const cart1 = [15.99, 23.49, 9.99, 5.49];
const cart2 = [100, 200, 300];
const cart3 = [39, 150, 200];
console.log(`Total for cart1: $${ShoppingCart.calculateTotal(cart1).toFixed(2)}`);
console.log(`Total for cart2: $${ShoppingCart.calculateTotal(cart2).toFixed(2)}`);
console.log(`Total for cart3: $${ShoppingCart.calculateTotal(cart3).toFixed(2)}`);


// 5. Banking System (Class & Methods)
// - Create a `BankAccount` class with properties `owner`, `balance`, and methods:
//   - `deposit(amount)`: Adds the amount to balance.
//   - `withdraw(amount)`: Deducts the amount from balance (if sufficient funds).
//   - `getBalance()`: Returns the current balance.
// - Create multiple accounts and perform transactions.
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount; // Update the balance
        return this.balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds for ${this.owner}`);
            return this.balance;
        }
        this.balance -= amount; // Update the balance
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
};

const user1 = new BankAccount("Joseph", 700);
const user2 = new BankAccount("Samson", 250);
const user3 = new BankAccount("Segun", 900);
const users = [user1, user2, user3];
console.table(users);

for (let i = 0; i < users.length; i++) {
    users[i].deposit(50); // Add 50 to the balance
    users[i].withdraw(100); // Deduct 100 from the balance
    console.log(`${users[i].owner}'s balance: ${users[i].getBalance()}`);
};