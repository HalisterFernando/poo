// aula sobre herança e composição
// herança

class Superclass {
    public isSuper: boolean
    constructor() {
        this.isSuper = true
    }

    sayHello(): void {
        console.log("Olá mundo")
    }
 
}

class Subclass extends Superclass {
 constructor() {
    super()
    this.isSuper = false
 }
}

function myFunc(object:Superclass) {
    return object.isSuper ? console.log("Super!") : console.log("Sub!")
}
const superC: Superclass = new Superclass();
const subC: Subclass = new Subclass();

myFunc(superC);
myFunc(subC)

// interfaces

interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string     
}

class MyClass implements MyInterface {
    constructor(public myNumber: number) {
        
    }

    myFunc(myParam: number): string {
        const sum = myParam + this.myNumber
        return sum.toString()
    }
}

const obj: MyClass = new MyClass(3);
console.log(obj.myFunc(3))

// composição 
// exemplo
class Profile {
    private name: string;
    private email: string;
  
    public setName(name: string) {
      this.name = name;
    }
  
    public setEmail(email: string) {
      this.email = email;
    }
  
    public toString(): string {
      return `name - [${this.name}] - email - [${this.email}]`;
    }
  }
  
  class SocialMediaAccount {
    // Cria nossa composição com o perfil
    private profile = new Profile();
  
    public editProfile(name: string, email: string) {
      this.profile.setName(name);
      this.profile.setEmail(email);
    }
  
    public printProfile() {
      console.log(this.profile.toString());
    }
  }
  
  const socialMediaAccount = new SocialMediaAccount();
  socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
  socialMediaAccount.printProfile();

//   No código acima, você possui a classe Profile que possui os métodos responsáveis por atualizar o nome e email do perfil. Em seguida, temos uma classe SocialMediaAccount que vai instanciar a classe Profile e ser utilizada no método editProfile para você editar o nome e email na respectiva conta da rede social. A ação de utilizarmos a classe do perfil (Profile) para compor a classe de conta da rede social (SocialMediaAccount) é conhecida por composição.

// Dessa forma, você tem a liberdade de realizar as alterações necessárias na classe principal(SocialMediaAccount) que não vai afetar diretamente a classe secundária (Profile). Além disso, note que se você remover a classe SocialMediaAccount o perfil da pessoa vai perder o sentido, pois um perfil obrigatoriamente precisa estar vinculado a uma conta. Concluímos assim que Profile tem dependência da existência de uma conta na rede social.

// exemplo de agregação

/*class Friend {
    private nickname: string;
  
    public getNickname(): string {
      return this.nickname;
    }
  
    public setNickname(nickname: string) {
      this.nickname = nickname;
    }
  }
  
  class SocialMediaAccount {
    private friends = new Array<Friend>();
  
    public addFriend(friend: Friend) {
      this.friends.push(friend);
    }
  
    public printFriends() {
      this.friends.map((friend) => console.log(friend));
    }
  }
  
  const socialMediaAccount = new SocialMediaAccount();
  
  const friendCarol = new Friend();
  friendCarol.setNickname('Carol');
  
  const friendFernando = new Friend();
  friendFernando.setNickname('Fernando');
  
  socialMediaAccount.addFriend(friendCarol);
  socialMediaAccount.addFriend(friendFernando);
  socialMediaAccount.printFriends();
*/
//   No código acima, você possui a classe Friend que possui os métodos responsáveis por atualizar o nickname de uma pessoa amiga. Em seguida, você tem uma classe SocialMediaAccount que possui um array de pessoas amigas e possui o método addFriend para adicionar novas pessoas amigas na respectiva conta da rede social. Por fim, você instância a classe SocialMediaAccount para representar uma conta e a classe Friend realizando a atualização de cada nickname para representar as duas pessoas amigas que você gostaria de adicionar na conta.

// Agora, note que se você remover a classe SocialMediaAccount a classe Friend vai continuar fazendo sentido, pois se você deletar uma conta da pessoa usuária ainda será possível atualizar pessoas amigas ou essas pessoas amigas serem adicionadas em contas de outras pessoas usuárias.

// Portanto, na agregação os objetos podem existir sem depender do outro objeto, por outro lado, na composição os objetos dependem da existência do outro objeto.

interface ILogger {
    log(param: string): void;
}

class ConsoleLogger implements ILogger {
    log(param: string): void {
        console.log(`ConsoleLogger ${param}`)
    }
}

class ConsoleLogger2 implements ILogger {
    log(param: string): void {
        console.log(`ConsoleLogger2 ${param}`)
    }
}

interface IDatabase {
    attribute: ILogger;
    save(key: string, value: string): void;
}

class ExampleDatabase implements IDatabase {
    
    constructor(public attribute: ILogger = new ConsoleLogger()){ 

    }
    save(key: string, value: string): void {
        this.attribute.log(`${key} ${value}`)
    }

}

const obj1 = new ConsoleLogger();
const obj2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(obj1);
const database2 = new ExampleDatabase(obj2);
const database3 = new ExampleDatabase();

database1.save('pizza', '60');
database2.save('car', '120mil');
database3.save('cellphone', '1500');

// exemplo de herença e interface 
// interface Contract {
//   subject: string;
//   clauses: string[];
//   signatories: Person[];
//   describe(): void;
// }

// class Person {
//   private _name;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() { return this._name; }
// }

// class NaturalPerson extends Person {
//   private _cpf;
//   constructor(name: string, cpf: string) {
//     super(name);
//     this._cpf = cpf;
//   }
//   get cpf() { return this._cpf; }
// }

// class LegalPerson extends Person {
//   private _cnpj;
//   constructor(name: string, cnpj: string) {
//     super(name);
//     this._cnpj = cnpj;
//   }
// }

// class SalesContract implements Contract {
//   private _signatories: Person[];
//   private _clauses: string[];

//   constructor() {
//     this._signatories = [];
//     this._clauses = [];
//   }

//   get signatories() { return [...this._signatories]; }
//   get clauses() { return [...this._clauses]; }
//   get subject() { return "Sales"; }

//   sign(signatory: Person) { this._signatories.push(signatory); }
//   addClause(clause: string) {
//     if (this._signatories.length > 0) return;
//     this._clauses.push(clause);
//   }

//   describe() {
//     console.log('--------------------');
//     console.log(`Contrato: ${this.subject}`);
//     this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
//     this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
//     console.log('--------------------\n');
//   }
// }

// const s1 = new SalesContract();
// const pp1 = new NaturalPerson('Tony', '123456789');
// const pp2 = new NaturalPerson('Lilly', '987654321');
// const lp = new LegalPerson('International Sales SA', '23961237162378');

// s1.describe();
// s1.addClause('Foo');
// s1.addClause('Bar');
// s1.describe();
// s1.sign(pp1);
// s1.sign(pp2);
// s1.describe();
// s1.addClause('Baz');
// s1.sign(lp);
// s1.describe();

/*
Saída:
--------------------
Contrato: Sales
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
Assinado por: International Sales SA
--------------------
 */

// Exercícios da aula 02
/** 
 * 1 -Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
 * `Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos*/

// ./Person.ts

class Person {
  protected MINIMUM_NAME_LENGTH = 3;
  protected MAXIMUM_AGE = 120;

  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson(); // validação do objeto criado com o construtor da classe
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));


/**Exercício 2
Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa. */

class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }


  //esse método checa se a inscrição da pessoa estudante possui no mínimo 16 caracteres
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}


class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }


  //esse método checa se a inscrição da pessoa estudante possui no mínimo 16 caracteres
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

/** 🚀 Exercício 3
Crie uma interface que representará uma pessoa funcionária.*/

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration():string
}

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

/**🚀 Exercício 4
Crie uma classe cujos objetos representem uma disciplina lecionada na escola. */

class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

const matematica = new Subject('Matemática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');


/**🚀 Exercício 5
Crie uma classe cujos objetos representem uma pessoa professora.

 */

class Teacher extends Person implements Employee {
  private _resgistration: number
  private _salary: number
  private _admissionDate: string
  private _subject: Subject
  private _name: string
  private _birthDate: string

  constructor(name: string, birthDate: string, salary: number, subject: Subject ){
    super()
    this._name = super.name;
    this._birthDate = super.birthDate;
    this._salary = salary;
    this._subject = subject
    this._resgistration = Number(this.generateRegistration())
  }
 

  generateRegistration(): string {
    let count = 16
    let registrationNumber = ''
    
    do {
     registrationNumber += Math.floor(Math.random() * 99).toString();
     count --
    } while (count > 0);

    return registrationNumber
  }



}

console.log(String(Date.now() * (Math.random() + 1)).replace(/\W/g, ''))

