// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Abel",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "Abelino.Chinchilla@icloud.com";
const about = {
  paragraph:
    "My name is Abel and I am based in Houston, Texas, USA. I currently work for a major corporation but actively open for contract work. -- Abelino.Chinchilla@icloud.com --  281-387-3247" ,
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "LAMBDA",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-aws",
  },
  {
    name: "API GATEWAY",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "COGNITO",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "S3",
    // svg: '',
    faClass: "fab fa-aws",
  },
  {
    name: "DYNAMODB/REDSHIFT",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "AWS Data Pipeline - Step Functions",
    skills: ["AWS Lambda, Glue, Redshift, S3"],
    url: "https://portfolio-abel.s3.amazonaws.com/pipeline.png",
  },
      {
    // Add image in './styles/images.css' in #project2
    id: "project5",
    name: "AWS Connect to Kinesis to Lambda to DynamoDB to Quicksight",
    skills: ["AWS Kinesis, Lambda, DynamoDB, Quicksight, Athena"],
    url: "https://portfolio-abel.s3.amazonaws.com/Connect_to_QuickSight.jpg",
  },
      {
    // Add image in './styles/images.css' in #project2
    id: "project6",
    name: "S3 Move One Million files in 60 seconds",
    skills: ["AWS S3, S3 Batch Operations, MS Access"],
    url: "https://portfolio-abel.s3.amazonaws.com/projects/S3-batch-operations.png",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Figma with DynamoDB",
    skills: ["React, Figma, DynamoDB, Cognito"],
    url: "https://master.d2be9othvc8guf.amplifyapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Vaccine Verification App",
    skills: ["React, NodeJS, Lambda, API, Cognito, MYSQL"],
    url: "https://master.dtkxb0wm4c9pi.amplifyapp.com/admin/index",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Special Olympics Admin Site",
    skills: ["AWS Amplify, NodeJS, Datatables"],
    url: "https://www.soscadministration.org/admin/index",
  },
    {
    // Add image in './styles/images.css' in #project2
    id: "project7",
    name: "Your Project could be next",
    skills: ["AWS lambda functions, CRUD operations with dynamo dB , CORS-enabled API Gateway and Amazon Cognito authorization. Route 53, API Gateway, EC2, Cloud Formation, IAM, Cloud Watch"],
    url: "https://www.soscadministration.org/admin/index",
  },


];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "AWS Data Pipeline",
    skills: ["Lambda, Glue, Redshift, S3"],
    url: "https://bit.ly/3fSQJXY",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to message me for any work or consultation. I am at your order. Thank you.",
  copyright: "",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {

  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  //instagram: "https://instagram.com",
  linkedin: "www.linkedin.com/in/abelchinchilla",
  resume: "https://portfolio-abel.s3.amazonaws.com/Abel's+Resume.pdf",
    github: "https://github.com/feathars91",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
