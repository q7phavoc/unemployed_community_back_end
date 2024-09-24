const Sequelize = require("sequelize");

class Banner extends Sequelize.Model {
  static initiate(sequelize) {
    Banner.init(
      {
        image_url: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        contents: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        writer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // unique: true,
        },
        comment_count: {
          type: Sequelize.INTEGER,
          // allowNull: false,
          // unique: true,
        },
        view_count: {
          type: Sequelize.INTEGER,
          // allowNull: false,
          // unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Banner",
        tableName: "banner",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  }
}

module.exports = Banner;
