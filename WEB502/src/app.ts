export {};

function show<T,U>(a: T, b: U): [T,U]{
    return[a,b];
}

show(10, 20);
show("Nguyen", "Tuan");

