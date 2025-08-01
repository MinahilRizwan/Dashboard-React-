import React from 'react';

const data = [
  { label: 'Income Target', value: 71, color: '#be123c' },
  { label: 'Expenses Target', value: 54, color: '#22c55e' },
  { label: 'Spendings Target', value: 32, color: '#facc15' },
  { label: 'Totals Target', value: 89, color: '#3b82f6' },
];

const cards = [
  {
    label: 'Income',
    value: '$ 5,456',
    change: '+14%',
    changeColor: '#22C55E',
  },
  {
    label: 'Expenses',
    value: '$ 4,764',
    change: '▲ 8%',
    changeColor: '#EF4444',
  },
  {
    label: 'Spendings',
    value: '$ 1.5M',
    change: '▼ 15%',
    changeColor: '#22C55E',
  },
  {
    label: 'Totals',
    value: '$ 31,564',
    change: '+76%',
    changeColor: '#FACC15',
  },
];

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  padding: '20px',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '16px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  borderBottom: '4px solid #E5E7EB',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const labelStyle = {
  fontSize: '12px',
  color: '#888',
  marginBottom: '8px',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const valueStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#333',
};

const changeStyle = (color) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: color,
});

const TargetSection = () => {
  return (
    <>
      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              borderBottom: `4px solid ${card.changeColor}`,
            }}
          >
            <div style={labelStyle}>{card.label}</div>
            <div style={rowStyle}>
              <div style={valueStyle}>{card.value}</div>
              <div style={changeStyle(card.changeColor)}>{card.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 600,
              color: '#111827',
            }}
          >
            Target Section
          </h3>
          <a
            href="#"
            style={{
              fontSize: '13px',
              color: '#3b82f6',
              textDecoration: 'none',
              marginTop: '8px',
            }}
          >
            View Details
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '16px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    color: item.color,
                    width: '40px',
                  }}
                >
                  {item.value}%
                </div>
                <div
                  style={{
                    flex: 1,
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: '#e5e7eb',
                    marginLeft: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#6b7280',
                }}
              >
                {item.label}
              </div>

              {idx === data.length - 1 && (
                <button
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: '#facc15',
                    borderRadius: '50%',
                    width: '28px',
                    height: '39px',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    border: 'none',
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>⚙️</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TargetSection;
