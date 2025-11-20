import IAgenda from "./interfaces/IAgenda";

abstract class Quadra<T> {
    abstract reserve(date: Date): IAgenda<T>
}

export default Quadra;