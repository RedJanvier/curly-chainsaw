module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'Country',
    {
      country_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      country_code: DataTypes.STRING,
      country_prefix: DataTypes.STRING,
      country_name: DataTypes.STRING,
      country_currency: DataTypes.STRING,
      country_language: DataTypes.STRING,
      usd_rate: DataTypes.DECIMAL(20, 0),
      usd_support: DataTypes.BOOLEAN,
      network_support: DataTypes.INTEGER(4),
      country_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'country',
    },
    {},
  );

  Country.associate = models => {
    Country.hasMany(models.Post, {
      foreignKey: 'local_currency',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Country.hasMany(models.ProfilePlus, {
      foreignKey: 'country',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Country;
};
