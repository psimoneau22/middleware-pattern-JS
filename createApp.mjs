const noOp = () => {};

export default function createApp(options) {
    const middlewares = [];

    return {

        use(middleware) {
            middlewares.push(middleware);
            return this;
        },

        async process1(context) {
            const pipeline = middlewares.reduce((p, c) => next => p(c(next)));
            await pipeline(noOp)(context);

            return context;
        },

        async process2(context) {
            const pipeline = middlewares.reduce((p, c) => next => p(() => c(next)(context)));
            await pipeline(noOp)(context);

            return context;
        },

        async process3(context) {
            const pipeline = middlewares.reduce((p, c) => (next, ctx) => p(cty => c(next, cty), ctx));
            await pipeline(noOp, context);

            return context;
        },

        async process4(context) {
            const pipeline = middlewares.reduce((p, c) => (next, ctx) => p(() => c(next, ctx), ctx));
            await pipeline(noOp, context);

            return context;
        },
    }
}
