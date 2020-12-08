const categoryFormatter = category => {
  const categoryList = ['clothing', 'brand', 'shopping'];
  return categoryList.indexOf(category.toLowerCase());
};

export default categoryFormatter;
