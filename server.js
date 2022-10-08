import express from "express"
import bcrypt from "bcrypt"
import stripe from "stripe"
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

//Configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4d5OoIEtguOVh4oTlvNp5q6f8vqv1u3A",
    authDomain: "ecommerce-98f75.firebaseapp.com",
    projectId: "ecommerce-98f75",
    storageBucket: "ecommerce-98f75.appspot.com",
    messagingSenderId: "479740102130",
    appId: "1:479740102130:web:d3de06450c56353bebd76b"
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

// Inicializacion del servidor
const app = express()

//middleware
app.use(express.static('public'))
app.use(express.json()) //Permite compartir forms 

//RUTAS
//Ruta Home
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public'})
})

app.listen(3000, () => {
    console.log('servidor corriendo...')
})

