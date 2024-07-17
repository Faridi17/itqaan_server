import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Register = db.define('Registration', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    jenis_pendaftaran: {
        type: DataTypes.ENUM('Pilih :', 'Baru', 'Pindahan'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    jenjang_tujuan: {
        type: DataTypes.ENUM('Pilih :', 'SMPIT Al-Itqaan'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    nama_sekolah_asal: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    alamat_sekolah_asal: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    pernah_paud: {
        type: DataTypes.ENUM('Pilih :', 'Ya', 'Tidak'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    pernah_tk: {
        type: DataTypes.ENUM('Pilih :', 'Ya', 'Tidak'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    nomor_ijazah_tahun: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    hobi: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cita_cita: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nama_lengkap_siswa: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('Pilih :', 'Laki-laki', 'Perempuan'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    nisn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nik: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    no_kartu_keluarga: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    no_akta_kelahiran: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    anak_ke: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    agama: {
        type: DataTypes.ENUM('Pilih :', 'Islam'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    kebutuhan_khusus_siswa: {
        type: DataTypes.ENUM('Pilih :', 'Tidak Ada', 'Autis (Q)', 'Bakat Istimewa (J)', 'Cerdas Istimewa (I)', 'Down Syndrome (P)', 'Hyperaktif (H)', 'Indigo (O)', 'Kesulitan Belajar (K)', 'Narkoba (N)', 'Tuna Daksa Ringan (D)', 'Tuna Daksa Sedang (D1)', 'Tuna Ganda', 'Tuna Grahita Ringan (C)', 'Tuna Grahita Sedang (C1)', 'Tuna Laras (E)', 'Tuna Netra (A)', 'Tuna Rungu (B)', 'Tuna Wicara (F)', 'Lainnya'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    alamat_lengkap: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    rt: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rw: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    kelurahan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kecamatan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kabupaten: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    provinsi: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kode_pos: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    tempat_tinggal: {
        type: DataTypes.ENUM('Pilih :', 'Asrama', 'Bersama Orang Tua', 'Panti Asuhan', 'Pesantren', 'Wali', 'Lainnya'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    moda_transportasi: {
        type: DataTypes.ENUM('Pilih :', 'Jalan Kaki', 'Jemputan Sekolah', 'Kendaraan Pribadi', 'Kendaraan Umum / Angkot', 'Kereta Api', 'Mobil', 'Ojek', 'Sepeda Motor', 'Lainnya'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    no_hp_ayah: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    no_hp_ibu: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email_siswa: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    no_kip: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    no_pkh: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    kewarganegaraan: {
        type: DataTypes.ENUM('Pilih :', 'Warga Negara Indonesia (WNI)', 'Warga Negara Asing (WNA)'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    nama_negara: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    foto: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nama_ayah: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tahun_lahir_ayah: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pendidikan_ayah: {
        type: DataTypes.ENUM('Pilih :', 'D1', 'D2', 'D3', 'D4', 'Informal', 'Non Formal', 'Paket A', 'Paket B', 'Paket C', 'PAUD', 'Profesi', 'Putus SD', 'S1', 'S2', 'S2 Terapan', 'S3', 'S3 Terapan', 'SD / Sederajat', 'SMP / Sederajat', 'SMA / Sederajat', 'SP-1', 'SP-2', 'Tidak Sekolah', 'TK / Sederajat', 'Lainnya'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    pekerjaan_ayah: {
        type: DataTypes.ENUM('Pilih :', 'Buruh', 'Driver Ojek Online', 'Guru', 'Ibu Rumah Tangga', 'Karyawan Swasta', 'Nelayan', 'Pedagang Besar', 'Pedagang Kecil', 'Pensiunan', 'Petani', 'Peternak', 'PNS', 'POLRI', 'TNI', 'Wiraswasta', 'Wirausaha', 'Tidak Bekerja', 'Sudah Meninggal'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    penghasilan_ayah: {
        type: DataTypes.ENUM('Pilih :', 'Kurang dari Rp. 500,000', 'Rp. 500,000 - Rp. 999,999', 'Rp. 1,000,000 - Rp. 1,999,999', 'Rp. 2,000,000 - Rp. 4,999,999', 'Rp. 5,000,000 - Rp. 20,000,000', 'Lebih dari Rp. 20,000,000', 'Tidak Berpenghasilan'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    kebutuhan_khusus_ayah: {
        type: DataTypes.ENUM('Pilih :', 'Autis', 'Bakat Istimewa', 'Cerdas Istimewa', 'Down Syndrome', 'Hyperaktif', 'Indigo', 'Kesulitan Belajar', 'Narkoba', 'Tuna Daksa Ringan', 'Tuna Daksa Sedang', 'Tuna Ganda', 'Tuna Grahita Ringan', 'Tuna Grahita Sedang', 'Tuna Laras', 'Tuna Netra', 'Tuna Rungu', 'Tuna Wicara', 'Lainnya', 'Tidak Ada'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    nama_ibu: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tahun_lahir_ibu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pendidikan_ibu: {
        type: DataTypes.ENUM('Pilih :', 'D1', 'D2', 'D3', 'D4', 'Informal', 'Non Formal', 'Paket A', 'Paket B', 'Paket C', 'PAUD', 'Profesi', 'Putus SD', 'S1', 'S2', 'S2 Terapan', 'S3', 'S3 Terapan', 'SD / Sederajat', 'SMP / Sederajat', 'SMA / Sederajat', 'Sp-1', 'Sp-2', 'TK / Sederajat', 'Lainnya', 'Tidak Sekolah'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    pekerjaan_ibu: {
        type: DataTypes.ENUM('Pilih :', 'Buruh', 'Driver Ojek Online', 'Guru', 'Ibu Rumah Tangga', 'Karyawan Swasta', 'Nelayan', 'Pedagang Besar', 'Pedagang Kecil', 'Pensiunan', 'Petani', 'Peternak', 'PNS', 'POLRI', 'Wirausaha', 'Wiraswasta', 'TNI', 'Tidak Bekerja', 'Sudah Meninggal'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    penghasilan_ibu: {
        type: DataTypes.ENUM('Pilih :', 'Kurang dari Rp. 500,000', 'Rp. 500,000 - Rp. 999,999', 'Rp. 1,000,000 - Rp. 1,999,999', 'Rp. 2,000,000 - Rp. 4,999,999', 'Rp. 5,000,000 - Rp. 20,000,000', 'Lebih dari Rp. 20,000,000', 'Tidak Berpenghasilan'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    kebutuhan_khusus_ibu: {
        type: DataTypes.ENUM('Pilih :', 'Autis', 'Bakat Istimewa', 'Cerdas Istimewa', 'Down Syndrome', 'Hyperaktif', 'Indigo', 'Kesulitan Belajar', 'Narkoba', 'Tuna Daksa Ringan', 'Tuna Daksa Sedang', 'Tuna Ganda', 'Tuna Grahita Ringan', 'Tuna Grahita Sedang', 'Tuna Laras', 'Tuna Netra', 'Tuna Rungu', 'Tuna Wicara', 'Lainnya', 'Tidak Ada'),
        defaultValue: 'Pilih :',
        allowNull: false,
    },
    tinggi_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    berat_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jarak_ke_sekolah: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    waktu_tempuh_sekolah: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jumlah_saudara: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
})

export default Register