const envChecker = (): boolean => {
  return process.env.NODE_ENV === 'test';
};
export default envChecker;
