interface Dataw {

    name:string,
    langProgr:string,
    yerEx:number,
    comp:string
}

function Programers(props :Dataw) {
  return (
    <div className="conte">
        <p>{props.name}</p>
        <p>{props.langProgr}</p>
        <p>{props.yerEx}</p>
        <p>{props.comp}</p>
      
    </div>
  )
}

export default Programers