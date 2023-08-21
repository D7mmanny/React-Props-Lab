interface DataSe {

    Serv:string,
    Amont:number,
}


function Services(props :DataSe) {
  return (
    <div>
        <p>{props.Serv}</p>
        <p>{props.Amont}</p>

    </div>
  )
}

export default Services