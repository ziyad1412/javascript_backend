/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log("Hasil Download: " + result);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = (callShowDownload) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const result = "windows-10.exe";
            const status = true;
            (status) ? resolve(result) : reject("Download Gagal");
        }, 3000);
    })
}

// cara promise biasa

// download()
// .then((result) => {
//     return showDownload(result);
// }).catch((err) => {
//     console.log(err);
// });

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

// cara Async Await

async function main() {
    console.log(await download());
}

main();