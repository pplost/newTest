$(document).ready(function() {
    var pages = {
        ' ': '首页',
        'fcraft.html': '羁绊礼装表',
        'np-cal.html': 'NP计算器',
        'exp-cal.html': '经验计算器',
		'servant.html': '从者素材查询',
        'item.html': '素材需求查询',
        'drop-chance.html': '效率剧场(搬运)'
    };
    var page = window.location.pathname;
    page = page.split('/').slice(-1)[0];
    for (var i in pages) {
		var e_li=$("<li></li>");
		e_li.append('<a href="./' + i + '">' + pages[i] + '</a>');
        if (page == i) {
            e_li.addClass("active");
			$("#title-name").html(pages[i]);
        }
		$("#title-link").append(e_li);
    }
});
