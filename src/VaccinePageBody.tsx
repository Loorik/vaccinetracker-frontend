import ReactLoading from 'react-loading';
import { VaccineRow } from './VaccineRow';


export const LoadingIndicator = ({type, color} : any) => (
    <ReactLoading type={type} color= {color} height={250} width={150} />
);

export type SingleState = {
    siteNameAndVaccine : string;
    isAvailable: boolean;
}

export enum Vaccine {
    astra = "astra",
    biontech = "biontech",
    jessen = "jessen"
}


export const  VaccinePageBody = () => {
    let rows = [];
    let page = "terminland"
    for(const vaccine in Vaccine){
        rows.push(
        <div>
            <VaccineRow site={page} vaccine={vaccine}/>
        </div>
        )
    }
    rows.push(
        <div>
            <VaccineRow site={"impfzentrum"}/>
        </div>
    )


    return (
     <div style= {{display: "block"}}>
       {rows}
     </div>
    
    );
}


/*
  {!allStatesVisible && (<LoadingIndicator type="spin"/>)}
         {allStatesVisible &&(
             allStates?.states.map((state) => {
                 return <p>
                     {state.siteNameAndVaccine}
                     :
                     {state.isAvailable}
                 </p>
             })
         )}
         <p>{allStates?.states[0].siteNameAndVaccine}</p>
         */


/*

() => {
                let rows : JSX.Element[] = [];
                let page = "terminland";
                for(const vaccine in Object.keys(Vaccine)){
                    rows.push(<VaccineRow site={page} vaccine={vaccine}/>)
                } 
                rows.push(<VaccineRow site={"impfzentrum"}/>);    
                return rows;
           }
*/