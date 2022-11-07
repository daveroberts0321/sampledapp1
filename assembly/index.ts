///sample dapp project in assemblyScript on NEAR blockchain
/// imports
import { PersistentUnorderedMap} from "near-sdk-as";

// variables
export const courses = new PersistentUnorderedMap<string, string>("COURSES");

// must be exported as it comes from outside the smart contract
export function addCourse(id: string, name: string): void { 

  courses.set(id, name);// exclusive to PersistentUnorderedMap

}

export function getCourse(id: string): string | null { 

  return courses.get(id);

}