//Polimorfismo

abstract class Characater {
    abstract talk(): void;

    abstract specialMove(): void 
}

class MeleeCharacter extends Characater {
    talk(): void {
        console.log('Here we go!');
    }
    specialMove(): void {
        console.log('Take that!');        
    }

}
class LongRangeCharacter extends Characater {
    talk(): void {
        console.log('The galaxy is at peace');
    }
    specialMove(): void {
        console.log('Phazon Beam');        
    }
}

const yoshi = new MeleeCharacter();
const samus = new LongRangeCharacter();
console.log(yoshi.specialMove(), yoshi.talk())
console.log(samus.specialMove(), samus.talk())