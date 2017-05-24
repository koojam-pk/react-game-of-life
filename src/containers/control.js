import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/button';
import { gamePlay, gameTick, gameClear, gamePause } from '../actions';

class Control extends Component {
    componentDidMount(){
        this.playPause = this.playPause.bind(this);
        this.playGame = this.playGame.bind(this);
        this.speedChanged = this.speedChanged.bind(this);

        this.playGame();
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.control.prevSpeed !== this.props.control.speed) {
          this.speedChanged();
      }
    }

    render() {
        return (
            <div className='row control-wrapper'>
                <div className='col col-3'></div>
                <div className='col col-2'>
                    <Button title={'Play'}
                        icon={'fa fa-play icon-wrapper'}
                        handleClick={() => this.playGame()} />{' '}
                </div>
                <div className='col col-2'>
                    <Button title={'Pause'}
                        icon={'fa fa-pause icon-wrapper'}
                        handleClick={() => this.playPause()} />{' '}
                </div>
                <div className='col col-2'>
                    <Button title={'Clear'}
                        icon={'fa fa-undo icon-wrapper'}
                        handleClick={() => this.playClear()} />
                </div>
            </div>
        );
    }

    playGame() {
        if (!this.props.control.isPlaying || this.props.control.timerId === undefined) {
            let timerId = setInterval(this.props.tick, this.props.control.speed);
            this.props.gamePlay(timerId);
        }
    }
    playPause() {
        if (this.props.control.isPlaying) {
            this.props.gamePause(this.props.control.timerId);
            clearInterval(this.props.control.timerId);
        }
    }
    playClear() {
        if (this.props.control.isPlaying || this.props.control.timerId !==undefined) {
            clearInterval(this.props.control.timerId);
            this.props.gameClear();
        }
    }
    speedChanged() {
        if (this.props.control.isPlaying) {
            clearInterval(this.props.control.timerId);
            let timerId = setInterval(this.props.tick, this.props.control.speed);
            this.props.gamePlay(timerId);
        }
    }
}
function mapStateToProps({ control }) {
    return { control };
}

function mapDispatchToProps(dispatch) {
    return {
        tick: () => dispatch(gameTick()),
        gamePlay: (timerId) => dispatch(gamePlay(timerId)),
        gamePause: (timerId) => dispatch(gamePause(timerId)),
        gameClear: () => dispatch(gameClear())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Control);
