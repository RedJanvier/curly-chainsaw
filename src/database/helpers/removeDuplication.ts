const removeDuplication = (payload: any[], uniqueKey: string): any[] => {
  const newList: any = [];
  return payload.filter(function(item) {
    if (newList.indexOf(item[uniqueKey]) === -1) {
      newList.push(item[uniqueKey]);
      return true;
    }
  });
};

export default removeDuplication;
