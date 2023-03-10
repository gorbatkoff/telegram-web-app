import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



export default function StepperComponent({product, onAdd}) {
  const sizes = ['XXXL', 'XXL', 'XL', 'L', 'M', 'S', 'XS'];
  const [size, setSize] = useState('M');

  const genders = ['Мужской', 'Женский'];
  const [gender, setGender] = useState('Мужской');

  const onAddHandler = () => {
    onAdd(product)
}

  const renderSizeButtons = () => {
    return sizes.map((size, i) => {
      return <button 
      onClick={() => {setSize(size); handleNext()}}
      style={{
        padding: '10px 21px', background: '#FFCB45', color: '#000', boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.25)', border: 'none', outline: 'none', borderRadius: '9px', fontWeight: 'bold', cursor: "pointer"
      }} key={i}>{size}</button>
    })
  }
  
  const renderGenderButtons = () => {
    return genders.map((gender, i) => {
      return <button 
      onClick={() => {setGender(gender); handleNext()}}
      style={{
        padding: '10px 21px', background: '#FFCB45', color: '#000', boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.25)', border: 'none', outline: 'none', borderRadius: '9px', cursor: "pointer"
      }} key={i}>{gender}</button>
    })
  }
  
  const steps = [
    {
      label: 'Выберите размер',
      description: <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 25%)', justifyContent: 'space-between', gridGap: '10px' }}>
        {renderSizeButtons()}
      </div>
    },
    {
      label: 'Укажите ваш пол',
      description: <div style={{ display: 'flex', justifyContent: 'space-evenly', gridGap: '10px' }}>
        {renderGenderButtons()}
      </div>
    },
    {
      label: 'Подтвердите ваш выбор',
      description: <div style={{
        fontSize: "16px",
        lineHeight: "23px",
        textAlign: "center",
        letterSpacing: "-0.01em",
        color: "#838383",
      }}>
        <div>Размер: {size}</div>
        <div>{gender} вариант</div> 

        <Button onClick={onAddHandler} variant="outlined">Согласен</Button>
      </div>,
    },
  ];

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
    <Box sx={{ maxWidth: 400, flexGrow: 1, textAlign: 'center', margin: "0 auto", height: 'fit-content' }}>
      <MobileStepper
        sx={{ backgroundColor: 'var(--tg-theme-bg-color)', color: 'var(--tg-theme-text-color)' }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}

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
      <Box sx={{ height: "fit-content", maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>

    </Box>
  );
}