import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { storage, STORAGE_KEYS } from '../lib/storage';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ─── Load both settings on mount ─────────────────────────────────────────
  useEffect(() => {
    const loadSettings = async () => {
      const storedNotifications = await storage.get(STORAGE_KEYS.NOTIFICATIONS);
      if (storedNotifications !== null) {
        setNotifications(storedNotifications === 'true');
      }

      const storedTheme = await storage.get(STORAGE_KEYS.THEME);
      if (storedTheme !== null) {
        setDarkMode(storedTheme === 'true');
      }
    };

    loadSettings();
  }, []);

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleToggle = async (value: boolean) => {
    setNotifications(value);
    await storage.set(STORAGE_KEYS.NOTIFICATIONS, String(value));
  };

  const handleDarkModeToggle = async (value: boolean) => {
    setDarkMode(value);
    await storage.set(STORAGE_KEYS.THEME, String(value));
  };

  // ─── UI ───────────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>

      <AppCard
        title="Notifications"
        subtitle="Receive push notifications"
        right={<Switch value={notifications} onValueChange={handleToggle} />}
      />

      <AppCard
        title="Dark Mode"
        subtitle="Use dark theme"
        right={<Switch value={darkMode} onValueChange={handleDarkModeToggle} />}
      />

      {/* Bonus: live storage indicator */}
      <Text style={styles.indicator}>Stored: {String(darkMode)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  indicator: {
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
    marginTop: 4,
  },
});
