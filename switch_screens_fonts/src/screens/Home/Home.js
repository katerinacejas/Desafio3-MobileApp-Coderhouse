import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './Home.style'
import data from '../../data/ekos'

const Home = ({setLoginHecho}) => {
    const renderEkos = ({ item }) => (  
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <View style={styles.perfil}>
                    <Image source={item.icono} style={styles.icono} />
                    <View>
                        <Text style={styles.username}>{item.nombre}</Text>
                        <Text style={styles.usuarioArroba}>{item.usuario}</Text>
                    </View>
                </View>
                <Text style={styles.textoPosteo}>¡Está escuchando {item.cancion} de {item.autor}!</Text>
            </View>
            <View style={styles.leftContainer}>
                <Image source={item.portada} style={styles.portadaMusica} />
            </View>
        </View>
    )

    const cerrarSesion = () => (
        setLoginHecho(false)
    )

    return (
        <>
        <View style={styles.containerGeneral}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderEkos}
            />
        </View>
        <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText} 
                    onPress={cerrarSesion}>
                    Cerrar Sesión
                </Text>
        </TouchableOpacity>
        </>
    )
}
export default Home