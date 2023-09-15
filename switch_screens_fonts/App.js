import { Login, Home } from './src/screens'
// import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App() {
	//const [fuentesCargadas] = useFonts(fonts)
	const [loginHecho, setLoginHecho] = useState('')

	// if (!fuentesCargadas) {
	// 	return null
	// }

	return loginHecho ? (
		<Home />
	) : (
		<Login setLoginHecho={setLoginHecho} />
	)
}