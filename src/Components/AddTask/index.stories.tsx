import React from "react";
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import AddTask from "../AddTask";

export default { title: "AddTask", decorators: [withKnobs] };
export const AddTaskComponent = () => (
    <AddTask
        isImportant={boolean("Is important?", false)}
        isMyday={boolean("Is myDay?", false)}
        listID={text('listID', 'test-list-id')}
        onAdd={action('on-add')}
    />
);
