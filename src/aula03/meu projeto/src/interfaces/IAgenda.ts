interface IAgenda<T> {
    protocol: string,
    rules: T,
    date: Date,
}

export function generateProtocol() {
    let protocol = '';
    let count = 10;

    do {
        protocol += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        protocol += Math.floor(Math.random() * 9);
        count --
    } while (count > 0)



    return protocol.split('').sort(() => Math.random() - 0.5).join('')

} 
export default IAgenda