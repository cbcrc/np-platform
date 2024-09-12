import { useDatastore, useIsLive, useObject, usePersonaKey, usePersonaObject, usePersonaPreview as usePersonaPreview } from "../util/datastore";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconCircleCheck } from "./icon";
import { UtilityText } from "./text";
import { HoverView, Pad, spacings } from "./basics";
import { formatDate, formatMiniDate } from "./date";
import { colorBlack, colorDisabledBackground, colorTextGrey, colorWhite, colorPink } from "./color";
import { TextButton } from "./button";
import { useLanguage } from "./translation";

export function ProfilePhoto({userId, type='large', photo=null, faint=false, check=false, border=false, badge=null}) {

    const persona = useObject('persona', userId);
    const isLive = useIsLive();
    const meKey = usePersonaKey();
    if (meKey == userId && isLive) {
        return <MyProfilePhoto type={type} photo={photo} faint={faint} check={check} border={border} badge={badge} />
    } else {
        const face = persona?.face;
        if (face || photo || persona?.photoUrl) {
            return <FaceImage face={face} photoUrl={photo ?? persona?.photoUrl} type={type} 
                border={border} faint={faint} check={check} badge={badge}/>
        } else if (persona?.hue && persona?.name) {
            return <LetterFace name={persona.name} hue={persona.hue} type={type} />
        } else {
            return <AnonymousFace faint={faint} type={type} border={border}/>    
        }
    }
}

export function MyProfilePhoto({type='large', photo=null, faint=false, check=false, border=false}) {
    const personaPreview = usePersonaPreview();
    if (personaPreview?.photoUrl) {
        return <FaceImage photoUrl={photo ?? personaPreview.photoUrl} type={type} faint={faint} 
            border={border} check={check} />
    } else if (personaPreview?.hue && personaPreview?.name) {
        return <LetterFace name={personaPreview.name} hue={personaPreview.hue} type={type} />
    } else {
        return <AnonymousFace faint={faint} type={type} border={border} />
    }
}

export function FaceImage({face, photoUrl=null, type='small', faint=false, check=false, border=false, badge=null}) {
    const sizeMap = {
        huge: 80,
        large: 40,
        small: 32,
        tiny: 24,
    }
    const size = sizeMap[type] ?? 32;

    const checkPadMap = {
        large: 2,
        small: 4,
        tiny: 8,
    }
    const checkPad = check ? checkPadMap[type ?? 'small'] : 0;

    return <View style={{position: 'relative', alignSelf: 'flex-start'}}>
            <Image 
            style ={{
                width: size, height: size, borderRadius: size /2, 
                opacity: faint ? 0.5 : 1, marginRight: checkPad,
                borderWidth: border ? 2 : 0,
                borderColor: 'white'
            }}
            source={{uri: photoUrl ?? ('https://new-public-demo.web.app/faces/' + face)}} />
            {badge && <View style={{position: 'absolute', right: 0, bottom: 0}}>
             <Image 
                style={{
                    width: 14, height: 14, borderRadius: 7,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    borderWidth: 2
                }}
                source={{ uri: badge }} />
            </View>}
            {check && <View style={{position: 'absolute', right: 0, bottom: 0}}>
                <IconCircleCheck />
            </View>}
    </View>
}

const fontFamilySansMedium = 'IBMPlexSans_500Medium, Arial, Helvetica, sans-serif';

export function LetterFace({name, hue, type='large'}) {
    const s = LetterFaceStyle;
    const sizeMap = {
        huge: 80,
        large: 40,
        small: 32,
        tiny: 24,
    }
    const size = sizeMap[type] ?? 32;
    const color = 'hsl('+hue+', 96%, 27%)';
    const letter = name.substring(0,1).toUpperCase();

    return <View style={{width: size, height: size, borderRadius: size /2, backgroundColor: color, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[{fontSize: size / 2}, s.letter]}>{letter}</Text>
    </View>    
}
const LetterFaceStyle = StyleSheet.create({
    letter: {
        color: colorWhite,
        fontFamily: fontFamilySansMedium
    }
});

export function AnonymousFace({faint, type, border, check}) {
    return <FaceImage face='anonymous2.jpeg' faint={faint} type={type} border={border} check={check} />
}

const AnonymousFaceStyle = StyleSheet.create({
    outer: {
        backgroundColor: colorDisabledBackground,
    }
})

export function FacePile({type='small', userIdList}) {
    const s = FacePileStyle;
    const sizeMap = {
        small: 32,
        tiny: 24,
    }
    const size = sizeMap[type] ?? 32;
 
    return <View style={s.outer}>
        {userIdList.slice(0,3).map((userId, i) => <View key={i} 
                style={{position: 'relative', marginLeft: i == 0 ? 0 : -(size/4)}}>
            <ProfilePhoto userId={userId} type={type} border />
        </View>)}
    </View>
}
const FacePileStyle = StyleSheet.create({
    outer: {
        flexDirection: 'row',
    }
})

export function Byline({type='small', photoType=null, clickable=true, userId, name=null, photo=null, time, subtitleLabel, subtitleParams={}, underline=false, edited=false}) {
    const s = BylineStyle
    const persona = usePersonaObject(userId);
    const language = useLanguage();
    const datastore = useDatastore();
    function onProfile() {
        datastore.gotoInstance({structureKey: 'profile', instanceKey: userId});
    }
    if (persona.badge && persona.tag) { // titled writer layout
        return <View style={s.outer}>
            <ProfilePhoto userId={userId} photo={photo} type={'large'} badge={persona.badge} />
             <Pad size={spacings.xs} />
             <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    {clickable ?
                        <TextButton type='small' strong text={name ?? persona?.name}  underline={underline} onPress={onProfile} />
                    : 
                        <UtilityText strong text={name ?? persona?.name}  underline={underline} />
                    }
                    {time && <Pad size={6} />}
                    {time &&                     <UtilityText color={colorTextGrey} 
                                label={'{time}' + (edited ? ' • Edited' : '')} 
                                formatParams={{time: formatMiniDate(time, language)}} underline={underline}/>
                    }
                </View>
                {persona.tag && <View style={s.tag}>
                     <UtilityText label={persona.tag} type='tiny' />
                </View>
                }
        </View>
    </View>   
    }
    else if (type == 'large') {
        return <View style={s.outer}>
            <ProfilePhoto userId={userId} photo={photo} type={photoType ?? 'large'} /> 
            <View style={s.right}>
                {/* <UtilityText strong text={name ?? persona?.name} /> */}
                <TextButton type='small' alignStart text={name ?? persona?.name} strong onPress={onProfile} />
                <Pad size={2} />
                {subtitleLabel ? 
                    <UtilityText color={colorTextGrey} label={subtitleLabel} formatParams={subtitleParams} underline={underline} />
                : 
                    <UtilityText color={colorTextGrey} 
                        label={'{time}' + (edited ? ' • Edited' : '')} 
                        formatParams={{time: formatDate(time, language)}} underline={underline}/>
                }
            </View>
        </View>
    }
    else {
        return <View style={s.smallOuter}>
            <ProfilePhoto userId={userId} photo={photo} type={photoType ?? 'small'} /> 
            <Pad size={8} />
            {clickable ?
                <TextButton type='small' strong text={name ?? persona?.name} underline={underline} onPress={onProfile} />
            : 
                <UtilityText strong text={name ?? persona?.name} underline={underline} />
            }
            {time && <Pad size={6} />}
            {time && <UtilityText color={colorTextGrey} 
                        label={'{time}' + (edited ? ' • Edited' : '')} 
                        formatParams={{time: formatMiniDate(time, language)}} underline={underline}/>
            }
        </View>
    }
}

const BylineStyle = StyleSheet.create({
    outer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        marginLeft: 8,
    },
    smallOuter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100,
        backgroundColor: colorPink,
        borderColor: colorPink,
    }
})

export function FaceSelect({selected, onSelect, testID, children}) {
    return <FaceButton testID={testID} selected={selected} onPress={!selected && onSelect}>
        {children}
    </FaceButton>
}

export function FaceButton({selected, onPress, testID, children}) {
    const s = FaceButtonStyle;
    return <HoverView style={s.ring} onPress={onPress} testID={testID}>
        <View style={selected ? s.blackRing : s.whiteRing}>
            <View style={s.whiteRing}>
                {children}
            </View>
        </View>
    </HoverView>
}

const FaceButtonStyle = StyleSheet.create({
    ring: {
        alignSelf: 'flex-start',
    },
    whiteRing: {
        borderWidth: 3,
        borderColor: colorWhite,
        borderRadius: 50
    }, 
    blackRing: {
        borderWidth: 3,
        borderColer: colorBlack,
        borderRadius: 50
    },
});
