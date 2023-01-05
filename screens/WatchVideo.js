import React from 'react';
import { useDispatch } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/elements';
import {
    ActivityIndicator,
    Dimensions,
    PixelRatio,
    StyleSheet,
    View,
} from 'react-native';

import { showMiniPlayer, updateVideoMetaData } from '../store/actions/player';

const { width } = Dimensions.get('window');

const WatchScreen = ({ route, navigation }) => {
    const { video } = route.params;
    const dispatch = useDispatch();
    const headerHeight = useHeaderHeight();

    React.useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {});
        const unsubscribeRemove = navigation.addListener('beforeRemove', () => {
            dispatch(showMiniPlayer());
        });

        return () => {
            unsubscribeFocus();
            unsubscribeRemove();
        };
    }, [navigation, dispatch]);

    React.useEffect(() => {
        dispatch(
            updateVideoMetaData({ ...video, headerHeight, isMiniPlayer: false })
        );
    }, [video, dispatch, headerHeight]);

    return (
        <View style={styles.container}>
            <View style={styles.loader}>
                <ActivityIndicator color={'#fedb00'} size={'large'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loader: {
        height: PixelRatio.roundToNearestPixel(width / (16 / 9)),
        width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
});

export default WatchScreen;
