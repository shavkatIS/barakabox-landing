import React from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useCartStore } from 'src/store/cart';
import { Card, Text, Button } from 'src/components/ui';
import { theme } from 'src/theme';

export default function CartScreen() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.getTotal());

  const data = Object.values(items);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 16, gap: 12 }}
        data={data}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.row}>
              <Image source={{ uri: item.product.image }} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text weight="semibold" style={{ fontSize: 16 }}>{item.product.name}</Text>
                <Text style={{ color: theme.colors.muted, marginTop: 4 }}>
                  ${item.product.price.toFixed(2)} {item.product.unit ? `/${item.product.unit}` : ''}
                </Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity - 1)} style={styles.qtyBtn}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={{ width: 32, textAlign: 'center' }}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity + 1)} style={styles.qtyBtn}>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeItem(item.product.id)} style={[styles.qtyBtn, { marginLeft: 8 }]}>
                    <Text>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 40, color: theme.colors.muted }}>Your cart is empty</Text>}
      />
      {data.length > 0 && (
        <View style={{ padding: 16, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.colors.border }}>
          <Text weight="semibold" style={{ fontSize: 16 }}>Total: ${total.toFixed(2)}</Text>
          <Link href="/checkout" asChild>
            <Button title="Proceed to Checkout" style={{ marginTop: 12 }} />
          </Link>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12 },
  image: { width: 64, height: 64, borderRadius: 12 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyBtn: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
});