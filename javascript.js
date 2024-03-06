const output = document.getElementById('toyCarContainer');

function toyCar(brand, model, color, year, price, feature, made, seats, recycle, barcode, tires, size, baseColor, roofColor) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.price = price;
    this.feature = feature;
    this.made = made;
    this.seats = seats;
    this.recycle = recycle;
    this.barcode = barcode;
    this.tires = tires;
    this.size = size;
    this.baseColor = baseColor;
    this.roofColor = roofColor;

    this.describe = function() {
        let description = `The brand is ${this.brand} and the model is ${this.model} the color is ${this.color}, develop year ${this.year}, the price is ${this.price}, the feature ${this.feature}, develop in ${this.made}, number of seats ${this.seats}, is ${this.recycle}, barcode ${this.barcode}, number of tires ${this.tires}, car size ${this.size}, base color ${this.baseColor}, and roof color ${this.roofColor} `;

        return description;
    }
}

const toyCar1 = new toyCar('Mega', '1186 MJ.1.NL', 'Red, gray and Blue', 2022, '7.00 Cad', 'high speed', 'Malaysia', 2, 'Yes', 2708412013, 4, 'small', 'Red', 'Blue');

output.textContent = toyCar1.describe();