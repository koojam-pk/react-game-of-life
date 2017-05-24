import { CELL_ALIVE, BOARD_RESIZE, BOARD_SPEED,
        STATUS_TICK, STATUS_PLAY, STATUS_PAUSE, STATUS_CLEAR
    } from '../constants/actionTypes';

import { makeGrid, checklifeState } from '../misc';

export const DEFAULT_GRID_HEIGHT = 30;
export const DEFAULT_GRID_WIDTH = 50;

const initialState = {
    setting: {  gridSize: {height: DEFAULT_GRID_HEIGHT, width: DEFAULT_GRID_WIDTH }},
    control: {timerId: null, isPlaying: false, speed: 100, prevSpeed:null}
};

export function boardReducer(state=makeGrid(initialState.setting.gridSize), action) {
    switch (action.type) {
        case CELL_ALIVE:
            let board = state.slice(0);
            let cell = board[action.location.r][action.location.c];
            cell.status = !cell.status;
            cell.newBorn = !cell.newBorn;
            return board;
        case BOARD_RESIZE:
            initialState.setting.gridSize = Object.assign({}, initialState.setting.gridSize, action.payload);
            state = makeGrid(action.payload);
            return state;
        case STATUS_TICK:
            state = checklifeState(state.slice(0));
            return state;
        case STATUS_CLEAR:
            console.log(initialState);
            state = makeGrid(initialState.setting.gridSize, true);
            return state;
    default:
      return state;
  }
}

export function counterReducer(state=0, action) {
    switch(action.type) {
        case STATUS_TICK:
            return state + 1;
        case STATUS_CLEAR:
            return 0;
        case STATUS_PAUSE:
            return state;
        default:
            return state;
    }
}

export function controlReducer(state=initialState.control, action ){
    let control = initialState.control;
    switch (action.type) {
        case BOARD_SPEED:
            control.prevSpeed = control.speed;
            control.speed = action.payload
            initialState.control = Object.assign({}, initialState.control, control);
            state = initialState.control;
            return state;
        case STATUS_PLAY:
            control.timerId = action.timerId;
            control.prevSpeed = control.speed;
            control.isPlaying = true;
            initialState.control = Object.assign({}, initialState.control, control);
            state = initialState.control;
            return state;
        case STATUS_PAUSE:
            control.timerId = action.timerId;
            //control.prevSpeed = control.speed;
            control.isPlaying = false;
            initialState.control = Object.assign({}, initialState.control, control);
            state = initialState.control;
            return state;
        case STATUS_CLEAR:
            control.timerId = null;
            control.isPlaying = false;
            initialState.control = Object.assign({}, initialState.control, control);
            state = initialState.control;
            return state;
        default:
            return state;
    }
}
