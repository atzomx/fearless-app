import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { SearchIcon } from '@core/icons';

import * as S from './SearchBar.styled';

type SearchBarProps = TextInputProps;

const SearchBar: FC<SearchBarProps> = props => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.IconContainer>
        <SearchIcon width={18} height={18} color={theme.pallete.grey[400]} />
      </S.IconContainer>
      <S.Input {...props} placeholderTextColor={theme.pallete.grey[400]} />
    </S.Container>
  );
};

export default SearchBar;
