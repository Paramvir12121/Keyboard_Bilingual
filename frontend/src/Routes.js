const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    CONFIRM_EMAIL: '/confirm-email',
    FORGOT_PASSWORD: '/forgot-password',
    FORGOT_PASSWORD_EMAIL: '/forgot-password-email',
    RESET_PASSWORD_CONFIRM: '/reset-password-confirm',
    DASHBOARD: '/dashboard',
    TYPING: '/typing',
    CHECKOUT: '/checkout',
    LESSON_LIST: '/lessonlist',
    LESSON_PAGE: (id = ':id') => `/lesson/${id}`,  // Use as ROUTES.LESSON_PAGE() or ROUTES.LESSON_PAGE('someId')
    TEST1: '/test1',
    SETTINGS: '/settings',
    NOT_FOUND: '*',
    STATS: '/stats',
  };
  
  export default ROUTES;
  