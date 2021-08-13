import { choice, remove } from './helpers';
import fruits from './foods';

const fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');
const removed = remove(fruits, fruit);
console.log(`I'm sorry we're all ouit. We have ${fruits.length} left.`);
