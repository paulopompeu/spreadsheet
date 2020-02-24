const Sheet = require('../models/Spredsheet');

module.exports = {
    async search(request, response) {
        const id = request.params.id;
        console.log(request.params.id)
        let sheet = await Sheet.findOne({id});
        if (!sheet){
            return response.json({message:'No spreadsheet found with this id: ',
            id })
        } else {
            return response.json(sheet);
        }
    },

    async index(request, response) {
        const sheets = await Sheet.find();
        return response.json(sheets)
    },

    async store(request, response)  {
        // console.log('query: ' + request.query);
        // console.log('body: ' + request.body);
        // console.log('header: ' + JSON.stringify(request.headers));
        // console.log('params: ' + JSON.stringify(request.params));
        const id = request.headers.id;
        const tabela = request.headers.tabela;
        // console.log(' tabela ' + Tabela);
        // console.log(' id ' + id);

        let sheet = await Sheet.findOne({id});

        if (!sheet){
            sheet = await Sheet.create({
                id,
                Tabela : tabela
            });   
        } else {
            sheet = await Sheet.update({id}, {$set : {"Tabela": tabela}})
            // console.log(sheet)
        }       
        return response.json(sheet)
    }
};