import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import { generateProtocol } from "./interfaces/IAgenda";

class QuadraFutebol extends Quadra<IFutebol> {
    reserve(date: Date): IAgenda<IFutebol> {
        return {
            // protocolo é o "id" da reserva, gere de forma aleatória
            protocol: generateProtocol(),
            date: new Date(),
            rules: { chuteira: 'cravo' }
          }
    }

    



}

console.log(String.fromCharCode(97 + Math.floor(Math.random() * 26)))

export default QuadraFutebol