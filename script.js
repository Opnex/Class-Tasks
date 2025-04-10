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
    constructor(brand, model, year) {
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
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds for`);
            return this.balance;
        }
        this.balance -= amount;
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

// 6. Smart Device Inheritance
// 📌 **Task**: Create a `Device` class with properties for `brand`, `model`, and `year`. Then, create a `Smartphone` subclass that adds `os` (Operating System).

// 🔹 **Steps**:
// - Define a `Device` class with properties `brand`, `model`, and `year`.
// - Add a method `getDeviceDetails()` to display the device's details.
// - Extend `Device` into `Smartphone`, adding an `os` property.
// - Create multiple smartphone instances and display their information.

class Device {
    constructor(brand, model, year) {
        this.brand = brand; // Brand of the device
        this.model = model; // Model of the device
        this.year = year;   // Year of manufacture
    }
    getDeviceDetails() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

class Smartphone extends Device {
    constructor(brand, model, year, os) {
        super(brand, model, year); // Call the parent class constructor
        this.os = os;             // Operating System of the smartphone
    }
    getDeviceDetails() {
        return `${super.getDeviceDetails()}, OS: ${this.os}`;
    }
}

// Create instances of Smartphone
const device1 = new Smartphone("Apple", "iPhone 14", 2024, "iOS");
const device2 = new Smartphone("Samsung", "Galaxy S21", 2024, "Android");
const device3 = new Smartphone("Google", "Pixel 8", 2024, "Android");

// Store the devices in an array
const devices = [
    { Brand: device1.brand, Model: device1.model, Year: device1.year, OS: device1.os },
    { Brand: device2.brand, Model: device2.model, Year: device2.year, OS: device2.os },
    { Brand: device3.brand, Model: device3.model, Year: device3.year, OS: device3.os }
];
// Display the devices in a table format
console.table(devices);



// 7. University Student Management (Inheritance & Methods)
// 📌 **Task**: Create a `Person` class with properties for `name` and `age`. Then, create a `Student` subclass that tracks course and grade.

// 🔹 **Steps**:
// - Define a `Person` class with properties `name` and `age`.
// - Add a method `getDetails()` to return person details.
// - Extend `Person` into `Student`, adding `course` and `grade` properties.
// - Add a method `getStudentInfo()` to return the student’s details.
// - Create multiple students and display their information.
// Define the Person class
// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name; // Name of the person
        this.age = age;   // Age of the person
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Define the Student class that extends Person
class Student extends Person {
    constructor(name, age, course, grade) {
        super(name, age); // Call the parent class constructor
        this.course = course; // Course the student is enrolled in
        this.grade = grade;   // Grade of the student
    }
    getStudentInfo() {
        return `${super.getDetails()}, Course: ${this.course}, Grade: ${this.grade}`;
    }
}

// Create instances of Student
const student1 = new Student("Quadri", 20, "Computer Science", "A");
const student2 = new Student("Elija", 22, "Mathematics", "B");
const student3 = new Student("Idris", 19, "Physics", "A+");

// Store the students in an array
const students = [
    { Name: student1.name, Age: student1.age, Course: student1.course, Grade: student1.grade },
    { Name: student2.name, Age: student2.age, Course: student2.course, Grade: student2.grade },
    { Name: student3.name, Age: student3.age, Course: student3.course, Grade: student3.grade }
];

// Display the students in a table format
console.table(students);



// 8. E-Commerce Order System (Inheritance & Methods)
// 📌 **Task**: Create an `Order` class with properties for `orderId` and `customerName`. Then, create a `ProductOrder` subclass that tracks product details.

// 🔹 **Steps**:
// - Define an `Order` class with properties `orderId` and `customerName`.
// - Add a method `getOrderDetails()` to return order details.
// - Extend `Order` into `ProductOrder`, adding `productName` and `price` properties.
// - Create multiple product orders and display their information.
// Define the Person class
// Define the Order class
class Order {
    constructor(orderId, customerName) {
        this.orderId = orderId;         // Unique ID for the order
        this.customerName = customerName; // Name of the customer
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Customer: ${this.customerName}`;
    }
}

// Define the ProductOrder class that extends Order
class ProductOrder extends Order {
    constructor(orderId, customerName, productName, price) {
        super(orderId, customerName); // Call the parent class constructor
        this.productName = productName; // Name of the product
        this.price = price;           // Price of the product
    }
    getProductDetails() {
        return `${super.getOrderDetails()}, Product: ${this.productName}, Price: $${this.price}`;
    }
}

// Create instances of ProductOrder
const order1 = new ProductOrder(101, "Zainab", "Laptop", 1200);
const order2 = new ProductOrder(102, "Seyi", "Smartphone", 800);
const order3 = new ProductOrder(103, "Serah", "Tablet", 500);

// Store the orders in an array
const orders = [
    { OrderID: order1.orderId, Customer: order1.customerName, Product: order1.productName, Price: `$${order1.price}` },
    { OrderID: order2.orderId, Customer: order2.customerName, Product: order2.productName, Price: `$${order2.price}` },
    { OrderID: order3.orderId, Customer: order3.customerName, Product: order3.productName, Price: `$${order3.price}` }
];

// Display the orders in a table format
console.table(orders);



// 9. Healthcare System (Inheritance & Methods)
// 📌 **Task**: Create a `Person` class with properties for `name` and `age`. Then, create a `Patient` subclass that tracks illness and hospital details.

// 🔹 **Steps**:
// - Define a `Person` class with properties `name` and `age`.
// - Add a method `getDetails()` to return person details.
// - Extend `Person` into `Patient`, adding `illness` and `hospitalName` properties.
// - Add a method `getPatientDetails()` to return the patient’s details.
// - Create multiple patient instances and display their information.
// Define the Person class
class Persons {
    constructor(name, age) {
        this.name = name; // Name of the person
        this.age = age;   // Age of the person
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Define the Patient class that extends Person
class Patient extends Persons {
    constructor(name, age, illness, hospitalName) {
        super(name, age); // Call the parent class constructor
        this.illness = illness;         // Illness of the patient
        this.hospitalName = hospitalName; // Hospital where the patient is admitted
    }
    getPatientDetails() {
        return `${super.getDetails()}, Illness: ${this.illness}, Hospital: ${this.hospitalName}`;
    }
}

// Create instances of Patient
const patient1 = new Patient("Quadri Oriogbade", 45, "Flu", "City Hospital");
const patient2 = new Patient("Idris Ajani", 30, "Fracture", "Green Valley Clinic");
const patient3 = new Patient("Elija Nuremi", 60, "Diabetes", "Sunrise Medical Center");

// Store the patients in an array
const patients = [
    { Name: patient1.name, Age: patient1.age, Illness: patient1.illness, Hospital: patient1.hospitalName },
    { Name: patient2.name, Age: patient2.age, Illness: patient2.illness, Hospital: patient2.hospitalName },
    { Name: patient3.name, Age: patient3.age, Illness: patient3.illness, Hospital: patient3.hospitalName }
];

// Display the patients in a table format
console.table(patients);




// 10. Movie Ticket Booking (Inheritance & Methods)
// 📌 **Task**: Create a `Movie` class with properties for `title` and `duration`. Then, create a `MovieTicket` subclass that tracks ticket details.

// 🔹 **Steps**:
// - Define a `Movie` class with properties `title` and `duration`.
// - Add a method `getMovieDetails()` to return movie details.
// - Extend `Movie` into `MovieTicket`, adding `seatNumber` and `price` properties.
// - Add a method `getTicketInfo()` to return the ticket details.
// - Create multiple movie ticket instances and display their information.
// Define the Movie class
class Movie {
    constructor(title, duration) {
        this.title = title;       // Title of the movie
        this.duration = duration; // Duration of the movie in minutes
    }
    getMovieDetails() {
        return `Title: ${this.title}, Duration: ${this.duration} minutes`;
    }
}

// Define the MovieTicket class that extends Movie
class MovieTicket extends Movie {
    constructor(title, duration, seatNumber, price) {
        super(title, duration); // Call the parent class constructor
        this.seatNumber = seatNumber; // Seat number for the ticket
        this.price = price;           // Price of the ticket
    }
    getTicketInfo() {
        return `${super.getMovieDetails()}, Seat: ${this.seatNumber}, Price: $${this.price}`;
    }
}

// Create instances of MovieTicket
const ticket1 = new MovieTicket("A man called God", 148, "A12", 15);
const ticket2 = new MovieTicket("Jagun Jagun", 136, "B7", 12);
const ticket3 = new MovieTicket("Samu Alajo", 169, "C5", 18);

// Store the tickets in an array
const tickets = [
    { Title: ticket1.title, Duration: `${ticket1.duration} minutes`, Seat: ticket1.seatNumber, Price: `$${ticket1.price}` },
    { Title: ticket2.title, Duration: `${ticket2.duration} minutes`, Seat: ticket2.seatNumber, Price: `$${ticket2.price}` },
    { Title: ticket3.title, Duration: `${ticket3.duration} minutes`, Seat: ticket3.seatNumber, Price: `$${ticket3.price}` }
];

// Display the tickets in a table format
console.table(tickets);




// 11. Online Learning Platform
// 📌 **Task**: Create a `Course` class with properties for `courseName` and `instructor`. Then, create a `StudentCourse` subclass that tracks a student's progress.

// 🔹 **Steps**:
// - Define a `Course` class with properties like `courseName` and `instructor`.
// - Create a method `getDetails()` to return course details.
// - Extend `Course` into `StudentCourse`, adding a `progress` property.
// - Create an instance of `StudentCourse`, update progress, and display details.
// Define the Course class
class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName; // Name of the course
        this.instructor = instructor; // Name of the instructor
    }
    getDetails() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

// Define the StudentCourse class that extends Course
class StudentCourse extends Course {
    constructor(courseName, instructor, progress) {
        super(courseName, instructor); // Call the parent class constructor
        this.progress = progress;     // Progress of the student in the course
    }
    updateProgress(newProgress) {
        this.progress = newProgress; // Update the progress
    }
    getStudentCourseDetails() {
        return `${super.getDetails()}, Progress: ${this.progress}%`;
    }
}

// Create an instance of StudentCourse
const studentCourse = new StudentCourse("JavaScript Basics", "Zainab Qudus", 50);

// Update the progress
studentCourse.updateProgress(75);

// Display the course details
console.log(studentCourse.getStudentCourseDetails());




// 12. Smart Home System
// 📌 **Task**: Develop a `Device` class representing smart home devices with `turnOn()` and `turnOff()` methods. Extend it to `SmartLight` and `SmartThermostat` classes.

// 🔹 **Steps**:
// - Create a `Device` class with a `status` property (on or off).
// - Add `turnOn()` and `turnOff()` methods to update status.
// - Extend `Device` into `SmartLight` and `SmartThermostat`.
// - Add properties like `brightness` for `SmartLight` and `temperature` for `SmartThermostat`.
// - Create instances and test turning them on/off.
// Define the Device class
class Devices {
    constructor() {
        this.status = "off"; // Status of the device (on or off)
    }
    turnOn() {
        this.status = "on"; // Turn the device on
        console.log(`${this.constructor.name} is now ON.`);
    }
    turnOff() {
        this.status = "off"; // Turn the device off
        console.log(`${this.constructor.name} is now OFF.`);
    }
}

// Define the SmartLight class that extends Device
class SmartLight extends Devices {
    constructor(brightness = 50) {
        super(); // Call the parent class constructor
        this.brightness = brightness; // Brightness level of the light
    }
    setBrightness(level) {
        if (this.status === "on") {
            this.brightness = level;
            console.log(`Brightness set to ${this.brightness}%.`);
        } else {
            console.log("Cannot adjust brightness. The light is OFF.");
        }
    }
}

// Define the SmartThermostat class that extends Device
class SmartThermostat extends Devices {
    constructor(temperature = 22) {
        super(); // Call the parent class constructor
        this.temperature = temperature; // Temperature setting of the thermostat
    }
    setTemperature(temp) {
        if (this.status === "on") {
            this.temperature = temp;
            console.log(`Temperature set to ${this.temperature}°C.`);
        } else {
            console.log("Cannot adjust temperature. The thermostat is OFF.");
        }
    }
}

// Create instances of SmartLight and SmartThermostat
const livingRoomLight = new SmartLight();
const bedroomThermostat = new SmartThermostat();

// Test the SmartLight
livingRoomLight.turnOn();
livingRoomLight.setBrightness(75);
livingRoomLight.turnOff();
livingRoomLight.setBrightness(30);

// Test the SmartThermostat
bedroomThermostat.turnOn();
bedroomThermostat.setTemperature(25);
bedroomThermostat.turnOff();
bedroomThermostat.setTemperature(18);



// 13. E-Wallet System
// 📌 **Task**: Create an `EWallet` class where users can `deposit()`, `withdraw()`, and check their balance. Use a static method to track total wallets created.

// 🔹 **Steps**:
// - Define an `EWallet` class with a `balance` property initialized to 0.
// - Add `deposit(amount)`, `withdraw(amount)`, and `getBalance()` methods.
// - Implement a static property `totalWallets` to track wallet count.
// - Create multiple wallet instances and test transactions.
class EWallet {
    static totalWallets = 0; // Static property to track the total number of wallets created

    constructor() {
        this.balance = 0; // Initialize balance to 0
        EWallet.totalWallets++; // Increment the total wallet count whenever a new wallet is created
    }

    // Method to deposit money into the wallet
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0.");
            return this.balance;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        return this.balance;
    }


    // Method to withdraw money from the wallet
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient fund");
            return this.balance
        }
        if (amount <= 0) {
            console.log("Withdrawer amount must be gretaer than 0.");
            return this.balance;
        }
        this.balance -= amount;
        console.log(`Withdraw: $${this.amount} New Balance: $${this.balance}`);
        return this.balance
    }

    // Method to check the current balance
    getBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }

    // Static method to get the total number of wallets created
    static getTotalWallets() {
        console.log(`Total Wallets Created ${EWallet.totalWallets}`);
        return EWallet.totalWallets;
    }
}

// Create and operate on multiple wallet instances
const wallets = [
    { wallet: new EWallet(), deposit: 100, withdraw: 30 },
    { wallet: new EWallet(), deposit: 200, withdraw: 50 },
    { wallet: new EWallet(), deposit: 500, withdraw: 600 } // Insufficient funds case
];

wallets.forEach(({ wallet, deposit, withdraw }) => {
    wallet.deposit(deposit);
    wallet.withdraw(withdraw);
    wallet.getBalance();
});

// Check the total number of wallets created
EWallet.getTotalWallets();
console.table(wallets);



// 14. Food Delivery Service
// 📌 **Task**: Design a `Restaurant` class that stores `name` and `menu`. Extend it into `FoodOrder`, allowing users to place orders.

// 🔹 **Steps**:
// - Create a `Restaurant` class with `name` and `menu` (an object storing food items and prices).
// - Add a `displayMenu()` method to show available food items.
// - Extend `Restaurant` into `FoodOrder`, adding an `orderFood(item)` method.
// - Create instances of `FoodOrder` and simulate placing an order.
// Define the Restaurant class
class Restaurant {
    constructor(name, menu) {
        this.name = name; // Name of the restaurant
        this.menu = menu; // Menu is an object with food items and their prices
    }

    // Method to display the menu
    displayMenu() {
        console.log(`Menu for ${this.name}:`);
        for (const [item, price] of Object.entries(this.menu)) {
            console.log(`${item}: $${price}`);
        }
    }
}

// Define the FoodOrder class that extends Restaurant
class FoodOrder extends Restaurant {
    constructor(name, menu) {
        super(name, menu); // Call the parent class constructor
        this.orders = []; // Array to store ordered items
    }

    // Method to place an order
    orderFood(item) {
        if (this.menu[item]) {
            this.orders.push(item);
            console.log(`You ordered: ${item} for $${this.menu[item]}`);
        } else {
            console.log(`Sorry, ${item} is not available on the menu.`);
        }
    }

    // Method to display the total bill
    displayBill() {
        if (this.orders.length === 0) {
            console.log("No items ordered yet.");
            return;
        }
        let total = 0;
        console.log("Your Order Summary:");
        this.orders.forEach(item => {
            console.log(`${item}: $${this.menu[item]}`);
            total += this.menu[item];
        });
        console.log(`Total Bill: $${total}`);
    }
}

// Create an instance of FoodOrder
const myRestaurant = new FoodOrder("Tasty Bites", {
    Burger: 5.99,
    Pizza: 8.99,
    Salad: 4.99,
    Fries: 2.99,
    Soda: 1.99
});

// Display the menu
myRestaurant.displayMenu();

// Simulate placing orders
myRestaurant.orderFood("Pizza");
myRestaurant.orderFood("Burger");
myRestaurant.orderFood("Ice Cream"); // Not on the menu
myRestaurant.orderFood("Fries");

// Display the bill
myRestaurant.displayBill();
console.table(myRestaurant);



// 15. Ride-Sharing App
// 📌 **Task**: Build a `Vehicle` class with `brand`, `model`, and `year`. Extend it to `Ride`, which tracks `driverName`, `passengerName`, and `fare`.

// 🔹 **Steps**:
// - Create a `Vehicle` class with properties `brand`, `model`, and `year`.
// - Add a `getVehicleDetails()` method to display details.
// - Extend `Vehicle` into `Ride`, adding properties like `driverName`, `passengerName`, and `fare`.
// - Implement a `calculateFare()` method based on distance.
// - Create instances of `Ride` and simulate a ride.
// Define the Vehicle class
class lorry {
    constructor(brand, model, year) {
        this.brand = brand; // Brand of the vehicle
        this.model = model; // Model of the vehicle
        this.year = year;   // Year of manufacture
    }

    // Method to display vehicle details
    getVehicleDetails() {
        return `Vehicle: ${this.brand} ${this.model} (${this.year})`;
    }
}

// Define the Ride class that extends Vehicle
class Ride extends lorry {
    constructor(brand, model, year, driverName, passengerName, farePerKm) {
        super(brand, model, year); // Call the parent class constructor
        this.driverName = driverName;       // Name of the driver
        this.passengerName = passengerName; // Name of the passenger
        this.farePerKm = farePerKm;         // Fare per kilometer
        this.distance = 0;                  // Distance of the ride (default 0)
    }

    // Method to calculate the fare based on distance
    calculateFare(distance) {
        this.distance = distance;
        const totalFare = this.farePerKm * distance;
        console.log(`Ride Details:
Driver: ${this.driverName}
Passenger: ${this.passengerName}
Distance: ${distance} km
Fare: $${totalFare.toFixed(2)}`);
        return totalFare;
    }

    // Method to display ride details
    getRideDetails() {
        return `${super.getVehicleDetails()}, Driver: ${this.driverName}, Passenger: ${this.passengerName}`;
    }
}

// Create instances of Ride
const ride1 = new Ride("Toyota", "Camry", 2020, "John Doe", "Alice", 2.5);
const ride2 = new Ride("Honda", "Civic", 2019, "Jane Smith", "Bob", 3.0);

// Simulate rides
console.log(ride1.getRideDetails());
ride1.calculateFare(10); // 10 km ride

console.log(ride2.getRideDetails());
ride2.calculateFare(15); // 15 km ride


