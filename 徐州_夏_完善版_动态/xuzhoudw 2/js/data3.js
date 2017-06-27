var yunlonghu={
	"46011062490161":"49_堤坝路大石头",
    "46011062490162":"50_堤坝路大石头",
    "46011062490163":"51_湖中路监控杆",
    "46011062490164":"52_湖中路监控杆",
    "46011062490165":"53_儿童游乐场西",
    "46011062490166":"54_儿童游乐场西",
    "46011062490167":"55_艺术馆南",
    "46011062490168":"56_艺术馆南",
    "46011062490417":"49_休闲中心大伞 ",
    "46011062490418":"50_休闲中心大伞",
    "46011062889777":"49_利尔德搬迁",
    "46011062889778":"50_利尔德搬迁",
    "46011062889779":"51_利尔德搬迁"
    }
var suning = {
	"46011062724657":"49_徐州富景广场",
	"46011062724658":"50_徐州富景广场",
	"46011062724659":"51_徐州富景广场",
	"46011062724660":"52_徐州富景广场",
	"46011062724661":"53_徐州富景广场",
	"46011062796596":"52_华联清风棋院",
	"46011062796597":"53_华联清风棋院",
	"46011062796598":"54_华联清风棋院",
	"46011223425841":"49_11号弱电井,2F弱电井",
	"46011223425842":"50_1号弱电井,B1F弱电井",
	"46011223425843":"51_1号弱电井,2F弱电井",
	"46011223425844":"52_2号弱电井,B1F弱电井",
	"46011223425845":"53_3号弱电井,B1F弱电井",
	"46011223425846":"54_4号弱电井,4F弱电井",
	"46011223425585":"49_5号弱电井,B1F弱电井",
	"46011223425586":"50_6号弱电井,B1F弱电井",
	"46011223425587":"51_7号弱电井,B2F弱电井",
	"46011223425588":"52_8号弱电井,3F弱电井",
	"46011223425589":"53_9号弱电井,1F弱电井",
	"46011223425590":"54_10号弱电井,B2F弱电井"
}
var wanda = {
	"46011061924657":"241893商业楼2F6号弱电井",
	"46011061924913":"241894商业楼2F2号弱电井",
	"46011061925169":"241895soho1号15F弱电井",
	"46011061925425":"241896soho2号15F弱电井",
	"46011061925681":"241897soho6号5F弱电井",
	"46011061925937":"241898soho7号5F弱电井"
}
var aoti = {
	"46011024573549":"奥体东北",
	"46011024573550":"奥体东南",
	"46011024573551":"奥体西北",
	"46011024573552":"奥体西南"
}
var changjingData = {
	"yunlonghu":yunlonghu,
	"suning":suning,
	"wanda":wanda,
	"aoti":aoti
};
var shanquData={"shanqu":"","changjing":"aoti"};
getDataByHour(shanquData);
function getDataByHour(shanquData){
	//var url = "http://132.236.208.124:18080/duanwu.action?r="+Math.random();
	var url = "http://119.23.76.75:8092/duanwu.action?r="+Math.random();
	//var url = "http://localhost:18080/xuzhoudw/duanwu.action?istest=1&r="+Math.random();
	$.ajax({ url: url,async:false,data:shanquData, context: document.body, success: function(data){
		// 汇总函数（中上）
		pushSummary(data.summary);
		// KQI指标（左上）
		pushKQI(data.kqi[0],data.usePeople[data.usePeople.length-1]);
		// KPI指标（左上）
		pushKPI(data.kpi[0]);
		// 使用人数统计（左中柱）
		pushUsePeople(data.usePeople);
		console.info(data.usePeople);
		// 优良率变化（左下折线）
		pushRatePeople(data.ratePeople);
		// 流量趋势图（右中折线）
		pushFlowGo(data.flowGo);
		// 业务排名图（右下）
		pushFirmWork(data.firmWork);
		console.log(shanquData.changjingData);
	}});
}
function pushSummary(summary){
	$(".center .Ctop li:eq(1) div:eq(0)").html(Number(summary.JRCount).toFixed(0));
	$(".center .Ctop li:eq(2) div:eq(0)").html(Number(summary.UserCount).toFixed(0));
	$(".center .Ctop li:eq(3) div:eq(0)").html(Number(summary.ErrorCount).toFixed(0));
}
function pushKPI(kpi){
	//alert(JSON.stringify(kpi));
	$(".KPIdata ul:eq(0) li:eq(1)").text(Number(kpi.RRCSuccess).toFixed(2)+"%");
	$(".KPIdata ul:eq(1) li:eq(1)").text(Number(kpi.ERABSuccess).toFixed(2)+"%");
	$(".KPIdata ul:eq(2) li:eq(1)").text(Number(kpi.EnodeB).toFixed(2)+"%");
	$(".KPIdata ul:eq(3) li:eq(1)").text(Number(kpi.EnodeBX2).toFixed(2)+"%");
	$(".KPIdata ul:eq(4) li:eq(1)").text(Number(kpi.PRB_DW).toFixed(2)+"%");
	$(".KPIdata ul:eq(5) li:eq(1)").text(Number(kpi.PRB_UP).toFixed(2)+"%");
	$(".KPIdata ul:eq(6) li:eq(1)").text(Number(kpi.CQI).toFixed(2)+"%");
}
function pushKQI(kqi,usePeople){
	//alert(JSON.stringify(usePeople))
	$(".KQIdata ul:eq(0) li:eq(1)").text(Number(kqi.FirstPackage).toFixed(2)+"");
	$(".KQIdata ul:eq(1) li:eq(1)").text(Number(kqi.PageWait).toFixed(2)+"");
	$(".KQIdata ul:eq(2) li:eq(1)").text(Number(kqi.PageSuccess).toFixed(2)+"");
	$(".KQIdata ul:eq(3) li:eq(1)").text(Number(kqi.TvSpeed).toFixed(2)+"");
	$(".KQIdata ul:eq(4) li:eq(1)").text(Number(kqi.KaDunRate).toFixed(2)+"");
	$(".KQIdata ul:eq(5) li:eq(1)").text(Number(kqi.UserCount).toFixed(0)+"");
	$(".KQIdata ul:eq(6) li:eq(1)").text(Number(kqi.FlowTotal).toFixed(0)+"MB");
}


function pushUsePeople(peoples){
	if(shanquData.shanqu==""){
		LeftCenterXdata2=[]; //x轴传入数据
		LeftCenterYdata2=[]; //y轴传入数据
		$.each(peoples,function(i,d){
			LeftCenterXdata2.push(changjingData[shanquData.changjing][d.CI]);
			LeftCenterYdata2.push(d.UserCount);
		});
	}else{
		LC_UserCount=[];
		$.each(peoples,function(i,d){
			LC_UserCount.push(d.UserCount);
		});
		
	}
}
function pushRatePeople(ratePeople){
	if(shanquData.shanqu==""){
		$.each(ratePeople,function(i,d){
			$(".Lbottom13 .huadong ul").eq(i).find("li:eq(0)").text(changjingData[shanquData.changjing][d.CI]);
			$(".Lbottom13 .huadong ul").eq(i).find("li:eq(1)").text(d.TvGood+"%");
			$(".Lbottom13 .huadong ul").eq(i).find("li:eq(2)").text(d.PageGood+"%");
			if($(".Lbottom13 .huadong ul").eq(i).length==0){
				var ul = $("<ul><li></li><li></li><li></li></ul>");
				ul.find("li").eq(0).text(changjingData[shanquData.changjing][d.CI]);
				ul.find("li").eq(1).text(d.TvGood+"%");
				ul.find("li").eq(2).text(d.PageGood+"%");
				//$(".Lbottom13 .huadong").append(ul);
			}
		});
	}else{
		dataTv=[],dataPage=[];
		$.each(ratePeople,function(i,d){
			dataTv.push(d.TvGood);
			dataPage.push(d.PageGood);
		});
	}
}
function pushFlowGo(flowGo){
	RightCenterYdataUp=[];
	RightCenterYdataDw=[];
	$.each(flowGo,function(i,d){
		RightCenterYdataUp.push(Number(d["dw"+d.SDATE]).toFixed(2));
		RightCenterYdataDw.push(Number(d["up"+d.SDATE]).toFixed(2));
	});
}
function pushFirmWork(firmWork){
	$(".tongxin-div .huadong").empty();
	$(".shipin-div .huadong").empty();
	$(".web-div .huadong").empty();
	$.each(firmWork.tongxin,function(i,d){
		var ul = $("<ul></ul>");
		ul.append("<li>"+d.SUBCTG+"</li>")
		ul.append("<li>"+Number(d.JRCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.UserCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.FlowCount).toFixed(0)+"</li>")
		$(".tongxin-div .huadong").append(ul);
	});
	$.each(firmWork.shipin,function(i,d){
		var ul = $("<ul></ul>");
		ul.append("<li>"+d.SUBCTG+"</li>")
		ul.append("<li>"+Number(d.JRCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.UserCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.FlowCount).toFixed(0)+"</li>")
		$(".shipin-div .huadong").append(ul);
	});
	$.each(firmWork.wangye,function(i,d){
		var ul = $("<ul></ul>");
		ul.append("<li>"+d.SUBCTG+"</li>")
		ul.append("<li>"+Number(d.JRCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.UserCount).toFixed(0)+"</li>")
		ul.append("<li>"+Number(d.FlowCount).toFixed(0)+"</li>")
		$(".web-div .huadong").append(ul);
	});
}
;
