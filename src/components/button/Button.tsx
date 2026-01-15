import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export const Button = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.99 : 1 }],
        },
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};
