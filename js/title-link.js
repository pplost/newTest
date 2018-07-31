$(document).ready(function() {
    var pages = {
        ' ': '首页',
        'fcraft.html': '羁绊礼装表',
        'np_cal.html': 'NP计算器',
        'exp_cal.html': '狗粮计算器',
		'servant.html': '从者素材查询',
        'item.html': '素材需求查询',
        'drop_chance.html': '效率剧场(搬运)'
    };
    var page = window.location.pathname + window.location.search;
    page = page.split('/')[2];
    for (var i in pages) {
        if (page == i) {
            continue;
        }
        $("#title-link").append('<a href="' + './' + i + '">' + pages[i] + '</a>&nbsp;&nbsp;');
    }
});
