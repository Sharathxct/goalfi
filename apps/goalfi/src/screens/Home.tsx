import { Text, TouchableOpacity, View } from "react-native";
import { useLoginWithEmail } from "@privy-io/expo";
function Home() {
  const {sendCode} = useLoginWithEmail();
  const handleLogin = async () => {
    try {
      const res = await sendCode({
        email: 'sharathxct@gmail.com',
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white font-bold text-2xl">
      <Text>Home screen</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
