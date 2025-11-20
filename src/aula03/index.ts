//Polimorfismo

// abstract class Characater {
//     abstract talk(): void;

//     abstract specialMove(): void 

//     static characterPresentation(character: Characater) {
//         return character.talk(), character.specialMove()
//     }

   
// }

// class MeleeCharacter extends Characater {
//     talk(): void {
//        return console.log('Here we go!');
//     }
//     specialMove(): void {
//         return console.log('Take that!');        
//     }

  

   

// }
// class LongRangeCharacter extends Characater {
//     talk(): void {
//        return console.log('The galaxy is at peace');
//     }
//     specialMove(): void {
//        return console.log('Phazon Beam');        
//     }

  
// }

// const yoshi = new MeleeCharacter();
// const samus = new LongRangeCharacter();
// Characater.characterPresentation(yoshi)
// Characater.characterPresentation(samus)

interface Characater {
    name: string;
    specialMove: string;
}

interface DbCharacter extends Characater {
    id: number
}

const db: DbCharacter[] = [];

interface IModel {
    create(): void
    read(): void
    update(): void
    delete(): void
}

class LocalDbModel implements IModel {
    create(): void {
        throw new Error("Method not implemented.");
    }
    read(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}

class CharacaterService {
    constructor(db: IModel) {

    }
}

class MockedDbModel implements IModel {
    create(): void {
        throw new Error("Method not implemented.");
    }
    read(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}

const localDb = new LocalDbModel();
const mockedDb = new MockedDbModel();

const characterService = new CharacaterService(localDb)