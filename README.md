# PaginaDafnis

Tarea para Dafnis, entrega programada para el sábado.

## Comandos de Git

A continuación, se presentan los comandos básicos de Git que necesitarás para gestionar este proyecto:

### Clonar el Repositorio

- **`git clone <URL>`**  
  Clona el repositorio en tu máquina local.
  ```bash
  git clone https://github.com/BeltranDev46/PaginaDafnis.git
  ```

### Actualizar tu Copia Local

- **`git pull`**  
  Actualiza tu copia local del repositorio con los cambios más recientes del repositorio remoto.
  ```bash
  git pull
  ```

### Crear y Cambiar de Rama

- **`git checkout -b <nombre_de_la_rama>`**  
  Crea una nueva rama y cambia a ella. Útil para trabajar en nuevas características sin afectar la rama principal.
  ```bash
  git checkout -b nueva-caracteristica
  ```

### Agregar Cambios

- **`git add .`**  
  Agrega todos los cambios en tu proyecto al área de preparación (staging).
  ```bash
  git add .
  ```

### Realizar un Commit

- **`git commit`**  
  Abre un editor de texto donde puedes describir los cambios realizados. Si no se abre, puedes usar:
  ```bash
  git commit -m "Descripción de los cambios"
  ```

### Subir Cambios a la Rama Específica

- **`git push origin <nombre_de_la_rama>`**  
  Sube los cambios realizados en la rama seleccionada al repositorio remoto.
  ```bash
  git push origin nueva-caracteristica
  ```

### Subir Cambios a la Rama Principal

- **`git push`**  
  Sube los cambios a la rama principal (main) de tu repositorio remoto.
  ```bash
  git push
  ```

## Unir el Trabajo

Para combinar los cambios de una rama en la rama principal:

1. **Cambiar a la Rama Principal:**
   - **`git checkout main`**  
     Mueve a la rama principal.
     ```bash
     git checkout main
     ```

2. **Fusionar Cambios:**
   - **`git merge <nombre_de_la_rama>`**  
     Fusiona los cambios de la rama especificada en la rama principal.
     ```bash
     git merge nueva-caracteristica
     ```
