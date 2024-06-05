import { compile } from 'path-to-regexp';

export const createRoutePath = (pathTemplate, params) => {
    const toPath = compile(pathTemplate, { encode: encodeURIComponent });
    return toPath(params);
  };