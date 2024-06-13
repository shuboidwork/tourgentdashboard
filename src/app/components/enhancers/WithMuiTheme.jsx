import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const userAgent = getMuiTheme({ userAgent: false });
export const withMuiTheme = userAgent => Component => () =>
  <div>
    <ThemeProvider muiTheme={userAgent}>
      <Component />
    </ThemeProvider>
  </div>;