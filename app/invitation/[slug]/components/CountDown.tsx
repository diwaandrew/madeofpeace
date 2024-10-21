import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('2024-11-10T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="w-[325px] mx-auto flex justify-center border rounded-full shadow py-2 px-8 mb-4">
      <div className="flex gap-2">
        <div className=" flex  p-1">
          <h2 className="text-xl font-bold m-0 p-0" id="hari">
            {days}
          </h2>
          <small className="ms-1 me-0 my-0 p-0 d-inline">Hari</small>
        </div>
        <div className="flex p-1">
          <h2 className="text-xl font-bold m-0 p-0" id="jam">
            {hours}
          </h2>
          <small className="ms-1 me-0 my-0 p-0 d-inline">Jam</small>
        </div>
        <div className="flex  p-1">
          <h2 className="text-xl font-bold m-0 p-0" id="menit">
            {minutes}
          </h2>
          <small className="ms-1 me-0 my-0 p-0 d-inline">Menit</small>
        </div>
        <div className="flex p-1">
          <h2 className="text-xl font-bold m-0 p-0" id="detik">
            {seconds}
          </h2>
          <small className="ms-1 me-0 my-0 p-0 d-inline">Detik</small>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
