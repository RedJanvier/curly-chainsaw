module.exports = (sequelize, DataTypes) => {
  const AppMember = sequelize.define(
    'AppMember',
    {
      app_member_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_id: DataTypes.STRING,
      primary_app: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      ownership_type: DataTypes.ENUM('owner', 'admin', 'manager'),
    },
    {
      tableName: 'app_members',
    },
    {},
  );

  AppMember.associate = models => {
    AppMember.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppMember.belongsTo(models.Application, {
      foreignKey: 'app',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return AppMember;
  
};
