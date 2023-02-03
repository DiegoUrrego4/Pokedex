import React, {useContext, useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  //   const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };

  return (
    <ScrollView
      //   style={{
      //     marginTop: refreshing ? top : 0,
      //   }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'orange']}
          // Configuraciones iOS:
          //   style={{backgroundColor: '#5856D6'}}
          //   tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
