module.exports = (sequelize, DataTypes) => {
  const SysPos = sequelize.define(
    'SysPos',
    {
      sys_pos_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      allow: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'sys_pos',
    },
    {},
  );

  SysPos.associate = models => {
    SysPos.hasMany(models.SysUser, {
      foreignKey: 'position',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SysPos;
};
