import React, {memo, useRef} from 'react';
import {Animated, SafeAreaView, StatusBar, View} from 'react-native';
import {Constant} from '../../config';
import {COLORS, selectedTheme, SIZES} from '../../config/Themes';
import {NavigationDataTypes} from '../../models';
import RenderItems from './Renderitem';
import styles from './style';

const onBoardings = Constant.walkthrough;

const OnboardingScreen = (props: NavigationDataTypes) => {
  const {navigation} = props;
  const [completed, setCompleted] = React.useState(false);

  const flatlistRef = useRef<any | null>(null);

  const scrollToIndex = (data: any) => {
    flatlistRef.current.scrollToIndex({animated: true, index: data + 1});
  };

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeAllListeners();
  }, []);

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles(selectedTheme).dotsContainer}>
        <StatusBar backgroundColor={COLORS.additionalColor13} barStyle={'dark-content'} />
        {onBoardings.map((item, index) => {
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 17, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles(selectedTheme).dot,
                {
                  width: dotSize,
                  height: dotSize,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles(selectedTheme).container}>
      <View>
        <Animated.FlatList
          ref={flatlistRef}
          horizontal
          pagingEnabled={true}
          data={onBoardings}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => (
            <RenderItems
              item={item}
              navigation={navigation}
              nextdata={() => {
                scrollToIndex(item.id);
              }}
            />
          )}
          onScroll={e => scrollX.setValue(e.nativeEvent.contentOffset.x)}
        />
        <View style={styles(selectedTheme).dotsRootContainer}>
          {renderDots()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(OnboardingScreen);
