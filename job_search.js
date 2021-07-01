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
// search for jobs by title
const prompt = PromptSync({sigint:true});
const search_query = prompt('Enter job to search >> ');
const search_job = features.filter(feature => feature.properties.Job_Title.toLowerCase().includes(search_query.toLowerCase()));

console.log(`Found ${search_job.length} result(s) for ${search_query}\n`);
displaySearchResult(result_selection,search_job);