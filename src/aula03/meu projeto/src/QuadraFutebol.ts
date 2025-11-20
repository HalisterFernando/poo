import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import { generateProtocol } from "./interfaces/IAgenda";
import normas from "./normas/normasDeUso";

class QuadraFutebol extends Quadra<IFutebol> {
    public soccerData: IFutebol = normas.futebol
    reserve(date: Date): IAgenda<IFutebol> {
        const protocolo = (Math.random() + 1).toString(30).substring(3)
        return {
            protocol: protocolo,
            date: date,
            rules: this.soccerData
          }
    }

    



}

console.log((Math.random() + 1).toString(30).substring(3));

export default QuadraFutebol