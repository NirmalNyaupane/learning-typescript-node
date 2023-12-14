/*************************************** Primitative type ************************************************/

//number
/**
    Do not need to explictly define type for constants beacuse of type inference. 
    Type inference in TypeScript is the process of automatically assigning types to variables, parameters, and return
    values when there is no explicit type. 
 */
const a: number = 5;
let b: number;

//boolean
let isValid: boolean;

//string
let userName: string;

/*********************** Array ***********************************************/
const strArr: string[] = [];
const genericArray = Array<number>;

let changedArray: string[];

//tuples, used to define order and type of elements in an array
type userType = [string, string, number, string];
const user1 = ["Nirmal", "Neuapne", 19, "Kathmandu"];

//unknown vs any
/**
     Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type 
    assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first
    asserting or narrowing to a more specific type.
 */

let example: any;

example = "nirmal"; //ok
example = 1; //ok
example = true; //ok

example.isCorrect(); //ok

let unknownType: unknown;
unknownType = 10;

b = unknownType as number; //type assertion


