import { Button, Card, CardBody, CardFooter, Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from 'react';
import { MyInput } from '../MyInput'
import { ButtonPrimary } from '../Boutons';

function ThematiqueForm() {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [thematics, setThematics] = useState([]);

  useEffect(() => {
    fetch('/domainesFormations.json')
      .then((response) => response.json())
      .then((data) => setDomains(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDomainChange = (event) => {
    if ( event) {
      const selected = event;
      setSelectedDomain(selected);
  
      const selectedDomainObj = domains.find((domain) => domain.domaine === selected);
      if (selectedDomainObj) {
        setThematics(selectedDomainObj.thematique);
      } else {
        setThematics([]);
      }
    }
  };
  
  return (
    <Card className="mx-auto w-full max-w-[32rem]">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h4" color="blue-gray">
          Ajout d'un thématique
        </Typography>
        <div className='flex flex-col gap-2'>
          <MyInput label="Type de formation" />
          <div className='flex flex-col gap-4'>
            <Select variant="outlined" label="Domaine" onChange={handleDomainChange}>
              {domains.map((domain) => (
                <Option key={domain.domaine} value={domain.domaine}>
                  {domain.domaine}
                </Option>
              ))}
            </Select>
            <Select variant="outlined" label="Thématique">
            {thematics.map((thematic) => (
              <Option key={thematic} value={thematic}>
                {thematic}
              </Option>
            ))}
            </Select>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 text-right">
        <ButtonPrimary name="Confirmer">
          Confirmer
        </ButtonPrimary>
      </CardFooter>
    </Card>
  )
}

export default ThematiqueForm
