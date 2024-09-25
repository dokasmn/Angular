export interface ProductResponse {
    id?: number;
    title: string;
    description: string;
    price: number;
    thumbnail?: string;
    isFeatured? : boolean;
}