import React from 'react';
import { mount, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { ImportantView, MyDayView, TasksView, ListView } from "./Views";

configure({ adapter: new Adapter() })

test('render App component for /404', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/404']}>
            <App />
        </MemoryRouter>
    );

    expect(wrapper.find(ImportantView)).toHaveLength(0);
    expect(wrapper.find(MyDayView)).toHaveLength(0);
    expect(wrapper.find(ListView)).toHaveLength(0);
    expect(wrapper.find(TasksView)).toHaveLength(1);
})