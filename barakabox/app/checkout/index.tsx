import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Text, Input, Button, Card } from 'src/components/ui';
import { useCartStore } from 'src/store/cart';

export default function CheckoutScreen() {
  const clear = useCartStore((s) => s.clear);
  const total = useCartStore((s) => s.getTotal());
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const placeOrder = () => {
    if (!address.trim()) {
      Alert.alert('Address required', 'Please provide a delivery address.');
      return;
    }
    clear();
    Alert.alert('Order placed', 'Your fresh groceries are on the way!');
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Card>
        <Text weight="semibold" style={{ fontSize: 18 }}>Delivery details</Text>
        <Input placeholder="Address" value={address} onChangeText={setAddress} style={{ marginTop: 12 }} />
        <Input placeholder="Note (optional)" value={note} onChangeText={setNote} style={{ marginTop: 8 }} />
        <Text style={{ marginTop: 12 }}>Total: ${total.toFixed(2)}</Text>
        <Button title="Place order" onPress={placeOrder} style={{ marginTop: 12 }} />
      </Card>
    </View>
  );
}