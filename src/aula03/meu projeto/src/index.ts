import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadra = new QuadraFutebol();
clube.adicionarQuadra(quadra);


const reserva = quadra.reserve(new Date());

console.log(reserva);



