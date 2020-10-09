import { useLocation } from "react-router";
import { parse, stringify } from "query-string";

export function useSearchParams(){
    const location = useLocation()
    let params = parse(location.search,{parseNumbers:true,arrayFormat:'comma',arrayFormatSeparator:','})
    function setParam(key: string, value: string | number) {
        const newParams = {
            ...params,
            [key]: value
        };
        return buildString(newParams);
    }
    function buildString(newParams:object){
        return location.pathname +'?'+ stringify(newParams,{arrayFormat:'comma',arrayFormatSeparator:','})
    }
    return {params,setParam,buildString, queryString:location.search}
}