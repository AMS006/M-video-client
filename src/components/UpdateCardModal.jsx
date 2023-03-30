import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, updateCard } from '../redux/Card/Card.action';
import { getUserBucket } from '../redux/Bucket/Bucket.action';
import { useParams } from 'react-router-dom';

export default function UpdateCardModal({open,setOpen,title,url,id,setTitle,setUrl}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useDispatch()
    const userBucket = useSelector((state) => state.bucket.userBucket)
    const selectedBucket = useSelector((state) => state.bucket.bucket)
    const cards = useSelector((state) => state.card.card)
    const [bucket1,setBucket1] = useState()
    useEffect(() => {
      dispatch(getUserBucket())
    }, [])
    let {myId} = useParams()
    useEffect(()=>{
        setBucket1(selectedBucket._id)
    },[selectedBucket])
    const handleSubmit = (e) =>{
        e.preventDefault()
        let code = '';
        let i = url.length
        while(url.charAt(i) != '='){
            i--;
        }
        code = url.substring(i+1,url.length);
        dispatch(updateCard({id,title,code,bucket1,myId}))
        if(bucket1 !== myId){
            dispatch(handleChange(id))
        }
        setOpen(false)
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
          {"Update Card"}
        </DialogTitle>
        <hr />
          <form action="" className='flex flex-col md:w-96 w-full gap-4' onSubmit={handleSubmit}>
        <DialogContent>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="title" className='font-semibold'>Enter Title For Bucket</label>
                <input type="text" value={title} name="title" required className='border px-2 py-1 rounded' id="title" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="url" className='font-semibold'>Enter Youtube Video Url</label>
                <input type="url" name="url" value={url} required className='border px-2 py-1' id="url" placeholder='Enter Youtube Url' onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="bucket" className='font-semibold'>Update Bucket</label>
                {userBucket?.length > 0 && bucket1 && <select className='w-full p-1' value={bucket1} onChange={(e)=> setBucket1(e.target.value)}>
                    <option>Select Bucket</option>
                    {userBucket.map((bucket)=>(
                        <option value={bucket._id} key={bucket._id}>{bucket.title}</option>
                    ))}
                    </select>}
            </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <input type='submit' autoFocus className='bg-blue-600 py-2 px-3 cursor-pointer rounded text-white' value={'Update'} />
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}