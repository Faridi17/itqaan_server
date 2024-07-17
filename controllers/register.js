import Register from "../models/Register.js";
import { Op } from 'sequelize';

export const uploadRegister = async (req, res) => {
    try {
        const {
            jenis_pendaftaran,
            jenjang_tujuan,
            nama_sekolah_asal,
            alamat_sekolah_asal,
            pernah_paud,
            pernah_tk,
            nomor_ijazah_tahun,
            hobi,
            cita_cita,
            nama_lengkap_siswa,
            jenis_kelamin,
            tempat_lahir,
            tanggal_lahir,
            nisn,
            nik,
            no_kartu_keluarga,
            no_akta_kelahiran,
            anak_ke,
            agama,
            kebutuhan_khusus_siswa,
            alamat_lengkap,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kabupaten,
            provinsi,
            kode_pos,
            tempat_tinggal,
            moda_transportasi,
            no_hp_ayah,
            no_hp_ibu,
            email_siswa,
            no_kip,
            no_pkh,
            kewarganegaraan,
            nama_negara,
            nama_ayah,
            tahun_lahir_ayah,
            pendidikan_ayah,
            pekerjaan_ayah,
            penghasilan_ayah,
            kebutuhan_khusus_ayah,
            nama_ibu,
            tahun_lahir_ibu,
            pendidikan_ibu,
            pekerjaan_ibu,
            penghasilan_ibu,
            kebutuhan_khusus_ibu,
            tinggi_badan,
            berat_badan,
            jarak_ke_sekolah,
            waktu_tempuh_sekolah,
            jumlah_saudara
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const image = req.file;

        await Register.create({
            jenis_pendaftaran,
            jenjang_tujuan,
            nama_sekolah_asal,
            alamat_sekolah_asal,
            pernah_paud,
            pernah_tk,
            nomor_ijazah_tahun,
            hobi,
            cita_cita,
            nama_lengkap_siswa,
            jenis_kelamin,
            tempat_lahir,
            tanggal_lahir,
            nisn,
            nik,
            no_kartu_keluarga,
            no_akta_kelahiran,
            anak_ke,
            agama,
            kebutuhan_khusus_siswa,
            alamat_lengkap,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kabupaten,
            provinsi,
            kode_pos,
            tempat_tinggal,
            moda_transportasi,
            no_hp_ayah,
            no_hp_ibu,
            email_siswa,
            no_kip,
            no_pkh,
            kewarganegaraan,
            nama_negara,
            foto: image.originalname,
            nama_ayah,
            tahun_lahir_ayah,
            pendidikan_ayah,
            pekerjaan_ayah,
            penghasilan_ayah,
            kebutuhan_khusus_ayah,
            nama_ibu,
            tahun_lahir_ibu,
            pendidikan_ibu,
            pekerjaan_ibu,
            penghasilan_ibu,
            kebutuhan_khusus_ibu,
            tinggi_badan,
            berat_badan,
            jarak_ke_sekolah,
            waktu_tempuh_sekolah,
            jumlah_saudara
        });

        res.status(201).json('Data submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getAllRegistered = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.limit) || 10;

        const { count, rows: students } = await Register.findAndCountAll({
            order: [['createdAt', 'DESC']],
            limit: req.query.limit ? perPage : undefined,
            offset: req.query.limit ? (currentPage - 1) * perPage : undefined,
        });

        const totalPage = Math.ceil(count / perPage);
        res.status(200).json({ 
            students, 
            totalPage,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRegisteredByCapitalName = async (req, res) => {
    try {
        const { capital } = req.params;

        if (!capital || capital.length !== 1) {
            return res.status(400).json({ message: 'Please provide a single capital letter.' });
        }

        const students = await Pendaftaran.findAll({
            where: {
                nama_lengkap_siswa: {
                    [Op.like]: `${capital.toUpperCase()}%`
                }
            },
            order: [['nama_lengkap_siswa', 'ASC']],
            attributes: { 
                exclude: ['foto']
            }
        });

        res.status(200).json({ 
            students
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRegisteredById = async (req, res) => {
    try {
        const { id } = req.params
        const registrant = await Register.findByPk(id)

        if (!registrant) return res.status(404).json({ message: 'Blog is not found ' })

        res.status(200).json(registrant)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const editRegister = async (req, res) => {
    try {
        const registerId = req.params.id;

        const {
            jenis_pendaftaran,
            jenjang_tujuan,
            nama_sekolah_asal,
            alamat_sekolah_asal,
            pernah_paud,
            pernah_tk,
            nomor_ijazah_tahun,
            hobi,
            cita_cita,
            nama_lengkap_siswa,
            jenis_kelamin,
            tempat_lahir,
            tanggal_lahir,
            nisn,
            nik,
            no_kartu_keluarga,
            no_akta_kelahiran,
            anak_ke,
            agama,
            kebutuhan_khusus_siswa,
            alamat_lengkap,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kabupaten,
            provinsi,
            kode_pos,
            tempat_tinggal,
            moda_transportasi,
            no_hp_ayah,
            no_hp_ibu,
            email_siswa,
            no_kip,
            no_pkh,
            kewarganegaraan,
            nama_negara,
            nama_ayah,
            tahun_lahir_ayah,
            pendidikan_ayah,
            pekerjaan_ayah,
            penghasilan_ayah,
            kebutuhan_khusus_ayah,
            nama_ibu,
            tahun_lahir_ibu,
            pendidikan_ibu,
            pekerjaan_ibu,
            penghasilan_ibu,
            kebutuhan_khusus_ibu,
            tinggi_badan,
            berat_badan,
            jarak_ke_sekolah,
            waktu_tempuh_sekolah,
            jumlah_saudara
        } = req.body;

        let updateData = {
            jenis_pendaftaran,
            jenjang_tujuan,
            nama_sekolah_asal,
            alamat_sekolah_asal,
            pernah_paud,
            pernah_tk,
            nomor_ijazah_tahun,
            hobi,
            cita_cita,
            nama_lengkap_siswa,
            jenis_kelamin,
            tempat_lahir,
            tanggal_lahir,
            nisn,
            nik,
            no_kartu_keluarga,
            no_akta_kelahiran,
            anak_ke,
            agama,
            kebutuhan_khusus_siswa,
            alamat_lengkap,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kabupaten,
            provinsi,
            kode_pos,
            tempat_tinggal,
            moda_transportasi,
            no_hp_ayah,
            no_hp_ibu,
            email_siswa,
            no_kip,
            no_pkh,
            kewarganegaraan,
            nama_negara,
            nama_ayah,
            tahun_lahir_ayah,
            pendidikan_ayah,
            pekerjaan_ayah,
            penghasilan_ayah,
            kebutuhan_khusus_ayah,
            nama_ibu,
            tahun_lahir_ibu,
            pendidikan_ibu,
            pekerjaan_ibu,
            penghasilan_ibu,
            kebutuhan_khusus_ibu,
            tinggi_badan,
            berat_badan,
            jarak_ke_sekolah,
            waktu_tempuh_sekolah,
            jumlah_saudara
        };

        if (req.file) {
            updateData.foto = req.file.originalname;
        }

        const [updatedRowsCount] = await Register.update(updateData, {
            where: { id: registerId },
            returning: true
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({ error: 'Register not found' });
        }

        res.status(200).json({ message: 'Register updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteRegistered = async (req, res) => {
    try {
        const { id } = req.params

        const registrant = await Register.findByPk(id)
        if (!registrant) {
            return res.status(404).json({ message: 'Post not found' })
        }

        await registrant.destroy()
        res.status(200).json({ message: 'Image successfully deleted'})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}