import {
  GestureResponderEvent,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface RecipeCardBasic {
  item: any;
  onPress?: (event: GestureResponderEvent) => void;
}

const RecipeCardBasic = ({ item, onPress }: RecipeCardBasic) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        source={{ uri: `${item.image}` ?? '' }}
        style={styles.imageBackground}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecipeCardBasic;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  imageBackground: {
    width: 150,
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
