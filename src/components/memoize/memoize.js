export default function memoize(fn) {
  const cache = {};

  return function() {
    const args = [...arguments];
    const hash = hashArguments(args);

    const cachedResult = cache[hash];
    if (cachedResult) return cachedResult;

    const result = fn.apply(null, args);
    cache[hash] = result;
    return result;
  };
}

function hashArguments(args) {
  return args.join('--');
}


