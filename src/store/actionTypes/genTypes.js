export const generateTypes = (namespace, type) => ({
  ERROR: `${namespace}/${type}_ERROR`,
  PENDING: `${namespace}/${type}_PENDING`,
  SUCCESS: `${namespace}/${type}_SUCCESS`
});
