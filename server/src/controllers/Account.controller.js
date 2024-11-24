import AccountModel from "../models/Account.model.js";

class Accounts {
    async getAccounts(req, res){
        res.json({
            'hola': "Lisa"
        })
    }
    async deleteAccount(req, res){
        res.json({message: 'eliminar'})
    }
}

export default new Accounts();
