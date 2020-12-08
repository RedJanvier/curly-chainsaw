const invitationQuery = (app: number, inviteId: string) => {
  const query: string = `
    SELECT
    app_invite_role_id,
    invite_by,
    invited,
    app,
    app_third,
    invite_role,
    invite_id,
    inv_status,
    inv_active,
    createdAt,
    updatedAt
    FROM app_invite_role
    WHERE app = ${app} AND invite_id = ${JSON.stringify(inviteId)}
    AND createdAt > DATE_SUB(NOW(), INTERVAL ${24} HOUR) AND createdAt <= NOW()
    LIMIT ${1}
    `;

  return query;
};

export default invitationQuery;
