import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { grid } from '@mui/system';

const sizes = ['XXXL', 'XXL', 'XL', 'L', 'M', 'S', 'XS'];

const renderSizes = () => {
  return sizes.map((size, i) => {
    return <button style={{
      padding: '10px 21px', background: 'var(--tg-theme-text-color)', color: '#fff', boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.25)', border: 'none', outline: 'none'
    }} key={i}>{size}</button>
  })
}

const steps = [
  {
    label: 'Выберите размер',
    description: <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 25%)', justifyContent: 'space-between'}}>
      {renderSizes()}
    </div>
  },
  {
    label: 'Укажите ваш пол',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Подтвердите ваш выбор',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function StepperComponent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, textAlign: 'center' }}>
      <MobileStepper
        sx={{backgroundColor: 'var(--tg-theme-bg-color)', color: 'var(--tg-theme-text-color)'}}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          pl: 2,
          bgcolor: "var(--tg-theme-bg-color)",
          color: 'var(--tg-theme-text-color)',
        }}
      >
        <Typography
          sx={{ color: 'var(--tg-theme-text-color', fontWeight: 'bold' }}
        >{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>

    </Box>
  );
}