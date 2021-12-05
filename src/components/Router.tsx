import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Overview } from './Overview';

export const Router = () => {;
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/movie-list' element={<Overview />} />
                <Route
                    path='*'
                    element={<Navigate to='/movie-list' />}
                />
            </Routes>
        </BrowserRouter>
    );
}