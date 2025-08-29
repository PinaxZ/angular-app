# Angular + Django Login

Este proyecto implementa un **login funcional con Angular y Django**.  
El frontend en **Angular** ofrece la interfaz de inicio de sesión, mientras que el backend en **Django** (https://github.com/PinaxZ/backend-django-login) se encarga de la autenticación, gestión de usuarios y recursos de la aplicación.  

## Características
- **Frontend (Angular)**
  - Formulario de login con validación de usuario y contraseña.
  - Redirección al backend después de autenticación exitosa.
  - Integración con API del backend usando `HttpClient` y `withCredentials` para mantener sesión.

- **Backend (Django)**
  - Manejo de usuarios con el sistema de autenticación de Django.
  - Endpoint `/api/auth/login/` que valida credenciales y crea sesión.
  - Vistas protegidas (`/consulta/`, etc.) disponibles solo para usuarios autenticados.
  - Configuración de CORS y CSRF para permitir conexión con Angular en desarrollo.


