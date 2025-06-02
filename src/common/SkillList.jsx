import PropTypes from 'prop-types';

function SkillList({ skill }) {
  return (
    <span className="skill-item">
      <span className="bullet">•</span>
      <p>{skill}</p>
    </span>
  );
}

SkillList.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillList;
