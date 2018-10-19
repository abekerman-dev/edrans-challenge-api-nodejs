'use strict';

module.exports = (sequelize, DataTypes) => {
	const Subject = sequelize.define('subject', {
		name: DataTypes.STRING,
		creditHours: {
			type: DataTypes.INTEGER,
			field: 'credit_hours'
		}
	});

	Subject.associate = (models) => {
        models.subject.belongsToMany(models.student, 
        	{   
        		as: 'Students',
		        through: 'student_subject',
		        foreignKey: 'subject_id'
		    }
		);

        models.subject.belongsToMany(models.major, 
	    	{ 	
	    		as: 'Majors',
        		through: 'subject_major',
        		foreignKey: 'subject_id'
        	}
        );
    };

    return Subject;
};