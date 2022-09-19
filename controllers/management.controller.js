const { getManagementService } = require("../services/management.service")

exports.getManagement = async (req, res, next) => {
    try {
        const result = await getManagementService();
        res.status(200).json({
            status: 'Successful',
            message: 'Management get successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Management could not successfully be get',
            error: error.message
        })
    }
}