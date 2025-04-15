import { View, Text } from 'react-native'
import React from 'react'
import TextStyles from './styles/TextStyles'
import strings from '../../../../constant/strings'


const TermsAndConditions = () => {
    return (
        <View >
            <Text style={TextStyles.outerterms}>{strings.TERMS_AND_CONDITION_ONE}<Text style={TextStyles.innerTerms}>{strings.BLUE_TERMS_ONE}</Text> {strings.TERMS_AND_CONDITION_TWO} <Text style={TextStyles.innerTerms}>{strings.BLUE_TERMS_TWO}</Text> </Text>
        </View>
    )
}

export default TermsAndConditions