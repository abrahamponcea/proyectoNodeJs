import express from "express"
import bcrypt from "bcrypt"
import stripe from "stripe"
import { initializeApp } from "firebase/app"
import { collection, getDoc, getFirestore } from 'firebase/firestore'

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

//ruta para registrar
app.get('/signup', (req, res) => {
    res.sendFile('signup.html', { root: 'public'})
    
})

app.post('/signup', (req, res) => {
    const{ name, email, password, number, tac } = req.body
    //validaciones
    if(name.length < 3){
        res.json({'alert': 'name must be 3 letters long'})
    }else if(email){
        res.json({ 'alert': 'enter your email' })
    }else if(password.length < 8){
        res.json({'alert': 'password must be 8 letters long'})
    }else if(!Number(number) || number.length < 10){
        res.json({ 'alert': 'invalid number, please enter valid one'})
    }else if(!tac){
        res.json({ 'aler': 'you must agree to our terms'})
    }else{
        //Almacenar datos en DB
        const users = collection(db, "users")
        getDoc(doc(users, email)).then(user => {
            if(user.exists()){
                res.json({ 'alert': 'email already exists'})
            }else{
                //encriptar password
            }
        })
    }
})

app.listen(3000, () => {
    console.log('servidor corriendo...')
})

