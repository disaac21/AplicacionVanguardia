import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

// Reusable Button Component
const Button = ({ icon, text, backgroundColor, onPress}) => (
    <TouchableOpacity
        style={{ height: hp(6.5), backgroundColor: backgroundColor || 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: hp(2) }}
        onPress={onPress} accessibilityLabel={text}
    >
        {icon && ( 
            <View style={{ marginRight: wp(2) }}> 
                {icon} 
            </View> 
        )}
        <Text style={{ fontSize: hp(2), color: '#ffffff', fontWeight: 'normal' }}>
            {text}
        </Text>
    </TouchableOpacity>
);

// InputField Component
const InputField = ({ icon, placeholder, secureTextEntry = false }) => (
    <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderColor: '#4a4a4a', borderWidth: 1, borderRadius: 5, paddingHorizontal: wp(4) }}>
        {icon}
        <TextInput
            style={{ flex: 1, marginLeft: wp(2), fontWeight: '600', color: '#4a4a4a' }}
            placeholder={placeholder}
            placeholderTextColor="gray"
            secureTextEntry={secureTextEntry}
        />
    </View>
);

// Logo Section Component
const LogoSection = () => (
    <View style={{ alignItems: 'center' }}>
        <Image
            source={require('../assets/images/Option.png')}
            resizeMode="contain"
            style={{ width: '100%', aspectRatio: 1 / 1 }}
        />
    </View>
);

// Input Fields and Forgot Password Section Component
const InputFieldsSection = ({ navigation }) => (
    <View>
        <View style={{ marginBottom: hp(3) }}>
            <InputField icon={<Octicons name="mail" size={hp(2.7)} color="gray" />} placeholder="Email address" />
            <View style={{ marginTop: hp(2) }}>
                <InputField icon={<Octicons name="lock" size={hp(2.7)} color="gray" />} placeholder="Password" secureTextEntry={true} />
                <Text style={{ fontSize: hp(1.8), fontWeight: '600', textAlign: 'right', color: '#757575', marginTop: hp(1) }}>
                    Forgot password?
                </Text>
            </View>
        </View>
        <View style={{ alignItems: 'flex-end', marginBottom: hp(4) }}>
            <Button
                icon={<AntDesign name="caretright" size={30} color="white" />}
                text="Sign In"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    </View>
)

// Social Media Sign-In Section Component
const SocialSignInSection = () => (
    <View style={{ paddingTop: hp(10) }}>
        <Button
            text="Crear Cuenta"
            onPress={() => alert('Navigate to Signup')}
        />
        <Button
            icon={<Fontisto name="google" size={hp(2.7)} color="white" />}
            text="Sign In con Google"
            onPress={() => alert('Google Sign In')}
        />
        <Button
            icon={<FontAwesome5 name="facebook" size={hp(2.7)} color="white" />}
            text="Sign In con Facebook"
            onPress={() => alert('Facebook Sign In')}
        />
    </View>
);

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle="default" />
            <View style={{ paddingTop: hp(5), paddingHorizontal: wp(5) }}>
                <LogoSection />
                <View style={{ paddingHorizontal: wp(11), marginTop: hp(2) }}>
                    <InputFieldsSection navigation={navigation}/>
                    <SocialSignInSection />
                </View>
            </View>
        </View>
    );
}
