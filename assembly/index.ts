///sample dapp project in assemblyScript
/// imports
import { PersistentUnorderedMap} from "near-sdk-as";

// variables
const courses = new PersistentUnorderedMap<string, string>("COURSES");