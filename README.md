# Tarot STEM — Web App (React + Vite)

Aplicación de Tarot con temática **STEM** (mujeres científicas/tecnología). Incluye: Home con **bola de cristal 3D**, listado de cartas, detalle por carta y lectura interactiva (Pasado–Presente–Futuro).

---

## ✨ Características

- **Lectura interactiva** (selección de 3 cartas) con avisos usando **SweetAlert2**.
- **Grid responsivo** para la baraja
- **Detalle de carta** con layout 1→2 columnas.
- **Home** con esfera 3D (three.js vía `@react-three/fiber` + `@react-three/drei`).
- Diseño **mobile-first** (CSS Grid/Flex, `clamp()`, `aspect-ratio`, `svh`).
- Accesibilidad básica: `role="status"`, `aria-live`, foco visible.

---

## 🧰 Tecnologías & Librerías

- **Core:** React, Vite
- **Routing:** `react-router-dom`
- **3D:** `@react-three/fiber`, `@react-three/drei`
- **Alerts:** `sweetalert2`
- **Estilos:** CSS moderno (Grid/Flex, `clamp`, `aspect-ratio`) + Google Fonts (Cinzel Decorative, Inter)
- **Deploy:** Vercel
- **Motion/Animaciones:** `framer-motion`

> El acceso a datos se abstrae en `src/services/api` (p. ej., `getAllCards()`, `getCardById(id)`).

---

## 📁 Estructura del proyecto

```
src/
├─ assets/
│  └─ images/            # imágenes del deck y backside
├─ components/
│  ├─ Card.jsx
│  └─ Card.css
├─ pages/
│  ├─ Home.jsx           # Home + CrystalBall
│  ├─ Home.css
│  ├─ CardsPage.jsx      # listado de cartas
│  ├─ CardsPage.css
│  ├─ CardDetail.jsx     # detalle de carta (arcano + diosa)
│  ├─ CardDetail.css
│  ├─ CardReading.jsx    # lectura (3 cartas)
│  └─ CardReading.css
├─ router/
│  └─ Router.jsx         # definición de rutas
├─ services/
│  └─ api.js             # funciones de acceso a datos
├─ main.jsx
└─ index.css (o App.css)
```

---


## 🌐 Deploy en Vercel

https://tarot-stem-wine.vercel.app/

## 🗺️ Rutas principales

- `/` — Home (crystal ball 3D)
- `/CardsPage` — Grid de cartas
- `/cards/:id` — Detalle de carta
- `/reading` — Lectura (Pasado/Presente/Futuro)


---

## 🧪 Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```


---

## 📸 Capítulo 

![Home — Desktop](./assets/images/HomeCapture.png)

---

## 👩‍💻 Autora

Proyecto realizado por **Camila Arenas** para el Bootcamp de Desarrollo Web de **Factoria F5**.
