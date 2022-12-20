const Cabang = require ('../models/cabangModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const cabang = await Cabang.findAll();
    res.json(cabang)
});

router.post('/', async(req,res)=>{
    const idCabang = req.body.id_cabang;
    const namaCabang = req.body.nama_cabang;
    const lokasi = req.body.lokasi;
    const cabang = await Cabang.create({
        id_cabang: idCabang,
        nama_cabang:namaCabang,
        lokasi:lokasi
    });
    res.json(cabang)
});

router.put('/:id', async(req,res)=>{
    const idTableCabang = req.params.id;
    const idCabang = req.body.id_cabang;
    const namaCabang = req.body.nama_cabang;
    const lokasi = req.body.lokasi;
    const cabang = await Cabang.update({
        id_cabang: idCabang,
        nama_cabang:namaCabang,
        lokasi:lokasi
    },
    {
        where:{
            id_table_cabang:idTableCabang
        }
    });
    res.json(cabang)
});

router.delete ('/:id', async (req,res)=>{
    const idTableCabang = req.params.id;
    const cabang = await Cabang.destroy({
        where:{
            id_table_cabang:idTableCabang
        }
    });
    res.json(cabang)
})

module.exports = router;