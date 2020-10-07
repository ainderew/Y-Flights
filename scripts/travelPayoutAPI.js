

const token = "bc3e586d4ac8295cde912de926fa9a5e";

const cheapTickets = async () => {
  await fetch(
    `http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=&return_date=&token=${token}`,
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