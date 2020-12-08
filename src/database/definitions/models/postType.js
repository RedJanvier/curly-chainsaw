module.exports = (sequelize, DataTypes) => {
  const PostType = sequelize.define(
    'PostType',
    {
      post_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      post_type: DataTypes.INTEGER(20),
      about_post_type: DataTypes.STRING,
    },
    {
      tableName: 'post_type',
      timestamps: false,
    },
    {},
  );

  PostType.associate = models => {
    PostType.hasMany(models.Post, {
      foreignKey: 'post_type',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return PostType;
};
