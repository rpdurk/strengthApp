const axios = require('axios');
// create a const for the apiKey to avoid it being shared
const apiKey = process.env.apiKey;

const searchExercises = async () => {
  try {
  const searchAPIForExercises = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=999&ordering=id')
  .then((res) => {
    console.log(
      res.data.results.filter((exercise) => exercise.muscles.length !== 0)
    );
  });
  } catch (err) {
    console.log(err)
  }
};

// this function will search for muscles used in a given exercise
const exerciseMuscleInfo = async () => {
  try {
    // const config = {
    // headers: {'Authorization': 'Token '+apiKey}
    // }
    const searchExerciseMusclesUsed = await axios.get(`https://wger.de/api/v2/exerciseinfo/`)
      console.log(searchExerciseMusclesUsed.data.results);
  } catch (err) {
    console.log(err)
  }  
};

// exerciseMuscleInfo();

// this function will search for exercises already in the database
const exerciseImage = async () => {
  try {
    // const config = {
    // headers: {'Authorization': 'Token '+apiKey}
    // }
    const searchExerciseImages = await axios.get(`https://wger.de/api/v2/exerciseimage/`)
      console.log(searchExerciseImages.data.results);
  } catch (err) {
    console.log(err)
  }  
};

// this function will search for exercises specifically by an ID associated with API
const exerciseInfoByAPIId = async (ExerciseId) => {
  try {
    // const config = {
    // headers: {'Authorization': 'Token '+apiKey}
    // }
    const searchExerciseByAPIId = await axios.get(`https://wger.de/api/v2/exerciseinfo/${ExerciseId}`)
      console.log(searchExerciseByAPIId.data);
  } catch (err) {
    console.log(err)
  }  
};

// need to deconstruct the variable for the API call
module.exports = { 
  searchExercises,
  exerciseMuscleInfo,
  exerciseImage,
  exerciseInfoByAPIId,
};