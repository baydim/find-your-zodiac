//Array value
var datazo = [
    ["Capicorn", "Umum: Anda mesti tahu kapan mengatakan setuju atau ya terhadap pendapat dan pandangan orang dan kapan mesti menolak atau mengatakan tidak. Jika Anda tak sependapat, Anda mesti menunjukkannya dengan cara yang sopan dan enak dilihat. Alasannya, supaya relasi yang sudah Anda bangun selama ini tidak hancur karena sekeping egoisme atau sakit hati."],
    ["Aquarius", "Umum: Ada selingan baru dalam rutinitas. Bentuk atau wujudnya bisa bermacam-macam. Lihatlah selingan baru itu lebih sebagai kesempatan dan bukan sebagai gangguan. Justru hal itu bisa membantu Anda menjalankan tugas. Bukankah Anda semakin terpacu karena ada hal baru? Pada pertengahan pekan nanti, arahkan perhatian Anda kepada hal-hal yang kecil. Jangan mengabaikannya karena hal itu tetap punya hubungan dengan pekerjaan Anda."],
    ["Pisces", "Umum : Anda rupanya suka sekali berkhayal tentang pekerjaan dan relasi Anda di awal pekan. Tak apa-apa! Yang penting, Anda bisa mengambil tindakan yang konkret sesuai dengan situasi dan/atau kondisi yang ada, jangan mengabaikan situasi yang sedang terjadi. Situasi itu bisa mendukung langkah Anda."],
    ["Aries", "Umum : Keragu-raguan bukan gaya Anda. Bingung dan tak tahu harus berbuat apa bukanlah kekhasan Anda. So, tentukan langkah yang pasti. Jangan tanggung. Jika Anda bingung menentukan sikap yang tepat di hadapan begitu banyak kemungkinan, mintalah nasihat atau pendapat orang lain. Sekalipun pendapat mereka belum tentu merupakan jawaban yang tepat, setidak-tidaknya mereka telah memberikan kisi-kisi yang berguna untuk Anda."],
    ["Cancer", "Umum: Anda lumayan boros. Anda mudah sekali mengeluarkan uang. Apapun yang menarik mata Anda, bahkan yang bukan menjadi kebutuhan sekalipun, membuat Anda dengan begitu mudah membuka dompet. Jangan salah, itu semua hanya mendatangkan kesenangan sesaat. Anda mesti punya prioritas kebutuhan. Itu sisi yang kurang dari Anda."],
    ["Taurus", "Umum: Anda memang dituntut untuk tetap konsisten pada ritme kerja yang ada. Di situlah komitmen dan loyalitas Anda diuji. Tapi Anda harus jeli mencari celah untuk fleksibel sebelum terlanjur jenuh. Ingat, komitmen dan konsistensi tidak sama dengan taat buta. Anda mesti punya sikap. Anda, misalnya, mulai dengan berolahraga di awal hari kerja. Atau Anda juga bisa mencoba berpikir dengan cara yang lain. Fleksibilitas memperkuat relasi personal dan sosial Anda, sekaligus merangsang produktivitas."],
    ["Gemini", "Umum: Anda tidak hidup seorang diri. Anda bukan sebuah pulau tak bertuan yang tiba-tiba terlempar begitu saja ke tengah lautan. Anda sudah selalu berada bersama dan dengan orang lain. Karena itu, jangan memisahkan diri dari lingkungan sosial atau komunitas tempat Anda bekerja dan bergaul. Orang-orang seperti merekalah yang menantang Anda untuk berpikir lebih serius serta mendukung Anda. Jika kemudian muncul kesulitan, jangan cepat tergoda untuk mengambil sikap. Berpikirlah baik-baik dan lihatlah persoalan dengan lebih spesifik."],
    ["Leo", "Umum: Bukalah diri Anda dan sambutlah hari yang baru. Apa pun yang akan Anda lakukan dan hadapi di sepanjang pekan ini berjalan menarik. Buatlah tujuan yang jelas. Petakan prioritas dan orientasi dengan jelas dan tegas. Anda mau buat apa? Anda mau lakukan apa? Anda mau menjadi apa? Kalau muncul kebingungan, jangan malu dan takut meminta bantuan orang lain."],
    ["Virgo", "Umum: Jika Anda terjebak dalam kesulitan, mintalah bantuan orang lain. Mintalah bantuan orang lain. Mintalah nasihat atau masukan dari orang yang kemampuannya lebih tinggi dan baik daripada Anda. Jangan takut dan malu! Apalagi orang yang Anda mintai bantuan itu tidak berkeberatan. Lalu matangkan rencana Anda. Jangan melihat ke belakang. Ingat, masa lalu punya konteks sendiri. Angkat mata dan lihat masa depan."],
    ["Libra", "Umum: Banyak mata menatap kagum pada Anda. Tanya kenapa? Karena Anda hadir minggu ini dengan sejumlah ide segar dan insight baru. Anda juga punya hati untuk mendengarkan orang lain. Karena itu, jangan tahan ide itu untuk Anda sendiri. Bagikan kepada anggota tim Anda. Biarkan mereka tahu apa yang bercokol di dalam kepala Anda. Itulah artinya interdependensi dan solidaritas."],
    ["Scorpio", "Umum: Istirahat yang banyak, makan makanan yang segar dan olahraga yang cukup. Ingat, ada hubungan erat antara kesehatan dan produktivitas. Jika Anda sudah jalani hal itu, Anda bakal kembali fokus pada apa yang sedang Anda hadapi. Teman-teman Anda akan belajar banyak dari Anda. Mereka membutuhkan contoh konkret dan bukan teori atau opini yang jelimet. Dan itu adalah Anda."],
    ["Sagitarius", "Umum: Berpikir positif. Ini senjata Anda mempertahankan hubungan kerja Anda dengan rekan atau mitra bisnis Anda minggu ini. Perhatikan juga kesempatan yang ada untuk meraih sukses. Sekalipun ada sedikit persoalan dengan pimpinan atau partner kerja, Anda mesti tetap menunjukkan sikap yang wajar, tidak di buat-buat dan juga tidak memperparah keadaan."]
];


 //Mencari Zodiak
 var value;
 function prezo(){
      //Mengambil data dari form bulan dan tanggal
     var zbulan = document.formzodiak.ibulanz.selectedIndex;
     var ztanggal = document.formzodiak.itanggalz.value;
     console.log(zbulan);
     console.log(ztanggal);

    //  pilihan eksekusi
    if (zbulan == 1 && ztanggal >=20 || zbulan == 2 && ztanggal <=18) {
        value = "Aquarius";
    }  
    if (zbulan == 1 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 2 && ztanggal >=19 || zbulan == 3 && ztanggal <=20) {
        value = "Pisces";
    }  
    if (zbulan == 2 && ztanggal > 29) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 3 && ztanggal >=21 || zbulan == 4 && ztanggal <=19) {
        value = "Aries";
    }  
    if (zbulan == 3 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 4 && ztanggal >=20 || zbulan == 5 && ztanggal <=20) {
        value = "Taurus";
    }  
    if (zbulan == 4 && ztanggal > 30) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 5 && ztanggal >=21 || zbulan == 6 && ztanggal <=21) {
        value = "Gemini";
    }  
    if (zbulan == 5 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 6 && ztanggal >=22 || zbulan == 7 && ztanggal <=22) {
        value = "Cancer";
    }  
    if (zbulan == 6 && ztanggal > 30) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 7 && ztanggal >=23 || zbulan == 8 && ztanggal <=22) {
        value = "Leo";
    }  
    if (zbulan == 7 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 8 && ztanggal >=23 || zbulan == 9 && ztanggal <=22) {
        value = "Virgo";
    }  
    if (zbulan == 8 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 9 && ztanggal >=23 || zbulan == 10 && ztanggal <=22) {
        value = "Libra";
    }  
    if (zbulan == 9 && ztanggal > 30) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 10 && ztanggal >=23 || zbulan == 11 && ztanggal <=21) {
        value = "Scorpio";
    }  
    if (zbulan == 10 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 11 && ztanggal >=22 || zbulan == 12 && ztanggal <=21) {
        value = "Sagitarius";
    }  
    if (zbulan == 11 && ztanggal > 30) {
        value = "Tanggal salah!!";
    }  
    if (zbulan == 12 && ztanggal >=22 || zbulan == 1 && ztanggal <=19) {
        value = "Capricorn";
    }  
    if (zbulan == 12 && ztanggal > 31) {
        value = "Tanggal salah!!";
    }
    if (zbulan == "" && ztanggal == ""){
        value = "belum";
    }

    // memunculkan hasil dari value
   console.log(value);
 }

function zo(){  
      //memanggil fungsi preZo
      prezo();
          //membuat perulangan mencari data di array dataweton
      for (var a = 0; a < datazo.length; a++) {
          if(value === datazo[a][0]){
          console.log(value + ': ' + datazo[a][1]);
          var ud = (value + " \n\n " + datazo[a][1]);
          document.getElementById("come").innerHTML = ud;
          }
      }

    //   jika tanggal melebihi batas 
      if(value === "Tanggal salah!!"){
          console.log(value + ', Tidak ada');
          var io = (value + ', Tidak ada');

          document.getElementById("come").innerHTML = io;
      }

    //   jika input ada yg kosong
      if(value=== "belum"){
          document.getElementById("come").innerHTML = "data yang anda masukan belum lengkap"
      }

      return datazo[a];
}
