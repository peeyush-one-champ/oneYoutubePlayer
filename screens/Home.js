import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const videos = [
    {
        uid: 'bltc38d32876411a9f9',
        title: "Feature | Aung La N Sang's Unprecedented Rise",
        description:
            'Two-division ONE World Champion Aung La N Sang is a national icon. The Myanmar megastar is the nation’s first ever World Champion and continues to serve as an inspirational figure to his fellow countrymen through his unprecedented feats inside the cage. “The Burmese Python” will now look to add another impressive accolade — becoming the first man to defeat Lebanese juggernaut Mohammad Karaki, as he defends his middleweight World Title at ONE: PURSUIT OF GREATNESS in Yangon.',
        slug: 'one-feature-aung-la-n-sang-s-unprecedented-rise',
        platform: 'youtube',
        video_id: 'niMrvNHC3Bs',
        url: 'https://www.youtube.com/watch?v=niMrvNHC3Bs',
        published_date: '2018-10-07T04:00:34.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/niMrvNHC3Bs/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'bltff667164cbd3f2e2',
        title: 'World Champion Spotlight | Aung La N Sang',
        description:
            'Aung La N Sang has experienced a meteoric rise in recent years, becoming a two-division ONE World Champion and the biggest international sports star in Myanmar’s history. “The Burmese Python” started his professional career in the U.S., but did not see his career take off until he joined ONE Championship in 2014. After an impressive winning streak, Aung La would capture both the Middleweight and Light Heavyweight World Titles, before defending his middleweight crown in one of the best bouts in ONE history.',
        slug: 'world-champion-spotlight-aung-la-n-sang',
        platform: 'youtube',
        video_id: 'rtqQINuOX3U',
        url: 'https://www.youtube.com/watch?v=rtqQINuOX3U',
        published_date: '2018-08-12T08:05:45.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/rtqQINuOX3U/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt829abfa72ac5d58a',
        title: "VLOG | Aung La N Sang's Tokyo Training Camp",
        description:
            'Follow two-division ONE World Champion Aung La N Sang on one of his training days for his upcoming World Title rematch against Ken Hasegawa at ONE: A NEW ERA. “The Burmese Python” hits the weights, works his cardio, and tightens up his striking and grappling games in this behind-the-scenes look at his preparation at Hard Knocks 365 gym in Florida.',
        slug: 'one-vlog-aung-la-n-sang-s-tokyo-training-camp',
        platform: 'youtube',
        video_id: 'YDnIUJNZTSU',
        url: 'https://www.youtube.com/watch?v=YDnIUJNZTSU',
        published_date: '2019-03-09T11:01:17.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/YDnIUJNZTSU/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'bltc77d782b256a849f',
        title: '2018 ONE World Champion | Aung La N Sang',
        description:
            'Two-division ONE World Champion Aung La N Sang is without a doubt the biggest martial arts star to come out of Myanmar. Having competed in three thrilling World Title bouts this year, “The Burmese Python” is coming off an incredible 2018 which saw him retain his undefeated record on home soil. Though he has conquered two of the biggest divisions in ONE, the Myanmar icon refuses to rest on his laurels as he serves to be an inspirational figure to his fellow countrymen.',
        slug: '2018-one-world-champion-aung-la-n-sang',
        platform: 'youtube',
        video_id: 'Dte2QKqR8dk',
        url: 'https://www.youtube.com/watch?v=Dte2QKqR8dk',
        published_date: '2018-12-19T12:53:55.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/Dte2QKqR8dk/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt2cacf3fb2960a77f',
        title: "ONE VLOG | Aung La N Sang's Training Camp",
        description:
            'The training camp before every bout is never easy, and no one understands this better than two-division ONE World Champion Aung La N Sang. Going through the daily grind of cardio training, strength building, and eating right requires discipline and sacrifice, but “The Burmese Python” is still able to maintain a healthy work-life balance. The Myanmar icon returns to his homeland to defend his ONE Middleweight World Title against undefeated Lebanese juggernaut Mohammad Karaki at ONE: PURSUIT OF GREATNESS in Yangon.',
        slug: 'one-vlog-aung-la-n-sang-s-training-camp',
        platform: 'youtube',
        video_id: '6RmKkvNh6-w',
        url: 'https://www.youtube.com/watch?v=6RmKkvNh6-w',
        published_date: '2018-10-20T09:17:45.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/6RmKkvNh6-w/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blta70c909a459f2f27',
        title: 'Feature | Model World Champion Aung La N Sang',
        description:
            'Two-division ONE World Champion Aung La N Sang has grown as an athlete and a role model as he\'s made his climb to the top of the martial arts world. Whether he is in or out of competition, the Myanmar hero stays busy giving back to his local community and serving as an inspirational figure to his fans across the globe. At ONE: SPIRIT OF A WARRIOR in Yangon, "The Burmese Python" will look to defend his ONE Middleweight World Title for the first time against Japanese World Champion Ken Hasegawa.',
        slug: 'one-feature-model-world-champion-aung-la-n-sang',
        platform: 'youtube',
        video_id: 'MKUni7yQh7M',
        url: 'https://www.youtube.com/watch?v=MKUni7yQh7M',
        published_date: '2018-06-29T04:10:15.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/MKUni7yQh7M/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt4b7a7084b21cc79f',
        title: "ONE Highlights | Aung La N Sang's Amazing Achievements",
        description:
            "Myanmar's first ever World Champion, Aung La N Sang, will be defending his middleweight World Title against DEEP Megaton World Champion Ken Hasegawa at ONE: SPIRIT OF A WARRIOR in Yangon. Before the world's most exciting martial arts action returns to the home soil of \"The Burmese Python\" on 29 June, let's run down the incredible accomplishments of ONE's reigning Middleweight and Light Heavyweight World Champion inside the ONE cage.",
        slug: 'one-highlights-aung-la-n-sang-s-amazing-achievements',
        platform: 'youtube',
        video_id: 'ULdy0XmIK2w',
        url: 'https://www.youtube.com/watch?v=ULdy0XmIK2w',
        published_date: '2018-06-11T04:00:27.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/ULdy0XmIK2w/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt49de35c4ed419207',
        title: 'ONE Championship Promo  January Contest Entry -You tube',
        description: 'ONE Championship Promo   January Contest Entry -You tube',
        slug: 'one-championship-promo-january-contest-entry-you-tube',
        platform: 'youtube',
        video_id: 'vDjdnAIUMAo',
        url: 'https://www.youtube.com/watch?v=vDjdnAIUMAo',
        published_date: '2021-02-11T10:30:48Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/vDjdnAIUMAo/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt33218ff0756d375c',
        title: 'Kids Ask | Aung La N Sang',
        description:
            'Two-division ONE World Champion Aung La N Sang is put under the spotlight to answer a few fun questions from martial artists of the next generation. How did Aung La get his two World Championship belts? Why does he slap his arm before a bout starts? Stay tuned as “The Burmese Python” answers all these questions and more!',
        slug: 'kids-ask-aung-la-n-sang',
        platform: 'youtube',
        video_id: '85DyoJ2W-1o',
        url: 'https://www.youtube.com/watch?v=85DyoJ2W-1o',
        published_date: '2018-12-18T13:01:07.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/85DyoJ2W-1o/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'bltcbcbeb05ed3c22da',
        title: "Feature | Aung La N Sang's Biggest Threat",
        description:
            'Two-division ONE World Champion Aung La N Sang believes Japanese World Champion Ken Hasegawa is his most dangerous opponent yet, as he is a submission specialist with knockout power. Hasegawa also sports an impressive record of 16-2, including 10 first-round finishes. The two middleweight juggernauts will face off at ONE: SPIRIT OF A WARRIOR in Yangon.',
        slug: 'one-feature-aung-la-n-sang-s-biggest-threat',
        platform: 'youtube',
        video_id: 'RwULpLUrCLA',
        url: 'https://www.youtube.com/watch?v=RwULpLUrCLA',
        published_date: '2018-06-24T08:02:21.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/RwULpLUrCLA/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt06930e55d450b163',
        title: "Feature | Aung La N Sang's Incredible Home Crowd Support",
        description:
            'Two-division ONE World Champion Aung La N Sang has made history twice at Thuwunna Indoor Stadium in Yangon, winning both of his World Titles in front of the proud people of Myanmar. The atmosphere is electric, and the crowd support deafening, each time "The Burmese Python" steps into the arena. The Myanmar national icon will look to keep motivating his countrymen when he defends his ONE Middleweight World Title against Japan\'s Ken Hasegawa at ONE: SPIRIT OF A WARRIOR.',
        slug: 'one-feature-aung-la-n-sang-s-incredible-home-crowd-support',
        platform: 'youtube',
        video_id: 'Ih_ywPk2YVw',
        url: 'https://www.youtube.com/watch?v=Ih_ywPk2YVw',
        published_date: '2018-06-27T04:18:14.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/Ih_ywPk2YVw/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'bltdaa2b516d772d91d',
        title: "ONE Feature | Aung La N Sang's Gift Of Fatherhood",
        description:
            'Aung La N Sang and his son, Aung De, share in amazing experiences with their family and friends in Myanmar. The Burmese hero feels a strong sense of pride seeing Aung De completely immerse himself into the local culture, causing him to reminisce about his own childhood. At ONE: SPIRIT OF A WARRIOR in Yangon, the proud father and two-division ONE World Champion will face the toughest test of his career in Japanese World Champion Ken Hasegawa.',
        slug: 'one-feature-aung-la-n-sangs-gift-of-fatherhood',
        platform: 'youtube',
        video_id: 'kRW5hh08-Qo',
        url: 'https://www.youtube.com/watch?v=kRW5hh08-Qo',
        published_date: '2018-06-21T03:57:32.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/kRW5hh08-Qo/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt4b7a7084b21cc79f',
        title: "ONE Highlights | Aung La N Sang's Amazing Achievements",
        description:
            "Myanmar's first ever World Champion, Aung La N Sang, will be defending his middleweight World Title against DEEP Megaton World Champion Ken Hasegawa at ONE: SPIRIT OF A WARRIOR in Yangon. Before the world's most exciting martial arts action returns to the home soil of \"The Burmese Python\" on 29 June, let's run down the incredible accomplishments of ONE's reigning Middleweight and Light Heavyweight World Champion inside the ONE cage.",
        slug: 'one-highlights-aung-la-n-sang-s-amazing-achievements',
        platform: 'youtube',
        video_id: 'ULdy0XmIK2w',
        url: 'https://www.youtube.com/watch?v=ULdy0XmIK2w',
        published_date: '2018-06-11T04:00:27.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/ULdy0XmIK2w/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt7c9982a2eb3e0ac7',
        title: "ONE Highlights | Aung La N Sang's Two-Division Dominance",
        description:
            "ONE Middleweight and Light Heavyweight World Champion Aung La N Sang will be defending his middleweight belt against Japanese warrior Ken Hasegawa at ONE: SPIRIT OF A WARRIOR in Yangon. Before an unforgettable evening of martial arts action on 29 June, let's take a look back at the Burmese hero's crowning moments inside the ONE cage.",
        slug: 'one-highlights-aung-la-n-sang-s-two-division-dominance',
        platform: 'youtube',
        video_id: 'ypgQhwIo3wA',
        url: 'https://www.youtube.com/watch?v=ypgQhwIo3wA',
        published_date: '2018-06-10T03:59:53.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/ypgQhwIo3wA/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt47ce037745f3612b',
        title: "Feature | Why Ken Hasegawa Is Aung La N Sang's Toughest Test",
        description:
            'ONE Middleweight World Title challenger Ken Hasegawa represents the stiffest challenge in the career of two-division ONE World Champion Aung La N Sang. The top-ranked Japanese middleweight owns an outstanding professional record of 16-2, with all 10 of his stoppage victories coming in the first round. Against Hasegawa, "The Burmese Python" will have to be wary of his opponent\'s bout-ending power shots and world-class submission skills.',
        slug: 'one-feature-why-ken-hasegawa-is-aung-la-n-sang-s-toughest-test',
        platform: 'youtube',
        video_id: 'ceJvDRkzNto',
        url: 'https://www.youtube.com/watch?v=ceJvDRkzNto',
        published_date: '2018-06-16T11:01:54.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/ceJvDRkzNto/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blte32a213a8f188d4b',
        title: 'ONE VLOG | Event Week - ONE: SPIRIT OF A WARRIOR',
        description:
            'Two-division ONE World Champion Aung La N Sang and Japanese World Champion Ken Hasegawa gear up for Friday\'s blockbuster main event for ONE: SPIRIT OF A WARRIOR in Yangon, Myanmar. "The Burmese Python" gets in some last-minute training to make sure he\'s sharp for his first ONE Middleweight World Title defense. Meanwhile, a calm and collected Hasegawa enjoys a nice meal with his team before he crosses paths with the World Champion at a pre-event press conference.',
        slug: 'one-vlog-event-week-one-spirit-of-a-warrior',
        platform: 'youtube',
        video_id: 'MFRvfcWGiuM',
        url: 'https://www.youtube.com/watch?v=MFRvfcWGiuM',
        published_date: '2018-06-28T13:26:40.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/MFRvfcWGiuM/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt2cacf3fb2960a77f',
        title: "ONE VLOG | Aung La N Sang's Training Camp",
        description:
            'The training camp before every bout is never easy, and no one understands this better than two-division ONE World Champion Aung La N Sang. Going through the daily grind of cardio training, strength building, and eating right requires discipline and sacrifice, but “The Burmese Python” is still able to maintain a healthy work-life balance. The Myanmar icon returns to his homeland to defend his ONE Middleweight World Title against undefeated Lebanese juggernaut Mohammad Karaki at ONE: PURSUIT OF GREATNESS in Yangon.',
        slug: 'one-vlog-aung-la-n-sang-s-training-camp',
        platform: 'youtube',
        video_id: '6RmKkvNh6-w',
        url: 'https://www.youtube.com/watch?v=6RmKkvNh6-w',
        published_date: '2018-10-20T09:17:45.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/6RmKkvNh6-w/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'blt92f5f3a52ce35927',
        title: 'Feature | Aung La N Sang Is The Hero Myanmar Deserves',
        description:
            'Though he left Myanmar to further his studies, Aung La N Sang vowed to one day return home and change the lives of the next generation. Little did he know, his newfound passion in martial arts would help him unite a nation. Competing in front of his fellow countrymen in Yangon, “The Burmese Python” would go on to make history and become a two-division ONE World Champion. The Myanmar icon intends to use his platform to further inspire his compatriots when he takes on Japanese juggernaut Ken Hasegawa in an epic rematch for the ONE Middleweight World Title at ONE: A NEW ERA in Tokyo.',
        slug: 'one-feature-aung-la-n-sang-is-the-hero-myanmar-deserves',
        platform: 'youtube',
        video_id: 'aDXFHwkIuzU',
        url: 'https://www.youtube.com/watch?v=aDXFHwkIuzU',
        published_date: '2019-02-13T13:01:19.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/aDXFHwkIuzU/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
    {
        uid: 'bltb4b79dc0481d66c4',
        title: 'Martial Arts Minute | 26 June 2018',
        description:
            'ONE Middleweight World Title contender Ken Hasegawa suffered a debilitating injury earlier in his career, leaving him feeling hopeless and uncertain about his future in martial arts. However, through the power of friendship, Hasegawa was able to get through this rough patch in his life and become a World Champion athlete in Japan. At ONE: SPIRIT OF A WARRIOR, he will take on two-division ONE World Champion Aung La N Sang on his home turf of Yangon, Myanmar.',
        slug: 'martial-arts-minute-26-june-2018',
        platform: 'youtube',
        video_id: '2R7rFxBgkJM',
        url: 'https://www.youtube.com/watch?v=2R7rFxBgkJM',
        published_date: '2018-06-26T13:07:56.000Z',
        creatives: {
            thumbnails: {
                maxres: {
                    url: 'https://i.ytimg.com/vi/2R7rFxBgkJM/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                },
            },
        },
        locale: 'en-us',
    },
];

const HomeScreen = ({ navigation }) => {
    const handlePlayVideo = video => {
        navigation.navigate('WatchVideo', { video });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingVertical: 12 }}>
                {videos.map((video, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.videoRow}
                        onPress={() => handlePlayVideo(video)}
                    >
                        <Image
                            resizeMode="cover"
                            source={{
                                uri: video.creatives.thumbnails.maxres.url,
                            }}
                            style={{
                                height: 100,
                                width: 150,
                                borderRadius: 4,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 8,
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    fontWeight: '600',
                                    fontSize: 14,
                                    marginBottom: 12,
                                }}
                            >
                                {video.title}
                            </Text>
                            <Text
                                numberOfLines={3}
                                style={{ fontSize: 13, color: '#555555' }}
                            >
                                {video.description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    videoRow: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginBottom: 12,
    },
});

export default HomeScreen;
