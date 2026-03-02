import {
  Alert,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  createTheme,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slider,
  Switch,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import { blue, grey, orange, teal } from '@mui/material/colors';
import React, { useState } from 'react';
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[700],
      light: blue[400],
      dark: blue[900],
    },
    secondary: {
      main: teal[600],
      light: teal[400],
      dark: teal[800],
    },
    background: {
      default: grey[50],
      paper: '#ffffff',
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    button: { textTransform: 'none' as const },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[400],
      light: blue[300],
      dark: blue[600],
    },
    secondary: {
      main: orange[400],
      light: orange[300],
      dark: orange[600],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[400],
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    button: { textTransform: 'none' as const },
  },
});

type Props = {};

export default function MuiTheme({}: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar position="static" color="primary" elevation={1}>
          <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              MUI Theme Demo
            </Typography>
            <Typography variant="body2" sx={{ mr: 1 }}>
              {isDarkMode ? 'Dark' : 'Light'}
            </Typography>
            <Switch
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              color="secondary"
            />
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Themed components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Toggle dark/light mode with the switch or icon in the app bar.
          </Typography>

          <Tabs
            value={tabValue}
            onChange={(_, v) => setTabValue(v)}
            sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
          >
            <Tab label="Buttons & inputs" />
            <Tab label="Cards & chips" />
            <Tab label="Alerts & lists" />
          </Tabs>

          {tabValue === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Buttons
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button color="primary" variant="contained">
                    Primary
                  </Button>
                  <Button color="secondary" variant="contained">
                    Secondary
                  </Button>
                  <Button color="primary" variant="outlined">
                    Outlined
                  </Button>
                  <Button color="secondary" variant="text">
                    Text
                  </Button>
                </Box>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Text fields
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <TextField label="Outlined" variant="outlined" color="primary" size="small" />
                  <TextField label="Filled" variant="filled" color="secondary" size="small" />
                </Box>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Slider & progress
                </Typography>
                <Slider defaultValue={30} color="primary" valueLabelDisplay="auto" sx={{ maxWidth: 200 }} />
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <CircularProgress color="primary" size={24} />
                  <CircularProgress color="secondary" size={24} />
                </Box>
              </Paper>
            </Box>
          )}

          {tabValue === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    Card title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cards use background.paper and adapt to the active theme.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Action
                  </Button>
                  <Button size="small" color="secondary">
                    Cancel
                  </Button>
                </CardActions>
              </Card>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Chips
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="Default" color="primary" />
                  <Chip label="Secondary" color="secondary" variant="outlined" />
                  <Chip label="Filled" color="primary" variant="filled" />
                </Box>
              </Paper>

              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Divider
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Content above
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.primary">
                  Content below — divider color follows theme.
                </Typography>
              </Paper>
            </Box>
          )}

          {tabValue === 2 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Alert severity="success" color="success">
                Success alert — theme affects container and text.
              </Alert>
              <Alert severity="info">Info alert.</Alert>
              <Alert severity="warning">Warning alert.</Alert>
              <Alert severity="error">Error alert.</Alert>

              <Paper elevation={1} sx={{ overflow: 'hidden' }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ px: 2, pt: 2 }}>
                  List (theme-aware)
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Primary text" secondary="Secondary text" />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText primary="Another item" secondary="Theme colors apply" />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
