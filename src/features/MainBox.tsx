import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tooltip,
} from "@chakra-ui/react";
import { tabsData } from "../assets/tabs";
import Flights from "../components/Flights";
import Food from "../components/Food";
import House from "../components/HouseHold";
import Train from "../components/Train";
import Vehicle from "../components/Vehicle";
import "./MainBox.css";
import Result from "./Result";

const components = [House, Vehicle, Flights, Train, Food];

const MainBox = () => {
  return (
    <div className="main__box__container">
      <Tabs isLazy={true} size="md" variant="unstyled">
        <div className="main__box__container__tabs">
          <TabList gap={30}>
            {tabsData.map((obj) => {
              return (
                <Tooltip placement="top" label={obj.label}>
                  <Tab _selected={{ bg: "#f2f2f2", borderRadius: "10px" }}>
                    <img
                      className="tab_icon"
                      width={40}
                      height={40}
                      src={obj.iconSrc}
                      alt={obj.alt}
                    />
                  </Tab>
                </Tooltip>
              );
            })}
          </TabList>
        </div>
        <div className="main__box__container__">
          <div className="main__box__container__panels">
            <TabPanels>
              {components.map((Component) => {
                return (
                  <TabPanel>
                    <Component />
                  </TabPanel>
                );
              })}
            </TabPanels>
          </div>
          <div className="main__box__container__result">
            <Result />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default MainBox;
