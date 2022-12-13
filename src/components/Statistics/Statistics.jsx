import css from './Statistics.module.css';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <StatisticsItem stats={stats} />
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
