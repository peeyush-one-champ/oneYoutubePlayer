import {
    HIDE_MINIPLAYER,
    REMOVE_VIDEO_METADATA,
    SHOW_MINIPLAYER,
    UPDATE_VIDEO_METADATA,
} from '../actionTypes';

const initialState = {
    creatives: { thumbnails: { maxres: { url: '' } } },
    description: '',
    locale: '',
    platform: '',
    published_date: '',
    slug: '',
    title: '',
    uid: '',
    url: '',
    video_id: '',
    headerHeight: 0,
    isMiniPlayer: false,
};

const playerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_VIDEO_METADATA:
            return {
                ...state,
                ...payload,
            };

        case REMOVE_VIDEO_METADATA:
            return {
                creatives: { thumbnails: { maxres: { url: '' } } },
                description: '',
                locale: '',
                platform: '',
                published_date: '',
                slug: '',
                title: '',
                uid: '',
                url: '',
                video_id: '',
                headerHeight: 0,
            };

        case SHOW_MINIPLAYER:
            return {
                ...state,
                isMiniPlayer: true,
            };

        case HIDE_MINIPLAYER:
            return {
                ...state,
                isMiniPlayer: false,
            };

        default:
            return {
                ...state,
            };
    }
};

export default playerReducer;
