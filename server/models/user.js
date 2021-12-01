export default (name, email, password) => {
  return { name, email, password, timestamp: new Date() };
};
