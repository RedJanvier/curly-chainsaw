module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      genre_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      tableName: 'genre',
    },
    {},
  );

  Genre.associate = models => {
    Genre.hasMany(models.Post, {
      foreignKey: 'genre',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Genre.hasMany(models.AppDealIn, {
      foreignKey: 'type_gender',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Genre;
};
