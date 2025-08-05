import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Link href="/" style={{ marginTop: 20, color: "blue" }}> Go to Home Page </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
