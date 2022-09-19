const Management = require('../model/Management.model');

exports.getManagementService = async () => {
    const result = await Management.find({});
    return result;
}