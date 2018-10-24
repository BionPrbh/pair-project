'use strict';
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: DataTypes.STRING,
        deadline: DataTypes.DATE,
        description: DataTypes.STRING,
        budget: DataTypes.INTEGER
    }, {});
    Project.associate = function(models) {
        // associations can be defined here
        Project.belongsToMany(models.User, { through: models.ProjectUser, foreignKey: 'project_id' });
    };
    return Project;
};