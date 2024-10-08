import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from "expo-router";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

  };
  
  return (
    <SafeAreaView className="h=full">
      <ScrollView>
        <View className="w-full min-h-[95vh] justify-center px-4 my-6">
          <Text className="text-2xl text-black font-psemibold mt-10">
            Log in to Wellnest
          </Text>
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
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-black font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-sm font-psemibold text-secondary"
            >
              Sign Up
            </Link>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn