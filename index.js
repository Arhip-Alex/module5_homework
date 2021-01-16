let myMap = new Map();
myMap.set(1, "One");
myMap.set("2", 2);
myMap.set("Three", true);
for(let name of myMap.keys()){
    console.log(`Ключ - ${name}, значение - ${myMap.get(name)}`);
}
