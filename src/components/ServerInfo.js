import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerInfo = () => {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/server-info')
      .then(response => setServerData(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!serverData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{serverData.serverName}</h1>
      <p>Mode: {serverData.mode}</p>
      <p>Map: {serverData.map}</p>
      <p>Players: {serverData.players}</p>
      <p>Ping: {serverData.ping}ms</p>
      <p>Tickrate: {serverData.tickrate}Hz</p>
    </div>
  );
};

export default ServerInfo;
