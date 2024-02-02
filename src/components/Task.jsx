import React from 'react';

const Task = () => {
  const outcomeData = [
    'Virtual DOM',
    'State',
    'Props',
    'JSX',
    'Components (functional and className)',
    'Lifecycle components',
    'Fragment',
    'Use event handlers with React',
  ];

  return (
    <section
      id='task'
    >
      <h2>Advanced Frontend Development</h2>
      <h3 className='sub-title'>Week 03 - Basic React JS</h3>

      <div className='section'>
        <h3>Learning Outcomes</h3>
        <p>Learn the following basic concept of ReactJS framework:</p>
        <ul id='objectives'>
          {outcomeData.map((outcome, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div className='section'>
        <h3>Deliverables</h3>
        <p>Presentation of Study from learning outcome.</p>
      </div>
    </section>
  );
};

export default Task;
