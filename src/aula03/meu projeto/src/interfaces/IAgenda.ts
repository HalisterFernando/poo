interface IAgenda<T> {
    protocol: string,
    rules: T,
    data: Date,
}