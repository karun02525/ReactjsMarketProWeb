import React from 'react';
import NavBar from '../menu/NavBar'
import ShopView from './ShopView'
import ShopGallery from './ShopGallery'
import ShopRegister from './ShopRegister'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default () => (
  <div>
  <NavBar />
  <div className="pt-5 mt-4">
  <Tabs>
    <TabList>
      <Tab>Shop Register</Tab>
      <Tab>Shop View</Tab>
      <Tab>Gallery</Tab>
    </TabList>

    <TabPanel>
        <ShopRegister/>
    </TabPanel>
    <TabPanel>
         <ShopView/>
    </TabPanel>
    <TabPanel>
        <ShopGallery/>
    </TabPanel>
  </Tabs>
  </div>
  </div>
);