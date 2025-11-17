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
interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name;
  constructor(name: string) {
    this._name = name;
  }
  get name() { return this._name; }
}

class NaturalPerson extends Person {
  private _cpf;
  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }
  get cpf() { return this._cpf; }
}

class LegalPerson extends Person {
  private _cnpj;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories() { return [...this._signatories]; }
  get clauses() { return [...this._clauses]; }
  get subject() { return "Sales"; }

  sign(signatory: Person) { this._signatories.push(signatory); }
  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }

  describe() {
    console.log('--------------------');
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
    this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
    console.log('--------------------\n');
  }
}

const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');

s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();

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