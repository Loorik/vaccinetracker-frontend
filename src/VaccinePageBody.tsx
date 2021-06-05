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