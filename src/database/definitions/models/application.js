module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    'Application',
    {
      app_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
      },
      category: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      primary_app: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      tableName: 'application',
      timestamps: false,
    },
    {},
  );

  Application.associate = models => {
    Application.hasOne(models.ApplicationProfile, {
      foreignKey: 'app',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Application.belongsTo(models.AppCategory, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Application.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Application.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Application.hasMany(models.AppDealIn, {
      foreignKey: 'app',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    

    Application.hasOne(models.ProfilePlus, {
      foreignKey: 'app',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    Application.hasMany(models.AppMember, {
      foreignKey: 'app',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

  };

  return Application;

};
