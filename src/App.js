import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.jump = this.jump.bind(this);

  }


  jump(link){
    window.location.href = link;
  }

  render() {
    return (
      <div className="App">

    <section className="content" id="speed_s">

        <div className="item-s" id="51dai"  onClick={    this.jump.bind(this,"https://icash.baidu.com/cloan/operation/activity?activityName=channelBrand&amp;CH=jmall&amp;fr=jmall_list9")   } >
            <div className="loan-logo "><img src="51dai1514276452174.png" alt="a" /></div>
            <div className="loan-li">
                <p className="loan-t"><em>51人品贷</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">消费贷（纯线上、无抵押无担保）</p>
            </div>
        </div>

    </section>

    <section className="content" id="speed_s">

        <div className="item-s" id="51dai"  onClick={    this.jump.bind(this,"https://icash.baidu.com/cloan/operation/activity?activityName=channelBrand&amp;CH=jmall&amp;fr=jmall_list9")   } >
            <div className="loan-logo "><img src="51dai1514276452174.png" alt="a" /></div>
            <div className="loan-li">
                <p className="loan-t"><em>51人品贷</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">消费贷（纯线上、无抵押无担保）</p>
            </div>
        </div>

    </section>





      </div>
    );
  }
}

export default App;
