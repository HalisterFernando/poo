import Quadra from "./Quadra";

class Clube <T> {
    private quadras: Quadra<T>[] = [];

    public adicionarQuadra(quadra: Quadra<T>): void {
        this.quadras.push(quadra);
    }

    public buscarQuadra(index: number): Quadra<T> | undefined {
        return this.quadras[index]
    }
}

export default Clube;