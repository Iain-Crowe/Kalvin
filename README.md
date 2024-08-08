# Kalvin - Productivity App

Kalvin is a general-purpose productivity application that helps users manage their tasks, track daily habits, set and achieve goals, and gamify their progress. This project is a work in progress so many of the features are not implements yet. I will document new features as
they are implemented.

## Features

-   To-Do list implemented as a Kanban Board (backend works)
-   Daily habit tracking (not started)
-   Goal setting and tracking (not started)
-   Gamified mechanic around goals, including leveling up a character based on completed habits and milestones (not started)
-   User authentication (backend works)

## Technology Stack

-   Frontend: [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) and [Preline UI](https://preline.co/)
-   Backend: [Flask](https://flask.palletsprojects.com/)

## Getting Started

### Prerequisites

-   Node.js and npm
-   Python 3.7+
-   Git

### Clone Repository

Clone repository by running the following:

```bash
git clone https://github.com/Iain-Crowe/Kalvin.git
cd Kalvin
```

### Backend Setup (Flask)

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Create a virtual environment and activate it:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install the required dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set environment variables (create a `.env` file):**

    ```ini
    FLASK_APP=run.py
    FLASK_ENV=development
    SECRET_KEY=your_secret_key
    SQLALCHEMY_DATABASE_URI=sqlite:///kalvin.db
    ```

5. **Initialize the database:**

    ```bash
    flask db init
    flask db migrate -m "Initial migration."
    flask db upgrade
    ```

6. **Run the Flask application:**

    ```bash
    flask run
    ```

### Frontend Setup (Next.js)

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install the required dependencies:**

    ```bash
    npm install
    ```

3. **Run the Next.js development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Testing

### Backend Tests

1. **Navigate to the backend directory and activate the virtual environment:**

    ```bash
    cd backend
    source venv/bin/activate
    ```

2. **Run the tests using pytest:**

    ```bash
    pytest
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Preline UI](https://preline.co/)
-   [Flask](https://flask.palletsprojects.com/)
