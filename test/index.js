/**
 * This is by no means a real unit test or anything like
 * that. It's just to see that it's working in the console.
 */

const { highlight } = require('../index')

console.log(highlight("SELECT COUNT(id), COUNT(id), `id`, `username` FROM `users` WHERE `email` = 'test@example.com' AND `something` = 'oke' AND 1=1"))
console.log(highlight('SELECT "users".* FROM "users"'))