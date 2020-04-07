import { useState } from "react";

export const useCheckBox = (i) =>{

    const [selectNum, setSelectNum] = useState(0);
    const [selectLimit, setSelectLimit] = useState(i);

    const handle = (e) =>{
        
        if(e.target.checked){
            if(selectNum >= selectLimit){
                e.target.checked = false;
            }else{
                setSelectNum(selectNum + 1);
            }
        }else{
            setSelectNum(selectNum -1);
        }
        
    };
    return [setSelectLimit, handle, setSelectNum];

};