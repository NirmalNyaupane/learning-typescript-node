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

type Data = {
  [key: string]: any;
};
const ApiResponse = (
  statusCode: StatusCodes,
  data: Data[],
  message: string
) => {
  return {
    statusCode,
    data: data,
    message,
  };
};

//calling function
ApiResponse(
  StatusCodes.Success,
  [
    {
      user: {
        id: "3434353442",
        name: "Nirmal Neuapne",
        email: "neupane@gmail.com",
      },
      video: ["1234353454", "4353564656", "0459584394"],
    },
  ],
  "Sucessfull"
);

// Utilities type in Typescript
interface Blog {
  title: string;
  content: string;
  isPublished: boolean;
  author?: string;
}

/************* Required *********************/
const blog1: Required<Blog> = {
  title: "Typescript",
  content:
    "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  isPublished: true,
  author: "Nirmal", //if author is not provided, it is an error
};

/************************** Partial ****************************** */
const updateBlog = (blog: Partial<Blog>) => {
  return {
    ...blog1,
    ...blog,
  };
};

/**************************** Pick *******************************/
type blogPreview = Pick<Blog, "title" | "isPublished">;

/**************************** Omit ************************/
interface Todo extends Omit<Blog, "isPublished" | "author"> {
  isCompleted: boolean;
  startDate: string;
  endDate: string;
}

const nirmalTodo: Todo = {
  isCompleted: false,
  title: "Study ts",
  content: "study ts from ts docs",
  startDate: "2023-12-15T04:45",
  endDate: "2023-12-15T06:45",
};

/** **************** Record ************************/
type keyvalue = "name" | "email" | "address" | "phone";

type newType = Record<keyvalue, string>;

const recordTyepe: newType = {
  name: "Nirmal Neuapen",
  email: "neuapenniral@gamale.com",
  address: "aeoreoroj",
  phone: "983480945",
};
