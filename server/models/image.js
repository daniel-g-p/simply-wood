export default (categoryId, imageUrl, publicId) => {
  return {
    categoryId,
    imageUrl,
    publicId,
    timestamp: new Date(),
  };
};
