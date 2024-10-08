import { View, Text, ScrollView, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from "expo-router";
import { auth } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database } from '../../firebaseConfig'
import { ref, set } from 'firebase/database';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const createProfile = async (user) => {
    await set(ref(database, `users/${user.uid}`), {
      username: form.username, 
    });
  };

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
  

    setSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      if(userCredential.user){
        await createProfile(user);
        router.replace("/home");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h=full">
      <ScrollView>
        <View className="w-full min-h-[95vh] justify-center px-4 my-6">
          <Text className="text-2xl text-black font-psemibold mt-10">
            Sign Up to Wellnest
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Un"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-black font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-sm font-psemibold text-secondary"
            >
              Sign In
            </Link>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp