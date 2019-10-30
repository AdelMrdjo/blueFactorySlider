var animacijaPokrenuta = false; //dok traje animacija,onemogućeni klikovi(pogrešne atribute preuzima kao i širine slika)
function go_left(){ //funkcija za pomjeranje na lijevu stranu
	if(!animacijaPokrenuta){
		animacijaPokrenuta = !animacijaPokrenuta;
		/*Prvi red*/
		var prviRed_zadnji = $('.prvired .onlyimages').children(":first").width();//širina prve slike prvog reda
		var novaSlikaAtribut = $('.prvired .onlyimages').children(":first").attr('src');//prva slika u prvom redu
		var novaSlika = $('<img>');//kreiranje nove slike
		novaSlika.attr('src',novaSlikaAtribut);//kreiranje nove slike
		$('.prvired .onlyimages').append(novaSlika);//kreiranje nove slike i dodavanje na kraj prvog reda
		$('.prvired .onlyimages').children(":first").remove();//brisanje prve slike prvog reda
		$('.prvired .onlyimages').children(":last").width(0);//za animaciju
		$('.prvired .onlyimages').children(":last").width(prviRed_zadnji);//za animaciju
		/*Drugi red*/
		var drugiRed_zadnji = $('.drugired .onlyimages').children(":first").width();//širina prve slike drugog reda
		var novaSlikaAtribut = $('.drugired .onlyimages').children(":first").attr('src');//prva slika u drugom redu
		var novaSlika = $('<img>');//kreiranje nove slike
		novaSlika.attr('src',novaSlikaAtribut);//kreiranje nove slike
		$('.drugired .onlyimages').append(novaSlika);//kreiranje nove slike i dodavanje na kraj drugog reda
		$('.drugired .onlyimages').children(":first").remove();//brisanje prve slike drugog reda
		$('.drugired .onlyimages').children(":last").width(0);//za animaciju
		$('.drugired .onlyimages').children(":last").width(drugiRed_zadnji);//za animaciju
		setTimeout(function(){ animacijaPokrenuta = !animacijaPokrenuta; }, 1000);
	}
}
function go_right(){ //funkcija za pomjeranje na desnu stranu
	if(!animacijaPokrenuta){
		animacijaPokrenuta = !animacijaPokrenuta;
		/*Prvi red*/
		var prviRed_zadnji = $('.prvired .onlyimages').children(":last").width();//širina zadnje slike prvog reda
		$('.prvired .onlyimages').children(":last").width(prviRed_zadnji);//za animaciju
		$('.prvired .onlyimages').children(":last").width(0);//za animaciju
		var novaSlikaAtribut = $('.prvired .onlyimages').children(":last").attr('src');//zadnja slika u prvom redu
		var novaSlika = $('<img>');//kreiranje nove slike
		novaSlika.attr('src',novaSlikaAtribut);//kreiranje nove slike
		$('.prvired .onlyimages').prepend(novaSlika);//kreiranje nove slike i dodavanje na početak prvog reda
		setTimeout(function(){ $('.prvired .onlyimages').children(":last").remove(); }, 1000);//nakon sekunde obriši sliku
		/*Drugi red*/
		var drugiRed_zadnji = $('.drugired .onlyimages').children(":last").width();//širina zadnje slike drugog reda
		$('.drugired .onlyimages').children(":last").width(drugiRed_zadnji);//za animaciju
		$('.drugired .onlyimages').children(":last").width(0);//za animaciju
		var novaSlikaAtribut = $('.drugired .onlyimages').children(":last").attr('src');//zadnja slika u drugom redu
		var novaSlika = $('<img>');//kreiranje nove slike
		novaSlika.attr('src',novaSlikaAtribut);//kreiranje nove slike
		$('.drugired .onlyimages').prepend(novaSlika);//kreiranje nove slike i dodavanje na početak drugog reda
		setTimeout(function(){ $('.drugired .onlyimages').children(":last").remove(); }, 1000);//nakon sekunde obriši sliku
		setTimeout(function(){ animacijaPokrenuta = !animacijaPokrenuta; }, 1000);
	}
}
/*Hover od dvije tipke*/
$(".left_button").hover(function(){ /*Tipka za ulijevo*/
  $(".left_button img").attr("src", "img/arrow-blue-left.png");
  }, function(){
  $(".left_button img").attr("src", "img/arrow-gray-left.png");
});
$(".right_button").hover(function(){ /*Tipka za udesno*/
  $(".right_button img").attr("src", "img/arrow-blue-right.png");
  }, function(){
  $(".right_button img").attr("src", "img/arrow-gray-right.png");
});