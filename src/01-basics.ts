// (Optional) Change the names below to your friends.
import {Friend, Colleague, ColleagueHistory } from './myTypes'



interface friend1 {
    name: string;
    phone: string;
    age: number
}

interface friend2 {
    name: string;
    phone: string;
    age: number
}




interface colleague1 {
    name: String;
    department: String;
    contact: {
      email: String;
      extension: number;
}}

interface colleague2 {
    name: String;
    department: String;
    contact: {
      email: String;
      extension: number;
}}

interface colleague3 {
    name: String;
    department: String;
    contact: {
      email: String;
      extension: number;
}}




const friend1 : Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
  dob: new Date("1998-11-20") ,
};

const friend2 : Friend = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
  interests: ['Music', 'Sport']
};
  
  export const friends = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
 export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
    
  former: [],
 };
  
  //export const friends = [friend1, friend2];

//export const colleagues = {colleague1, colleague2, colleague3};
  
  //console.log(colleagues.current[0]);