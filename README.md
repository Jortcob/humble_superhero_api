# Humble Superheroes App

This is a React-based frontend application that interacts with the Humble Superheroes API. Users can view a list of superheroes, add new ones, and manage their humility scores.

## Features

- **Add a Superhero**: Submit a form to add a superhero with their name, superpower, and humility score.
- **View Superheroes**: Displays a list of superheroes, sorted by their humility score (from highest to lowest).

## Installation

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/humble_superheroes_app.git
    cd humble_superheroes_app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

4. The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

├── src │ ├── App.js # Main React component that handles the superheroes list and form │ ├── index.css # Global and component-specific styles │ └── index.js # Entry point for the React app ├── public │ └── index.html # HTML template for the app └── package.json # Project dependencies and scripts

## How it Works

### `App.js`

- **State Management**: The app uses React hooks (`useState`, `useEffect`) to manage the list of superheroes and the form for adding new ones.
- **Fetching Data**: When the app loads, it fetches the list of superheroes from the backend API and displays them.
- **Adding Superheroes**: Users can add a superhero by submitting the form. The superhero data is sent to the backend API, and the list is updated with the new superhero.

#### Code Breakdown:
- **State**:
  - `superheroes`: Holds the list of superheroes fetched from the API.
  - `newSuperhero`: Holds the form data for the new superhero.
  
- **useEffect Hook**: Fetches superheroes from the API when the component mounts.

- **handleSubmit Function**: Sends a POST request to the API to add a new superhero.

- **handleChange Function**: Updates the form data when the user types in the input fields.

### `index.css`

- **Global Styles**: The app uses a clean and minimal design with a light background and centered layout.
- **Form Styles**: The form is styled with rounded corners, padding, and a soft shadow for a neat appearance.
- **Responsive Design**: The app is responsive and adapts to smaller screens (mobile-friendly).

## API Interaction

This frontend app interacts with the Humble Superheroes API to manage the list of superheroes.

- **GET /superheroes**: Fetches the list of superheroes, sorted by humility score.
- **POST /superheroes**: Adds a new superhero with a name, superpower, and humility score.

### Example of a Superhero Object:

```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
