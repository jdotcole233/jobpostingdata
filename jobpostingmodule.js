import { results } from "./JobsPosting";

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

const features = results.features;

export {displaySearchResult, features};