const { HttpHelper } = require('../utils/http-helper');
const { DadosjogosModel } = require('../models/dadosjogos-model');

class DadosjogosController {
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { numero, data, quemganhou } = request.body;
            if    (!numero, !data, quemganhou) return httpHelper.badRequest('Parâmetros inválidos!');

            const Dadojogo = await DadosjogosModel.create({
                numero, data, quemganhou
            });
            return httpHelper.created(Dadojogo);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const Dadosjogos = await DadosjogosModel.findAll();
            return httpHelper.ok(Dadosjogos);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const DadosjogoExists = await DadosjogosModel.findOne({ where: { id } });
            if (!DadosjogoExists) return httpHelper.notFound('Dadosjogos não encontrado!');
            await DadosjogosModel.destroy({ where: { id } });
            return httpHelper.ok({
                message: 'Dadosjogos deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            const { numero, data, quemganhou } = request.body;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

            const DadosjogoExists = await DadosjogosModel.findByPk(id);
            if (!DadosjogoExists) return httpHelper.notFound('Dadosjogos não encontrado!');
            await DadosjogosModel.update({
                numero, data, quemganhou
            }, {
                where: { id }
            });
            return httpHelper.ok({
                message: 'Dadosjogos atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { DadosjogosController };
