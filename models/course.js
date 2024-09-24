const Sequelize = require("sequelize");

class Course extends Sequelize.Model {
  static initiate(sequelize) {
    Course.init(
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
        course_category: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        teacher_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          // unique: true,
        },
        writer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // unique: true,
        },
        duration: {
          type: Sequelize.TEXT,
          // allowNull: false,
          // unique: true,
        },
        rating: {
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
        modelName: "Course",
        tableName: "course",
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

module.exports = Course;
