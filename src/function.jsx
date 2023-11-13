
export function allProducts(products) {
  const vegetables = products.vegetables || [];
  const fruits = products.fruits || [];
  const beverages = products.beverages || [];
  const dairy = products.dairy || [];
  const desserts = products.desserts || [];
  const meat = products.meat || [];
  const snacks = products.snacks || [];
  const cheese = products.cheese || [];
  const allBeverages = Object.values(beverages).map((productBeverage)=> productBeverage.productsBeverages
  )
  const [tea , diet , herbs , coffe , juiceSyrup , waterSodaDrinks] = allBeverages

  const allProductsBeveragess = [...tea || [], ...diet || [], ...herbs || [] , ...coffe  || [], ...juiceSyrup || [], ...waterSodaDrinks || []]
 
  const allProducts =[...vegetables , ...fruits , ...dairy , ...desserts , ...meat , ...snacks , ...cheese , ...allProductsBeveragess]
  return allProducts
}
export function filterProductBayCategory(key,filterporoduct){
  if(key==='all'){
    return filterporoduct
  }else{
    return filterporoduct.filter(product=>product.category === key)
  }
}
export function filterProductBayPrice(value,productes){
  switch(value){
      case '':
        return productes;
      case 'less < 50':
        return productes.filter(product=>product.price <= 50);
      case '50-100':
        return productes.filter(product=>product.price > 50 && product.price <= 100);
        case '100-150':
        return productes.filter(product=>product.price > 100 && product.price <= 150); 
        case 'above-150':
        return productes.filter(product=>product.price > 150); 
      }   
}

