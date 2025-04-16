import { View, Text } from 'react-native'
import React from 'react'
import ProfileCardStyles from './styles/ProfileCardStyles'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Colors from '../../../../constant/Colors'
import strings from '../../../../constant/strings'




const ProfileBasicInfoCard = () => {
    return (
        <View style={ProfileCardStyles.customerCard}>
            <View style={ProfileCardStyles.cardMain}>
                <View style={ProfileCardStyles.profileImage}>
                    <FontAwesome
                        name="user"
                        size={28}
                        color="#fff"
                    />
                </View>
                <View style={ProfileCardStyles.profileData}>
                    <Text style={ProfileCardStyles.userName}>{strings.DEFAULT_USER_NAME}</Text>
                    <Text style={ProfileCardStyles.userPhone}>{strings.DEFAULT_MOBILE_NUMBER}</Text>
                    <Text style={ProfileCardStyles.memberSince}>{strings.DEFAULT_REG_DATE}</Text>
                </View>
            </View>

            <Text style={ProfileCardStyles.profileCompletionText}>{strings.DEFAULT_PROGRESS}</Text>

            <View style={ProfileCardStyles.progressBarContainer}>
                <View style={ProfileCardStyles.progressBarFill} />
            </View>

            <Text style={ProfileCardStyles.progressNote}>
                {strings.DEFAULT_PROFILE_CARD_MSG}
            </Text>
        </View>
    )
}

export default ProfileBasicInfoCard