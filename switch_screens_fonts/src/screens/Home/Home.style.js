import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    containerGeneral: {
        flex: 1,
        backgroundColor: colors.fondoClaro,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.violeta,
        borderRadius: 10,
        margin: 10,
        backgroundColor: colors.blanco,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 2,
    },
    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icono: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.turquesa,
    },
    usuarioArroba: {
        color: colors.negro,
        opacity: 0.7,
    },
    textoPosteo: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10,
        color: colors.negro,
    },
    portadaMusica: {
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        height: 120,         
    },
    button: {
        backgroundColor: colors.turquesa,
        padding: 10,
    },
    buttonText: {
        color: colors.negro,
        fontWeight: 'bold',
        fontSize: sizes.botones,
        textAlign: 'center',
    },
})