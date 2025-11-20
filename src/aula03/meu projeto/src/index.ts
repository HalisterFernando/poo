import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import IFutebol from "./interfaces/IFutebol";

const clube = new Clube<IFutebol>();
const quadra = new QuadraFutebol();
clube.adicionarQuadra(quadra);


const reserva = quadra.reserve(new Date());

console.log(reserva);



