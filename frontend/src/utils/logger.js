// /**
//  * Production-safe logger utility
//  * Only logs messages in development environment
//  */
// const logger = {
//   log: (...args) => {
//     if (import.meta.env.DEV) {
//       console.log(...args);
//     }
//   },
//   warn: (...args) => {
//     if (import.meta.env.DEV) {
//       console.warn(...args);
//     }
//   },
//   error: (...args) => {
//     // Error logs are usually important even in production
//     console.error(...args);
//   },
//   info: (...args) => {
//     if (import.meta.env.DEV) {
//       console.info(...args);
//     }
//   }
// };

// export default logger;
