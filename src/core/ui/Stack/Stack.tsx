import React, { FC, ReactNode } from 'react';
import { ViewProps } from 'react-native';

import * as S from './Stack.styled';

import Spacer from '../Spacer';

type StackProps = ViewProps & {
  spacing?: number;
  children: ReactNode[];
  fullWidth?: boolean;
  width?: number | string;
  fullHeight?: boolean;
  height?: number | string;
};

const Stack: FC<StackProps> = ({
  children,
  spacing = 0,
  fullWidth = false,
  width,
  fullHeight = false,
  height,
}) => {
  return (
    <S.StackContainer
      fullWidth={fullWidth}
      width={width}
      fullHeight={fullHeight}
      height={height}>
      {children?.map((element, index) => (
        <React.Fragment key={index}>
          {element}
          {index !== children.length - 1 && <Spacer spacing={spacing} />}
        </React.Fragment>
      ))}
    </S.StackContainer>
  );
};

export default Stack;
