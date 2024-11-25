function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <div className="benefit-img-cont">
        <img src={benefit.img} alt="img" className="benefit-img" />
      </div>
      <h4>{benefit.title}</h4>
    </div>
  );
}

function AcheivementCard({ acheive }) {
  return (
    <div className="acheive-card">
      <div
        className="acheive-img-cont"
        style={{ backgroundImage: `url(${acheive.img_1})` }}
      >
        <img src={acheive.img_2} alt="img" className="acheive-img" />
      </div>
      <h4>{acheive.title}</h4>
    </div>
  );
}

function TrainingCard({ training }) {
  return (
    <div className="training-card">
      <div className="training-img-cont">
        <img src={training.img} alt="img" className="training-img" />
      </div>
      <h4>
        {training.title}
        <be /> <span className="under-line"></span>
      </h4>

      <p>{training.summary}</p>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.img} alt="img" className="course-img" />
      <h4>{course.title}</h4>
    </div>
  );
}

export { BenefitCard, AcheivementCard, TrainingCard, CourseCard };
