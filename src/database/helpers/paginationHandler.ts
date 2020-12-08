const paginationHandler = ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit,
  };
};

export default paginationHandler;
