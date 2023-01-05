import React from 'react';
import moment from 'moment';
import Video from 'react-native-video';
import { AirplayButton } from 'react-airplay';
import { CastButton } from 'react-native-google-cast';
import { useDispatch, useSelector } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Slider } from '@miblanchard/react-native-slider';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {
    Dimensions,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import { getVideoURL } from '../services';
import { removeVideoMetaData } from '../store/actions/player';

const { width, height } = Dimensions.get('window');

const Player = () => {
    const dispatch = useDispatch();
    const playerRef = React.useRef(null);
    const sliderRef = React.useRef(null);
    const [info, setInfo] = React.useState({});
    const [oldUrl, setOldUrl] = React.useState('');
    const [muted, setMuted] = React.useState(false);
    const video = useSelector(state => state.player);
    const [paused, setPaused] = React.useState(false);
    const [currTime, setCurrTime] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const [totalTime, setTotalTime] = React.useState(0);
    const [fullscreen, setFullscreen] = React.useState(false);
    const [controlsVisible, setControlsVisible] = React.useState(true);

    const getVideo = url => {
        getVideoURL(url)
            .then(response => {
                setInfo(response.data?.info[0]);
                setLoading(false);
            })
            .catch(err => console.log(err));
    };

    React.useEffect(() => {
        if (video.url === '') {
            setInfo({});
        }

        if (video.url !== '' && oldUrl === '') {
            getVideo(video.url);
            setOldUrl(video.url);
        }

        if (video.url !== '' && oldUrl !== '' && video.url !== oldUrl) {
            getVideo(video.url);
            setOldUrl(video.url);
        }
    }, [video]);

    React.useEffect(() => {
        if (controlsVisible) {
            setTimeout(() => {
                setControlsVisible(false);
            }, 3000);
        }
    }, [controlsVisible]);

    const toggleControlsVisibility = () => {
        setControlsVisible(!controlsVisible);
    };

    const getFormattedTime = seconds => {
        let formattedTime = 0;
        seconds = parseInt(seconds, 10);
        const tempDuration = moment.duration(seconds, 'seconds');
        let h = tempDuration.hours();
        let m = tempDuration.minutes();
        let s = tempDuration.seconds();

        h = h > 9 ? h : `0${h}`;
        m = m > 9 ? m : `0${m}`;
        s = s > 9 ? s : `0${s}`;

        if (seconds <= 3599) {
            formattedTime = `${m}:${s}`;
        }

        if (seconds >= 3600) {
            formattedTime = `${h}:${m}:${s}`;
        }

        return formattedTime;
    };

    if (!info.url && loading) {
        return null;
    }

    return (
        <View
            style={
                video.isMiniPlayer
                    ? styles.miniPlayer
                    : fullscreen
                    ? styles.videoContainerFull
                    : [styles.videoContainer, { marginTop: video.headerHeight }]
            }
        >
            <Video
                muted={muted}
                paused={paused}
                ref={playerRef}
                pictureInPicture
                playWhenInactive
                allowsExternalPlayback
                source={{ uri: info.url }}
                posterResizeMode={'cover'}
                ignoreSilentSwitch={'ignore'}
                style={styles.backgroundVideo}
                onLoad={data => setTotalTime(data.duration)}
                poster={video.creatives.thumbnails.maxres.url}
                onEnd={() => {
                    setCurrTime(0);
                    setPaused(true);

                    if (video.isMiniPlayer) {
                        dispatch(removeVideoMetaData());
                    }
                }}
                onFullscreenPlayerDidDismiss={() => {
                    setFullscreen(false);
                }}
                onFullscreenPlayerWillPresent={() => {
                    setFullscreen(true);
                }}
                onProgress={({ currentTime }) => {
                    setCurrTime(parseInt(currentTime, 10));
                }}
                onStartShouldSetResponder={() => true}
                onResponderGrant={toggleControlsVisibility}
            />

            {!video.isMiniPlayer && controlsVisible && (
                <TouchableWithoutFeedback onPress={toggleControlsVisibility}>
                    <View style={styles.controlsContainer}>
                        <LinearGradient
                            colors={[
                                'rgba(0, 0, 0, 0.9)',
                                'rgba(0, 0, 0, 0.5)',
                                'rgba(0, 0, 0, 0.0)',
                            ]}
                            style={styles.topContainer}
                        >
                            <Text style={styles.title}>{video.title}</Text>
                            <View style={styles.topBtnContainer}>
                                <CastButton
                                    style={styles.castBtn}
                                    tintColor="#ffffff"
                                />
                                <AirplayButton
                                    prioritizesVideoDevices={true}
                                    tintColor={'#ffffff'}
                                    activeTintColor={'#fedb00'}
                                    style={styles.castBtn}
                                />
                            </View>
                        </LinearGradient>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                style={{ marginRight: 16 }}
                                onPress={() =>
                                    playerRef.current.seek(currTime - 30)
                                }
                            >
                                <MatIcon
                                    name="replay-30"
                                    size={40}
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    playerRef.current.seek(currTime - 10)
                                }
                            >
                                <MatIcon
                                    name="replay-10"
                                    size={40}
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginHorizontal: 16 }}
                                onPress={() => setPaused(!paused)}
                            >
                                <IonIcon
                                    name={paused ? 'ios-play' : 'ios-pause'}
                                    size={46}
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    playerRef.current.seek(currTime + 10)
                                }
                            >
                                <MatIcon
                                    name="forward-10"
                                    size={40}
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 16 }}
                                onPress={() =>
                                    playerRef.current.seek(currTime + 30)
                                }
                            >
                                <MatIcon
                                    name="forward-30"
                                    size={40}
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <LinearGradient
                            colors={[
                                'rgba(0, 0, 0, 0.0)',
                                'rgba(0, 0, 0, 0.7)',
                                'rgba(0, 0, 0, 0.9)',
                            ]}
                            style={styles.bottomContainer}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={styles.duration}>
                                    {getFormattedTime(currTime)}
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        marginHorizontal: 12,
                                    }}
                                >
                                    <Slider
                                        ref={sliderRef}
                                        minimumValue={0.0}
                                        maximumValue={totalTime}
                                        value={currTime}
                                        trackStyle={{ height: 3 }}
                                        thumbStyle={{
                                            width: 13,
                                            height: 13,
                                        }}
                                        thumbTintColor="#fedb00"
                                        minimumTrackTintColor="#fedb00"
                                        maximumTrackTintColor={'rgba(0,0,0,1)'}
                                        onValueChange={value => {
                                            setCurrTime(parseInt(value, 10));
                                            playerRef.current.seek(
                                                parseInt(value, 10)
                                            );
                                        }}
                                    />
                                </View>
                                <Text style={styles.duration}>
                                    {getFormattedTime(totalTime)}
                                </Text>
                            </View>
                            <View style={styles.topBtnContainer}>
                                <TouchableOpacity
                                    style={{ marginLeft: 10 }}
                                    onPress={() => setMuted(!muted)}
                                >
                                    <MatIcon
                                        name={
                                            muted ? 'volume-off' : 'volume-up'
                                        }
                                        size={20}
                                        color={muted ? '#ffffff' : '#fedb00'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginLeft: 10 }}
                                    onPress={() =>
                                        playerRef.current.presentFullscreenPlayer()
                                    }
                                >
                                    <MatIcon
                                        name="open-in-full"
                                        size={20}
                                        color={'#ffffff'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    miniPlayer: {
        width: 142.25,
        height: 100,
        paddingBottom: 20,
    },

    duration: {
        fontSize: 13,
        color: '#ffffff',
    },

    castBtn: {
        width: 24,
        height: 24,
        marginLeft: 12,
    },

    title: {
        fontSize: 16,
        color: '#ffffff',
        flex: 1,
    },

    videoContainer: {
        height: PixelRatio.roundToNearestPixel(width / (16 / 9)),
        width,
        position: 'absolute',
        backgroundColor: '#000000',
        top: 0,
        left: 0,
    },

    videoContainerFull: {
        width: height,
        height: width,
        position: 'absolute',
        backgroundColor: '#000000',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    backgroundVideo: {
        height: '100%',
        width: '100%',
    },

    controlsContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },

    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },

    topBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Player;
