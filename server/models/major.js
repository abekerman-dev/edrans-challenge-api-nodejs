'use strict';

module.exports = (sequelize, DataTypes) => {
    const Major = sequelize.define('major', {
        name: DataTypes.STRING,
        degree: DataTypes.STRING
    });

    Major.associate = (models) => {
        models.major.belongsToMany(models.subject, 
	    	{ 	
        		through: 'subject_major',
	    		foreignKey: 'major_id'
        	}
        );
    };

    return Major;
};