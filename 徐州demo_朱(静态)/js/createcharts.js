  var createcharts={};//创建函数对象
  //创建折线图的函数：【右中】
        createcharts.chart1=function (select3,liuliang,datatime,dataY){
            $(function(){
                var chart1= echarts.init(document.getElementById('chart1'));
                var option = {
                    //backgroundColor:'rgba(178,220,245,0.4)',//背景色
                    color: ['#45c3c8'],
                    tooltip: {
                        trigger: 'axis'
                    },

                    title : {
                        text: select3+'流量趋势图',
                        textStyle: {
                            fontSize: 20,
                            fontWeight:'normal',
                            color:'#55e6de',           //标题颜色
                        },
                        x:'center',
                        subtext:liuliang,
                        subtextStyle: {
                            fontSize:16,
                            fontWeight:'normal',
                            color:'#fff',           //标题颜色
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        show : true,
                        x:'200',//下载的字体显示不全
                        // feature : {
                        //     //     mark : {show: true},
                        //     //     dataView : {show: true, readOnly: false},
                        //     magicType : {show: true, type: ['line', 'bar']},
                        //     //  restore : {show: true},
                        //     //     saveAsImage : {show: true}
                        // }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            name : '时间',
                            data:datatime,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#fff',   //x轴线颜色
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            // name : 'y/总量',
                            axisLabel : {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#fff',   //x轴线颜色
                                }
                            }
                        }
                    ],
                    series: [

                        {
                            name:'流量',
                            type:'line',
                            stack: '总量',
                            data:dataY
                        }
                    ]
                };
                chart1.setOption(option);
            });
        }
  //创建柱状图的函数：【左中】
         createcharts.chart2=function(select2,Xdata,Ydata){
            $(function(){
                var chart2= echarts.init(document.getElementById('chart2'));
                var option = {
                    //backgroundColor:'rgba(178,220,245,0.4)',//背景色
                    color: ['#3da5a1'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    title: {
                        text:select2+'电信使用人数统计',
                        textStyle: {
                            fontSize: 20,
                            fontWeight:'normal',
                            color:'#55e6de',            //标题颜色
                        },
                        x:'center'

                    },
                    grid: {  //图表的位置
                        left: '6%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data :Xdata,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff'   //x轴字体颜色
                                },
                                // interval:0
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#fff',   //x轴线颜色
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#fff',
                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'用户数',
                            type:'bar',
                            barWidth: '60%',
                            itemStyle:{
                                normal: {

                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            data:Ydata
                        }
                    ]
                };
                chart2.setOption(option);
            });
        }
  //创建 折线图的函数：【左下】
       createcharts.chart3=function (select3,datatime){
           $(function(){
               var chart3= echarts.init(document.getElementById('chart3'));
               var option = {
                   title : {
                       text: '不同小区优良变化图',
                       textStyle: {
                           fontSize: 20,
                           fontWeight:'normal',
                           color:'#55e6de'          //标题颜色
                       },
                       x:'center',
                       subtext:select3,
                       subtextStyle: {
                           fontSize:16,
                           fontWeight:'normal',
                           color:'#fff',           //标题颜色
                       },
                   },
                   //backgroundColor:'rgba(178,220,245,0.4)',
                   color: ['#20abc1','#6a6cc4'],
                   tooltip : {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['视频','网页'],
                       textStyle:{    //图例文字的样式
                           color:'#fff',
                           fontSize:12,
                       },
                       left:'center',
                       top:'90%'
                       // orient:'vertical',
                   },
                   toolbox: {
                       show : true,
                       // feature : {
                       //     mark : {show: true},
                       //     // dataView : {show: true, readOnly: false},
                       //     // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                       //     // restore : {show: true},
                       //     // saveAsImage : {show: true}
                       // }
                   },
                   calculable : true,
                   xAxis : [
                       {
                           type : 'category',
                           boundaryGap : false,
                           data :datatime,
                           axisLabel: {
                               show: true,
                               textStyle: {
                                   color: '#fff'
                               }
                           },
                           axisLine:{
                               lineStyle:{
                                   color:'#fff',   //x轴线颜色
                               }
                           }
                       },
                   ],
                   yAxis : [
                       {
                           type : 'value',
                           axisLabel: {
                               formatter: '{value}',
                               show: true,
                               textStyle: {
                                   color: '#fff'
                               }
                           },
                           axisLine:{
                               lineStyle:{
                                   color:'#fff',   //x轴线颜色
                               }
                           }
                       }
                   ],
                   series : [
                       {
                           name:'视频',
                           type:'line',
                           data:[1,0.2,0.3,0.5,0.6,0.4]
                       },
                       {
                           name:'网页',
                           type:'line',
                           data:[0.8,0.9,0.6,0.8,0.7,0.4]
                       }
                   ]
               };
               chart3.setOption(option);
           });
       }
  //创建 折线+柱状图 的函数：【左中】
  createcharts.chart4=function(select3,datatime){
      $(function(){
          var  option = {
              tooltip: {
                  trigger: 'axis'
              },
              title : {
                  text: '不同小区电信使用人数统计',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#55e6de',           //标题颜色
                  },
                  x:'center',
                  subtext:select3,
                  subtextStyle: {
                      fontSize:16,
                      fontWeight:'normal',
                      color:'#fff',           //标题颜色
                  },
              },
              grid:{
                  // x:25,
                  y:100,
                  x2:5,
                  y2:20,
                  borderWidth:1
              },
              xAxis: [
                  {
                      type: 'category',
                      data : datatime,
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#fff'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',   //x轴线颜色
                          }
                      }
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      // name: '水量/ml',
                      min: 0,
                      max: 250,
                      interval: 50,
                      axisLabel: {
                          formatter: '{value} '
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#fff'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#fff',   //x轴线颜色
                          }
                      }
                  }
              ],
              series: [
                  //柱状：
                  {center:[120,120],
                      name:'人数',
                      type:'bar',
                      /*设置柱状图颜色*/
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  // build a color map as your need.
                                  var colorList = ['#20abc1','#6a6cc4','#d453dc','#fa6ee0','#f49ac1','#f9ad81','#f6d16c','#bbf7a9','#86cbf7','#fff200','#a1d5f5'];
                                  return colorList[params.dataIndex]
                              },
                              /*信息显示方式*/
                              label: {
                                  show: true,
                                  position: 'top',
                                  formatter: '{b}\n{c}'
                              }
                          }
                      },
                      data:[50, 75, 100, 150, 200, 250]
                  },
                  //折线：
                  {
                      name:'折线',
                      type:'line',
                      itemStyle : {  /*设置折线颜色*/
                          normal : {
                              color:'#fff'
                          }
                      },
                      data:[50, 75, 100, 150, 200, 250]
                  }
              ]
          };
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('chart4'));
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);

      });
  }