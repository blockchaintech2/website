import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    <nav className="nav" id="nav">
        <div className="banner" id="banner"><img src="./贷款超市_files/banner_cj.png" width="100%"></div>
        <table id="navTable" className="nav_tab fixed" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td className="nav-m">
                        <a href="javascript:"></a>
                    </td>
                    <td><a href="https://www.cardniu.com/loan/wx/speed-loan.html?type=speedloan" className="long-tab" id="speed">极速推荐</a></td>
                    <td><a href="https://www.cardniu.com/loan/wx/lowinterest-loan.html?type=lowinterestloan" id="lowinterest" className="long-tab">低息贷款</a></td>
                    <td><a href="javascript:" id="common" className="actived long-tab">热门贷款</a></td>
                    <td className="nav-m">
                        <a href="javascript:"></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </nav>
    <section className="content" id="speed_s" style="margin-top: 188px;">
        <div className="item-s" id="suishoudai" data-url="">
            <div className="loan-logo "><img src="./贷款超市_files/suishoudai1500464486919.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>随手贷</em><i className="icon-img tj"></i><i className="icon-img "></i></p>
                <p className="clear">百种选择，匹配快，易通过</p>
            </div>
        </div>
        <div className="item-s" id="51dai" data-url="https://web.u51.com/tregister/#/?id=7&amp;channel=wdpt_ssj ">
            <div className="loan-logo "><img src="./贷款超市_files/51dai1514276452174.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>51人品贷</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">消费贷（纯线上、无抵押无担保）</p>
            </div>
        </div>
        <div className="item-s" id="baiduyouqianhua2" data-url="https://icash.baidu.com/cloan/operation/activity?activityName=channelBrand&amp;CH=jmall&amp;fr=jmall_list9">
            <div className="loan-logo "><img src="./贷款超市_files/baiduyouqianhua21513932879307.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>百度·有钱花</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">大额现金贷，低息审批快</p>
            </div>
        </div>
        <div className="item-s" id="chaorenka" data-url="https://xbdapp.chainfin.com/loanApp/s/24067">
            <div className="loan-logo "><img src="./贷款超市_files/chaorenka1519988681917.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>超人卡</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">1天到账，高至20万额度</p>
            </div>
        </div>
        <div className="item-s" id="renrendai" data-url="https://loan.renrendai.com/static/public/lp-dashboard.html?utm_source=JDPTQD&amp;utm_medium=JDPTQD_KN&amp;utm_campaign=CPA&amp;utm_content=20180413&amp;utm_term=1.0&amp;rrdorigin=09005000300060003 ">
            <div className="loan-logo "><img src="./贷款超市_files/renrendai1500863314688.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>人人贷</em><i className="icon-img tj"></i><i className="icon-img "></i></p>
                <p className="clear">放款快，高至10万额度</p>
            </div>
        </div>
        <div className="item-s" id="daihuan" data-url="https://loanshop.cardniu.com/xykdh/index.html?xykdhwd=remendaikuan">
            <div className="loan-logo "><img src="./贷款超市_files/daihuan1521684474604.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>信用卡代还</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">有信用卡就能借，多种选择还账单</p>
            </div>
        </div>
        <div className="item-s" id="weidai_2" data-url="https://static1.weidai.com.cn/static/fed/fed/h5.activity/carLoanPromotion/html/promotion.one.html?channelCode=KN001">
            <div className="loan-logo "><img src="./贷款超市_files/weidai_21521684447317.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>微贷网·车抵贷</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">高至50万，月利率低至0.55%</p>
            </div>
        </div>
        <div className="item-s" id="xinyidaiweidaikuan" data-url="http://open.boccfc.cn/index.php/open/pv?s=rhB39g7ZlS-31">
            <div className="loan-logo "><img src="./贷款超市_files/xinyidai1501672572124.png"></div>
            <div className="loan-li">
                <p className="loan-t"><em>新易贷·微贷款</em><i className="icon-img rm"></i><i className="icon-img "></i></p>
                <p className="clear">2万元额度</p>
            </div>
        </div>
    </section>

    <p id="J_tips" className="tips">是否能成功放款因您的资质而定，放款前不会向您收取任何费用</p>
      </div>
    );
  }
}

export default App;
