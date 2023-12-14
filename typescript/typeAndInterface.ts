/**
 * **************** Type *************************************
 */

//primitative type, useful for documentation mainly
type name = string;
type statusCode = number;

//object literal type
type location = {
  x: number;
  y: number;
};

//union type (can be one among available)
type size = "small" | "medium" | "large";

//template union types
type supportLanguage = "en" | "np";

//Intersection type (A way to merge or extends type)
type TLocation = { x: number } & { y: number };

type IpAddress = `${number}.${number}.${number}.${number}`;
const Ipadd: IpAddress = "192.168.1.1";

//optional key in object literal
type TResponse = {
  version: number;
  size: size;
  isFamous?: boolean;
  stock: number;
};

//function as a key

type JsonResponse = TResponse & {
  update: (stock: number) => void; //takes stock as a parameter and return void
  getCount: () => number;
};

//assigning Jsonresposnes
const JsonAPIResponse: JsonResponse = {
  version: 1.0,
  size: "medium",
  stock: 10,
  update: (stock: number) => {
    console.log(stock);
  },
  getCount: () => {
    return 10;
  },
};

type AssignAnyIndex = {
  [key: string]: number | string;
};

const randomObj: AssignAnyIndex = {
  name: "nirmal neuapnae",
  phone: 879823879873,
};



/**
 ***************************** Interface *************************
 */
 
 /**
  * Interface vs type
  * 1) Interface can describe object shape 
  * 2) Interface can be extends by declearing it multiple time 
  */

 //declaring interface 
 interface Basic{
    id:string, 
    name:string, 
    email:string, 
    phone:number,
 }


 
 interface UserProfile extends Basic{
    province:string, 
    city:string, 
    postalCode:string, 
 }


interface Student{
    name:string, 
    address:string, 
    email:string 
}


//merged with above Student interface 
interface Student{
    college:string, 
    faculty:string, 
    semester:string
}


const studentData :Student={
    name: "",
    address: "",
    email: "",
    college: "",
    faculty: "",
    semester: ""
}