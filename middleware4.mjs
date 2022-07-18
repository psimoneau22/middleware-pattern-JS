export const middleware1 = async (next, context) => {
    // console.log('middleware 1: before', context, next);
    context.prop1before = 'from middleware 1';

    await next();

    context.prop1after = 'from middleware 1';
    // console.log('middleware 1: after', context);
}

export const middleware2 = async (next, context) => {
    // console.log('middleware 2: before', context, next);
    context.request.props.prop2before = 'from middleware 2';

    await next();

    context.request.props.prop2after = 'from middleware 2';

    if(context.response.status === 401) {
        context.response.content = 'Unauthorized';
    }
    // console.log('middleware 2: after', context);
}

export const middleware3 = async (next, context) => {
    // console.log('middleware 3: before', context, next);
    if(context.request.headers.Authorization === 'Bearer someTokenValue') {
        return next()
    }

    context.response.status = 401;
    // console.log('middleware 3: after', context);
}

export const middleware4 = async (next, context) => {
    // console.log('middleware 4: before', context, next);
    context.response.content = {
        test: 'You are authorized to access this resource'
    }

    await next();

    // console.log('middleware 4: after', context);
}



