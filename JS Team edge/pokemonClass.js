class Pokemon {
    constructor(species, eyes, fur, type1, type2) {
        this.species = species;
        this.eyes = eyes;
        this.fur = fur;
        this.type1 = type1;
        this.type2 = type2;
    }
}

let Eevee = new Pokemon();
Eevee.species = "Eevee";
Eevee.eyes = true;
Eevee.fur = true;
Eevee.type1 = "normal";

let Charmander = new Pokemon();
Charmander.species = "Charmander";
Charmander.eyes = true;
Charmander.fur = false;
Charmander.type1 = "fire";

console.log(Eevee);
console.log(Charmander);