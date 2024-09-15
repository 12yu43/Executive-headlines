import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Home/Index";
import Technology from "./Pages/Technology";
import StartupInsights from "./Pages/StartupInsights";
import LeaderSpeaks from "./Pages/LeaderSpeaks";
import Cxo from "./Pages/Cxo";
import Deatil from "./Pages/Technology/Deatil";
import Magazine from "./Pages/Magazine";
import Client from "./Pages/Client";
import MagazineDeatil from "./Pages/Magazine/MagazineDeatil";
import Search from "./Pages/Search";
import News from "./Pages/News";
import About from "./Pages/About/Index";
import Listing from "./Pages/Listing";
import Video from "./Pages/Video";

// const $ = window.jQuery;


function App() {


 
  return (
    
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
   
        <Route path="/" element={<Index /> } />
        <Route path="/technology/:slug" element={<Technology />} />
        <Route path="/industry/:slug" element={<Technology />} />
        <Route path="/cxo" element={<Cxo />} />
        <Route path="/startup-insights" element={<StartupInsights />} />
        <Route path="/leader-speaks" element={<LeaderSpeaks />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/magazines" element={<Magazine />} />
        <Route path="/featured-vendors" element={<Client />} />
        <Route path="/:category/:slug" element={<Deatil />} />
        <Route path="/industry-news-detail/:slug" element={<Deatil />} />
        <Route path="/business-news-detail/:slug" element={<Deatil />} />
        <Route path="/magazine/:slug" element={<MagazineDeatil />} />
        <Route path="/cxo/:slug" element={<Deatil />} />
        <Route path="/startup-insights/:slug" element={<Deatil />} />
        <Route path="/feature/:slug" element={<Deatil />} />
        <Route path="/cover-story/:slug" element={<Deatil />} />
        <Route path="/post-detail" element={<Deatil />} />
        <Route path="/sports" element={<News />} />
        <Route path="/lifestyle" element={<News />} />
        <Route path="/entrepreneurs" element={<News />} />
        <Route path="/entertainment-media" element={<News />} />
        <Route path="/awards-events" element={<News />} />
        <Route path="/news-detail/:slug" element={<Deatil />} />
        {/* <Route path="/popular-news-detail/:slug" element={<Deatil />} /> */}
        <Route path="/about-us" element={<About />} />
        <Route path="/reprint-permission" element={<About />} />
        <Route path="/disclaimer" element={<About />} />
        <Route path="/privacy-policy" element={<About />} />
        <Route path="/advertise" element={<About />} />
        <Route path="/contact-us" element={<About />} />
        <Route path="/listing/:slug" element={<Listing />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
