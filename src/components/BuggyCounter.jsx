import React, { useState } from "react";

const Counter = ({ label, count, onIncrement }) => {
  return (
    <div>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

const BuggyCounter = () => {
  const [reverse, setReverse] = useState(false);

  const [counters, setCounters] = useState([
    { id: 1, label: "Counter A", count: 0 },
    { id: 2, label: "Counter B", count: 0 },
  ]);

  const toggleReverse = () => setReverse(!reverse);

  const handleIncrement = (id) => {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
    );
  };

  const displayCounters = reverse ? [...counters].reverse() : counters;

  return (
    <div>
      <button onClick={toggleReverse}>Reverse Order</button>
      <div style={{ display: "flex", gap: "20px" }}>
        {displayCounters.map((counter) => (
          <Counter
            key={counter.id}
            label={counter.label}
            count={counter.count}
            onIncrement={() => handleIncrement(counter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BuggyCounter;
