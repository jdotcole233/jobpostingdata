// 1. The data included in this  project was extracted from https://data.world/
// 2.  But the actual source is from https://www.governmentjobs.com/careers/raleighnc
// 3.  Your task to study how the data has been displayed in 2 above and replicate same structure in this project
// 4. It should be a console app
import { results } from "./JobsPosting.js";
import PromptSync from "prompt-sync";

const result_selection = ["Job_Title", "Location", "Job_Type", "Maximum_Salary_Range", "Category", "Department", "Job_Description", "CreateDate_Yr", "CreateDate_Mth", "DaystilExpires", "Maximum_Salary"];
const features = results.features;

const displaySearchResult = (choices, dataset) => {
  dataset.forEach(dataset => {
    choices.forEach(choice => {
      console.log(`${choice.split('_').join(' ')}: ${dataset.properties[choice]}`);
    });
    console.log('\n');
  })
}

const max_salary = features.map(feature => feature.properties.Maximum_Salary).filter(value => value!=null); // returns an array of max salaries
const sum = max_salary.reduce((acc,current) => acc+current);
// console.log(max_salary);
// console.log(`Sum: ${sum}`);

// search for jobs by title
const prompt = PromptSync({sigint:true});
const search_query = prompt('Enter Job Name >> ');

const search_result = features.filter(feature => feature.properties.Job_Title.toLowerCase().includes(search_query.toLowerCase()));
console.log(`Found ${search_result.length} result(s) for ${search_query}\n`);
displaySearchResult(result_selection,search_result);
// displaySearchResult(result_selection, features);