const Recexp = require ('../models/recexpModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const recexp = await Recexp.findAll();
    res.json(recexp)
});

router.post('/', async(req,res)=>{
    const idBarang = req.body.id_barang;
    const namaCabangSebelum = req.body.nama_cabang_sebelum;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const waktuPenerimaan = req.body.waktu_penerimaan;
    const resi = req.body.resi;
    const idEkspedisi = req.body.id_ekspedisi;
    const recexp = await Recexp.create({
        id_barang: idBarang,
        nama_cabang_sebelum:namaCabangSebelum,
        id_admin: idAdmin,
        nama_admin: namaAdmin,
        waktu_penerimaan: waktuPenerimaan,
        resi:resi,
        id_ekspedisi:idEkspedisi
    });
    res.json(recexp)
});

router.put('/:id', async(req,res)=>{
    const idRecexp = req.body.id_rec_exp;
    const idBarang = req.body.id_barang;
    const namaCabangSebelum = req.body.nama_cabang_sebelum;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const waktuPenerimaan = req.body.waktu_penerimaan;
    const resi = req.body.resi;
    const idEkspedisi = req.body.id_ekspedisi;
    const recexp = await Recexp.update({
        id_barang: idBarang,
        nama_cabang_sebelum:namaCabangSebelum,
        id_admin: idAdmin,
        nama_admin: namaAdmin,
        waktu_penerimaan: waktuPenerimaan,
        resi:resi,
        id_ekspedisi:idEkspedisi
    },
    {
        where:{
            id_rec_exp: idRecexp
        }
    });
    res.json(recexp)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idRecexp = req.params.id;
    const recexp = await Recexp.destroy({
        where:{
            id_rec_exp: idRecexp
        }
    });
    res.json(recexp)
})

module.exports = router;