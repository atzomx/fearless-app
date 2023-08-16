import React, { FC } from 'react';
import { View } from 'react-native';

import { Avatar, Badge, Text } from '@core/ui';

import * as S from './ChatItem.style';

type ChatItemProps = {
  chatItem: {
    user: {
      avatar: string;
      name: string;
    };
    lastMessage: {
      message: string;
      timestamp: Date;
    };
    countNotRead: number;
  };
};

const ChatItem: FC<ChatItemProps> = ({
  chatItem: { user, lastMessage, countNotRead },
}) => {
  return (
    <View>
      <S.ContainerAvatar>
        <Avatar
          size="xlarge"
          source={{
            uri: user.avatar,
          }}
        />
      </S.ContainerAvatar>
      <S.ContainerName>
        <Text variant="button" color="secondary.dark" align="left">
          {user.name}
        </Text>
        <Text
          variant="subtitle2"
          color="secondary.dark"
          align="left"
          numberOfLines={2}>
          {lastMessage.message}
        </Text>
      </S.ContainerName>
      <S.ContainerTimeMessage>
        <Text variant="subtitle2" color="secondary.dark" align="left">
          {lastMessage.timestamp.getHours()}:
          {lastMessage.timestamp.getMinutes()}
        </Text>
      </S.ContainerTimeMessage>
      <S.ContainerBadge>
        <Badge value={countNotRead} color="secondary" max={9} />
      </S.ContainerBadge>
    </View>
  );
};

export default ChatItem;
