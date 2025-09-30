import React from "react";
import {Navigation} from "../components/navigation/Navigation";
import {Header} from "../components/header/Header";
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

const css = {
    container: {
        display: "flex"
    },

    nav: {
        width: "300px"
    },

    main: {
        marginTop: "35px",
        width: "1000px",
        display: "flex",
        flexDirection: "column"
    }
};

export const AutoTexts: React.FC<AutoTextProps> = ({autoTexts, style}) => {
    return (
        <div style={css.container}>
            <div style={css.nav}>
                <Navigation
                    userEmail="ivankordonets@gmail.com"
                    dropdownMenuItems={[{label: "Profile"}, {label: "Settings"}, {label: "Sign Out"}]}
                />
            </div>

            <div style={css.main}>
                <Header
                    section="AutoTexts"
                    onClose={false}
                />

                <TableHeader
                    columns={[{label: "Triggering Event"}, {label: "Text Message"}]}
                />
            </div>
        </div>
    );
}
