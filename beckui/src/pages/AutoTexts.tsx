import React from "react";
import {Navigation} from "../components/navigation/Navigation";
import {TableHeader} from "../components/table/TableHeader";

export enum When{
    CaseOpened,
    MedicalRecordsRequested,
    DemandPackageSent,
    OfferRecieved,
    NegotiationsInProgress,
    SettlementReached,
    CheckRecieved,
    CaseClosed,
    FollowUpAppointmentReminder,
};

export enum Then{
    SendMessage
};

export interface AutoText{
    id: number
    when: When;
    then: Then;
    message: string;
};

export interface AutoTextProps{
    autoTexts?: AutoText[],
    style?: React.CSSProperties
};

const css = {};

export const AutoTexts: React.FC<AutoTextProps> = ({autoTexts, style}) => {
    return (
        <div>
            <Navigation
                userEmail="ivankordonets@gmail.com"
                dropdownMenuItems={[{label: "Profile"}, {label: "Settings"}, {label: "Sign Out"}]}
            />

            <TableHeader
                columns={[{label: "Triggering Event"}, {label: "Text Message"}]}
            />
        </div>
    );
}
