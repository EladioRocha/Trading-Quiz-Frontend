# Trading Quiz — React Frontend

A **React 17 learning application** for trading quizzes and lessons, with account screens, progress, rewards, rankings, notifications, and settings. It connects to the companion [Trading Quiz API](https://github.com/EladioRocha/Trading-Quiz-Backend).

## Local setup

Configure the backend and MongoDB first using its README. The frontend does not include a database or mock API.

```sh
npm ci
```

The API base URL is hard-coded as `http://localhost:3000` in [src/api/v1.js](src/api/v1.js). Keep the backend on port 3000 and run the frontend on a different port. For example, create a local frontend `.env` containing:

```dotenv
PORT=3001
```

```sh
npm start
```

Open `http://localhost:3001`. If you move the backend, update `BASE_URL` in `src/api/v1.js`; the current source does not read a `REACT_APP_API_URL` variable. Restart the development server after changing `.env`.

## Features and routes

| Area | Examples |
| --- | --- |
| Accounts | `/` for login and `/Signup` for registration. |
| Learning | `/Home`, `/Lessons/:type`, `/LessonLecture/:lessonId`. |
| Quizzes | `/Quizzes/:type`, `/QuizGame/:quizId`, and result screens. |
| Community | `/Leaderboard`, `/Notifications`, `/EarnCoins`. |
| Preferences | `/Settings`. |

The route wrappers in [src/ProtectedRoute.js](src/ProtectedRoute.js) and [src/Logged.js](src/Logged.js) control navigation. The API helper sends the `token` cookie directly as `Authorization` and the language cookie as `iso`.

## Development map

- [src/App.js](src/App.js): route definitions.
- [src/api](src/api): Axios requests and response handling.
- [src/components](src/components): learning, account, quiz, and navigation screens.
- [examples](examples): original screenshots.

## Build and tests

`npm run build` generates `build`. A deployed host must support BrowserRouter fallback to `index.html`. `npm test` runs the configured React test runner; component scaffolds are not evidence of complete integration coverage.

`npm run pwa` builds and invokes `serve`, but `serve` is not declared in the package dependencies. The project uses Create React App 4-era tooling and does not pin Node.js. This documentation update did not exercise the full backend-connected application.

## Original screenshots

The screenshots show the historical interface, not a newly tested deployment.

![Login](examples/login.png)

![Registration](examples/signup.png)

![Market categories](examples/home.png)

![Navigation](examples/sidebar.png)

![Leaderboard](examples/leaderboard.png)

![Notifications](examples/notifications.png)

![Settings](examples/settings.png)

![Language selection](examples/settings-2.png)

![Username settings](examples/setting-3.png)

![Lessons](examples/lessons.png)

![Lesson content](examples/lessons-2.png)

![Lesson completion](examples/lessons-3.png)

![Next lesson](examples/lessons-4.png)

![Quiz selection](examples/quizzes.png)

![Timed question](examples/quizzes-2.png)

![Quiz result](examples/quizzes-3.png)
