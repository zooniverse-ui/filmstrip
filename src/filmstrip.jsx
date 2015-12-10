import React from 'react';
require('filmstrip.css'); 

export default class Filmstrip extends React.Component{

	constructor(props){
		super(props)
		this.state = { scrollPos: 0 }
		this.increment = parseInt(this.props.increment, 10)
	}

	adjustPos(increment){
		this.innerwidth = this.refs.strip.getBoundingClientRect().width
		this.viewportwidth = this.refs.viewport.getBoundingClientRect().width

		var newPos = this.state.scrollPos + increment;
		var offset = this.viewportwidth - this.innerwidth

		if(increment > 0)
			newPos = Math.min(newPos,0)

		if(increment < 0)
			newPos = Math.max(newPos, offset)

		this.setState({scrollPos: newPos})
	}

	componentDidMount(){
		this.refs.filmstrip.style.height = this.refs.strip.getBoundingClientRect().height + 'px'
	}

	render(){
		return <section className='filmstrip' ref='filmstrip'>
			<button className='prevNav navButton' onClick={this.adjustPos.bind(this,this.increment)}>&lt;</button>
			<div className='viewport' ref='viewport'>
				<div className='strip' ref='strip' style={{left: this.state.scrollPos}}>
					<div className='strip-item'>1</div>
					<div className='strip-item'>2</div>
					<div className='strip-item'>3</div>
					<div className='strip-item'>4</div>
					<div className='strip-item'>5</div>
					<div className='strip-item'>6</div>
					<div className='strip-item'>7</div>
					<div className='strip-item'>8</div>
					<div className='strip-item'>9</div>
					<div className='strip-item'>10</div>
					<div className='strip-item'>11</div>
					<div className='strip-item'>12</div>
					<div className='strip-item'>1</div>
					<div className='strip-item'>2</div>
					<div className='strip-item'>3</div>
					<div className='strip-item'>4</div>
					<div className='strip-item'>5</div>
					<div className='strip-item'>6</div>
					<div className='strip-item'>7</div>
					<div className='strip-item'>8</div>
					<div className='strip-item'>9</div>
					<div className='strip-item'>10</div>
					<div className='strip-item'>11</div>
					<div className='strip-item'>12</div>
				</div>
			</div>
			<button className='nextNav navButton' onClick={this.adjustPos.bind(this,-this.increment)}>&gt;</button>
		</section>
	}
}