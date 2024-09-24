const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        email: {
          type: Sequelize.STRING(255),
          // allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        name: {
          type: Sequelize.STRING(20),
          // allowNull: false,
          unique: true,
        },
        provider: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        sns_id: {
          type: Sequelize.STRING(255),
        },
        comment: {
          type: Sequelize.TEXT,
          allowNul: false,
        },
        interests: {
          type: Sequelize.TEXT,
          allowNul: false,
        },
        career_objective: {
          type: Sequelize.TEXT,
          allowNul: false,
        },
        resume_url: {
          type: Sequelize.TEXT,
          // allowNul: false,
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
        modelName: "User",
        tableName: "user",
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

module.exports = User;
