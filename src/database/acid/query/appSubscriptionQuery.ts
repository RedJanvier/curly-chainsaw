const appSubscriptionQuery = (): string => {
  const query: string = `
    SELECT MAX(app_subscription.createdAt) FROM app_subscription 
    WHERE app_owner_id = app_subscription.app_owner`;
  return query;
};

export default appSubscriptionQuery;
