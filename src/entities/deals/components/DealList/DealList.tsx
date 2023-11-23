import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { makeStyles } from '@core/hooks';

import DealCard from '../DealCard';

export type Deal = {
  status: string;
  itemStatus: string;
  id: string;
  name: string;
  description: string;
  amount: string;
  dealer: string;
};

export type DealListProps = {
  deals: Deal[];
  onPressItem?: (deal: Deal) => void;
};

const DealList: FC<DealListProps> = ({ deals, onPressItem }) => {
  const styles = useStyles();
  return (
    <FlatList
      data={deals}
      contentContainerStyle={styles.list}
      scrollEnabled={false}
      decelerationRate="fast"
      snapToStart
      snapToEnd
      keyExtractor={(_, index) => index.toString()}
      scrollEventThrottle={16}
      renderItem={({ item }) => (
        <DealCard deal={item} onPress={() => onPressItem?.(item)} />
      )}
    />
  );
};

const useStyles = makeStyles(theme => ({
  list: {
    gap: theme.spacingSingle(2),
    padding: theme.spacingSingle(2),
  },
}));

export default DealList;
