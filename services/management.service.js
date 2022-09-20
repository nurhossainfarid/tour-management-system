const Management = require('../model/Management.model');

exports.checkById = async ( id) => {
    const result = await Management.findById({ _id: id });
    return result;
}

exports.getManagementService = async (filters, queries) => {
    const result = await Management.find(filters)
        .skip(queries.skipArea)
        .skip(queries.limit)
        .select(queries.fields)
        .sort(queries.sort);
    const total = await Management.countDocuments(filters);
    const page = Math.ceil(total / queries.limit);
    return { total, page, result};
}

exports.createManagementService = async (data) => {
    const result = await Management.create(data);
    return result;
}

exports.updateManagementByIdService = async (id, data) => {
    const result = await Management.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return result;
}