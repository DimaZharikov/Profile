


export interface IPAddressProps {
    IP : string
    Mask: string
    getAway: string
}

export interface DNSAddressProps {
        pref: string ,
        alt: string

}



export interface stateProps {
    IpAddress : IPAddressProps | null
    DNSAddress : DNSAddressProps | null

}

const initialState: stateProps = {
    IpAddress : null,
    DNSAddress : null

}

interface Action <T> {
    type: ActionType,
    payload: T
}

export enum ActionType {
    SET_IP_ADDRESS = "ETHERNET_COMPONENT/IP_ADDRESS/SET_IP_ADDRESS",
    SET_DNS_ADDRESS = "ETHERNET_COMPONENT/DNS_ADDRESS/SET_DNS_ADDRESS",
}


//ActionCreator
export const setIPAddress = (IpAddress: IPAddressProps) : Action<IPAddressProps> => ({
    type: ActionType.SET_IP_ADDRESS,
    payload: IpAddress
})


export const setDNSAddress = (DNSAddress: DNSAddressProps) : Action<DNSAddressProps> => ({
    type: ActionType.SET_DNS_ADDRESS,
    payload:DNSAddress
})



const EthernetReducer = (state: stateProps = initialState, action: Action<IPAddressProps & DNSAddressProps>): stateProps => {
    switch (action.type) {
        case ActionType.SET_IP_ADDRESS:
            return {...state, IpAddress: action.payload}
        case ActionType.SET_DNS_ADDRESS: {
            return  {...state, DNSAddress: action.payload}
        }
    }
    return state
}




export default EthernetReducer