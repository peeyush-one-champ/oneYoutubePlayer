import {
    HIDE_MINIPLAYER,
    REMOVE_VIDEO_METADATA,
    SHOW_MINIPLAYER,
    UPDATE_VIDEO_METADATA,
} from '../actionTypes';

export const updateVideoMetaData = payload => dispatch => {
    return dispatch({ type: UPDATE_VIDEO_METADATA, payload });
};

export const removeVideoMetaData = () => dispatch => {
    return dispatch({ type: REMOVE_VIDEO_METADATA });
};

export const showMiniPlayer = () => dispatch => {
    return dispatch({ type: SHOW_MINIPLAYER });
};

export const hideMiniPlayer = () => dispatch => {
    return dispatch({ type: HIDE_MINIPLAYER });
};
