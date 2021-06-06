import { useEffect, useState } from "react";
import { SingleState, LoadingIndicator } from "./VaccinePageBody";


type VaccineRowProps = {
    site : string,
    vaccine? : string
}

export const VaccineRow = ({site, vaccine}: VaccineRowProps ) => {
    
    let fetchVaccines = true;
    if(vaccine === undefined){
        fetchVaccines = false;
    }

    const reloadRow = () => {
        fetchRoute();
    }    

    const [vacState, setVacState] = useState<SingleState>();
    const [vacStateVisible, setVacStateVisible] = useState(false);

    const fetchRoute = async () => {
        let routeToFetch;
        if(fetchVaccines)
            routeToFetch = `http://192.168.178.64:8080/state/${site}/${vaccine}`;
        else
            routeToFetch = `http://192.168.178.64:8080/state/${site}`;
        setVacStateVisible(false);
        const dataRequest = await fetch(routeToFetch, {
                method: 'GET',
                headers: {'content-type': 'application/json' }
            })
            if (dataRequest.status === 200){
                const stateJson = await dataRequest.json();
                setVacState(stateJson);
                setVacStateVisible(true);
            }
    }

    useEffect(() => {
        fetchRoute();
    }, []);

    return(
        <div style={{display: "inline-flex"}}>
            {!vacStateVisible &&
            (<LoadingIndicator type="bars" />)
            }
            {vacStateVisible && vacState && (
                <>
              <p style={{marginRight: "2em", color: "blanchedalmond"}}>{vacState?.siteNameAndVaccine}</p>
              <p style={{marginRight: "2em"}}>:</p>
              <p style={{marginRight: "2em", color: vacState?.isAvailable ? "green" : "red"}}>{String(vacState?.isAvailable)}</p>

              <input type="button" onClick={reloadRow} value="Reload" style={{
                  backgroundColor: "#34ebb7",
                  color: "white",
                  fontSize: "20px",
                  padding: "10px 60px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "auto",
                  height: "fit-content",
                  margin: "auto"
                   }}/>
              </>
            )}
        </div>
    );
}