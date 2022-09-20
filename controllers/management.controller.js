const { getManagementService, createManagementService, updateManagementByIdService, checkById } = require("../services/management.service")

exports.getManagement = async (req, res, next) => {
    try {
        let filters = { ...req.query };
        // exclude page, sort, limit
        const excludeFields = ['page', 'sort', 'limit'];
        excludeFields.forEach(field => delete filters[field]);

        let queries = {};

        // pagination 
        if (req.query.page) {
            const { page = 1, limit = 7 } = req.query;
            const skip = (page - 1) * parseInt(limit); 
            queries.skip = skip;
            queries.limit = parseInt(limit);
            console.log(queries.skip, queries.limit);
        }
        // fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
            console.log(fields);
        }
        // sort by price
        if (req.query.sort) {
            const sort = req.query.sort.split(',').join(' ');
            queries.sort = sort;
            console.log(sort);
        }
        const result = await getManagementService(filters,queries);
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

exports.createManagement = async (req, res, next) => {
    try {
        const result = await createManagementService(req.body);
        res.status(200).json({
            status: 'Successful',
            message: 'Management create successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Management could not be created successfully',
            error: error.message
        })
    }
}

exports.updateManagementById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const idValidation = await checkById(id);
        const result = await updateManagementByIdService(id, req.body);
        if (!idValidation) {
          res.status(400).json({
            status: 'Failed',
            error: 'Invalid Id, please check your id and provide valid id'
          })
        } else if (!result.modifiedCount) {
          return res.status(400).json({
            status: 'Fail',
            error: "Product could not be updated successfully"
          })
        } else res.status(200).json({
          status: 'successful',
          message: 'Product updated successfully',
          data: result
        })
      } catch (error) {
        res.status(400).json({
          status: 'Failed',
          message: "Product could not be updated successfully",
          error: error.message
        })
    }
}