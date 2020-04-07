import { useState } from 'react';

export const useChange = i => {
    const [value, setValue] = useState(i);
    const change = () =>{
        if(value === "form-active"){
            setValue('form-deactive');
            setTimeout(() => {setValue("none")}, 1000)
        }else{
            setValue("form-active");
        };
    };
    return [value, change];
};