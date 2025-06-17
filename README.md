# short.ly Backend - Spring Boot

This is the backend service for a **URL Shortener Application** built using Spring Boot. It includes features like:

- URL shortening
- User registration & login
- JWT-based authentication
- Role-based authorization (`USER`, `ADMIN`)
- Click tracking with analytics

---

## 📁 Project Structure
url-shortner-sb/
├── controller/
│ └── UrlMappingController.java
├── service/
│ ├── UrlMappingService.java
│ ├── UserService.java
├── models/
│ ├── User.java
│ ├── UrlMapping.java
│ └── ClickEvent.java
├── repository/
│ ├── UserRepository.java
│ ├── UrlMappingRepository.java
│ └── ClickEventRepository.java
├── security/
│ ├── WebSecurityConfig.java
│ ├── jwt/
│ │ ├── JwtAuthenticationFilter.java
│ │ ├── JwtUtils.java
├── dtos/
│ ├── UrlMappingDTO.java
│ └── ClickEventDTO.java
└── UrlShortnerSbApplication.java


---

## 🛠 Technologies Used

- Java 17+
- Spring Boot 3.x
- Spring Security with JWT
- Spring Data JPA
- MySQL
- Lombok
- Maven

---

## 🧪 API Endpoints

### 🔐 Auth

- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Authenticate and receive JWT token

### 🔗 URL Shortening (Requires JWT Auth)

- `POST /api/urls/shorten` – Shorten a long URL
- `GET /api/urls/myurls` – List all shortened URLs by the logged-in user
- `GET /api/urls/analytics/{shortUrl}?startDate=&endDate=` – Get click analytics by date range
- `GET /api/urls/totalClicks?startDate=&endDate=` – Get daily click count totals

### 🔁 Redirection (Public)

- `GET /{shortUrl}` – Redirects to original URL

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Username/Github-Repo.git
cd url-shortner-sb

2. Configure application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/urlshortnerdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

jwt.secret=YourJWTSecretKey
jwt.expiration=3600000

3. Install Dependencies and Build
mvn clean install

4. Run the Application
mvn spring-boot:run
App will start at: http://localhost:8080

✅ Prerequisites
MySQL running with the_database_name database created.
Java 17+
Maven
Postman or similar API client

🛡 Authentication Flow
User registers at /api/auth/register
User logs in at /api/auth/login → receives a JWT
JWT is used in Authorization: Bearer <token> header for all protected endpoints

🧠 Role-based Access
| Endpoint       | Role   |
| -------------- | ------ |
| `/api/urls/**` | `USER` |
| `/api/auth/**` | Public |
| `/{shortUrl}`  | Public |

📈 Click Analytics
Click data is stored with timestamps in ClickEvent entity and used for:
Visualizing user traffic
Tracking number of clicks per day
Auditing redirections

👨‍💻 Developer Notes
Uses @PreAuthorize("hasRole('USER')") for securing endpoints
JWT is parsed via custom JwtAuthenticationFilter
Uses DTOs to avoid exposing entity structure directly

📌 Future Enhancements
Admin panel
QR Code generation
Redis caching for faster redirects
Rate limiting & abuse prevention



