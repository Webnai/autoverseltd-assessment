import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { ArrowBack } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import { AddBox } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';

const Savings = () => {
  const [openDialog, setOpenDialog] = useState("");

  const toggleDialog = (dialogType) => {
    setOpenDialog(dialogType);
  };

  return (
    <div className="w-full h-full flex flex-col rounded-t-2xl">

      <div className='flex bg-red-500 items-center p-4'>
        <ArrowBack className='self-start hover:cursor-pointer' />
        <h1 className='text-white font-bold text-2xl text-center w-full'>Hi Isaac</h1>
      </div>

      <div className='p-4 flex flex-col gap-4'>


        <div className='grid grid-cols-2 gap-4'>
          {/* Car Savings */}
          <div className='bg-red-200 flex  flex-col justify-between h-[150px] lg:h-[200px] rounded-lg shadow-md p-[1px]'>
            <h1 className=' lg:text-2xl font-semibold text-center mt-2'>New Car Savings</h1>
            <div className='flex flex-col gap-2 lg:p-6 bg-white rounded-lg h-[110px] lg:h-[150px] p-2'>
              <h1 className='font-bold text-xl lg:text-2xl text-center mt-2'>₵13,750</h1>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  height: { xs: 14, lg: 20 },
                  borderRadius: 4,
                  backgroundColor: colors.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "red",
                    borderRadius: 4,
                  },
                }}
              />
              <Button
                onClick={() => toggleDialog("add")}
                sx={{
                  textTransform: "initial",
                  color: "black",
                  fontSize: { sm: "14px", lg: "20px" }, 
                  padding: {  lg: "2px 4px" }, 
                  borderRadius: 2,
                  width: { xs: "100%", sm: "auto" }, 
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
                startIcon={<AddBox sx={{ fontSize: { xs: 16, sm: 20, md: 24, lg: 26} }} />} 
              >
                Add
              </Button>

              {/* popup */}
              <Dialog className='p-8' open={openDialog === "add"} onClose={() => toggleDialog("")}>
                <div className='p-6'>
                  <h1 className='text-center font-bold'>"Guessing a form will pop up here"</h1>
                  <h3 className='text-center text-red-500'>In due time maybe a form will be here</h3>
                </div>
              </Dialog>
            </div>
          </div>

          {/* Maintenance */}
          <div className='bg-gray-300 flex flex-col justify-between h-[150px] lg:h-[200px] rounded-lg shadow-md p-[1px]'>
            <h1 className=' lg:text-2xl font-semibold text-center mt-2'>Maintenance</h1>
            <div className='flex flex-col gap-2 bg-white rounded-lg h-[110px] lg:h-[150px] p-2'>
              <h1 className='font-bold text-xl lg:text-2xl text-center mt-2'>₵3,750</h1>
              <Button
                onClick={() => toggleDialog("schedule")}
                sx={{
                  textTransform: "initial",
                  color: "black",
                  display: "flex",
                  fontSize: { sm: "14px", lg: "20px" }, 
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                  borderRadius: 2,
                }}
              >
                <AddBox sx={{ fontSize: { xs: 16, sm: 20, md: 24, lg: 26} }} />
                Schedule
              </Button>

              {/* Pop up */}
              <Dialog className='p-8' open={openDialog === "schedule"} onClose={() => toggleDialog("")}>
                <div className='p-6'>
                  <h1 className='text-center font-bold'>"Same for this one too"</h1>
                  <h3 className='text-center text-red-500'>In due time maybe a form will be here</h3>
                </div>
              </Dialog>
            </div>
          </div>

        </div>


        <div className='flex flex-col border-2 border-gray-100 justify-center gap-2 rounded-md p-2 lg:p-4'>
          <h1 className='text-center font-bold text-[20px] lg:text-2xl'>Daily Savings Streak</h1>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              height: { xs: 10, lg: 20 },
              width: { xs: "100%", sm: "80%", md: "60%" },
              borderRadius: 4,
              alignSelf: "center",
              backgroundColor: colors.grey[300],
              "& .MuiLinearProgress-bar": {
                backgroundColor: "red",
                borderRadius: 4,
              },
            }}
          />
          <p className='text-center text-gray-700 text-[14px] lg:text-[16px]'>Savings Streak: 21/30 Days</p>
          <p className='text-center text-gray-700 text-[14px] lg:text-[16px]'>7 more days to unlock Free Servicing</p>
        </div>

        <div className='flex flex-col border-2 border-gray-100 rounded-md gap-2 p-2'>
          <h1 className='text-center font-bold text-[20px] lg:text-2xl'>Vehicle Maintenance Tips</h1>
          <ul className='list-disc list-inside'>
            <li className=' text-gray-700 lg:text-xl'>Gearbox maintenace</li>
            <li className=' text-gray-700 lg:text-xl'>Tire rotation</li>
            <li className=' text-gray-700 lg:text-xl'>Frequent Oil change</li>
          </ul>
          <h2 className='text-center font-bold lg:text-xl'>Next Servicing: 22-01-2025</h2>
        </div>
      </div>
    </div>
  )
}

export default Savings;