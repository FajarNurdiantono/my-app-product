import React from 'react';
import Img from '../assets/image-1.png';

function Hero() {
  return (
    <>
      <div class="flex h-96 bg-sky-900 py-8 px-32">
        <div class="flex w-full h-full flex-col space-y-7">
          <p class="text-5xl text-white">Persembahan Istimewa! Bersama kami</p>
          <p class="text-sm text-white text-ellipsis">
            Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami. Tingkatkan gaya hidupmu dengan koleksi terbaru dan hemat lebih banyak! Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan kesempatan emas ini
            untuk berbelanja cerdas!
          </p>
        </div>
        <div class="w-full h-full justify-center hidden lg:flex">
          <img class="h-96" src={Img} alt="Img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
