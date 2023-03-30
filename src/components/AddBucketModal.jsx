import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { createBucket } from '../redux/Bucket/Bucket.action';

export default function AddBucketModal({open,setOpen}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [title,setTitle] = useState("")
    const [img,setImg] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(createBucket({title,img}))
        setOpen(false)
        setTitle("")
        setImg("")
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
        <DialogTitle id="responsive-dialog-title">
          {"Add New Bucket"}
        </DialogTitle>
        <hr />
          <form action="" className='flex flex-col md:w-96 w-full gap-4' onSubmit={handleSubmit}>
        <DialogContent>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="title" className='font-semibold'>Enter Title For Bucket</label>
                <input type="text" name="title" required className='border px-2 py-1 rounded' id="title" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="url" className='font-semibold'>Enter Image Url Of Bucket</label>
                <input type="url" name="url" required className='border px-2 py-1' id="url" placeholder='Enter Image Url' onChange={(e) => setImg(e.target.value)}/>
            </div>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <input type='submit'  autoFocus className='bg-blue-600 py-2 px-3 cursor-pointer rounded text-white' value={'Add'} />
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}