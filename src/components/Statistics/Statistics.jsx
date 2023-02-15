import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
   <section className={css.statistics}>
            {title && <h2 className={css.title}>{ title }</h2>}

            <ul className={css.stat__list}>
                {stats.map(data => (
                    <li className={css.item} key = {data.id}>
                        <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
            </li>
        ))}
  </ul>
</section>
    ) 
}


Statistics.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}