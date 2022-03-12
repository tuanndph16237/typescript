export {};

function show<T,U>(a: T, b: U): [T,U]{
    return[a,b];
}

show(10, 20);
show("Nguyen", "Tuan");

const mang = [1,2,3,4];


function getProduct(mang: number){
    return mang;
}
document.querySelector('root').innerHTML 