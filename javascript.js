function toyCar(brand, model, color, year, price, feature, made, warning, recycle, barcode, tires, size, baseColor, roofColor) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.price = price;
    this.feature = feature;
    this.made = made;
    this.warning = warning;
    this.recycle = recycle;
    this.barcode = barcode;
    this.tires = tires;
    this.size = size;
    this.baseColor = baseColor;
    this.roofColor = roofColor;

    this.describe = function() {
        let description = `The brand is ${this.brand} and the model is ${this.model} the color is ${this.color}, year ${this.year} `;
        return description;
    }
}

const toyCar = new toyCar(brand = 'Mega', Model = '1186 MJ.1.NL')

output.textContent = toyCar.describe();