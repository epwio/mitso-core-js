function getComposition(f, g) {
  const composition = (x) => f(g(x));
  return composition;
}

function getPowerFunction(exponent) {
  const powerFunc = (x) => x ** exponent;
  return powerFunc;
}

function getPolynom(...coeffs) {
  if (!coeffs.length) return null;
  return (x) => coeffs.reduce(
    (sum, coef, index) => sum + coef * x ** (coeffs.length - index - 1),
    0,
  );
}

function memoize(func) {
  let cache;
  let called = false;
  const memoizedFunc = () => {
    if (!called) {
      cache = func();
      called = true;
    }
    return cache;
  };
  return memoizedFunc;
}

function retry(func, attempts) {
  const retriedFunc = () => {
    let lastError;
    for (let i = 0; i < attempts; i += 1) {
      try {
        return func();
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError;
  };
  return retriedFunc;
}

function logger(func, logFunc) {
  const loggedFunc = (...args) => {
    const strArgs = args.map((a) => JSON.stringify(a)).join(',');
    logFunc(`${func.name}(${strArgs}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${strArgs}) ends`);
    return result;
  };
  return loggedFunc;
}

function partialUsingArguments(fn, ...args1) {
  const partialFunc = (...args2) => fn(...args1, ...args2);
  return partialFunc;
}

function getIdGeneratorFunction(startFrom) {
  let current = startFrom;
  const idGenerator = () => {
    const id = current;
    current += 1;
    return id;
  };
  return idGenerator;
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
