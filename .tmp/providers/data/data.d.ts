import 'rxjs/add/operator/map';
export declare class Data {
    private storage;
    constructor();
    getData(): any;
    save(data: any): void;
    remove(data: any): void;
    clear(): void;
}
