$(function() {
    $(document).ready(function(e) {
        if ($(document.body).width() <= 414) {
            $("#content").css('padding', '0 8px 0 8px');
        }
        $('#xs').click(function() {
            $("#content").css('font-size', '16px');
            $.cookie('fsize', 16, {
                expires: 7,
            });
        });
        $('#sm').click(function() {
            $("#content").css('font-size', '18px');
            $.cookie('fsize', 18, {
                expires: 7,
            });
        });
        $('#md').click(function() {
            $("#content").css('font-size', '20px');
            $.cookie('fsize', 20, {
                expires: 7,
            });
        });
        $('#lg').click(function() {
            $("#content").css('font-size', '22px');
            $.cookie('fsize', 22, {
                expires: 7,
            });
        });
        if ($.cookie('fsize') && $.cookie('fsize') != 'null') {
            var ffsize = $.cookie('fsize');
            $("#content").css('font-size', ffsize + "px");
        }
    });
	$(window).scroll(function() {
        $(this).scrollTop() > 100 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut()
    }),
    $("#back-to-top").on("click", function(b) {
        return b.preventDefault(),
        $("html, body").animate({
            scrollTop: 0
        }, 100),
        !1
    });
});
