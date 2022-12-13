import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const StatItem = ({ stats }) => (
  <ul className={css.statList}>
    {stats.map(el => (
      <li
        className={css.item}
        style={{
          backgroundColor: getRandomHexColor(),
        }}
        key={el.id}
      >
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      key: PropTypes.number
  })
  )
}