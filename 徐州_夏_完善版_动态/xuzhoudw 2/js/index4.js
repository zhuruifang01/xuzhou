$(function(){
    //时间日期：
    function currentTime(){
        var d=new Date(),str='';
        str+=d.getFullYear()+'.';
        str+=d.getMonth() + 1+'.';
        str+=d.getDate()+'  ';
        str+=d.getHours()+':';
        str+=d.getMinutes()+':';
        str+= d.getSeconds()+'';
        return str;
    }
    function calculTime(hourlen){
    	var nowDate = new Date();
    	var yeDate = new Date(nowDate.getTime()-hourlen*60*60*1000);
    	return yeDate.getHours();
    }
    setInterval(function(){
    	// 时钟
    	$('#show').html(currentTime);
    	// 定时刷新
    	timerFunction();
    },1000);

    datatime=[calculTime(5)+':00',calculTime(4)+':00',calculTime(3)+':00',calculTime(2)+':00',calculTime(1)+':00',calculTime(0)+':00'];  //当前时间的前6个小时
    timerFunction();
    function timerFunction(){
    	var dNow=new Date();
    	hour=dNow.getHours();  //当前的 时
    	var minute = dNow.getMinutes();
    	var second= dNow.getSeconds();
    	if((minute%5==0)&&second==0){
    		console.info("定時器刷新数据"+minute)
    	//if(second%20==0){
    		datatime=[calculTime(5)+':00',calculTime(4)+':00',calculTime(3)+':00',calculTime(2)+':00',calculTime(1)+':00',hour+':00'];  //当前时间的前6个小时
    		//shanquData.shanqu='46011062490163';
    		getDataByHour(shanquData);
    		Select3();
    	}
    }


    
    var containHeight=$(window).height()-60;
    $(".contain").css('height',containHeight+'px');
    //左上 滑动：
        var titleHeight=$(".zhibiao>.title").height();
        $(".zhibiao>.title").css("lineHeight",titleHeight+'px');
        var dataHeight=$(".contain .left .Ltop .zhibiao .data").height();
        $(".contain .left .Ltop .zhibiao .data .huadong").css("height",dataHeight*3+'px');
        var liHeight=$(".contain .left .Ltop .zhibiao .data .huadong ul").height();
        $(".contain .left .Ltop .zhibiao .data .huadong ul li").css("lineHeight",liHeight+'px');
        var rollnum=0;
        function Ltop(){
            rollnum+=dataHeight;
            if(rollnum==dataHeight*3){
                rollnum=0;
            }
            if(rollnum==0){
                $(".contain .left .Ltop .zhibiao .data .huadong").css({'transition':'none','marginTop':'0'});
            }
            else{
                $(".contain .left .Ltop .zhibiao .data .huadong").css({'marginTop':-rollnum+'px','transition':'margin-top 0.5s'});
            }
         }
         var int=setInterval(Ltop,3000);
      //左下 滑动：
        var Lb_titleHeight=$(".Lbottom>.title").height();
        $(".Lbottom>.title").css("lineHeight",Lb_titleHeight+'px');
        var Lb_title2Height=$(".Lbottom .title2").height();
        $(".Lbottom .title2").css("lineHeight",Lb_title2Height+'px');
        var dataHeight2=$(".contain .left .Lbottom .data").height(); //盒子的高度
        var liHeight2=dataHeight2*0.2;  //每一行的高度
        $(".contain .left .Lbottom .data .huadong ul").css("height",liHeight2+'px');
        $(".contain .left .Lbottom .data .huadong ul li").css("lineHeight",liHeight2+'px');

        var tmpHuadong=null;  //用来存储记录 滑动数据的总高度
        var rollnum2=0;
        function Lbottom(tmpHuadong){
            rollnum2+=dataHeight2;
            if(rollnum2>=tmpHuadong){
                rollnum2=0;
            }
            if(rollnum2==0){
                $('.contain .left .Lbottom .data .huadong').css({'marginTop':'0','transition':'none'});
            }
            else{
                $('.contain .left .Lbottom .data .huadong').css({'marginTop':-rollnum2+'px','transition':'margin-top 0.5s'});
            }
        }
    //右下 滑动：
        var dataHeight3=$(".contain .right .Rbottom .data").height();
        $(".contain .right .Rbottom .data .huadong").css("height",dataHeight3*3+'px');
        var liHeight22=$(".contain .right .Rbottom .data .huadong ul").height();
        $(".contain .right .Rbottom .data .huadong ul li").css("lineHeight",liHeight22+'px');
        var rollnum3=0; var index=0;
            $(".contain .right .Rbottom").hide();
            $(".contain .right").find(".Rbottom:eq("+index+")").show();
            function Rbottom(){
                rollnum3+=dataHeight3;
                if(rollnum3==dataHeight3*2){
                    index=index+1;
                    rollnum3=0;
                    $(".contain .right .Rbottom").hide();
                    $(".contain .right").find(".Rbottom:eq("+index+")").show();
                }
                if(index==2){
                    index=-1;
                }
                if(rollnum3==0){
                    $('.contain .right .Rbottom .data .huadong').css({'marginTop':'0','transition':'none'});
                }
                else{
                    $('.contain .right .Rbottom .data .huadong').css({'marginTop':-rollnum3+'px','transition':'margin-top 0.5s'});
                }

            }
        var int3=setInterval(Rbottom,3000);

    //右上
            var RtopHeight=$(".right .Rtop ul").height();
            $(".right .Rtop ul li").css("lineHeight",RtopHeight+'px');
        //申明几个用于存储记录数据的全局变量：
            var tmpLeftCenter=null;  //存储左中柱状图 的变量
                var tmpLeftCenter_Xdata=null;
                var tmpLeftCenter_Ydata=null;
            var tmpRightCenter={};   //存储右中折线图 的变量 [创建一个函数]
                tmpRightCenter.select2=null;    //[大标题]
                tmpRightCenter.select4=null;    //[副标题]
                tmpRightCenter.datatime=null;    //x时间
                tmpRightCenter.dataY=null;    //y数据
    //==============================数据部分开始：【测试假数据】=====================================================
            //左中柱状 【4个场景的 y轴数据需要分别设置，因为x轴的个数和名字不同】

            //          LeftCenterXdata2=['49_云龙湖堤坝路大石头', '50_云龙湖堤坝路大石头楼', '51_湖中路北头监控所', '52_湖中路北头监控','53_儿童游乐场西100','54_儿童游乐场西1002','55_艺术馆南','56_艺术馆南','49_云龙湖休闲中心大伞下','50_云龙湖休闲中心大伞下']; //x轴传入数据
            //          LeftCenterYdata2=['2000','3004','2056','2450','2000','3004','2056','2450','2000','3004','2056','2450','2000']; //y轴传入数据
            //左中柱状+折线：       
            //          LC_UserCount=[20,30,40,50,60];
             //左下优良率折线图        
                     dataTv=[],dataPage=[];
           //右中 折线图：
           //       RightCenterYdataUp=['2000','3004','2056','2450','2056','2450']; //y轴传入数据
           //       RightCenterYdataDw=['2000','3004','2056','2450','2056','2450']; //y轴传入数据
           //       var RightCenterYdata;
    //==============================数据部分结束：=====================================================
        //初始化：
            function chushi(){
            	//alert(LeftCenterXdata2);
                $(".cjxz .erji select optgroup:eq(0)").show();
                $(".cjxz .erji select optgroup:eq(1)").hide();
                $(".contain .left .Lbottom1").hide();
                $(".contain .left .Lbottom10").show();
                $("#select3 optgroup").hide();
                $("#select3 optgroup:eq(0)").show();
                $(".contain .left .Lcenter1").show();
                $(".contain .left .Lcenter2").hide();
                var select1=$("#select1  option:selected").text();
                var select2=$("#select1  option:selected").text();
                var select3=$("#select1  option:selected").text();
                var select4=$("#select1  option:selected").text();
                $("#select2").val("奥体中心");
                $("#select3").val("全部");
                $("#select4").val("上行流量");
                //左中 柱状图
                LeftCenterXdata=LeftCenterXdata2; //x轴传入数据
                LeftCenterYdata=LeftCenterYdata2;
                zhu('奥体中心',LeftCenterXdata,LeftCenterYdata);  //调用柱状图
                tmpLeftCenter='奥体中心';  //记录标题
                tmpLeftCenter_Xdata=LeftCenterXdata;  //记录x轴数据
                tmpLeftCenter_Ydata=LeftCenterYdata;  //记录y轴数据
                //右中 折线图：
                RightCenterYdataUp=RightCenterYdataUp; //y轴传入数据
                RightCenterYdataDw=RightCenterYdataDw; //y轴传入数据
                zhe('奥体中心','上行流量',datatime, RightCenterYdataUp);
                tmpRightCenter.select2='奥体中心';    //存储右中数组的 第一个变量[大标题]
                tmpRightCenter.select4='上行流量';    //存储右中数组的 第一个变量[副标题]
                tmpRightCenter.datatime=datatime;    //时间
                tmpRightCenter.dataY=RightCenterYdataUp;    //y数据
                //左下 滑动表格：
                $(".contain .left .Lbottom").hide();
                $(".contain .left .Lbottom10").show();
                var HuadongHeight=$(".contain .left .Lbottom10 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                tmpHuadong=HuadongHeight;
                //背景图：
                $(".contain .center").css("width","45%");
                $(".center .Cbottom1").show();
                $(".center .Cbottom2").hide();
                //标题：
                $(".header .title span").html("奥体中心");
                //shanquData={"shanqu":"","changjing":"aoti"};
            }
            getDataByHour(shanquData);
            chushi();
        //select1:
            $("#select1").change(function(){
                select1=$("#select1  option:selected").text();
                if(select1=="商场"){
                	shanquData={"shanqu":"","changjing":"aoti"};
                	getDataByHour(shanquData);
                    chushi();
                }else{
                	shanquData={"shanqu":"","changjing":"yunlonghu"};
                	getDataByHour(shanquData);
                    chushi();
                    $("#select2 optgroup:eq(0)").hide();
                    $("#select2 optgroup:eq(1)").show();
                    $("#select2").val("云龙湖景区");
                    $("#select3 optgroup").hide();
                    $("#select3 optgroup:eq(3)").show();
                    $("#select4").val("上行流量");
                    //左中 柱状图
                    LeftCenterXdata=LeftCenterXdata2//x轴传入数据
                    LeftCenterYdata=LeftCenterYdata2; //y轴传入数据
                    zhu('云龙湖景区',LeftCenterXdata,LeftCenterYdata);  //调用柱状图
                    tmpLeftCenter='云龙湖景区';  //记录标题
                    tmpLeftCenter_Xdata=LeftCenterXdata;  //记录x轴数据
                    tmpLeftCenter_Ydata=LeftCenterYdata;  //记录y轴数据
                    Select3();
                    //左下 滑动表格：
                    $(".contain .left .Lbottom").hide();
                    $(".contain .left .Lbottom13").show();
                    var HuadongHeight=$(".contain .left .Lbottom13 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                    tmpHuadong=HuadongHeight;
                    //背景图：
                    $(".contain .center").css("width","50%");
                    // $(".contain").css("background","#000");
                    $(".center .Cbottom1").hide();
                    $(".center .Cbottom2").show();
                }
            });
         //select2:
            var tmp2=null; //记录左下滑动的总行数
            $("#select2").change(function(){
                    //调用select2的逻辑函数
                    Select2();
                    Select3();
            });
         //select3:
            $("#select3").change(function(){
                //调用selet3逻辑函数
            	var CI = $(this).val();
            	if($.trim(CI)!=""&&CI!="全部"){
            		shanquData.shanqu=CI;
            	}else{
            		shanquData.shanqu="";
            	}
            	getDataByHour(shanquData);
                Select3();
            });
        //select4:
            $("#select4").change(function(){
                var select2=$("#select2  option:selected").text();
                var select3=$("#select3  option:selected").text();
                var select4=$("#select4  option:selected").text();
                //右中折线图：
                if(select3=="全部"){
                	if(select4.indexOf("上行")>=0){
                		RightCenterYdata=RightCenterYdataUp;
                	}else{
                		RightCenterYdata=RightCenterYdataDw;
                	}
                    zhe(select2,select4,datatime,RightCenterYdata);
                    tmpRightCenter.select2=select2;    //存储右中数组的 第一个变量[大标题]
                    tmpRightCenter.select4=select4;    //存储右中数组的 第一个变量[副标题]
                    tmpRightCenter.datatime=datatime;    //时间
                    tmpRightCenter.dataY=RightCenterYdata;    //y数据
                }
                else{
                	if(select4.indexOf("上行")>=0){
                		RightCenterYdata=RightCenterYdataUp;
                	}else{
                		RightCenterYdata=RightCenterYdataDw;
                	}
                    zhe(select3,select4,datatime,RightCenterYdata);
                    tmpRightCenter.select2=select3;    //存储右中数组的 第一个变量[大标题]
                    tmpRightCenter.select4=select4;    //存储右中数组的 第一个变量[副标题]
                    tmpRightCenter.datatime=datatime;    //时间
                    tmpRightCenter.dataY=RightCenterYdata;    //y数据
                }
            });
        //selet2逻辑 的函数：
            function Select2(){
                var select2=$("#select2  option:selected").text();
                var select3=$("#select3  option:selected").text();
                var select4=$("#select4  option:selected").text();
                if(select2=="云龙湖景区"){
                	shanquData={"shanqu":"","changjing":"yunlonghu"};
                	getDataByHour(shanquData);
                    $("#select2 optgroup:eq(0)").hide();
                    $("#select2 optgroup:eq(1)").show();
                    $("#select2").val("云龙湖景区");
                    $("#select3 optgroup").hide();
                    $("#select3 optgroup:eq(3)").show();
                    $("#select4").val("上行流量");
                    //标题：
                    $(".header .title span").html("国际龙舟邀请赛");
                    //左下 滑动表格：
                    $(".contain .left .Lbottom").hide();
                    $(".contain .left .Lbottom13").show();
                    var HuadongHeight=$(".contain .left .Lbottom13 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                    tmpHuadong=HuadongHeight;
                    console.log(HuadongHeight);
                    $(".contain .left .Lcenter1").show();
                    $(".contain .left .Lcenter2").hide();
                    //左中 柱状图
                    //LeftCenterXdata=['49_云龙湖堤坝路大石头', '50_云龙湖堤坝路大石头楼', '51_湖中路北头监控所', '52_湖中路北头监控','53_儿童游乐场西100','54_儿童游乐场西1002','55_艺术馆南','56_艺术馆南','49_云龙湖休闲中心大伞下','50_云龙湖休闲中心大伞下']; //x轴传入数据
                    //LeftCenterYdata=['2000','3004','2056','2450','2000','3004','2056','2450','2000','3400']; //y轴传入数据
                    LeftCenterXdata=LeftCenterXdata2//x轴传入数据
                    LeftCenterYdata=LeftCenterYdata2; //y轴传入数据
                    zhu('云龙湖景区',LeftCenterXdata,LeftCenterYdata);  //调用柱状图
                    tmpLeftCenter='云龙湖景区';  //记录标题
                    tmpLeftCenter_Xdata=LeftCenterXdata;  //记录x轴数据
                    tmpLeftCenter_Ydata=LeftCenterYdata;  //记录y轴数据
                    //右中折线图：
                    zhe('云龙湖景区','上行流量',datatime,RightCenterYdataUp);
                    tmpRightCenter.select2='云龙湖景区';    //存储右中数组的 第一个变量[大标题]
                    tmpRightCenter.select4='上行流量';    //存储右中数组的 第一个变量[副标题]
                    tmpRightCenter.datatime=datatime;    //时间
                    tmpRightCenter.dataY=RightCenterYdataUp;    //y数据

                }
                if(select2=="奥体中心"){
                	shanquData={"shanqu":"","changjing":"aoti"};
                	getDataByHour(shanquData);
                    chushi();
                    //左下 滑动表格：
                    $(".contain .left .Lbottom").hide();
                    $(".contain .left .Lbottom10").show();
                    var HuadongHeight=$(".contain .left .Lbottom10 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                    tmpHuadong=HuadongHeight;

                }
                else if(select2=="万达广场"){
                	shanquData={"shanqu":"","changjing":"wanda"};
                	getDataByHour(shanquData);
                    $("#select3 optgroup").hide();
                    $("#select3 optgroup:eq(1)").show();
                    $("#select3").val("全部");
                    $("#select4").val("上行流量");
                    //标题：
                    $(".header .title span").html(select2);
                    //左中：
                    $(".contain .left .Lcenter1").show();
                    $(".contain .left .Lcenter2").hide();
                    //左中 柱状图
                    LeftCenterXdata=LeftCenterXdata2; //x轴传入数据
                    LeftCenterYdata=LeftCenterYdata2;
                    zhu(select2,LeftCenterXdata,LeftCenterYdata);  //调用柱状图
                    tmpLeftCenter=select2; //记录标题
                    tmpLeftCenter_Xdata=LeftCenterXdata;  //记录x轴数据
                    tmpLeftCenter_Ydata=LeftCenterYdata;  //记录y轴数据
                    //右中折线图：
                    zhe(select2,'上行流量',datatime,RightCenterYdataUp);
                    tmpRightCenter.select2=select2;    //存储右中数组的 第一个变量[大标题]
                    tmpRightCenter.select4='上行流量';    //存储右中数组的 第一个变量[副标题]
                    tmpRightCenter.datatime=datatime;    //时间
                    tmpRightCenter.dataY=RightCenterYdataUp;    //y数据
                    RightCenterYdataUp=RightCenterYdataUp; //y轴传入数据
                    //左下 滑动表格：
                    $(".contain .left .Lbottom").hide();
                    $(".contain .left .Lbottom11").show();
                    var HuadongHeight=$(".contain .left .Lbottom11 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                    tmpHuadong=HuadongHeight;
                    //背景图：
                    $(".contain .center").css("width","50%");
                    // $(".contain").css("background","#000");
                    $(".center .Cbottom").hide();
                    $(".center .Cbottom3").show();

                }
                else if(select2=="苏宁广场"){
                	shanquData={"shanqu":"","changjing":"suning"};
                	getDataByHour(shanquData);
                    $("#select3 optgroup").hide();
                    $("#select3 optgroup:eq(2)").show();
                    $("#select3").val("全部");
                    $("#select4").val("上行流量");
                    //标题：
                    $(".header .title span").html(select2);
                    //左中：
                    $(".contain .left .Lcenter1").show();
                    $(".contain .left .Lcenter2").hide();
                    //左中 柱状图
                    LeftCenterXdata=LeftCenterXdata2; //x轴传入数据
                    LeftCenterYdata=LeftCenterYdata2;
                    zhu(select2,LeftCenterXdata,LeftCenterYdata);  //调用柱状图
                    tmpLeftCenter=select2; //记录标题
                    tmpLeftCenter_Xdata=LeftCenterXdata;  //记录x轴数据
                    tmpLeftCenter_Ydata=LeftCenterYdata;  //记录y轴数据
                    //右中折线图：
                    zhe(select2,'上行流量',datatime,RightCenterYdataUp);
                    tmpRightCenter.select2=select2;    //存储右中数组的 第一个变量[大标题]
                    tmpRightCenter.select4='上行流量';    //存储右中数组的 第一个变量[副标题]
                    tmpRightCenter.datatime=datatime;    //时间
                    tmpRightCenter.dataY=RightCenterYdataUp;    //y数据
                    //左下 滑动表格：
                    $(".contain .left .Lbottom").hide();
                    $(".contain .left .Lbottom12").show();
                    var HuadongHeight=$(".contain .left .Lbottom12 .data .huadong ul").length*liHeight2;//要滑动的数据总高度[总行数*行高]
                    tmpHuadong=HuadongHeight;
                    //背景图：
                    $(".contain .center").css("width","50%");
                    // $(".contain").css("background","#000");
                    $(".center .Cbottom").hide();
                    $(".center .Cbottom4").show();

                }
            }
        //selet3逻辑 的函数：
            function Select3(){
                //select3的逻辑
                var select1=$("#select1  option:selected").text();
                select3=$("#select3  option:selected").text();
                select2=$("#select2  option:selected").text();
                var select4=$("#select4  option:selected").text();
                if(select3=="全部"){
                           //select2的逻辑
                        Select2();
                        
                }else{
                           $("#select4").val("上行流量");
                           //左中 变 折线+柱状图
                            $(".contain .left .Lcenter1").hide();
                            $(".contain .left .Lcenter2").show();
                            zhu2(select3,datatime,LC_UserCount);
                            //左下变折线图
                            $(".contain .left .Lbottom1").hide();
                            $(".contain .left .Lbottom2").show();
                            zhe2(select3,datatime,dataTv,dataPage);
                            //右中折线图：
                            zhe(select3,'上行流量',datatime,RightCenterYdataUp);
                            tmpRightCenter.select2=select3;    //存储右中数组的 第一个变量[大标题]
                            tmpRightCenter.select4='上行流量';    //存储右中数组的 第一个变量[副标题]
                            tmpRightCenter.datatime=datatime;    //时间
                            tmpRightCenter.dataY=RightCenterYdataUp;    //y数据

                }

            }
    //5s自动刷新的 计时器：
       function jishiqi(){
           //左中 柱状图
           if(tmpLeftCenter!=null){
               zhu(tmpLeftCenter,tmpLeftCenter_Xdata,tmpLeftCenter_Ydata);
           }
           //右中折线图：
           if(tmpRightCenter.select2!=null&&tmpRightCenter.select4!=null){
               zhe(tmpRightCenter.select2,tmpRightCenter.select4,tmpRightCenter.datatime,tmpRightCenter.dataY);
           }
       }
       jishiqi();
       setInterval(jishiqi,5000);
    //3s 左下滑动：
       function jishiqi2(){
           if(tmpHuadong!=null){
               Lbottom(tmpHuadong);
           }
       }
       jishiqi2();
       setInterval(jishiqi2,3000);
            // function aa(){
            //     if(tmp!=null){
            //         zhe2(tmp);
            //         zhu2(tmp);
            //     }
            // }
            // aa();
            // setInterval(aa,5000);
     //=============图表==================================================
    //左中 柱状图：
         function zhu(aa,Xdata,Ydata){
             createcharts.chart2(aa,Xdata,Ydata);
         }
    //左中 变 折线+柱状 图：
        function zhu2(select3,datatime,LC_UserCount){
                createcharts.chart4(select3,datatime,LC_UserCount);
         }

    //左下 变 折线图:
         function zhe2(select3,datatime,dataTv,dataPage) {
             createcharts.chart3(select3,datatime,dataTv,dataPage);
         }

    //右中 折线图：
        function zhe(select3,select4,datatime,dataY){
            createcharts.chart1(select3,select4,datatime,dataY);
        }

        //setInterval(aa,5000);
});