import { results } from "./JobsPosting.js";
import PromptSync from "prompt-sync";

const result_selection = ["Job_Title", "Location", "Job_Type", "Category", "Department", "Job_Description", "Maximum_Salary", "Create_Date"];
const features = results.features;

const max_salary = features.map(feature => feature.properties.Maximum_Salary).filter(value => value!=null); // returns an array of max salaries
// count the number of unique occurrences in the max_salary array
// sort the content (from highest to lowest salaries)
// set up tiny containers for the unique content values
// keep track of the sum of the unique tiny containers
// output the values in the tiny_container 

// console.log(max_salary);
const tiny_container = {};
const sorted_maxSalary = max_salary.sort((a, b) => b - a); // sort the array from highest to lowest salary
const sorted_len = sorted_maxSalary.length;
let count = 0;

let first_item = sorted_maxSalary[0];
for(let i = 0; i < sorted_len; i++){
  if(sorted_maxSalary[i] === first_item){
    count++;
    tiny_container[sorted_maxSalary[i]] = count;
  } else {
    first_item = sorted_maxSalary[i];
    count = 1;
  }
}

for(const [key, value] of Object.entries(tiny_container)){
  console.log(`$${key}: (${value} job(s))`);
}