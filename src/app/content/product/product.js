export class Product {
    constructor(id, type, alt, url) {
        this.id = id;
        this.type = type;
        this.alt = alt;
        this.url = url;
    }
}

export const ProductType = {
    ORIGINAL: 'original',
    COPY: 'copy',
};
