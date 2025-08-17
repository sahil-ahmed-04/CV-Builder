export const List = ({ layout = 'bullets', items = [] }) => {
  // Render numbered list
  if (layout === 'number') {
    return (
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }
  
  // Render alphabetical list
  if (layout === 'alphabets') {
    return (
      <ol style={{ listStyleType: 'lower-alpha' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }
  
  // Render bullet list (default)
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};