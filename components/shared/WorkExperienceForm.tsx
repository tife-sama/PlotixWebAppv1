"use client"
import React, { useState } from 'react';
import TagInput from 'react-tag-input';
import { FormControl } from '../ui/form';
// Ensure to import your form control component

type WorkExperience = {
  company: string;
  role: string;
  status: string;
  startDate: string;
  endDate: string;
};

type WorkExperiencesInputProps = {
  value?: WorkExperience[];
  onChangeHandler?: (workExperiences: WorkExperience[]) => void;
};

const WorkExperiencesInput = ({ value, onChangeHandler }: WorkExperiencesInputProps) => {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>(value || []);

  const handleWorkExperiencesChange = (newWorkExperiences: string[]) => {
    // Assume each tag contains structured data as a JSON string
    const parsedExperiences = newWorkExperiences.map(JSON.parse) as WorkExperience[];
    setWorkExperiences(parsedExperiences);
    onChangeHandler && onChangeHandler(parsedExperiences);
  };

  const handleAddExperience = () => {
    // Add a new empty work experience
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences,
      { company: '', role: '', status: '', startDate: '', endDate: '' },
    ]);
  };

  const handleDeleteExperience = (index: number) => {
    // Delete the work experience at the specified index
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences.slice(0, index),
      ...prevExperiences.slice(index + 1),
    ]);
  };

  return (
    <FormControl>
      <TagInput
        value={workExperiences.map(JSON.stringify)}
        onChange={handleWorkExperiencesChange}
        placeholder="Add work experiences..."
      />
      <div>
        {/* Add button to add a new work experience */}
        <button onClick={handleAddExperience}>Add Work Experience</button>
      </div>
      <div>
        {/* Display and add delete button for each work experience */}
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <span>{`Company: ${experience.company}, Role: ${experience.role}`}</span>
            <button onClick={() => handleDeleteExperience(index)}>Delete</button>
          </div>
        ))}
      </div>
    </FormControl>
  );
};

export default WorkExperiencesInput;
