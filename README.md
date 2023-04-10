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


-backend/
│
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   │
│   ├── config/
│   │   └── configuration.ts
│   │
│   ├── user/
│   │   ├── user.module.ts
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── user.entity.ts
│   │
│   ├── event/
│   │   ├── event.module.ts
│   │   ├── event.controller.ts
│   │   ├── event.service.ts
│   │   └── event.entity.ts
│   │
│   ├── booking/
│   │   ├── booking.module.ts
│   │   ├── booking.controller.ts
│   │   ├── booking.service.ts
│   │   └── booking.entity.ts
│   │
│   ├── review/
│   │   ├── review.module.ts
│   │   ├── review.controller.ts
│   │   ├── review.service.ts
│   │   └── review.entity.ts
│   │
│   ├── notifications/
│   │   ├── notifications.module.ts
│   │   ├── notifications.controller.ts
│   │   └── notifications.service.ts
│   │
│   └── common/
│       ├── filters/
│       │   └── http-exception.filter.ts
│       │
│       └── middlewares/
│           └── logger.middleware.ts
│
├── test/
│   ├── jest-e2e.json
│   └── app.e2e-spec.ts
│
├── nest-cli.json
├── tsconfig.build.json
├── tsconfig.json
├── package.json
└── README.md

