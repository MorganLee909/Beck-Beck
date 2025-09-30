import type {Meta, StoryObj} from "@storybook/react";
import {AutoTextRow} from  "./AutoTextRow";

const meta: Meta<typeof AutoTextRow> = {
    title: "Auto Text Row",
    components: AutoTextRow
};

export default meta;
type Story = StoryObj<typeof AutoTextRow>;

export const standard: Story = {
    render: ()=>{
        <AutoTextRow/>
    }
};
