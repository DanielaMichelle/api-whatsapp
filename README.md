# API de WhatsApp (Node.js)

Este proyecto implementa una API RESTful utilizando Node.js para habilitar el envío programático de mensajes de texto e imágenes a través de WhatsApp.

## Tecnologías Utilizadas

* Node.js
* `@bot-whatsapp/bot`
* `@bot-whatsapp/provider-baileys`
* Postman
* Digital Ocean (VPS)
* Nginx
* Certificados SSL (Let's Encrypt)

## Funcionalidades Principales

* **Envío de mensajes de texto e imágenes:** Endpoints para enviar mensajes a números de WhatsApp específicos, con soporte para contenido multimedia.
* **Automatización de comunicaciones:** Permite la automatización de comunicaciones a través de WhatsApp, facilitando el envío de notificaciones y la interacción con los usuarios.
* **Despliegue en entornos locales y remotos:** Configuración y despliegue de la API tanto en servidores locales para pruebas como en un entorno de producción en un servidor VPS de Digital Ocean.
* **Seguridad:** Configuración de un firewall e instalación de certificados SSL para garantizar la comunicación segura mediante HTTPS.
* **Pruebas exhaustivas:** Uso de Postman para probar los endpoints de la API y asegurar su correcto funcionamiento y fiabilidad.
* **Acceso remoto:** Configuración de un nombre de dominio para acceder a la API de forma remota.

## Configuración

1.  Clona el repositorio:

    ```bash
    git clone [https://github.com/DanielaMichelle/api-whatsapp.git](https://www.google.com/search?q=https://github.com/DanielaMichelle/api-whatsapp.git)
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

3.  Configura las variables de entorno:

    * Crea un archivo `.env` en la raíz del proyecto.
    * Define las variables necesarias (por ejemplo, números de teléfono, claves de API, etc.).

4.  Ejecuta la API:

    ```bash
    npm start
    ```

## Despliegue en VPS (Digital Ocean)

1.  Crea un droplet en Digital Ocean.
2.  Configura Nginx como proxy inverso.
3.  Instala un certificado SSL con Let's Encrypt.
4.  Configura un firewall para asegurar el acceso a la API.

## Pruebas

Utiliza Postman para probar los endpoints de la API.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
