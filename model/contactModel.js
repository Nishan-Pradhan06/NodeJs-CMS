module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("contact", {
        fullName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        emailAddress: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        descriptionMessage: {
            type: DataTypes.STRING,
            // allowNull: false
        },

    });
    return Contact;
};