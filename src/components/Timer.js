import React from 'react';

class Timer extends React.Component{
	state ={
		time : '',
		milSec : '00:00:00',
    play : true,
    logo : [
      (<i className="fas fa-play"></i>)
    ],
    bgc : true,
    bgColor: 'green',
    hh : 0,
    mm : 0,
    ss : 0
	}

  getTime = (e) => {
    let val = e.target.value;
  	this.setState((state,props)=>({
  		time : val,
  		milSec : this.getFormatedTime(val)
  	})
    );
  }

  getFormatedTime = (num) => {
  	let number = Number.parseInt(num, 10);
  	let h = Math.floor(number / 3600);
    let m = Math.floor(number % 3600 / 60);
    let s = Math.floor(number % 3600 % 60);
    // let ms = Math.floor(number.getMilliseconds());

    let hDisplay = h > 0 ? h  : "00";
    let mDisplay = m > 0 ? m  : "00";
    let sDisplay = s > 0 ? s  : "00";
    // let msDisplay = s > 0 ? ms : "00"  :${msDisplay};
    this.setState((state,props)=>({
      hh : hDisplay,
      mm : mDisplay,
      ss : sDisplay
    }));
    return `${hDisplay}:${mDisplay}:${sDisplay}`; 
  }

  

  countDown = (e) => {
    if(this.state.play === true) {
      this.count = setInterval(this.ticTok,1000);
    } else {
      clearInterval(this.count);
    }
  
  	if(!this.state.play) {
      let currentLogo = this.state.logo;
      currentLogo[0] = (<i className="fas fa-play"></i>);
      this.setState((state,props) => ({
        logo: currentLogo
      }),()=>{
        this.setState((state,props) => ({
        play: true
        })
        );
      }
      );

  	} else {

      let currentLogo = this.state.logo;
      currentLogo[0] = (<i className="fas fa-square"></i>);
      this.setState((state,props)=>({
      logo: currentLogo
      }),()=>{
        this.setState((state,props)=>({
        play: false
        })
        );
      }
      );
  	}

      // for backgroundColor changing 
    if(!this.state.bgc) {
      let currentBGC = this.state.bgColor;
      currentBGC = 'green';
      this.setState((state,props)=>({
        bgColor: currentBGC
      }),()=>{
        this.setState((state,props) => ({
        bgc : true
        })
        );
      }     
      );
      
    } else {
      let currentBGC = this.state.bgColor;
      currentBGC = 'red';
      this.setState((state,props)=>({
        bgColor: currentBGC
      }),()=>{
        this.setState((state,props)=>({
        bgc: false
        })
        );
      }   
      );
    }
  }

  ticTok = () => {
    let prevNum = this.state.time;
    let hh = this.state.hh;
    let mm = this.state.mm;
    let ss = this.state.ss;

    if(hh === 0 && mm === 0 && ss > 0 && ss <= 60) {
      console.log(ss - 1);
    } else if(hh === 0 && mm > 0 && mm <= 60 && ss > 0 && ss > 60) {
      console.log(mm - 1);
    } else if(hh > 0 && hh <= 60 && mm > 0 && mm > 60 && ss > 0 && ss > 60) {
      console.log(hh - 1)
    } 

    this.setState((state,props)=> ({
      time : prevNum - 1
    }),()=>{
      if(this.state.time <= 0) {
        clearInterval(this.count);
      }
    });
  }

  resetbtn = () => {
    this.setState((state,props)=>({
      time: '',
      milSec : '00:00:00'
    })
    );
  }

	render(){

    let backgroundColor = {
      backgroundColor : this.state.bgColor
    }
		return (
			<div className='wrap'>
				<div className='round'>
				  <div className='body'>
						<p><small>{this.state.milSec}</small></p>
						<input type="number" onChange={this.getTime} value={this.state.time}/>
					</div>
					<div className="footer">
						<button onClick={this.countDown}id='btn1' style={backgroundColor}>
              {this.state.logo[0]}
            </button>
						<button onClick={this.resetbtn} className='btn2'>
							<i className="fas fa-sync-alt"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Timer;