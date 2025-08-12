import React from 'react';
import { View } from 'react-native';
import { Text, Button, Card } from 'src/components/ui';

export default function ProfileScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Text weight="semibold" style={{ fontSize: 18 }}>Welcome to Barakabox</Text>
        <Text style={{ marginTop: 8 }}>Sign in to view your orders and manage your profile.</Text>
        <Button title="Sign in" style={{ marginTop: 12, alignSelf: 'flex-start' }} />
      </Card>
    </View>
  );
}