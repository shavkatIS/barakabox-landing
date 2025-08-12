import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from 'src/api/products';
import { Text, Button, Card } from 'src/components/ui';
import { theme } from 'src/theme';
import { useCartStore } from 'src/store/cart';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: product } = useQuery({ queryKey: ['product', id], queryFn: () => fetchProductById(id!), enabled: !!id });
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return null;
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Card>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text weight="semibold" style={{ fontSize: 20, marginTop: 12 }}>{product.name}</Text>
        <Text style={{ color: theme.colors.muted, marginTop: 4 }}>
          ${product.price.toFixed(2)} {product.unit ? `/${product.unit}` : ''}
        </Text>
        {product.description ? (
          <Text style={{ marginTop: 8 }}>{product.description}</Text>
        ) : null}
        <Button title="Add to cart" onPress={() => addItem(product)} style={{ marginTop: 12 }} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
  },
});