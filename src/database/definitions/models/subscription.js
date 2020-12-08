module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define(
    'Subscription',
    {
      sub_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      app_subscription: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      sub_type: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
      },
      subscribed: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
      },
      sub_status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
      },
    },
    {
      tableName: 'subscriptions',
      timestamps: false,
    },
    {},
  );

  Subscription.associate = models => {
    Subscription.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Subscription;
};
