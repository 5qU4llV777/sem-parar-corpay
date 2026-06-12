const productsService = require('./services/products');
const configService = require('./services/config');

async function main() {

     console.log('carrinho de compras');
    // productsService.getFullName('123', 'mousepad');
    // productsService.getFullName('1234', 'mouse');

    console.log(configService.production);
}

main();