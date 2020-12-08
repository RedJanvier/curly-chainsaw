module.exports = (sequelize, DataTypes) => {
  const SysUserProfile = sequelize.define(
    'SysUserProfile',
    {
      sys_user_profile_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      avatar: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      twitter: DataTypes.STRING,
      instagram: DataTypes.STRING,
      facebook: DataTypes.STRING,
      slogan: DataTypes.STRING,
      employee: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
    },
    {
      tableName: 'sys_users_profile',
    },
    {},
  );

  SysUserProfile.associate = models => {
    SysUserProfile.belongsTo(models.SysUser, {
      foreignKey: 'employee',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SysUserProfile;
};
