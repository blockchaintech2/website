import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';










class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.jump = this.jump.bind(this);
    this.state = {
      username: '',
      posts: [],
    }
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
        console.log(posts);
      });
  }

  jump(e){
    console.log(e.target.getAttribute('data-url'))
    let link=e.target.getAttribute('data-url');
    window.location.href = link;
  }

  handleClick () {
    axios.get('https://api.github.com/users/maecapozzi').then(response => this.setState({username: response.data.name}))
  }

  render() {
    return (
      <div className="App">

    <section className="content" id="speed_s">

        <div className="item-s" id="51dai" data-url="https://web.u51.com/tregister/#/?id=7&amp;channel=wdpt_ssj " onClick={this.jump}>
            <div className="loan-logo "><img src="51dai1514276452174.png" /></div>
            <div className="loan-li">
                <p className="loan-t"><em>51人品贷</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">消费贷（纯线上、无抵押无担保）</p>
            </div>
        </div>
        {/* <div className="item-s" id="baiduyouqianhua2" data-url="https://icash.baidu.com/cloan/operation/activity?activityName=channelBrand&amp;CH=jmall&amp;fr=jmall_list9" onClick={this.jump.bind(this)}>
            <div className="loan-logo "><img src="baiduyouqianhua21513932879307.png" /></div>
            <div className="loan-li">
                <p className="loan-t"><em>百度·有钱花</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">大额现金贷，低息审批快</p>
            </div>
        </div>
        <div className="item-s" id="chaorenka" data-url="https://xbdapp.chainfin.com/loanApp/s/24067" onClick={this.jump.bind(this)}>
            <div className="loan-logo "><img src="chaorenka1519988681917.png" /></div>
            <div className="loan-li">
                <p className="loan-t"><em>超人卡</em><i className="icon-img "></i><i className="icon-img "></i></p>
                <p className="clear">1天到账，高至20万额度</p>
            </div>
        </div> */}

    </section>

<button className='button' onClick={this.handleClick}>
  Click Me
</button>    
<p>{this.state.username}</p>

      <div>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>






      </div>
    );
  }
}

export default App;
