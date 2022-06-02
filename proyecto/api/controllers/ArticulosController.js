/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllArticulos: async function (req, res){
    var misArticulos = await Articulo.find();
    res.ok(misArticulos);
  }
};

