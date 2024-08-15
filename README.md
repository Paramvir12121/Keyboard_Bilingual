# Learn_Colemak
This is repository for Learn colemak (name not finalized) web app that uses react as frontend and flask as backend with sql db database. It uses cognito as authentication service 

Database Design:
+-----------------+       +------------------+       +-----------------+
|     User        |<------|     Payment      |       |     Lesson      |
|-----------------|       |------------------|       |-----------------|
| id (PK)         |       | id (PK)          |       | id (PK)         |
| cognito_id      |       | user_id (FK)     |       | title           |
| username        |       | amount           |       | topic           |
| email           |       | currency         |       | subtopic        |
| created_at      |       | payment_date     |       | keyboard_type   |
| updated_at      |       +------------------+       | description     |
| access_token    |                                    | keys            |
| refresh_token   |<---------------------------------->| words           |
| has_paid        |                                    | difficulty      |
+-----------------+       +------------------+         | created_at      |
        ^                 |     Setting      |         | updated_at      |
        |                 |------------------|         +-----------------+
        |                 | id (PK)          |
        |                 | user_id (FK)     |
        |                 | keyboard_layout  |
        |                 | font_size        |
        |                 | show_keyboard    |
        |                 | key_press_sound  |
        |                 | completion_sound |
        |                 | error_sound      |
        |                 | background_music_enabled   |
        |                 | background_music_volume    |
        |                 | background_music_track     |
        |                 | show_success_rate          |
        |                 | show_average_time          |
        |                 | enable_error_heatmap       |
        |                 | typing_speed_goal          |
        |                 | accuracy_goal              |
        |                 | custom_lessons             |
        |                 | email_notifications        |
        |                 | app_notifications          |
        |                 | reminders_enabled          |
        |                 | reminders_time             |
        |                 +------------------+
        |
        v
+-----------------+
|   UserLesson    |
|-----------------|
| id (PK)         |
| user_id (FK)    |
| lesson_id (FK)  |
| completed       |
| score           |
| completion_time |
| accuracy        |
| attempts        |
| errors          |
| completed_at    |
| error_keys      |
+-----------------+

![Initial_db_design](Initial_db_design.png)


Refrenced:
https://github.com/gautamop01/KeyboardConqueror-React-Typing-Practice.git


## Schedule
Week 1 (May 4 - May 10):

- [x] May 4: Finalize Cognito authentication setup and test integration.
1. Backend Feature Development:
- [ ] May 5-6: Implement core features:
2. Develop APIs for practice modes and user progress tracking.
- [ ] May 7-8: Set up Stripe for payment processing in the backend:
- [ ] Implement payment flow and integrate Stripe.
- [ ] May 9-10: Implement advanced features:
Leaderboards, typing challenges, and user profiles APIs.
Week 2 (May 11 - May 17):
3. Frontend Development:

- [ ] May 11: Set up the React project and establish the folder structure.
- [ ] May 12-13: Implement user authentication UI and integrate with AWS Cognito.
- [ ] May 14-15: Integrate the keyboard layout SVG provided by the designer.
- [ ] May 16-17: Develop core features:
Practice modes and user progress tracking UI.
- [ ] Week 3 (May 18 - May 24):
4. Frontend Feature Implementation:

- [ ] May 18-19: Implement advanced frontend features:
Leaderboards, typing challenges, and user profiles.
- [ ] May 20-21: Develop interactive keyboard lighting feature.
- [ ] May 22-23: Ensure UI consistency and responsiveness.
Week 4 (May 25 - May 31):
5. Testing & Deployment:

- [ ] May 25-26: Conduct thorough testing, both manual and automated.
- [ ] May 27-28: Fix bugs and optimize the application.
- [ ] May 29-31: Finalize and deploy the application.


Frontend 
- use https://www.creative-tim.com/product/argon-design-system-react as react template

- use https://coolors.co/  & http://colormind.io/ to get more colors

- use https://mycolor.space/  & https://colors.muz.li/ to get color pallets

- Use https://huemint.com/ to test

- 