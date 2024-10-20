import React, { useState } from "react";
import WeightGoal from "../Component/WeightGoal/WeightGoal";
import Reasones from "../Component/Reasones/Reasones";
import ActivityLevel from "../Component/ActivityLevel/ActivityLevel";
import UserDetailsForm from "../Component/UserDetailsForm/UserDetailsForm";
import TargetWeight from "../Component/TargetWeight/TargetWeight"; // Import TargetWeight

function AddDietInfoPage() {
  const [count, setCount] = useState(0);
  const [weightGoalSelection, setWeightGoalSelection] = useState(null);
  const [reasonSelection, setReasonSelection] = useState(null);
  const [activitySelection, setActivitySelection] = useState(null);
  const [userDetails, setUserDetails] = useState({
    gender: "",
    dob: "",
    location: "",
  });
  const [targetWeightData, setTargetWeightData] = useState({
    height: "",
    weight: "",
    goalWeight: "",
    unit: "cm",
    weightUnit: "kg",
    goalWeightUnit: "kg",
  });

  const handleNext = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleBack = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleUserDetails = (details) => {
    setUserDetails(details);
    handleNext();
  };

  const handleTargetWeightChange = (data) => {
    setTargetWeightData(data);
    handleNext();
  };

  return (
    <>
      {count === 0 && (
        <WeightGoal
          onNext={handleNext}
          onSelection={setWeightGoalSelection}
          activeSelection={weightGoalSelection}
        />
      )}
      {count === 1 && (
        <Reasones
          onNext={handleNext}
          onBack={handleBack}
          onSelection={setReasonSelection}
          activeSelection={reasonSelection}
        />
      )}
      {count === 2 && (
        <ActivityLevel
          onNext={handleNext}
          onBack={handleBack}
          onSelection={setActivitySelection}  
          activeSelection={activitySelection}
        />
      )}
      {count === 3 && (
        <UserDetailsForm
          onNext={handleUserDetails}
          onBack={handleBack}
          userDetails={userDetails} // Pass current user details
        />
      )}
      {count === 4 && (
        <TargetWeight
          onNext={handleTargetWeightChange} // Update to handle target weight data
          onBack={handleBack}
          targetWeightData={targetWeightData} // Pass current target weight data
        />
      )}
      {count === 5 && (
        <div className="summary">
          <h2>Summary of Your Selections</h2>
          <p><strong>Weight Goal:</strong> {weightGoalSelection}</p>
          <p><strong>Reason for Goal:</strong> {reasonSelection}</p>
          <p><strong>Activity Level:</strong> {activitySelection}</p>
          <p><strong>Gender:</strong> {userDetails.gender}</p>
          <p><strong>Date of Birth:</strong> {userDetails.dob}</p>
          <p><strong>Location:</strong> {userDetails.location}</p>
          <p><strong>Height:</strong> {targetWeightData.height} {targetWeightData.unit}</p>
          <p><strong>Weight:</strong> {targetWeightData.weight} {targetWeightData.weightUnit}</p>
          <p><strong>Goal Weight:</strong> {targetWeightData.goalWeight} {targetWeightData.goalWeightUnit}</p>
        </div>
      )}
    </>
  );
}

export default AddDietInfoPage;
