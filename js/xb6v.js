var rule = {
	title:'新版6V[磁]',
	host:'http://www.xb6v.com',
	homeUrl:'/',
	url: '/fyclass/index_fypage.html?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/e/search/index.php#tempid=1&tbname=article&mid=1&dopost=search&submit=&keyborad=**;post',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
		'Referer': 'http://www.xb6v.com/'
	},
	timeout:5000,
	class_name:'最新50部&喜剧片&动作片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片&动画片&电视剧&综艺',
	class_url:'qian50m.html&xijupian&dongzuopian&aiqingpian&kehuanpian&kongbupian&juqingpian&zhanzhengpian&jilupian&donghuapian&dianshiju&ZongYi',
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
	推荐:`js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		let d = [];
		let html = request(input);
		let list = pdfa(html, 'div.mainleft ul#post_container li');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'div.thumbnail img&&alt'),
				desc: pdfh(it, 'div.info&&span.info_date&&Text') + ' / ' + pdfh(it, 'div.info&&span.info_category&&Text'),
				pic_url: pdfh(it, 'div.thumbnail img&&src'),
				url: pdfh(it, 'div.thumbnail&&a&&href')
			});
		});
		setResult(d);
	`,
	一级:'',
	一级:`js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		let d = [];
		if (MY_CATE !== 'qian50m.html') {
			let turl = (MY_PAGE === 1)? '/' : '/index_'+ MY_PAGE + '.html';
			input = rule.homeUrl + MY_CATE + turl;
			let html = request(input);
			let list = pdfa(html, 'div.mainleft ul#post_container li');
			list.forEach(it => {
				d.push({
					title: pdfh(it, 'div.thumbnail img&&alt'),
					desc: pdfh(it, 'div.info&&span.info_date&&Text') + ' / ' + pdfh(it, 'div.info&&span.info_category&&Text'),
					pic_url: pdfh(it, 'div.thumbnail img&&src'),
					url: pdfh(it, 'div.thumbnail&&a&&href')
				});
			})
		}else{
			input = rule.homeUrl + MY_CATE;
			let html = request(input);
			let list = pdfa(html, 'div.container div#tab-content&&ul&&li');
			list.forEach(it => {
				let title = pdfh(it, 'a&&Text');
				if (title!==""){
					d.push({
						title: title,
						desc: pdfh(it, 'a&&Text'),
						pic_url: '',
						url: pdfh(it, 'a&&href')
					});
				}
			})
		}
		setResult(d);
	`,
	二级:{
		title:"div.article_container h1&&Text",
		img:"div#post_content img&&src",
		desc:"div#post_content&&Text",
		content:"div#post_content&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'div#post_content table tbody tr a');
let tabsa = [];
let tabsq = [];
let tabsm = false;
let tabse = false;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		tabsa.push("阿里云盤");
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		tabsq.push("夸克云盤");
	}else if (burl.startsWith("magnet")){
		tabsm = true;
	}else if (burl.startsWith("ed2k")){
		tabse = true;
	}
});
if (tabsm === true){
	TABS.push("磁力");
}
if (tabse === true){
	TABS.push("電驢");
}
let tmpIndex;
tmpIndex=1;
tabsa.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
tmpIndex=1;
tabsq.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
log('xb6v TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'div#post_content table tbody tr a');
let lista = [];
let listq = [];
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('xb6v title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('xb6v burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&url=" + encodeURIComponent(burl);
		}
		loopresult = title + '$' + burl;
		lista.push(loopresult);
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&url=" + encodeURIComponent(burl);
		}
		loopresult = title + '$' + burl;
		listq.push(loopresult);
	}else if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("ed2k")){
		liste.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm);
}
if (liste.length>0){
	LISTS.push(liste);
}
lista.forEach(function(it){
	LISTS.push([it]);
});
listq.forEach(function(it){
	LISTS.push([it]);
});
`,

	},
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;

//let new_host=HOST;
//let new_html=request(new_host, {withHeaders:true});
//let json=JSON.parse(new_html);
//let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");
//let cookie=setCk?json[setCk].split(";")[0]:"";
//log("xb6v cookie>>>>>>>>>>>>>>>>>>>>>>"+cookie);
//rule_fetch_params.headers.Cookie=cookie;
//setItem(RULE_CK,cookie);

let params = 'show=title&tempid=1&tbname=article&mid=1&dopost=search&submit=&keyboard=' + encodeURIComponent(KEY);
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    method: "POST",
    body: params
};
delete(_fetch_params.headers['Content-Type']);
Object.assign(_fetch_params, postData);
log("xb6v search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = request( HOST + '/e/search/index.php', _fetch_params, true);
log("xb6v search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'div.mainleft&&ul#post_container&&li');
dlist.forEach(function(it){
	let title = pdfh(it, 'div.thumbnail img&&alt');
	if (searchObj.quick === true){
		if (title.includes(KEY)){
			title = KEY;
		}
	}
	let img = pd(it, 'div.thumbnail img&&src', HOST);
	let content = pdfh(it, 'div.article div.entry_post&&Text');
	let desc = pdfh(it, 'div.info&&span.info_date&&Text');
	let url = pd(it, 'div.thumbnail&&a&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		});
});
setResult(d);
`,
}
