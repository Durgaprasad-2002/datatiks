function BenefitCard({ benefit, className, addToRefs, cardRefs }) {
  return (
    <div
      className={`benefit-card ${className}`}
      ref={(el) => addToRefs(el, cardRefs)}
    >
      <div className="benefit-img-cont">
        <img src={benefit.img} alt="img" className="benefit-img" />
      </div>
      <h4>{benefit.title}</h4>
    </div>
  );
}

function AcheivementCard({ acheive, className, cardRefs, addToRefs }) {
  return (
    <div
      className={`acheive-card ${className}`}
      ref={(el) => addToRefs(el, cardRefs)}
    >
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

function TrainingCard({ training, className, addToRefs, cardRefs }) {
  return (
    <div
      className={`training-card ${className}`}
      ref={(el) => addToRefs(el, cardRefs)}
    >
      <div className="training-img-cont">
        <img src={training.img} alt="img" className="training-img" />
      </div>
      <h4>
        {training.title}
        <br /> <span className="under-line"></span>
      </h4>
      <p>{training.summary}</p>
    </div>
  );
}

function CourseCard({ course, className }) {
  return (
    <div className={`course-card ${className}`}>
      <img src={course.img} alt="img" className="course-img" />
      <h4>{course.title}</h4>
    </div>
  );
}

export { BenefitCard, AcheivementCard, TrainingCard, CourseCard };
