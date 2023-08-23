var rule = {
	title:'KK網盤[磁]',
	host:'https://www.kkpans.com',
	homeUrl:'/',
	url: '/forum-fyclass-fypage.html?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/search',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'MOBILE_UA',
		'Referer': 'https://www.kkpans.com/'
	},
	timeout:5000,
	class_name:'国外电影&国外电视剧&纪录片资源&综艺资源&动漫资源&音乐资源',
	class_url:'39&40&41&42&46&43',
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐:'',
	一级:'',
	一级:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = [];
let html = request(input);
let list = pdfa(html, 'div.threadlist ul li.list');
list.forEach(function(it) {
	d.push({
		title: pdfh(it, 'div.threadlist_tit&&Text'),
		desc: pdfh(it, 'div.threadlist_top div:has(>h3) span&&Text'),
		pic_url: '',
		url: pd(it, 'li.list&&a[href^="forum.php"]:eq(1)&&href', HOST)
	});
})
setResult(d);
	`,
	二级:{
		title:"div.viewthread&&div.view_tit&&Text",
		img:"div.viewthread div.message&&img&&src",
		desc:"div.viewthread div.message&&Text",
		content:"div.viewthread div.message&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'div.viewthread div.message a[href^="https://pan.quark.cn/s/"]');
let index = 1;
d.forEach(function(it) {
	TABS.push("夸克雲盤" + index);
	index = index + 1;
});
log('meijumi TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
LISTS=[];
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = pdfa(html, 'div.viewthread div.message a[href^="https://pan.quark.cn/s/"]');
let index = 1;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (d.length==1){
		burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&confirm=0&url=" + encodeURIComponent(burl);
	}else{
		burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&url=" + encodeURIComponent(burl);
	}
	let title = pdfh(it, 'a&&Text');
	LISTS.push([title + '$' + burl]);
});
`,

	},
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let new_html=request(HOST, {withHeaders:true});
let json=JSON.parse(new_html);
let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");
let cookie=setCk?json[setCk]:"";
fetch_params.headers.Cookie=cookie;
rule_fetch_params.headers.Cookie=cookie;
log('kkpans search cookie >>>>>>>>>>>>>>>>>>>>>' + cookie);

let new_host= HOST + '/search.php?mod=forum';

new_html=request(new_host);

let formhash = pdfh(new_html, 'input[name="formhash"]&&value');
log("kkpans formhash>>>>>>>>>>>>>>>" + formhash);
let params = 'formhash=' + formhash + '&searchsubmit=yes&srchtxt=' + encodeURIComponent(KEY);
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    body: params
};
Object.assign(_fetch_params, postData);
log("kkpans search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = post( HOST + '/search.php?mod=forum', _fetch_params)
//log("kkpans search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'div#threadlist ul li.list');
dlist.forEach(function(it){
	let title = pdfh(it, 'div.threadlist_tit&&Text');
	if (searchObj.quick === true){
		if (title.includes(KEY)){
			title = KEY;
		}
	}
	let img = "";
	let content = pdfh(it, 'div.threadlist_top div:has(>h3) span&&Text');
	let desc = pdfh(it, 'div.threadlist_top div:has(>h3) span&&Text');
	let url = pd(it, 'a[href^="forum.php?mod=viewthread"]&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		})
});
setResult(d);
`,
}
