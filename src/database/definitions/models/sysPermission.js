module.exports = (sequelize, DataTypes) => {
  const SysPermission = sequelize.define(
    'SysPermission',
    {
      sys_permission_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      service: DataTypes.STRING,
      service_role: DataTypes.STRING,
      allow: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'sys_permissions',
    },
    {},
  );

  SysPermission.associate = models => {
    SysPermission.hasMany(models.SysUser, {
      foreignKey: 'employee_permissions',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SysPermission;
};
