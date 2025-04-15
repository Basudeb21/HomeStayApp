import { View, Text } from 'react-native'
import React from 'react'
import AddCard from './components/AddCard'
import LoginInput from './components/LoginInput'
import TextStyles from './components/styles/TextStyles'
import GetOtpButton from './components/GetOtpButton'
import TermsAndConditions from './components/TermsAndConditions'
import strings from '../../../constant/strings'




const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <AddCard />
                <Text style={TextStyles.signUpBonusText}>{strings.BONUS_TXT}</Text>
                <LoginInput placeholder="Enter your phone number" />
                <Text style={TextStyles.refferalCodeText}>{strings.REFFERAL_TXT}</Text>
                <GetOtpButton />
            </View>

            <TermsAndConditions />
        </View>
    )
}

export default Login