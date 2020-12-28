// event pada saat link di klik
// $ adalah shortcut jquery


$('.page-scroll').on('click',function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    
    // tangkap elemen yang bersangkutan (section nya)
    var elemenTujuan = $(tujuan);
    
    // scrollTop (hitung jarak elemen yang di klik ke paling atas) tergantung kita scroll nya ,sama denga offset tapi bedanya ada di scrollnya
    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 60
    }, 1000, 'swing');

    e.preventDefault();


});


// ini untuk menyimpan Parallax
// about
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});





// untuk mengetahui jarak scroll kita denga paling atas
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();


    // Jumbotron
    $('.jumbotron img').css({
        'transform':'translate(0px , '+ wScroll/6 +'%)'
    });

    $('.jumbotron h1').css({
        'transform':'translate(0px , '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform':'translate(0px , '+ wScroll/1.2 +'%)'
    });

    // portfolio
    // each untuk milih satu persatu 
    if(wScroll > $('.portfolio').offset().top-200){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                    // eq/equal atau masing"
                    $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * (i+1));
        });


     
    }

});