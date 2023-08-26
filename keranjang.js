document.addEventListener("DOMContentLoaded", function () {
    const tambahItemButtons = document.querySelectorAll('.tambah-item');

    tambahItemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productInfo = getProductInfo(productId);
            tambahkanKeKeranjang(productInfo);
        });
    });

    function getProductInfo(productId) {
        // Di sini Anda bisa mengganti ini dengan kode untuk mendapatkan informasi produk berdasarkan productId
        // Misalnya:
        return {
            id: productId,
            name: 'Nama Produk',
            price: 100000,
        };
    }

    function tambahkanKeKeranjang(productInfo) {
        const keranjangElement = document.getElementById('keranjang');

        if (keranjangElement) {
            const productElement = document.createElement('div');
            productElement.classList.add('keranjang-item');
            productElement.innerHTML = `
                <p>${productInfo.name}</p>
                <p>Rp ${productInfo.price}</p>
            `;

            keranjangElement.appendChild(productElement);
        } else {
            console.error('Elemen keranjang tidak ditemukan!');
        }
    }
});
