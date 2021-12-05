export default (categoryId, imageUrl, format) => {
  return {
    categoryId,
    imageUrl,
    format,
    timestamp: new Date(),
  };
};
