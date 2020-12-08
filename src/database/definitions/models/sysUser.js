module.exports = (sequelize, DataTypes) => {
  const SysUser = sequelize.define(
    'SysUser',
    {
      sys_user_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
      position: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      employee_permissions: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'sys_users',
    },
    {},
  );

  SysUser.associate = models => {
    SysUser.hasMany(models.SysContactUs, {
      foreignKey: 'delivered_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysUser.hasMany(models.SysContactUs, {
      foreignKey: 'cc_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysUser.hasMany(models.SysContactUs, {
      foreignKey: 'replied_by',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysUser.hasMany(models.SysContactUs, {
      foreignKey: 'target_employee',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysUser.belongsTo(models.SysPos, {
      foreignKey: 'position',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysUser.hasOne(models.SysUserProfile, {
      foreignKey: 'employee',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SysUser;
};
