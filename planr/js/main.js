
$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})


$(function () {

  $('.advanteges__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
		]

  });

	$('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
		infinite: true,

  });

});


var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
		accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
		var itemClass = this.parentNode.className;
		for (i = 0; i < accItem.length; i++) {
				accItem[i].className = 'accordionItem close';
		}
		if (itemClass == 'accordionItem close') {
				this.parentNode.className = 'accordionItem open';
		}
}




