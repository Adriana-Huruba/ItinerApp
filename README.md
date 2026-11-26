# ItinerApp
 ItinerApp is a mobile application designed to simplify group trip planning. Here you can have all the important details in one place!

> **Status:** work in Progress

## Project vision

Planning group trips often gets messy across chats, saved links and maps. ItinerApp aims to centralize destination discovery, collaborative voting and route organization into a single workflow.

## Planned architecture

The system is designed around a mobile client communicating with a modular microservices backend:

- **Mobile Client (React Native / Expo + TypeScript):** Cross-platform UI for managing trips, exploring locations and organizing daily schedules
- **Backend Microservices (Java Spring Boot):**
  - `user-service` — Authentication, user profiles, and group memberships
  - `trip-service` — Trip creation, permissions, and participant collaboration
  - `itinerary-service` — Day-by-day activity scheduling, location metadata, and route ordering
- **External integrations:** Google Maps API for place details/routing and link parsing for social media location recommendations

## Technologies

- **Frontend:** React Native, Expo, TypeScript
- **Backend:** Java, Spring Boot
- **Database & Infrastructure:** PostgreSQL, Docker
