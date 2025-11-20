import Quadra from "./Quadra"
import IAgenda from "./interfaces/IAgenda"
import ITenis from "./interfaces/ITenis"
import { generateProtocol } from "./interfaces/IAgenda"
import normas from "./normas/normasDeUso"

class QuadraTenis extends Quadra<ITenis> {
    public tenisData: ITenis = normas.tenis

    reserve(date: Date): IAgenda<ITenis> {
        const protocolo = (Math.random() + 1).toString(30).substring(3);
        return {
            protocol: protocolo,
            date: date,
            rules: this.tenisData
          }
    }

}

export default QuadraTenis