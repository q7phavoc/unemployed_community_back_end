const Sequelize = require("sequelize");

class Resume extends Sequelize.Model {
  static initiate(sequelize) {
    Resume.init(
      {
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        education: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        work_experience: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        license_certificate: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        introduction: {
          type: Sequelize.TEXT,
          allowNull: false,
          // unique: true,
        },
        writer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // unique: true,
        },
        elapsed: {
          type: Sequelize.TEXT,
          // allowNull: false,
          // unique: true,
        },
        attendee_count: {
          type: Sequelize.INTEGER,
          // allowNull: false,
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
        modelName: "Resume",
        tableName: "resume",
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

module.exports = Resume;
