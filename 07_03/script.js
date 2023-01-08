/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

console.log(backpackContents.join(', '));

backpackContents.push("pencil", 5);
console.log(backpackContents);

backpackContents.pop();
console.log(backpackContents);

backpackContents.pop();
console.log(backpackContents);

backpackContents.unshift("pencil", 5);
console.log(backpackContents);

backpackContents.shift();
console.log(backpackContents);

backpackContents.shift();
console.log(backpackContents);


backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

console.log(backpackContents);


let longItems = backpackContents.find(item =>
    item.length >= 5
);

console.log("longItems:", longItems);
