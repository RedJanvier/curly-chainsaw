module.exports = (sequelize, DataTypes) => {
  const AppOwner = sequelize.define(
    'AppOwner',
    {
      app_owner_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      third_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      app_owner_legal: DataTypes.STRING,
      user_link: DataTypes.STRING,
      lang: {
        type: DataTypes.INTEGER(4),
        comment: '1: en, 2: fr',
      },
      user_type: {
        type: DataTypes.INTEGER(4),
        defaultValue: 0,
        comment: '0: OnDuka Web App, 1: Ads, 2: Feed, 3: Messenger',
      },
      user_src: {
        type: DataTypes.INTEGER(4),
        defaultValue: 0,
        comment:
          '0: Web App, 1: Facebook, 2: Messenger, 3: Instagram, 4: WhatsApp',
      },
      action: {
        type: DataTypes.INTEGER(4),
        comment: '1: Login, 2: Signup',
      },
    },
    {
      tableName: 'app_owners',
      timestamps: false,
    },
    {},
  );

  AppOwner.associate = models => {
    AppOwner.hasOne(models.AppOwnerProfile, {
      foreignKey: 'app_owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    AppOwner.hasMany(models.Application, {
      foreignKey: 'app_owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  
    AppOwner.hasMany(models.Payment, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppOwner.hasMany(models.PaymentTransaction, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppOwner.hasMany(models.AppSubscription, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    AppOwner.hasMany(models.AppMember, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    AppOwner.hasMany(models.Post, {
      foreignKey: 'posted_by',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    AppOwner.hasMany(models.ResellerSubscription, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

  };



  return AppOwner;
};
