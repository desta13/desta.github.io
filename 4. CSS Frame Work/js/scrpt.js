// event

$('.page-scroll').on('click', function(e) {

    // ambil link
    let tujuan = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    let elemenTujuan = $(tujuan)

    // Pindahkan Scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000);



});