
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ColorPicker, Home, AnimatedRoutes } from "./Components";
import { getPaletteObj } from "./Workers/jsonWorker";
import './App.css';
import { useDispatch } from 'react-redux';
import { setObject } from './redux/Slices/paletteSlice';
import { useTransition, animated } from "react-spring";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPaletteObj(process.env.PUBLIC_URL + "/localData/pallete.json")
      .then(data => dispatch(setObject(data)))
      .catch(error => {
        console.error(error);
        dispatch(setObject({}));
      });
  }, [])

  return (
    <BrowserRouter>
      <AnimatedRoutes>
        <Route index element={<Home />} />
        <Route path="/color-picker" element={<ColorPicker />} />
      </AnimatedRoutes>

    </BrowserRouter>
  );
}

export default App;
