import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import FloatingContact from "./components/FloatingContact"; 
 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
 
import MT5WhiteLabel from "./pages/MT5WhiteLabel"; 
import MT5Server from "./pages/MT5Server"; 
import LiquidityBridge from "./pages/LiquidityBridge"; 
import MT4WhiteLabel from "./pages/MT4WhiteLabel"; 
import MT4Server from "./pages/MT4Server"; 
import PriceFeed from "./pages/PriceFeed"; 
import BrokerCRM from "./pages/BrokerCRM"; 
import BrokerageTechnology from "./pages/BrokerageTechnology"; 
 
import ForexBroker from "./pages/ForexBroker"; 
import CFDBroker from "./pages/CFDBroker"; 
import PropTrading from "./pages/PropTrading"; 
import MultiAssetBroker from "./pages/MultiAssetBroker"; 
 
import Resources from "./pages/Resources"; 
 
import MT4vsMT5 from "./pages/ResourcesPage/MT4vsMT5"; 
import MT5WhiteLabelProvider from "./pages/ResourcesPage/MT5WhiteLabelProvider"; 
import MT5WhiteLabelCost from "./pages/ResourcesPage/MT5WhiteLabelCost"; 
import MT5WhiteLabelPricing from "./pages/ResourcesPage/MT5WhiteLabelPricing"; 
import ForexLiquidityBridge from "./pages/ResourcesPage/ForexLiquidityBridge"; 
import BrokerCRMIntegration from "./pages/ResourcesPage/BrokerCRMIntegration"; 
import StartForexBroker from "./pages/ResourcesPage/StartForexBroker"; 
import ForexBrokerTechnology from "./pages/ResourcesPage/ForexBrokerTechnology"; 
 
// NEW PAGES 
import Infrastructure from "./pages/Infrastructure"; 
import BrokerTechnologyStack from "./pages/ResourcesPage/BrokerTechnologyStack"; 
import MT5MarketData from "./pages/MT5MarketData"; 
 
 
function App() { 
  return ( 
    <BrowserRouter> 
      {/* Global Navbar */} 
      <Navbar /> 
 
      <Routes> 
        {/* =================================
            HOME
        ================================= */} 
        <Route path="/" element={<Home />} /> 
 
        {/* =================================
            MT5 WHITE LABEL
        ================================= */} 
        <Route 
          path="/mt5-white-label" 
          element={<MT5WhiteLabel />} 
        /> 
 
        <Route 
          path="/provider/mt5-white-label.html" 
          element={<MT5WhiteLabel />} 
        /> 
 
        {/* =================================
            ABOUT & CONTACT
        ================================= */} 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
 
        {/* =================================
            MT5 SERVER
        ================================= */} 
        <Route 
          path="/mt5-server" 
          element={<MT5Server />} 
        /> 
 
        {/* =================================
            LIQUIDITY BRIDGE
        ================================= */} 
        <Route 
          path="/liquidity-bridge" 
          element={<LiquidityBridge />} 
        /> 
 
        {/* =================================
            MT4 WHITE LABEL
        ================================= */} 
        <Route 
          path="/mt4-white-label" 
          element={<MT4WhiteLabel />} 
        /> 
 
        {/* =================================
            MT4 SERVER
        ================================= */} 
        <Route 
          path="/mt4-server" 
          element={<MT4Server />} 
        /> 
 
        {/* =================================
            MARKET DATA / PRICE FEED
        ================================= */} 
        <Route 
          path="/pricefeed" 
          element={<PriceFeed />} 
        /> 
 
        {/* Home page Market Data Feeds card (existing route retained) */} 
        <Route 
          path="/market-data" 
          element={<PriceFeed />} 
        /> 

        {/* Alias for links that navigate to /price-feed: opens the new MT5 Market Data page */}
        <Route
          path="/price-feed"
          element={<MT5MarketData />}
        />

        {/* Dedicated MT5 Market Data page */}
        <Route
          path="/mt5-market-data"
          element={<MT5MarketData />}
        />

        {/* Legacy infrastructure URL retained for existing menu/footer links */}
        <Route
          path="/infrastructure/market-data.html"
          element={<MT5MarketData />}
        />
 
        {/* =================================
            BROKER CRM
        ================================= */} 
        <Route 
          path="/broker-crm" 
          element={<BrokerCRM />} 
        /> 
 
        {/* =================================
            BROKERAGE TECHNOLOGY
        ================================= */} 
        <Route 
          path="/brokerage-technology" 
          element={<BrokerageTechnology />} 
        /> 
 
        {/* =================================
            FOREX BROKER
        ================================= */} 
        <Route 
          path="/solutions/forex-broker" 
          element={<ForexBroker />} 
        /> 
 
        <Route 
          path="/forex-brokers" 
          element={<ForexBroker />} 
        /> 
 
        {/* Plan Your Launch alternate URL */} 
        <Route 
          path="/solutions/forex-brokers" 
          element={<ForexBroker />} 
        /> 
 
        {/* =================================
            CFD BROKERS
        ================================= */} 
        <Route 
          path="/cfd-brokers" 
          element={<CFDBroker />} 
        /> 
 
        <Route 
          path="/solutions/cfd-broker.html" 
          element={<CFDBroker />} 
        /> 
 
        {/* =================================
            PROP TRADING / PROP FIRMS
        ================================= */} 
        <Route 
          path="/prop-firms" 
          element={<PropTrading />} 
        /> 
 
        {/* Home page Prop Firms card */} 
        <Route 
          path="/solutions/prop-firms" 
          element={<PropTrading />} 
        /> 
 
        {/* =================================
            MULTI-ASSET BROKERS
        ================================= */} 
        <Route 
          path="/multi-asset-brokers" 
          element={<MultiAssetBroker />} 
        /> 
 
        {/* =================================
            RESOURCES MAIN PAGE
        ================================= */} 
        <Route 
          path="/resources" 
          element={<Resources />} 
        /> 
 
        {/* =================================
            MT4 VS MT5 GUIDE
        ================================= */} 
        <Route 
          path="/resources/mt4-vs-mt5" 
          element={<MT4vsMT5 />} 
        /> 
 
        {/* =================================
            MT5 WHITE LABEL PROVIDER
        ================================= */} 
        <Route 
          path="/resources/mt5-white-label-provider" 
          element={<MT5WhiteLabelProvider />} 
        /> 
 
        {/* =================================
            MT5 WHITE LABEL COST
        ================================= */} 
        <Route 
          path="/resources/mt5-white-label-cost" 
          element={<MT5WhiteLabelCost />} 
        /> 
 
        {/* =================================
            MT5 WHITE LABEL PRICING
        ================================= */} 
        <Route 
          path="/resources/mt5-white-label-pricing" 
          element={<MT5WhiteLabelPricing />} 
        /> 
 
        {/* =================================
            FOREX LIQUIDITY BRIDGE
        ================================= */} 
        <Route 
          path="/resources/forex-liquidity-bridge" 
          element={<ForexLiquidityBridge />} 
        /> 
 
        <Route 
          path="/resources/forex-bridge-guide" 
          element={<ForexLiquidityBridge />} 
        /> 
 
        {/* =================================
            BROKER CRM INTEGRATION
        ================================= */} 
        <Route 
          path="/resources/crm-integration-guide" 
          element={<BrokerCRMIntegration />} 
        /> 
 
        <Route 
          path="/resources/broker-crm-integration" 
          element={<BrokerCRMIntegration />} 
        /> 
 
        {/* =================================
            START A FOREX BROKER
        ================================= */} 
        <Route 
          path="/resources/start-forex-broker" 
          element={<StartForexBroker />} 
        /> 
 
        <Route 
          path="/resources/start-a-forex-broker" 
          element={<StartForexBroker />} 
        /> 
 
        {/* =================================
            FOREX BROKER TECHNOLOGY STACK
        ================================= */} 
        <Route 
          path="/resources/forex-technology-stack" 
          element={<ForexBrokerTechnology />} 
        /> 
 
        <Route 
          path="/resources/forex-broker-technology.html" 
          element={<ForexBrokerTechnology />} 
        /> 
 
        <Route 
          path="/resources/forex-broker-technology" 
          element={<ForexBrokerTechnology />} 
        /> 
 
        {/* =================================
            NEW: INFRASTRUCTURE PAGE
        ================================= */} 
        <Route 
          path="/infrastructure" 
          element={<Infrastructure />} 
        /> 
 
        {/* =================================
            NEW: BROKER TECHNOLOGY STACK GUIDE
        ================================= */} 
        <Route 
          path="/resources/broker-technology-stack" 
          element={<BrokerTechnologyStack />} 
        /> 
      </Routes> 
 
      {/* Global Footer */} 
      <Footer /> 
 
      {/* Global Floating WhatsApp & Telegram Buttons */} 
      <FloatingContact /> 
    </BrowserRouter> 
  ); 
} 
 
export default App;
