import * as React from 'react';
import { Stepper, Step, Button, Typography, Card, Input } from "@material-tailwind/react";
import {
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { HomeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function SignIn() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [formData, setFormData] = React.useState({
    step1: [],
    step2: [],
    step3: [],
  });

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleInputChange = (e, fieldIndex) => {
    const { value } = e.target;
    const newFormData = { ...formData };
    newFormData[`step${activeStep + 1}`][fieldIndex] = value;
    setFormData(newFormData);
  };

  const initializeFormData = () => {
    const initialFormData = {};
    stepContent.forEach((step, index) => {
      initialFormData[`step${index + 1}`] = new Array(step.fields.length).fill('');
    });
    setFormData(initialFormData);
  };

  React.useEffect(() => {
    initializeFormData();
  }, []);

  const stepContent = [
    {
      icon: <UserIcon className="h-5 w-5" />,
      title: 'Etape 1',
      fields: [
        {
          type: 'text',
          name: 'nom_du_responsable',
          label: 'Nom du résponsable',
        },
        {
          type: 'text',
          name: 'prenom_du_responsable',
          label: 'Prénom du résponsable',
        },
      ],
    },
    {
      icon: <HomeIcon className="h-5 w-5" />,
      title: 'Etape 2',
      fields: [
        {
          type: 'text',
          name: 'raison',
          label: 'Raison social',
        },
        {
          type: 'email',
          name: 'email',
          label: 'Adresse e-mail',
        },
      ],
    },
    {
      icon: <LockClosedIcon className="h-5 w-5" />,
      title: 'Etape 3',
      fields: [
        {
          type: 'password',
          name: 'password',
          label: 'Mot de passe',
        },
        {
          type: 'password',
          name: 'confirm_password',
          label: 'Confirmation de mot de passe',
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-full">
        <Card color="transparent" className="border px-14 py-12 container mx-auto w-[40%]">
          <Typography variant="h4" color="blue-gray" className="text-center bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent">
            Inscription
          </Typography>

          <Typography variant="h6" color="blue-gray" className="text-center pb-8 ">
            Créez votre compte Gratuitement
          </Typography>


          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {stepContent.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)}>
                {step.icon}
                <div className="absolute -bottom-[2rem] w-max text-center" >
                  <Typography
                    variant="h6"
                    color={activeStep === index ? 'blue-gray' : 'gray'}
                  >
                    {step.title}
                  </Typography>
                </div>
              </Step>
            ))}
          </Stepper>
          <div className="mt-16 flex flex-col gap-3">
            {stepContent[activeStep].fields.map((field, fieldIndex) => (
              <Input
                key={fieldIndex}
                type={field.type}
                name={field.name}
                label={field.label}
                value={formData[`step${activeStep + 1}`][fieldIndex] || ''}
                onChange={(e) => handleInputChange(e, fieldIndex)}
                variant="outlined"
                size="lg"
                color='purple' />
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep} className="mt-6 bg-[#9333ea] capitalize">
              Précedent
            </Button>
            {isLastStep ?
              <Link to="/AccueilCfp">
                <Button onClick={handleNext} className="mt-6 bg-[#9333ea] capitalize">Terminer</Button>
              </Link> :
              <Button onClick={handleNext} className="mt-6 bg-[#9333ea] capitalize">Suivant</Button>
            }

          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Vous-avez déjà un compte ?{" "}
            <Link to="/Login" className="font-medium text-blue-600">
              Connecter ici..
            </Link>
          </Typography>
        </Card>
      </div>
    </>
  );
}