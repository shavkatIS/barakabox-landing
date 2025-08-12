import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useCartStore } from 'src/store/cart';
import { Text } from 'src/components/ui';

export function CartButton({ onPress }: { onPress?: () => void }) {
  const count = useCartStore((s) => s.getCount());
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
        <Text>Cart ({count})</Text>
      </View>
    </TouchableOpacity>
  );
}