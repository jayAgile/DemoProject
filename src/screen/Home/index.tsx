/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './style';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function AppScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {t, i18n} = useTranslation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onHandleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <View style={{marginBottom: 10}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            alignItems: 'flex-start',
          }}>
          <Button
            title="Translate to french"
            onPress={() => onHandleLanguageChange('fr')}
          />
          <Button
            title="Translate to English"
            onPress={() => onHandleLanguageChange('en')}
          />
          <Section title={t('STEP_ONE')}>
            {t('EDIT')} <Text style={styles.highlight}> {t('FILE_NAME')}</Text>
            {t('TO_CHANGE_SCREEN')}
          </Section>
          <Section title={t('DEBUG')}></Section>
          <Section title={t('DEBUG')}></Section>
          <Section title={t('LEARN_MORE')}>{t('READ_DOCS')}</Section>
        </View>
      </ScrollView>
    </View>
  );
}

export default AppScreen;
