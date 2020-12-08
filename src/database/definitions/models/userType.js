module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define(
    'UserType',
    {
      user_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_user: DataTypes.STRING,
      about_user_type: DataTypes.STRING,
      type: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      type_status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      created_at: DataTypes.TEXT,
      updated_at: DataTypes.TEXT,
    },
    {
      tableName: 'user_types',
      timestamps: false,
    },
    {},
  );

  UserType.associate = models => {
    UserType.hasMany(models.User, {
      foreignKey: 'user_type',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return UserType;
};
