import React from 'react';
import { useForm } from 'react-hook-form'
import  './Ship.css'
import {useAuth} from '../Login/UseAuth'

const Shipment = () => {
   
        const { register, handleSubmit,  errors } = useForm()
        const onSubmit = data => { console.log(data) };
        const auth =useAuth()
      
     
      
        return (
        
          <form  className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
            <input name="name" defaultValue ={auth.user.name} ref={register({ required: true })} placeholder="name"  />
            {
            errors.name && <span className="error">Name is required</span>
            }



            <input name="email" defaultValue ={auth.user.email} ref={register({ required: true })} placeholder="email" />
            {errors.email && <span className="error"> email is required</span>}

            <input name="AddressLine1" ref={register({ required: true })} placeholder="Address"  />
            {errors.AddressLine1 && <span className="error">Address is required</span>}

            <input name="AddressLine2" ref={register} />
           

            
            <input name="city" ref={register({ required: true })} placeholder="city" />
            {errors.city && <span className="error">city is required</span>}


            
            <input name="zipCode" ref={register({ required: true })} placeholder="ZipCode" />
            {errors.zipCode && <span className="error">zipCode is required</span>}


            
            <input type="submit" />
          </form>
        )
};

export default Shipment;
