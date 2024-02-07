import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './tuit-services';

// This code is used to fetch all tuits from the database
// It uses the findTuits function from the tuits service
// It is used in the TuitList component

export const findTuitsThunk = createAsyncThunk('tuits/findTuits', async () => await service.findTuits());
export const deleteTuitThunk = createAsyncThunk('tuits/deleteTuit', async (tuitId) => await service.deleteTuit(tuitId));
export const createTuitThunk = createAsyncThunk('tuits/createTuit', async (tuit) => await service.createTuit(tuit));
export const updateTuitThunk = createAsyncThunk('tuits/updateTuit', async (tuit) => await service.updateTuit(tuit));