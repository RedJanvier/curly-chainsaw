import EventEmitter, { EventOrg } from '../events';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_type: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_group: {
        type: DataTypes.STRING,
      },
      third_messenger: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      account_status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    },
    {},
  );

  User.associate = models => {
    User.hasOne(models.UserProfile, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  
    User.belongsTo(models.UserType, {
      foreignKey: 'user_type',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    User.hasOne(models.UserProfile, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

  };

  return User;
};
