const endpointURL = "http://localhost:5000/TravelPayouts/CheapTickets"



const cheapTickets = async () => {
  await fetch(
    `${endpointURL}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "Application/json",
      },
    }
  )
    .then(response => response.json())
    .then(data => console.log(data));
};


cheapTickets()