# 🎹 Keyboard Bilingual

![GitHub last commit](https://img.shields.io/github/last-commit/Paramvir12121/Keyboard_Bilingual)
![GitHub repo size](https://img.shields.io/github/repo-size/Paramvir12121/Keyboard_Bilingual)
![Website](https://img.shields.io/website?url=https%3A%2F%2Flearn-colemak.vercel.app)

## 📖 Overview

Keyboard Bilingual is an interactive web application designed to help users learn and practice alternative keyboard layouts. Whether you're looking to increase typing speed, reduce finger strain, or simply explore more ergonomic typing methods, this platform provides a comprehensive learning experience.

**Live Demo:** [https://keyboardbilingual.com](keyboardbilingual.com)

## ✨ Features

- **Interactive Typing Lessons** - Progress through structured lessons tailored to your chosen keyboard layout
- **Real-time Feedback** - Get immediate feedback on typing accuracy and speed
- **Progress Tracking** - Monitor your improvement over time with detailed statistics
- **User Accounts** - Save your progress and continue your learning journey across devices
- **Multiple Layout Options** - Choose from several alternative keyboard layouts to learn

## ⌨️ Supported Keyboard Layouts

### Dvorak Simplified Keyboard
- Designed to increase typing speed and reduce finger movement compared to QWERTY
- Available in two-handed and single-handed variants
- Optimized for English language typing efficiency

### Colemak
- A modern alternative that improves upon both QWERTY and Dvorak
- Maintains familiar shortcut positions (Ctrl+C, Ctrl+V, etc.) from QWERTY
- 35 times less finger motion than QWERTY with only 17 changed key positions

### Workman
- Focused on reducing finger travel distance and promoting ergonomic movements
- Designed to address certain shortcomings in Colemak layout
- Optimized for common English language patterns

### Colemak-DH (Colemak Mod-DH)
- An enhanced variant of Colemak with optimized D and H key positions
- Further reduces lateral finger movements and increases comfort
- Particularly beneficial for matrix or split keyboards

## 🏗️ Architecture

Keyboard Bilingual employs a modern tech stack with a hybrid deployment model:

![Application Architecture](app_diagram.png)

### Frontend
- Built with React and Vite for optimal performance
- Responsive design for seamless use across devices
- Deployed on Vercel for reliable global access

### Backend
- Flask API handling user data and authentication
- SQL database for secure and efficient data storage
- AWS Cognito integration for reliable user authentication

## 📊 Database Design

The application uses a relational database structure to effectively track user progress:

![Database Schema](db.png)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- SQL database (MySQL or PostgreSQL)
- AWS account (for Cognito setup)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Paramvir12121/Keyboard_Bilingual.git
   cd Keyboard_Bilingual
   ```

2. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Set up the backend:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   flask run
   ```

4. Configure your environment variables for database and AWS connections.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 🙏 Acknowledgements

- [KeyboardConqueror-React-Typing-Practice](https://github.com/gautamop01/KeyboardConqueror-React-Typing-Practice) - For inspiration and reference
- [Nginx Configuration Guide](https://itnext.io/how-to-serve-your-backends-with-nginx-a-comprehensive-guide-c8a74955c6ed) - For deployment architecture 

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Paramvir - [GitHub Profile](https://github.com/Paramvir12121)

Project Link: [https://github.com/Paramvir12121/Keyboard_Bilingual](https://github.com/Paramvir12121/Keyboard_Bilingual)


