import React from 'react'
import { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
    Checkbox,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
   
  export default function LogIn() {
    const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
        <>
        <div className="flex items-center justify-center h-[100vh]">
            <Card color="transparent" className="border p-10">
                <div className='flex justify-center'>
                    <img src='/images/Logo_lgcfp.ico' className='w-10' alt='icon LGCFP'/>
                </div>
                <Typography variant="h4"  className="text-center bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent">
                Connexion
                </Typography>
                {/* <Typography variant="h6"  className="text-center">
                Accéder à votre compte LGCFP
                </Typography> */}
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-4">
                    <Input variant="outlined" label="Adresse e-mail" size="lg" color='purple'/>
                    <div className='flex flex-col gap-1'>
                    <Input variant="outlined" type={showPassword ? 'text' : 'password'} size="lg" label="Mot de passe" color='purple'/>
                    <Checkbox size="sm" label="Afficher le mot de passe" onChange={togglePasswordVisibility}/>
                    </div>
                </div>
                <Link to="/AccueilCfp">
                    <Button className="mt-6 bg-[#9333ea]" fullWidth>
                    Se Connecter
                    </Button>
                </Link>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Vous n'avez pas de compte ?{" "}
                    <Link to="/SingIn" className="font-medium text-blue-600">
                    Créer en un
                    </Link>
                </Typography>
                </form>
            </Card>
        </div>
        </>
    );
  }