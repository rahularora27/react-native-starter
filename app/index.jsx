import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the HomePage!</Text>
            <Text style={{ fontWeight: 'semibold', color: 'blue' }}>Reading List App</Text>
            <Link href="/about" style={{ marginTop: 20, color: 'blue' }}> Go to About Page </Link>
            <Link href="/contact" style={{ marginTop: 20, color: 'blue' }}> Go to Contact Page </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});