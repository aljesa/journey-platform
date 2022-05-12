import ReactDOM from 'react-dom/client';
import React from 'react';
import './assets/fonts/montserrat/Montserrat-Bold.ttf';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PlacesToStay from './components/places-to-stay/PlacesToStay';
import PlacesList from './components/places-to-stay/PlacesList';
import GetToKnowTheCounty from './components/get-to-know-the-county/GetToKnowTheCounty';
import GetToKnowTheCountyDetail from './components/get-to-know-the-county/GetToKnowTheCountyDetail';
import NewsOverview from './components/news/NewsOverview';
import Suitcase from './components/suitcase/Suitcase';
import PlacesDetail from './components/places-to-stay/PlacesDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/places-to-stay" element={<PlacesToStay />} />
      <Route path="/places-to-stay/list" element={<PlacesList />} />
      <Route path="/places-to-stay/list/detail" element={<PlacesDetail />} />
      <Route path="/get-to-know-the-county" element={<GetToKnowTheCounty />} />
      <Route path="/news" element={<NewsOverview />} />
      <Route path="/get-to-know-the-county/:countryName" element={<GetToKnowTheCountyDetail />} />
      <Route path="/suitcase" element={<Suitcase />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();