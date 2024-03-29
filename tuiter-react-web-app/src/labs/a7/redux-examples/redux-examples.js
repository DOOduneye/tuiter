import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todo from "./todo-component";
import hello from "./reducers/hello";
import todos from "./reducers/todo-reducer";

import { configureStore } from "@reduxjs/toolkit";
import {Provider} from "react-redux";
const store = configureStore({
    reducer: {
        hello,
        todos
    }
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todo />
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;