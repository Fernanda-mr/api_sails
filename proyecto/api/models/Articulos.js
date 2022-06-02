/**
 * Articulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     //ingresamos atributos para model articulos
     nombre: {type: 'string', required: true},
     precio: {type: 'number', required: true},
     cantidad: {type: 'number', required: true},

  },

};

