
export abstract class DB<T> {
    
    protected abstract initialize(): void | Promise<void>

    public abstract getConnection(): Promise<T>

}