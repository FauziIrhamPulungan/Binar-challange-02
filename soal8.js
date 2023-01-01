const dataPenjualanNovel = [
    {
      idProduct: "BOOK002421",
      namaProduk: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: "BOOK002351",
      namaProduk: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: "BOOK002941",
      namaProduk: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  function getInfoPenjualan(dataPenjualan) {
    const datas = dataPenjualan.map((data) => {
      const totalModal = data.hargaBeli * (data.totalTerjual + data.sisaStok);
      const totalKeuntungan = data.hargaJual * data.totalTerjual;
  
      return {
        totalModal,
        totalKeuntungan,
      };
    });
  
    let totalModal = datas
      .map((el) => el.totalModal)
      .reduce((prev, crr) => prev + crr);
  
    let totalKeuntungan = datas
      .map((el) => el.totalKeuntungan)
      .reduce((prev, crr) => prev + crr);
  
    let bestSeller;
  
    dataPenjualan.forEach((data, i) => {
      if (dataPenjualan[i].totalTerjual > dataPenjualan[i + 1]?.totalTerjual) {
        bestSeller = dataPenjualan[i];
      }
    });
  
    //   totalKeuntungan = 10000000;
    //   totalModal = 6000000;
  
    const data = {
      totalKeuntungan: "Rp. " + totalKeuntungan.toLocaleString(),
      totalModal: "Rp. " + totalModal.toLocaleString(),
      persentaseKeuntungan: (totalModal / totalKeuntungan) * 100 + "%",
      produkBukuTerlaris: bestSeller.namaProduk,
      penulisTerlaris: bestSeller.penulis,
    };
  
    return data;
  }
  
  console.log(getInfoPenjualan(dataPenjualanNovel));
  