import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {AiOutlineClose} from 'react-icons/ai';

export default function VideoModal({open,setOpen,code,title}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClick = (e) =>{
    e.preventDefault()
  }
  
  const handleClose = () => {
    setOpen(false);

};


  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
            <div className='flex justify-end'>
                
                <button onClick={handleClose} className='cursor-pointer hover:bg-slate-200 duration-150 ease-in rounded-full p-2'>
                    <AiOutlineClose />
                </button>
            </div>
        </DialogTitle>
        <DialogContent >
            <iframe id='myframe' src={`https://www.youtube.com/embed/${code}?autoplay=1`}  allow='autoplay' className='iframeSt'></iframe>
            <h1 className='font-semibold text-lg py-3'>{title}</h1>
        </DialogContent>


      </Dialog>
    </div>
  );
}