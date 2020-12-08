module.exports = (sequelize, DataTypes) => {
  const SubPlacement = sequelize.define(
    'SubPlacement',
    {
      sub_placement_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      placement: {
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
      tableName: 'sub_placements',
    },
    {},
  );

  SubPlacement.associate = models => {
    SubPlacement.belongsTo(models.Placement, {
      foreignKey: 'placement',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return SubPlacement;
};
