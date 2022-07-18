import createApp from './createApp.mjs';
import { add, subtract, multiply, divide } from "./calcMiddleware.mjs";

const app = createApp({})
    .use(add(2))
    .use(multiply(3))
    .use(subtract(5))
    .use(multiply(2))
    .use(divide(3));

const context = {
    value: 4
};

 const result = await app.process4(context);

console.log('result1', result);
