export interface Product {
    readonly productId: number; // Read Only Property
    productName: string;
    description: string;
    price: number;
    discount?: number; // Optional Property
}

export interface ProductList {
    products: Product[]; // Custom Types property
    calculateTotal(): number; // Function Definition
    calculateDiscount(percent: number): number; // Fucntion With Argument
}
