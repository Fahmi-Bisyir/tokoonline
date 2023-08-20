function filterProducts() {
    // ambil nilai input pengguna
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
  
    // ambil daftar produk yang akan difilter
    var productList = document.getElementById("product-list");
    var products = productList.getElementsByClassName("product-item");
  
    // simpan judul produk yang sudah ditemukan
    var foundTitles = [];
  
    // loop melalui setiap produk dalam daftar
    for (var i = 0; i < products.length; i++) {
      var title = products[i].getElementsByClassName("product-title")[0];
      var price = products[i].getElementsByClassName("product-price")[0];
      var txtValue = title.textContent || title.innerText;
  
      // gabungkan data produk menjadi satu string
      var data = txtValue + " " + price.textContent;
  
      // periksa apakah judul produk sudah ditemukan
      if (foundTitles.indexOf(txtValue) > -1) {
        // tampilkan produk jika judul sudah ditemukan
        products[i].style.display = "";
      } else {
        // periksa apakah produk cocok dengan input pengguna
        if (data.toUpperCase().indexOf(filter) > -1) {
          // tampilkan produk jika cocok dengan input pengguna
          products[i].style.display = "";
          // tambahkan judul produk ke daftar judul yang sudah ditemukan
          foundTitles.push(txtValue);
        } else {
          // sembunyikan produk jika tidak cocok dengan input pengguna
          products[i].style.display = "none";
        }
      }
    }
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


