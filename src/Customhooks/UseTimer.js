import React from "react";

export const UseTimer = () => {
  const [expiryDate, setExpiryDate] = React.useState(
    Date.now() + 30 * 24 * 60 * 60 * 1000
  );

  function formatTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    // const seconds = Math.floor((time / 1000) % 60);
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {days}
          <span>:</span>
          {hours}
          <span>:</span>
          {minutes}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Days</span>
          <span>Hours</span>
          <span>Minutes</span>
        </div>
      </div>
    );
  }

  React.useEffect(() => {
    async function fetchExpiryDate() {
      try {
        const response = await fetch(); // replace with your API endpoint
        const data = await response.json();
        setExpiryDate(new Date(data.expiryDate).getTime());
      } catch (error) {
        console.error(error);
      }
    }
    fetchExpiryDate();
  }, []);

  if (!expiryDate) {
    return <div>Loading...</div>;
  }
  return {
    formatTime,
    expiryDate,
  };
};
