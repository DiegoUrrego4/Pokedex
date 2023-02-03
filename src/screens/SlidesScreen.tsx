import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useContext} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {fadeIn, opacity} = useAnimation();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);
  const renderItem = (item: Slide) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image source={item.img} style={styles.slideImage} />
        <Text style={{...styles.slideTitle, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.slideSubtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...styles.pagination, backgroundColor: colors.primary}}
        />

        {isVisible.current && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              style={{...styles.button, backgroundColor: colors.primary}}
              activeOpacity={0.8}
              onPress={() => {
                if (isVisible.current) {
                  navigation.navigate('Home' as never);
                }
              }}>
              <Text style={styles.buttonText}>ENTRAR</Text>
              <Icon name="chevron-forward-outline" size={30} color="white" />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  renderItemContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  slideTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  slideSubtitle: {
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
