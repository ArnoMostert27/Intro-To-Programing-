//Array of Cars:
// Define the Car Objects
//Create an Array of Cars:
//The cars array now holds four elements, each of which is an object representing a car.
// Create an array called 'cars' to store multiple car objects
const cars = [
    {
        // Name/model of the car
        MODEL: "BMW G80 M5",

        // Exterior color of the car
        color: "Blue",

        // Country where the car brand originates
        country: 'Germany',

        // List of available performance modifications for this car
        Availablemodifications: [
            "ECU Tune",
            "Performance Exhaust System",
            "Suspension Upgrade",
            "Cold Air Intake or Performance Air Filter"
        ],

        // Indicates whether the car is currently available
        isAvailable: true
    },

    {
        // Name/model of the car
        MODEL: "Aston Martin DBX",

        // Exterior color of the car
        color: "Red",

        // Country of origin
        country: 'United Kingdom',

        // Performance modifications available for this vehicle
        Availablemodifications: [
            "ECU + TCU Performance Tune",
            "Sport Exhaust System",
            "Suspension Enhancement",
            "High-Performance Brake Upgrade"
        ],

        // Car availability status
        isAvailable: true
    },

    {
        // Name/model of the car
        MODEL: "Audi RS7",

        // Exterior color
        color: "Black",

        // Country of origin
        country: 'Germany',

        // List of tuning and performance upgrades
        Availablemodifications: [
            "ECU / TCU Performance Tune",
            "High-Flow Downpipes and Sport Exhaust",
            "Performance Suspension Upgrade",
            "Brake System Enhancement"
        ],

        // This car is currently not available
        isAvailable: false
    },

    {
        // Name/model of the car
        MODEL: "Ferrari F8 Tributo",

        // Exterior color
        color: "White",

        // Country of origin
        country: 'Italy',

        // High-performance and aerodynamic upgrades
        Availablemodifications: [
            "Performance ECU & Engine Tuning",
            "High-Flow Sports Exhaust",
            "Lightweight Wheels + High-Performance Tires",
            "Aerodynamic Enhancements"
        ],

        // Car availability status
        isAvailable: true
    }
];


// Accessing Objects in the Array:
console.log("car-Object:", cars[1]);






//Accessing Properties within an Object:
console.log("car-Color:", cars[2].color);  






// Accessing Nested Arrays within Objects:
console.log("Name:", cars[0].name, "and Modification:", cars[0].Availablemodifications[1]); 



console.log('\n', "-------------Adding a Price property to each car object using bracket notation------------------")
// 4. Adding a Price property to each car object using bracket notation
// Add Price to BMW G80 M5
cars[0]['price'] = 'R1 200 000';
console.log("BMW Price:", cars[0]['price']);

// Add Price to Aston Martin DBX
cars[1]['price'] = 'R4 500 000';
console.log("Aston Martin Price:", cars[1]['price']);

// Add Price to Audi RS7
cars[2]['price'] = 'R2 800 000';
console.log("Audi Price:", cars[2]['price']);

// Add Price to Ferrari F8 Tributo
cars[3]['price'] = 'R6 500 000';
console.log("Ferrari Price:", cars[3]['price']);

console.log('\n', "-------------Assigning horsepower to each car using dot notation------------------")
// Assigning horsepower to each car using dot notation
cars[0].horsepower = "658 HP";      // BMW G80 M5
cars[1].horsepower = "542 HP";      // Aston Martin DBX
cars[2].horsepower = "600 HP";      // Audi RS7
cars[3].horsepower = "720 HP";      // Ferrari F8 Tributo

// Output each car's horsepower to verify
console.log("BMW Horsepower:", cars[0].horsepower);
console.log("Aston Martin Horsepower:", cars[1].horsepower);
console.log("Audi Horsepower:", cars[2].horsepower);
console.log("Ferrari Horsepower:", cars[3].horsepower);




console.log('\n', "-------------Update the isAvailable property for each car individually------------------")
// 5. Update the isAvailable property for each car individually
cars[0].isAvailable = true;   // BMW G80 M5
cars[1].isAvailable = true;   // Aston Martin DBX
cars[2].isAvailable = false;  // Audi RS7
cars[3].isAvailable = true;   // Ferrari F8 Tributo

// Output each car's availability to verify
console.log("BMW Availability:", cars[0].isAvailable);
console.log("Aston Martin Availability:", cars[1].isAvailable);
console.log("Audi Availability:", cars[2].isAvailable);
console.log("Ferrari Availability:", cars[3].isAvailable);



console.log('\n', "-------------Adding keys with numbers or special characters requires quotes------------------")
// 6. Adding keys with numbers or special characters requires quotes
// Using bracket notation on each car object in the cars array
// BMW G80 M5
cars[0]['1stOwner'] = 'Yes';
cars[0]['service-history'] = 'Full Service History';
console.log("BMW Object:", cars[0]);

// Aston Martin DBX
cars[1]['1stOwner'] = 'No';
cars[1]['service-history'] = 'Partial Service History';
console.log("Aston Martin Object:", cars[1]);

// Audi RS7
cars[2]['1stOwner'] = 'Yes';
cars[2]['service-history'] = 'Full Service History';
console.log("Audi Object:", cars[2]);

// Ferrari F8 Tributo
cars[3]['1stOwner'] = 'No';
cars[3]['service-history'] = 'Full Service History';
console.log("Ferrari Object:", cars[3]);




