export const add = createCalcMiddleware((value, operand) => value + operand);
export const subtract = createCalcMiddleware((value, operand) => value - operand);
export const multiply = createCalcMiddleware((value, operand) => value * operand);
export const divide = createCalcMiddleware((value, operand) => value / operand);

function createCalcMiddleware(fn) {
    return value => (next, context) => {
        context.value = fn(context.value, value);
        next();
    }
}