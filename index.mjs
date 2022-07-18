import createApp from './createApp.mjs';
// import { middleware1, middleware2, middleware3, middleware4 } from "./middleware1.mjs";
// import { middleware1, middleware2, middleware3, middleware4 } from "./middleware2.mjs";
// import { middleware1, middleware2, middleware3, middleware4 } from "./middleware3.mjs";
import { middleware1, middleware2, middleware3, middleware4 } from "./middleware4.mjs";

const app = createApp({})
    .use(middleware1)
    .use(middleware2)
    .use(middleware3)
    .use(middleware4);

const context = {
    request: {
        path: 'some/path',
        headers: {
            Authorization: 'Bearer someTokenValue'
        },
        props: {}
    },
    response: {
        status: 200,
        content: {},
        headers: {},
    }
};

// const result = await app.process1(context);
// const result = await app.process2(context);
// const result = await app.process3(context);
const result = await app.process4(context);

console.log('result1', result);
