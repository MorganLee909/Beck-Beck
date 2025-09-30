import type {Meta, StoryObj} from "@storybook/react";
import {AutoText, AutoTexts, When, Then, AutoTextProps} from "./AutoTexts";

const meta: Meta<typeof AutoTexts> = {
    title: "AutoTexts",
    component: AutoTexts,
    parameters: {
        layout: "fullscreen"
    }
};

export default meta;
type Story = StoryObj<typeof AutoTexts>;

const data: AutoText[] = [
    {
        id: 1,
        when: When.CaseOpened,
        then: Then.SendMessage,
        message: "Your case has been opened"
    },
    {
        id: 2,
        when: When.MedicalRecordsRequested,
        then: Then.SendMessage,
        message: "Requesting your medical records"
    }
];

export const withData: Story = {
    args: {
        items: data
    }
};
