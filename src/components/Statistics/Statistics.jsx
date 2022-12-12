import css from './Statistics.module.css';
import { StatItem } from '../StatisticsItem/StatItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <StatItem stats={stats} />
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
