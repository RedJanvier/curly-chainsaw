module.exports = (sequelize, DataTypes) => {
  const SysContactUs = sequelize.define(
    'SysContactUs',
    {
      sys_contactus_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: DataTypes.STRING,
      address: DataTypes.STRING,
      subject: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      body: DataTypes.STRING,
      browser_history: DataTypes.STRING,
      os_history: DataTypes.STRING,
      ip_address: DataTypes.STRING,
      delivered_to: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      cc_to: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      replied_by: {
        type: DataTypes.STRING,
        foreignKey: true,
        defaultValue: 0,
      },
      target_permission: DataTypes.STRING,
      target_employee: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
    },
    {
      tableName: 'sys_contat_us',
    },
    {},
  );

  SysContactUs.associate = models => {
    SysContactUs.belongsTo(models.SysUser, {
      foreignKey: 'delivered_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysContactUs.belongsTo(models.SysUser, {
      foreignKey: 'cc_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysContactUs.belongsTo(models.SysUser, {
      foreignKey: 'replied_by',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    SysContactUs.belongsTo(models.SysUser, {
      foreignKey: 'target_employee',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SysContactUs;
};
