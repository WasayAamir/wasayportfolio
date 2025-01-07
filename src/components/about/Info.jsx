import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Frontend Developer and Media Specialist</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Multiple Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation"></i>

        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Third Year Computer Science Student</span>
      </div>
    </div>
  );
};

export default Info;