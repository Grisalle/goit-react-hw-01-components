export const Statistics = ({ title, stats }) => {
  return (
    <div className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="statList">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
