import Services from './Services'

interface DataCo {

    ComName:string,
    EmpCo:number,
    yerEx:number
    Serv:string,
    Amont:number,
}


function Companies(props :DataCo) {
  return (
    <div>

        <p>{props.ComName}</p>
        <p>{props.yerEx}</p>
        <p>{props.EmpCo}</p>
        <Services Serv={props.Serv}  Amont={props.Amont}/>
    </div>
  )
}

export default Companies