export default (categoryId, imageUrl) => {
  return {
    categoryId,
    imageUrl,
    timestamp: new Date(),
  };
};
