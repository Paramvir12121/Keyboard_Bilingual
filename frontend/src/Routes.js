const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',

    USER_PROFILE: '/user-profile',


    CONFIRM_EMAIL: '/confirm-email',
    FORGOT_PASSWORD: '/forgot-password',
    FORGOT_PASSWORD_EMAIL: '/forgot-password-email',
    RESET_PASSWORD_CONFIRM: '/reset-password-confirm',
    DASHBOARD: '/dashboard',
    TYPING: '/typing',
    CHECKOUT: '/checkout',
    LESSON_LIST: '/lessonlist',
    SPEED_TEST: '/speedtest',
    SPEED_TEST_PAGE: (id = ':id') =>`/speedtest/${id}`,
    LESSON_PAGE: (id = ':id') => `/lesson/${id}`,  // Use as ROUTES.LESSON_PAGE() or ROUTES.LESSON_PAGE('someId')
    TEST1: '/test1',
    SETTINGS: '/settings',
    NOT_FOUND: '*',
    STATS: '/stats',

    // Pages for the intro
    FIRST_PAGE: '/first',
    SECOND_PAGE: '/second',
    THIRD_PAGE: '/third',
    LANDING_PAGE: '',
  };
  
  export default ROUTES;
  