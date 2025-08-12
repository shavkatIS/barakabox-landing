import React from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from 'src/api/products';
import type { Product } from 'src/types';
import { Card, Text, Button } from 'src/components/ui';
import { theme } from 'src/theme';
import { useCartStore } from 'src/store/cart';

export default function HomeScreen() {
  const { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
  const addItem = useCartStore((s) => s.addItem);

  return (
    <FlatList
      contentContainerStyle={{ padding: 16, gap: 12 }}
      data={products ?? []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductRow product={item} onAdd={() => addItem(item)} />}
    />
  );
}

function ProductRow({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <Card>
      <View style={styles.row}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Link href={{ pathname: '/product/[id]', params: { id: product.id } }} asChild>
            <TouchableOpacity>
              <Text weight="semibold" style={{ fontSize: 16 }}>
                {product.name}
              </Text>
            </TouchableOpacity>
          </Link>
          <Text style={{ color: theme.colors.muted, marginTop: 4 }}>
            ${product.price.toFixed(2)} {product.unit ? `/${product.unit}` : ''}
          </Text>
          <Button title="Add" onPress={onAdd} style={{ marginTop: 8, alignSelf: 'flex-start' }} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
});