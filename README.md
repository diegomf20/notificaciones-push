
1. Cambiar en archivo sw.js el mensajeSenderId por el de tu proyecto Firebase Message

var config = {
    messagingSenderId: "99999999999"
};

2. Modificar el archivo push.js el _key_message por la clave heredada de tu proyecto Firebase Message

var _key_message="AIza.........papg";

3. Ingresa a tu layout principal de tu pagina y inizializa en js una instancia de firebase

var firebaseConfig = {
    apiKey: "AIzaSyA0K9tir8Bo0XrjgpM3VWx9uniIdxwGi1U",
    authDomain: "vespro-technology.firebaseapp.com",
    databaseURL: "https://vespro-technology.firebaseio.com",
    projectId: "vespro-technology",
    storageBucket: "vespro-technology.appspot.com",
    messagingSenderId: "105524483936",
    appId: "1:105524483936:web:0ffb9b5f64a85811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

4. Inicializa la herramienta push

pushInit("Nombre_del grupo");

** Para cerrar el envio de notificaciones llamar al metodo
    //Eliminara la cookie y el token del dispositivo del grupo Topics de mensajeria
    removeTopics("nombre_del_grupo");

