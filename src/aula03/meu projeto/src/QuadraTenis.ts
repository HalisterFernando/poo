import Quadra from "./Quadra"
import IAgenda from "./interfaces/IAgenda"
import ITenis from "./interfaces/ITenis"
import { generateProtocol } from "./interfaces/IAgenda"

class QuadraTenis extends Quadra<ITenis> {

    reserve(date: Date): IAgenda<ITenis> {
        return {
            // protocolo é o "id" da reserva, gere de forma aleatória
            protocol: generateProtocol(),
            date: new Date(),
            rules: { racket: 'cravo' }
          }
    }

}

export default QuadraTenis