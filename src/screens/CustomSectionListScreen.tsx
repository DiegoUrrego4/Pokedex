import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle, ItemSeparator} from '../components';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'One Punch',
      'Kenshin',
      'Goku',
      'One Punch',
      'Kenshin',
      'Goku',
      'One Punch',
      'Kenshin',
      'Goku',
      'One Punch',
    ],
  },
];

export const CustomSectionListScreen = () => {
  const {
    theme: {colors, currentTheme},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={
          <HeaderTitle title={`Total de casas: ${casas.length}`} />
        }
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View
            style={{
              backgroundColor: currentTheme === 'light' ? 'white' : 'black',
            }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
