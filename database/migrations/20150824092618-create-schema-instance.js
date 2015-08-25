'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('SchemaInstances', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      SchemaId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Schemas'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      meta: {
        type: Sequelize.JSON
      },
      json: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('SchemaInstances');
  }
};