module.exports = (sequelize, DataTypes) => {
  const PostTo = sequelize.define(
    'PostTo',
    {
      post_to_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      platform_id: DataTypes.STRING,
      sys_user: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      app: DataTypes.BIGINT(20),
      subscription: DataTypes.BIGINT(20),
      app_subscription: DataTypes.STRING,
    },
    {
      tableName: 'post_to',
      timestamps: false,
    },
    {},
  );

  PostTo.associate = models => {
    PostTo.hasMany(models.Post, {
      foreignKey: 'post_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return PostTo;
};
