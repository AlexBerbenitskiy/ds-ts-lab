import {Friend, Colleague} from './myTypes'
import {friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}


function allOlder(f: Friend[]): string[] {
     return f.map((f) => {
       f.age += 1;
       return `${f.name} is now ${f.age}`;
     });
   }


console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
     const result = cs.sort(
       (c1, c2) => c1.contact.extension - c2.contact.extension
     );
     return result[cs.length - 1];
   }
   console.log(highestExtension(colleagues.current));


   export function addColleague(colleagueArray: Colleague[], name: string, department: string, email: string) {
     const highestExtensionValue = highestExtension(colleagueArray).contact.extension;
     colleagueArray.push({
       name, department, contact: { email, extension: highestExtensionValue + 1,
},
     });
   }
   


   addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
   console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
   