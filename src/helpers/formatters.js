export function formatProductPrice(productPrice){
    return `€${productPrice},-`;
}

export function formatProductSizes(productSizes){
    let productSizeString = "";

    for(let i = 0; i < productSizes.length; i++){
        const productSizeCM = Math.round(productSizes[i] * 2.54);
        if(i < productSizes.length - 1){
            productSizeString += `${productSizes[i]} inch (${productSizeCM} cm) | `;
        }
        else{
            productSizeString += `${productSizes[i]} inch (${productSizeCM} cm)`;
        }
    }
    return productSizeString;
}

export function formatOptions(options){
    let optionString = "";
for(let i = 0; i < options.length; i++){

    optionString += ` ${options[i].name}`;
}
return optionString;
}


export function formatProductName(productBrand, productType, productName){
  return `${productBrand} ${productType} - ${productName}`;
}
export default formatProductName;