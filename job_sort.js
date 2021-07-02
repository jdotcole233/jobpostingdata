import { results } from "./JobsPosting.js";


const features = results.features;
const max_salary = features.map(feature => feature.properties.Maximum_Salary).filter(value => value!=null); // returns an array of max salaries
const sorted_salary = max_salary.sort((a, b) => a - b);

console.log(`Low to High >> ${sorted_salary}`);