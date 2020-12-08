
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      post_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      posted_by: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      app: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
      },
      app_third: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fb_post_id: DataTypes.STRING,
      category: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      sub_category: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      placement: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      price_units: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        defaultValue: 1,
      },
      local_currency: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        defaultValue: 1,
      },
      post_to: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      post_type: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      brand: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      genre: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cover: DataTypes.TEXT,
      images: DataTypes.TEXT,
      address: DataTypes.STRING,
      video_url: DataTypes.TEXT,
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      location: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      sale_price: DataTypes.DECIMAL(10, 2),
      last_price: DataTypes.DECIMAL(10, 2),
      discount: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      call_to_order: DataTypes.STRING,
      fb_photo_id: DataTypes.TEXT,
      post_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'posts',
    },
    {},
  );

  Post.associate = models => {
    Post.belongsTo(models.PostTo, {
      foreignKey: 'post_to',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Post.belongsTo(models.PostType, {
      foreignKey: 'post_type',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Post.belongsTo(models.Brand, {
      foreignKey: 'brand',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Post.belongsTo(models.Genre, {
      foreignKey: 'genre',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Post.belongsTo(models.Category, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  
    Post.belongsTo(models.Country, {
      foreignKey: 'local_currency',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Post.hasMany(models.ProductOrder, {
      foreignKey: 'post',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Post.belongsTo(models.AppOwner, {
      foreignKey: 'posted_by',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Post.belongsTo(models.Placement, {
      foreignKey: 'placement',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return Post;
};
