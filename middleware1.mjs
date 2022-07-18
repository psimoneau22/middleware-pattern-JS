export const middleware1 = next => async context => {
    // console.log('middleware 1: before', context, next);
    context.prop1before = 'from middleware 1';

    await next(context);

    context.prop1after = 'from middleware 1';
    // console.log('middleware 1: after', context);
}

export const middleware2 = next => async context => {
    // console.log('middleware 2: before', context, next);
    context.prop2before = 'from middleware 2';

    await next(context);

    context.prop2after = 'from middleware 2';
    // console.log('middleware 2: after', context);
}

export const middleware3 = next => async context => {
    // console.log('middleware 3: before', context, next);
    context.prop3before = 'from middleware 3';

    await next(context);

    context.prop3after = 'from middleware 3';
    // console.log('middleware 3: after', context);
}

export const middleware4 = next => async context => {
    // console.log('middleware 4: before', context, next);
    context.prop4before = 'from middleware 4';

    await next(context);

    context.prop4after = 'from middleware 4';
    // console.log('middleware 4: after', context);
}
