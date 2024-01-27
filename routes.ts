/**
 * An array of routes that are accessible to public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication purposes
 * These routes redirects logged in user to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purpose
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";