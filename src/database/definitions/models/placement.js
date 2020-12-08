module.exports = (sequelize, DataTypes) => {
  const Placement = sequelize.define(
    'Placement',
    {
      placement_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'placements',
    },
    {},
  );

  Placement.associate = models => {
    Placement.belongsTo(models.Category, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  Placement.associate = models => {
    Placement.hasMany(models.SubPlacement, {
      foreignKey: 'placement',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  Placement.associate = models => {
    Placement.hasMany(models.Post, {
      foreignKey: 'placement',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Placement;
};
