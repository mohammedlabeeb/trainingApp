export class CarModel {
    brand: string;
    year: number;
    getData(): string {
        return `${this.brand}-${this.year}`;
    }
}
