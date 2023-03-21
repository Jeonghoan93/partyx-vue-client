partyx/
|-- frontend/
|   |-- public/
|   |   |-- favicon.ico
|   |   |-- index.html
|   |-- src/
|   |   |-- assets/
|   |   |   |-- images/
|   |   |   |-- styles/
|   |   |-- components/
|   |   |   |-- common/
|   |   |   |   |-- Navbar.vue
|   |   |   |   |-- SearchBar.vue
|   |   |   |   |-- EventCard.vue
|   |   |   |-- auth/
|   |   |   |   |-- SignUp.vue
|   |   |   |   |-- SignIn.vue
|   |   |   |   |-- GoogleAuth.vue
|   |   |-- views/
|   |   |   |-- Home/
|   |   |   |   |-- components/
|   |   |   |   |   |-- HomeBanner.vue
|   |   |   |   |   |-- HomeFeatures.vue
|   |   |   |   |-- Home.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |   |-- Events/
|   |   |   |   |-- components/
|   |   |   |   |   |-- EventFilters.vue
|   |   |   |   |-- Events.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |   |-- EventDetail/
|   |   |   |   |-- components/
|   |   |   |   |   |-- EventMap.vue
|   |   |   |   |   |-- EventGallery.vue
|   |   |   |   |-- EventDetail.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |   |-- HostDashboard/
|   |   |   |   |-- components/
|   |   |   |   |   |-- HostStats.vue
|   |   |   |   |-- HostDashboard.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |   |-- CreateEvent/
|   |   |   |   |-- components/
|   |   |   |   |   |-- EventForm.vue
|   |   |   |   |-- CreateEvent.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |   |-- EditEvent/
|   |   |   |   |-- components/
|   |   |   |   |   |-- EventForm.vue
|   |   |   |   |-- EditEvent.vue
|   |   |   |   |-- router/
|   |   |   |   |   |-- index.js
|   |   |-- router/
|   |   |   |-- index.js
|   |   |-- store/
|   |   |   |-- index.js
|   |   |   |-- auth.js
|   |   |   |   |-- events.js
|   |   |   |-- hosts.js
|   |   |-- services/
|   |   |   |-- api.js
|   |   |   |-- authService.js
|   |   |   |-- eventService.js
|   |   |   |-- hostService.js
|   |   |-- App.vue
|   |   |-- main.js
|   |-- package.json
|   |-- babel.config.js
|   |-- .gitignore
|   |-- README.md


|
|-- backend/
|   |-- src/
|   |   |-- api/
|   |   |   |-- controllers/
|   |   |   |   |-- authController.js
|   |   |   |   |-- eventController.js
|   |   |   |   |-- hostController.js
|   |   |   |-- middlewares/
|   |   |   |   |-- authMiddleware.js
|   |   |   |   |-- hostMiddleware.js
|   |   |   |   |-- errorHandler.js
|   |   |   |-- models/
|   |   |   |   |-- User.js
|   |   |   |   |-- Event.js
|   |   |   |   |-- Host.js
|   |   |   |-- routes/
|   |   |   |   |-- authRoutes.js
|   |   |   |   |-- eventRoutes.js
|   |   |   |   |-- hostRoutes.js
|   |   |   |-- validations/
|   |   |   |   |-- authValidation.js
|   |   |   |   |-- eventValidation.js
|   |   |   |   |-- hostValidation.js
|   |   |-- config/
|   |   |   |-- db.js
|   |   |   |-- environment.js
|   |   |-- utils/
|   |   |   |-- firebase.js
|   |   |   |-- cloudinary.js
|   |   |-- app.js
|   |-- package.json
|   |-- .env
|   |-- .gitignore
|   |-- README.md
|
|-- .gitignore
|-- README.md
