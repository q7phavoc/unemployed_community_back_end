const Sequelize = require("sequelize");

class Event extends Sequelize.Model {
  static initiate(sequelize) {
    Event.init(
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
        link: {
          type: Sequelize.TEXT,
          // allowNull: false,
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
        modelName: "Event",
        tableName: "event",
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

module.exports = Event;
