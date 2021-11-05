import React from 'react';

const UseDarkMode = () => {
  const [theme, setTheme] = React.useState(true);

  const toggleTheme = () => {
    if (theme) {
      localStorage.setItem('theme', 'dark');
      setTheme(false);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme(true);
    }
  };

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);
  return [theme, toggleTheme];
};

export default UseDarkMode;
