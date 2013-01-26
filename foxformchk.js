/**
 * FoxFormChk 1.1 表单验证
 * Date: 2011-04-01 16:15:00 +0800
 * Author: Damien (http://foxsp.com)
 */
$(function() {
	$("[reg]").blur(function() {
		if (chk($(this))) {
			$("span#" + $(this).attr('name')).remove();
		}
	});
	$("form").submit(function() {
		var is = true;
		$(this).find("[reg]").each(function() {
			if (!chk($(this))) {
				is = false;
			}
		});
		if (typeof(ie) != "undefined") {
			if (is && ie) {
				return ex();
			}
		}
		return is;
	});
});
function chk(e) {
	var r = new RegExp(e.attr("reg"));
	var o = e.attr("value");
	if (!r.test(o)) {
		e.css("border", "1px solid #ED6865");
		showinfo(e, null);
		return false;
	} else {
		e.removeAttr("style");
		return true;
	}
}
function showinfo(e, m) {
	t = e.position().top;
	l = e.position().left + e.width() + 28;
	if (e.attr('tip') != undefined) {
		if ($("span#" + e.attr('name')).size() == 0) {
			if (m == null) {
				e.after('<span id="' + e.attr('name') + '" class="pop">' + e.attr('tip') + '</span>');
			} else {
				e.after('<span id="' + e.attr('name') + '" class="pop">' + m + '</span>');
			}
			$("span#" + e.attr('name')).css({
				"top": t,
				"left": l,
				"opacity":0.6
			});
		}
	}
}
$.fn.callback = function(m) {
	this.each(function() {
		$(this).css("border", "1px solid #ED6865");
		showinfo($(this), m);
	});
};