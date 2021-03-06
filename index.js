// 1. The data included in this  project was extracted from https://data.world/
// 2.  But the actual source is from https://www.governmentjobs.com/careers/raleighnc
// 3.  Your task to study how the data has been displayed in 2 above and replicate same structure in this project
// 4. It should be a console app
import { results } from "./JobsPosting.js";
import PromptSync from "prompt-sync";

const result_selection = ["Job_Title", "Location", "Job_Type", "Category", "Department", "Job_Description", "Maximum_Salary", "Create_Date"];
const features = results.features;

// function to display the results using the result_selection and filtered object 
const displaySearchResult = (choices, dataset) => {
  dataset.forEach(dataset => {
    choices.forEach(choice => {
      if(choice === "Create_Date"){
        console.log(`${choice.split('_').join(' ')}: created ${moment(dataset.properties[choice],"YYYY/MM/DD hh:mm:ss+00").fromNow()}`);
      } else {
        console.log(`${choice.split('_').join(' ')}: ${dataset.properties[choice]}`);
      }
    });
    console.log('\n');
  })
}

const max_salary = features.map(feature => feature.properties.Maximum_Salary).filter(value => value!=null); // returns an array of max salaries
const sum = max_salary.reduce((acc,current) => acc+current);

// search for jobs by title
const prompt = PromptSync({sigint:true});
const search_query = prompt('Enter keyword to search >> ');

// const search_job = features.filter(feature => feature.properties.Job_Title.toLowerCase().includes(search_query.toLowerCase()));
const search_keyword = features.filter(feature => feature.properties.Job_Description.toLowerCase().includes(search_query.toLowerCase()));
console.log(`Found ${search_keyword.length} result(s) for ${search_query}\n`);
displaySearchResult(result_selection,search_keyword);

// displaySearchResult(result_selection, features);