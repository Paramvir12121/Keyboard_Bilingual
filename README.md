# 🎹 Keyboard Bilingual

![GitHub last commit](https://img.shields.io/github/last-commit/Paramvir12121/Keyboard_Bilingual)
![GitHub repo size](https://img.shields.io/github/repo-size/Paramvir12121/Keyboard_Bilingual)
![Website](https://img.shields.io/website?url=https%3A%2F%2Flearn-colemak.vercel.app)

## 📖 Overview

Keyboard Bilingual is an interactive web application designed to help users learn and practice alternative keyboard layouts. Whether you're looking to increase typing speed, reduce finger strain, or simply explore more ergonomic typing methods, this platform provides a comprehensive learning experience.

The application offers structured lessons, real-time feedback, and progress tracking to make the transition to a new keyboard layout as smooth as possible. Users can create accounts to save their progress and practice across multiple devices.

**Live Demo:** ([keyboardbilingual.com](https://keyboardbilingual.com/))

## 🏗️ Architecture

### Frontend
- React-based single-page application
- Vite for fast development and optimized production builds
- State management with React Context API and hooks
- Interactive typing interface with real-time feedback
- User authentication and profile management
- Responsive design for desktop and mobile devices

### Backend
- Flask RESTful API with Flask-RESTX for documentation
- AWS Cognito for secure user authentication
- PostgreSQL database (hosted on Supabase)
- Session management via Flask-Session
- Stripe integration for payment processing

### Database Schema
The application uses a relational database with the following key models:

- **User**: Stores user information and authentication details
- **Lesson**: Contains typing lessons with associated metadata
- **UserLesson**: Tracks user progress on specific lessons
- **Setting**: Stores user preferences and application settings
- **Payment**: Records user payment transactions

## ✨ Features

- **Interactive Typing Lessons** - Progress through structured lessons tailored to your chosen keyboard layout
- **Real-time Feedback** - Get immediate feedback on typing accuracy and speed
- **Progress Tracking** - Monitor your improvement over time with detailed statistics
- **User Accounts** - Save your progress and continue your learning journey across devices
- **Multiple Layout Options** - Choose from several alternative keyboard layouts to learn
- **Customizable Settings** - Adjust the learning experience to match your preferences
- **Audio Feedback** - Optional sound effects for keystrokes, errors, and lesson completion
- **Error Analysis** - Identify problematic keys and receive targeted practice

## ⌨️ Supported Keyboard Layouts

### Dvorak Simplified Keyboard
- Designed to increase typing speed and reduce finger movement compared to QWERTY
- Available in two-handed and single-handed variants
- Optimized for English language typing efficiency

### Colemak Keyboard Layout
- Modern alternative to QWERTY that's easier to learn than Dvorak
- Keeps many common shortcut keys in the same position as QWERTY
- Designed for efficient and comfortable typing experience
- Places 74% of keystrokes on the home row

## 🚀 Deployment

### Infrastructure as Code with Terraform
This project uses Terraform to provision and manage cloud infrastructure on Google Cloud Platform (GCP). The infrastructure code is found in the `/terraform/gcp-cloud-run` directory.

Key components:
- **Cloud Run services** for containerized frontend and backend
- **Artifact Registry** for Docker image storage
- **Cloud DNS** for custom domain configuration
- **SSL certificates** for secure HTTPS connections

### Deployment Architecture
The application is deployed with the following architecture:
1. **Frontend**: Containerized React application served via Cloud Run
2. **Backend**: Containerized Flask API deployed on Cloud Run
3. **Database**: PostgreSQL database hosted on Supabase
4. **Authentication**: AWS Cognito for user management
5. **CORS Configuration**: Secure cross-origin resource sharing between services

### Managing Dependencies
The deployment uses a two-step process to handle the circular dependency between frontend and backend services:
1. Deploy backend service initially without CORS configuration
2. Deploy frontend service that references backend URL
3. Update backend with a new revision that includes CORS settings with the frontend URL

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- Python 3.10+
- Docker and Docker Compose (optional)

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
python run.py
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Setup
```bash
# Run both frontend and backend
docker-compose up

# Run only backend
docker-compose up backend

# Run only frontend
docker-compose up frontend
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.


