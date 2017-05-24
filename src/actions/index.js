import { CELL_ALIVE, BOARD_SPEED, BOARD_RESIZE, STATUS_PLAY, STATUS_PAUSE, STATUS_TICK,
            STATUS_CLEAR, SPEED_CHANGED} from '../constants/actionTypes'

export function cellAlive(location) {
    return {
        type: CELL_ALIVE,
        location: location
    };
}

export function boardResize(value) {
    var size = {};

    if (value.indexOf("medium") > -1) {
            size.height = 50;
            size.width = 70;
    } else if (value.indexOf("large") > -1) {
            size.height = 80;
            size.width = 100;
    } else {
            size.height = 30;
            size.width = 50;
    }
    return {
        type: BOARD_RESIZE,
        payload: size
    };
}

export function boardSpeed(value) {
    var speed = undefined;
    if (value.indexOf("slow") > -1) {
        speed = 200;
    } else if (value.indexOf("fast") > -1) {
        speed = 50;
    } else {
        speed = 100;
    }
    return {
        type: BOARD_SPEED,
        payload: speed
    };
}

export function gamePlay(timerId) {
    return {
        type: STATUS_PLAY,
        timerId
    };
}
export function gamePause(timerId) {
    return {
        type: STATUS_PAUSE,
        timerId
    } ;
}
export function gameTick() {
    return {
        type: STATUS_TICK,
    };
}
export function gameClear() {
    return {
        type: STATUS_CLEAR
    }
}

export function gameSpeedChanged () {
    return {
        type: SPEED_CHANGED
    };
}
