/**
 * Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
 * TypeScript provides both numeric and string-based enums.
 */

//Numberic enum

enum Language {
  Java, //by default value will be 0
  Python,
  Javascript,
  go,
}

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

enum Role {
  Admin = "ADMIN",
  User = "User",
}
