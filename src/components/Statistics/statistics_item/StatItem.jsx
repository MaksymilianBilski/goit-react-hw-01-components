import css from 'M:/programy/Programy_kodowanie/github/goit-react-hw-01-components/src/components/Statistics/Statistics.module.css';

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
