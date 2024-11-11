import {View, Text, Image, TextInput, TouchableOpacity, Pressable} from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import {StatusBar} from "expo-status-bar";
import {AntDesign, FontAwesome5, Fontisto, Octicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

export default function SignIn() {
    const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
        <View className="items-center">
            <Image source={require('../assets/images/favicon.png')}  resizeMode='contain' style={{height: hp(15)}} />
        </View>
        <View style={{paddingHorizontal: wp(11) }} className="gap-5">
        {/* <View className="gap-10"> */}
            <View className="gap-4">
                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <Octicons name="mail" size={hp(2.7)} color="gray" />
                    <TextInput style={{width: hp(2)}} className="flex-1 font-semibold text-neutral-700" placeholder="Email address" placeholderTextColor={'gray'}/>
                </View>
                <View className="gap-3">
                    <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                        <Octicons name="lock" size={hp(2.7)} color="gray" />
                        <TextInput style={{width: hp(2)}} className="flex-1 font-semibold text-neutral-700" placeholder="Password" placeholderTextColor={'gray'}/>
                    </View>
                    <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot password?</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{height: hp(5), width:(90), backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="caretright" size={hp(2)} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{paddingTop: hp(10), paddingHorizontal: wp(11) }} className="gap-5">
            <TouchableOpacity style={{height: hp(6.5), backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={()=> router.push('signUp')}>
                <Text style={{ fontSize: hp(2), color: '#ffffff', fontWeight: 'normal', letterSpacing: 0 }}>Crear Cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: hp(6.5), backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' , flexDirection: 'row'}}>
                <Fontisto name="google" size={hp(2.7)} color="white" />
                <Text style={{ fontSize: hp(2), color: '#ffffff', fontWeight: 'normal', letterSpacing: 0 }}>   Sign In con Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: hp(6.5), backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' , flexDirection: 'row'}}>
                <FontAwesome5 name="facebook" size={hp(2.7)} color="white" />
                <Text style={{ fontSize: hp(2), color: '#ffffff', fontWeight: 'normal', letterSpacing: 0 }}>   Sign In con Facebook</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
