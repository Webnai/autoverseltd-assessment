import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { ArrowBack, NoEncryption } from '@mui/icons-material';
import { AddBox } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';

const Savings = () => {

  return (
    <div className="w-full h-full flex flex-col rounded-t-2xl border border-gray-300">

      <div className='flex bg-red-500 items-center p-4 rounded-t-2xl'>
        <ArrowBack className='self-start hover:cursor-pointer' />
        <h1 className='text-white font-bold text-2xl text-center w-full'>Hi Isaac</h1>
      </div>

      <div className='p-4 flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>

          <div className='bg-red-200 flex flex-col justify-between h-[150px] rounded-lg shadow-md p-[1px]'>
            <h1 className='text-[14px] font-semibold text-center mt-2'>New Car Savings</h1>
            <div className='flex flex-col gap-2 bg-white rounded-lg h-[110px] p-2'>
              <h1 className='font-bold text-xl text-center'>₵13,750</h1>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  height: 10,
                  borderRadius: 4,
                  backgroundColor: colors.grey[300],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "red",
                    borderRadius: 4,
                  },
                }}
              />
              <Button sx={{ textTransform: 'initial', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' }, borderRadius: 2 }} startIcon={<AddBox />} >
                Add
              </Button>
            </div>
          </div>

          <div className='bg-gray-300 flex flex-col justify-between h-[150px] rounded-lg shadow-md p-[1px]'>
            <h1 className='text-[14px] font-semibold text-center mt-2'>New Car Savings</h1>
            <div className='flex flex-col gap-2 bg-white rounded-lg h-[110px] p-2'>
              <h1 className='font-bold text-xl text-center'>₵3,750</h1>
              <Button
                sx={{
                  textTransform: "initial",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                  borderRadius: 2,
                }}
              >
                <AddBox sx={{ fontSize: 24 }} />
                Schedule
              </Button>
            </div>
          </div>
        </div>

        <div className='flex flex-col border-2 border-gray-100 justify-center gap-2 rounded-md p-2'>
          <h1 className='text-center font-bold text-md'>Daily Savings Streak</h1>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              height: 10,
              borderRadius: 4,
              backgroundColor: colors.grey[300],
              "& .MuiLinearProgress-bar": {
                backgroundColor: "red",
                borderRadius: 4,
              },
            }}
          />
          <p className='text-center text-gray-700 text-[14px]'>Savings Streak: 21/30 Days</p>
          <p className='text-center text-gray-700 text-[14px]'>7 more days to unlock Free Servicing</p>
        </div>

        <div className='flex flex-col border-2 border-gray-100 rounded-md gap-2 p-2'>
          <h1 className='text-center font-bold text-md'>Vehicle Maintenance Tips</h1>
          <ul className='list-disc list-inside'>
            <li className='text-[13px] text-gray-700'>Gearbox maintenance</li>
            <li className='text-[13px] text-gray-700'>Tire rotation</li>
            <li className='text-[13px] text-gray-700'>Frequent Oil change</li>
          </ul>
          <h2 className='text-center font-bold text-[13px]'>Next Servicing: 22-01-2025</h2>
        </div>
      </div>
    </div>
  )
}

export default Savings;