const mongoose = require('mongoose')

const Portifolio = mongoose.model('Portifolio')

module.exports = {
  async index(req, res) {
    const portifolios  = await Portifolio.find();
    return res.json(portifolios);
  },
  async store(req, res ) {
    const portifolio = await Portifolio.create(req.body);

    return res.json(portifolio);
  },
  async show(req, res ) {
    const portifolio = await Portifolio.findById(req.params.id);

    return res.json(portifolio);
  },
  async update(req, res ) {
    const portifolio = await Portifolio.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(portifolio);
  },
  async destroy(req, res ) {
     await Portifolio.findByIdAndDelete(req.params.id);

    return res.send('deletado com sucesso');
  }
}