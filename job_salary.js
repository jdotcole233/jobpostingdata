import { results } from "./JobsPosting.js";
import PromptSync from "prompt-sync";

const result_selection = ["Job_Title", "Location", "Job_Type", "Category", "Department", "Job_Description", "Maximum_Salary", "Create_Date"];
const features = results.features;