const objectParserCategory = (arr, dest) => {
  arr
    .map(row => {
      return {
        sub_category: row.sub_category,
        category_status: row.category_status,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      };
    })
    .forEach(row => dest.push(row));
};

const objectParserProfileCategory = (arr, dest) => {
  arr
    .map(row => {
      return {
        category: row.category,
        category_title: row.category_title,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      };
    })
    .forEach(row => dest.push(row));
};

export { objectParserCategory, objectParserProfileCategory };
