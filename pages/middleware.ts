import dbConnect from './mongoose/db';

export const withMongoose = (fn: any): any => {
  return async function (...args) {
    console.log('into with mongoose...');
    await dbConnect();
    return await fn(...args);
  };
};
