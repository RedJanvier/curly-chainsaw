module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_owners', {
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
      third_access_token: {
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
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      verification_code: DataTypes.STRING,
      email_verified: DataTypes.BOOLEAN,
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('app_owners');
  },
};
