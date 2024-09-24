const Sequelize = require("sequelize");

class Board extends Sequelize.Model {
  static initiate(sequelize) {
    Board.init(
      {
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        contents: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        board_category: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        writer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
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
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Board",
        tableName: "board",
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

module.exports = Board;
