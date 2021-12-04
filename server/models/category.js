export default (name) => {
  return {
    name,
    tag: name.toLowerCase().replaceAll(" ", "-"),
    titleImage: "",
    images: [],
  };
};
