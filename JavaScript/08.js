// Create an Object represting a car with property model and year add  a method of acar Project start the engine

const car = {
    model: "tesla",
    year: 2002,
    startEngin: function () {
        console.log(`${this.model} ${this.year} started the engine`);
    },
};

car.startEngin();
