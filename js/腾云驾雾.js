var rule = {
    title:'腾云驾雾',
    host:'https://v.%71%71.com',
    // homeUrl:'/channel/choice?listpage=1&channel=choice&sort=18&_all=1',
    homeUrl:''/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=0&pagesize=30&sort=75',
    detailUrl:'https://node.video.%71%71.com/x/api/float_vinfo2?cid=fyid',
    // searchUrl:'https://node.video.%71%71.com/x/api/msearch?keyWord=**',
    searchUrl:'/x/search/?q=**&stag=fypage',
    // searchUrl:'http://s.video.qq.com/smartbox?plat=2&ver=0&num=29&otype=json&query=**',
    searchable:2,
    filterable:1,
    multi:1,
    // url:'/channel/fyclass?listpage=fypage&channel=fyclass&sort=18&_all=1',
    url:'/x/bu/pagesheet/list?_all=1&append=0&channel=fyclass&listpage=2&offset=((fypage-1)*30)&pagesize=30&sort=75',
    filter_url:'sort={{fl.sort or 18}}&year={{fl.year}}&pay={{fl.pay}}',
    filter:{'tv':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'79','n':'最新上架'},{'v':'16','n':'好评'}],'key':'sort'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'1','n':'爱情'},{'v':'2','n':'古装'},{'v':'3','n':'悬疑'},{'v':'4','n':'都市'},{'v':'5','n':'家庭'},{'v':'6','n':'喜剧'},{'v':'7','n':'传奇'},{'v':'8','n':'武侠'},{'v':'9','n':'军旅'},{'v':'10','n':'权谋'},{'v':'11','n':'革命'},{'v':'13','n':'现实'},{'v':'14','n':'青春'},{'v':'15','n':'猎奇'},{'v':'16','n':'科幻'},{'v':'17','n':'竞技'},{'v':'18','n':'玄幻'}],'key':'ifeature'},{'name':'地区','value':[{'v':'-1','n':'全部'},{'v':'814','n':'内地'},{'v':'815','n':'美国'},{'v':'816','n':'英国'},{'v':'818','n':'韩国'},{'v':'9','n':'泰国'},{'v':'10','n':'日本'},{'v':'14','n':'中国香港'},{'v':'817','n':'中国台湾'},{'v':'819','n':'其他'}],'key':'iarea'},{'name':'年份','value':[{'v':'-1','n':'全部'},{'v':'2023','n':'2023'},{'v':'2022','n':'2022'},{'v':'2021','n':'2021'},{'v':'2020','n':'2020'},{'v':'4061','n':'2019'},{'v':'2018','n':'2018'},{'v':'2017','n':'2017-2010'},{'v':'2000','n':'00年代'},{'v':'99','n':'更早'}],'key':'iyear'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'2','n':'会员'},{'v':'11811','n':'短剧'},{'v':'30','n':'即将上线'}],'key':'ipay'}],'movie':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'10','n':'最新'},{'v':'21','n':'高分好评'}],'key':'sort'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'100018','n':'剧情'},{'v':'100004','n':'喜剧'},{'v':'100061','n':'动作'},{'v':'100005','n':'爱情'},{'v':'100010','n':'惊悚'},{'v':'4','n':'犯罪'},{'v':'100009','n':'悬疑'},{'v':'100006','n':'战争'},{'v':'100012','n':'科幻'},{'v':'100015','n':'动画'},{'v':'100007','n':'恐怖'},{'v':'100017','n':'家庭'},{'v':'100022','n':'传记'},{'v':'100003','n':'冒险'},{'v':'100016','n':'奇幻'},{'v':'100011','n':'武侠'},{'v':'100021','n':'历史'},{'v':'2','n':'运动'},{'v':'100014','n':'歌舞'},{'v':'100013','n':'音乐'},{'v':'100020','n':'纪录'},{'v':'100019','n':'伦理'},{'v':'3','n':'西部'}],'key':'itype'},{'name':'地区','value':[{'v':'-1','n':'全部'},{'v':'100024','n':'内地'},{'v':'100025','n':'中国香港'},{'v':'100029','n':'美国'},{'v':'100032','n':'欧洲'},{'v':'100026','n':'中国台湾'},{'v':'100027','n':'日本'},{'v':'100028','n':'韩国'},{'v':'100030','n':'印度'},{'v':'100031','n':'泰国'},{'v':'15','n':'英国'},{'v':'16','n':'法国'},{'v':'17','n':'德国'},{'v':'18','n':'加拿大'},{'v':'19','n':'西班牙'},{'v':'20','n':'意大利'},{'v':'21','n':'澳大利亚'},{'v':'22','n':'北欧'},{'v':'23','n':'拉丁美洲'},{'v':'100033','n':'其它'}],'key':'iarea'},{'name':'特色','value':[{'v':'-1','n':'全部'},{'v':'1','n':'院线'},{'v':'2','n':'自制电影'},{'v':'5','n':'独播'},{'v':'8','n':'原声'},{'v':'9','n':'粤语'},{'v':'3','n':'1080P'},{'v':'6','n':'奥斯卡'}],'key':'characteristic'},{'name':'年份','value':[{'v':'-1','n':'全部'},{'v':'2023','n':'2023'},{'v':'2022','n':'2022'},{'v':'2021','n':'2021'},{'v':'2020','n':'2020'},{'v':'20','n':'2019'},{'v':'2018','n':'2018'},{'v':'2017','n':'2017'},{'v':'2016','n':'2016'},{'v':'100063','n':'2015'},{'v':'100034','n':'2014'},{'v':'100035','n':'2013-2011'},{'v':'100036','n':'2010-2006'},{'v':'100037','n':'2005-2000'},{'v':'100038','n':'90年代'},{'v':'100039','n':'80年代'},{'v':'100040','n':'其它'}],'key':'year'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'8','n':'会员'},{'v':'3','n':'用券'},{'v':'4','n':'付费'}],'key':'charge'}],'variety':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'23','n':'最近更新'}],'key':'sort'},{'name':'独家','value':[{'v':'-1','n':'全部'},{'v':'1','n':'腾讯自制'},{'v':'2','n':'独播'}],'key':'exclusive'},{'name':'地区','value':[{'v':'-1','n':'全部'},{'v':'1','n':'国内'},{'v':'2','n':'海外'}],'key':'iarea'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'10','n':'游戏'},{'v':'2','n':'脱口秀'},{'v':'11','n':'音乐舞台'},{'v':'12','n':'情感'},{'v':'22','n':'生活'},{'v':'20','n':'职场'},{'v':'14','n':'喜剧'},{'v':'19','n':'美食'},{'v':'21','n':'潮流运动'},{'v':'24','n':'竞技'},{'v':'16','n':'影视'},{'v':'15','n':'电竞'},{'v':'25','n':'推理'},{'v':'3','n':'访谈'},{'v':'17','n':'亲子'},{'v':'26','n':'文化'},{'v':'23','n':'互动'},{'v':'6','n':'晚会'},{'v':'7','n':'资讯'}],'key':'itype'},{'name':'年份','value':[{'v':'-1','n':'全部'},{'v':'2023','n':'2023'},{'v':'2022','n':'2022'},{'v':'2021','n':'2021'},{'v':'50','n':'2020'},{'v':'7','n':'2019'},{'v':'1','n':'2018'},{'v':'2','n':'2017'},{'v':'3','n':'2016'},{'v':'4','n':'2015'},{'v':'5','n':'2014'},{'v':'6','n':'2013'},{'v':'2012','n':'2012'},{'v':'2011','n':'2011'},{'v':'2010','n':'2010'},{'v':'99','n':'更早'}],'key':'iyear'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'6','n':'会员'},{'v':'15','n':'超级剧场'}],'key':'ipay'}],'cartoon':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'23','n':'最近更新'}],'key':'sort'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'2','n':'冒险'},{'v':'5','n':'战斗'},{'v':'1','n':'搞笑'},{'v':'3','n':'经典'},{'v':'4','n':'科幻'},{'v':'9','n':'玄幻'},{'v':'6','n':'魔幻'},{'v':'13','n':'武侠'},{'v':'7','n':'恋爱'},{'v':'14','n':'推理'},{'v':'11','n':'腾讯出品'},{'v':'15','n':'日常'},{'v':'16','n':'校园'},{'v':'17','n':'悬疑'},{'v':'18','n':'真人'},{'v':'19','n':'历史'},{'v':'20','n':'竞技'},{'v':'12','n':'其他'}],'key':'itype'},{'name':'地区','value':[{'v':'-1','n':'全部'},{'v':'1','n':'内地'},{'v':'2','n':'日本'},{'v':'3','n':'欧美'},{'v':'4','n':'其他'}],'key':'iarea'},{'name':'时间','value':[{'v':'-1','n':'全部'},{'v':'2023','n':'2023'},{'v':'2022','n':'2022'},{'v':'2021','n':'2021'},{'v':'50','n':'2020'},{'v':'11','n':'2019'},{'v':'2018','n':'2018'},{'v':'2017','n':'2017'},{'v':'1','n':'2016'},{'v':'2','n':'2015'},{'v':'3','n':'2014'},{'v':'4','n':'2013'},{'v':'5','n':'2012'},{'v':'6','n':'2011'},{'v':'7','n':'00年代'},{'v':'8','n':'90年代'},{'v':'9','n':'80年代'},{'v':'10','n':'更早'}],'key':'iyear'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'2','n':'会员'}],'key':'ipay'},{'name':'状态','value':[{'v':'-1','n':'全部'},{'v':'46','n':'预告片'},{'v':'44','n':'连载'},{'v':'45','n':'完结'}],'key':'anime_status'},{'name':'分类','value':[{'v':'1','n':'全部'},{'v':'2','n':'3D动画'},{'v':'3','n':'2D动画'},{'v':'4','n':'特摄'},{'v':'5','n':'其他'}],'key':'item'}],'doco':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'19','n':'最新'},{'v':'78','n':'评分最高'}],'key':'sort'},{'name':'出品机构','value':[{'v':'-1','n':'全部'},{'v':'1','n':'BBC'},{'v':'4','n':'国家地理'},{'v':'3175','n':'HBO'},{'v':'2','n':'NHK'},{'v':'7','n':'历史频道'},{'v':'3530','n':'ITV'},{'v':'3174','n':'探索频道'},{'v':'3176','n':'ZDF'},{'v':'15','n':'腾讯自制'},{'v':'6','n':'合作机构'},{'v':'5','n':'其他'}],'key':'itrailer'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'4','n':'自然'},{'v':'9','n':'美食'},{'v':'3','n':'社会'},{'v':'5','n':'人文'},{'v':'1','n':'历史'},{'v':'2','n':'军事'},{'v':'7','n':'科技'},{'v':'13','n':'财经'},{'v':'15','n':'探险'},{'v':'6','n':'罪案'},{'v':'11','n':'竞技'},{'v':'10','n':'旅游'}],'key':'itype'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'2','n':'会员'}],'key':'pay'}],'child':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'19','n':'最新'},{'v':'20','n':'好评'}],'key':'sort'},{'name':'地区','value':[{'v':'-1','n':'全部'},{'v':'1','n':'欧美'},{'v':'2','n':'日韩'},{'v':'3','n':'国内'}],'key':'iarea'},{'name':'年龄','value':[{'v':'-1','n':'全部'},{'v':'1','n':'0-3岁'},{'v':'2','n':'4-6岁'},{'v':'3','n':'7-9岁'},{'v':'4','n':'10岁以上'}],'key':'iyear'},{'name':'性别','value':[{'v':'-1','n':'全部'},{'v':'1','n':'男孩'},{'v':'2','n':'女孩'}],'key':'gender'},{'name':'类型','value':[{'v':'-1','n':'全部'},{'v':'1','n':'儿歌'},{'v':'2','n':'益智'},{'v':'3','n':'手工·绘画'},{'v':'4','n':'玩具'},{'v':'5','n':'英语'},{'v':'7','n':'早教'},{'v':'6','n':'数学'},{'v':'8','n':'国学'},{'v':'9','n':'合家欢'},{'v':'10','n':'冒险'},{'v':'11','n':'交通工具'},{'v':'12','n':'魔幻·科幻'},{'v':'13','n':'动物'},{'v':'14','n':'真人特摄'},{'v':'15','n':'探索'},{'v':'16','n':'其他'}],'key':'itype'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'2','n':'会员'}],'key':'ipay'}],'knowledge':[{'name':'排序','value':[{'v':'75','n':'最热'},{'v':'23','n':'最近更新'}],'key':'sort'},{'name':'分类','value':[{'v':'-1','n':'全部'},{'v':'2','n':'文化历史'},{'v':'3','n':'亲子育儿'},{'v':'4','n':'职场'},{'v':'5','n':'商业理财'},{'v':'7','n':'生活'},{'v':'9','n':'情感心理'},{'v':'8','n':'运动健身'},{'v':'6','n':'艺术兴趣'},{'v':'12','n':'游戏'},{'v':'14','n':'科学科普'},{'v':'15','n':'健康'},{'v':'16','n':'IT/互联网'},{'v':'17','n':'课程教育'},{'v':'18','n':'有声小说'}],'key':'pay_level_one'},{'name':'资费','value':[{'v':'-1','n':'全部'},{'v':'1','n':'免费'},{'v':'6','n':'会员'},{'v':'4','n':'付费'},{'v':'15','n':'超级剧场'}],'key':'ipay'},{'name':'为你推荐','value':[{'v':'-1','n':'推荐'},{'v':'1','n':'文化节目'},{'v':'2','n':'动物科普'},{'v':'3','n':'国学经典'},{'v':'4','n':'沟通技巧'},{'v':'5','n':'罪案纪实'},{'v':'6','n':'中国史'},{'v':'7','n':'战争'},{'v':'8','n':'影视原著'},{'v':'9','n':'健身运动'},{'v':'10','n':'儿童国学'},{'v':'11','n':'职场技能'},{'v':'12','n':'经济学'},{'v':'13','n':'理财基础'},{'v':'14','n':'日常口语'},{'v':'15','n':'教师资格证'},{'v':'16','n':'书法教学'},{'v':'17','n':'戏曲'},{'v':'18','n':'摄影技巧'},{'v':'19','n':'绘画教学'},{'v':'20','n':'舞蹈分解教学'},{'v':'21','n':'音乐教学'}],'key':'topic'}]},
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    // class_parse:'.site_channel a;a&&Text;a&&href;channel/(.*)',
    cate_exclude:'会员|游戏|全部',
    class_name:'电视剧&电影&综艺&动漫&少儿&纪录片&知识',
    class_url:'tv&movie&variety&cartoon&child&doco&knowledge',
    limit:20,
    // play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites;data.playlinksdetail.#idv.quality","lists":"data.playlinksdetail.#idv.default_url"},
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites","lists":"data.playlinksdetail.#idv.default_url"},
    二级:'',
    二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(video_lists.length===1){let vid=video_lists[0];url="https://v.qq.com/x/cover/"+cid+"/"+vid+".html";d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(json.c.type===10){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=2&data_type=3&video_type=8&plname=qq&otype=json";let o_html=fetch(dataUrl,fetch_params);eval(o_html);video_lists=[];let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else if(video_lists.length===1){d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 搜索:'json:uiData;data[0].title;data[0].posterPic;.titleMarkLabelList[1].primeText;data[0].id;data[0].publishDate',
    搜索:'js:let d=[];pdfa=jsp.pdfa;pdfh=jsp.pdfh;pd=jsp.pd;let html=request(input);let baseList=pdfa(html,"body&&.result_item_v");baseList.forEach(function(it){let longText=pdfh(it,".result_title&&Text");let shortText=pdfh(it,".sub&&Text");let fromTag=pdfh(it,".result_source&&Text");let score=pdfh(it,".result_score&&Text");let content=pdfh(it,".desc_text&&Text");let url=pdfh(it,".result_title&&a&&href");let img=pd(it,".figure_pic&&src");url="https://node.video.qq.com/x/api/float_vinfo2?cid="+url.match(/.*\\/(.*?)\\.html/)[1];log(shortText+"|"+url);if(fromTag.match(/腾讯/)){d.push({title:longText.split(shortText)[0],img:img,url:url,content:content,desc:"⭐"+longText.split(shortText)[1]+"-"+shortText+" "+score})}});setResult(d);',
    // 搜索:'json:item;word;dc;class;id;sn',
}
