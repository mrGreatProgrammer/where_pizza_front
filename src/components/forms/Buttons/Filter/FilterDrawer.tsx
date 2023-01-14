import React from "react";
import { Drawer, DrawerProps, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import "./FilterDrawer.scss";
import RadioBtns from "../../RadioBtns/RadioBtns";
import {
  filterDataCheese,
  filterDataComponents,
  filterDataGeneral,
  filterDataMeat,
} from "../../../../fakeData/filterData";
import FilterBtnDrop from "./FilterBtnDrop";
import FilterBtnAccept from "./FilterBtnAccept";

type filterMiniDrawerProps = {
  visibleFilterMiniDrawer: boolean;
  onClose: any;
  onFilter: any;
};

let placement: DrawerProps['placement'] = "top"

const FilterDrawer = ({
  visibleFilterMiniDrawer,
  onClose,
  onFilter,
}: filterMiniDrawerProps) => {
  const [generalFilter, setGeneralfilter] = React.useState(1);
  const [cheeseFilter, setCheesefilter] = React.useState(0);
  const [meatFilter, setMeatfilter] = React.useState(0);
  const [componentsFilter, setComponetsfilter] = React.useState(0);

  function changeCurrentGeneralFilter({target: {value}}: RadioChangeEvent) {
    console.log(value);
    setGeneralfilter(value);
  }
  function changeCurrentCheeseFilter({target: {value}}: RadioChangeEvent) {
    console.log(value);
    setCheesefilter(value);
  }
  function changeCurrentMeatFilter({target: {value}}: RadioChangeEvent) {
    console.log(value);
    setMeatfilter(value);
  }
  function changeCurrentComponentsFilter({target: {value}}: RadioChangeEvent) {
    console.log(value);
    setComponetsfilter(value);
  }

  function dropFilter() {
    setGeneralfilter(0);
    setCheesefilter(0);
    setMeatfilter(0);
    setComponetsfilter(0);
    onClose();
  }

  
  if(window.outerWidth<760){
    placement = "bottom";
  }else{ 
    placement = "right";
  }

  function acceptFilter() {}

  return (
    <>
      <Drawer
        // className={styles.main}
        className="rounded-t-2xl"
        placement={placement}
        title="Фильтры"
        // placement={"right"}
        height={"90%"}
        width={520}
        onClose={onClose}
        open={visibleFilterMiniDrawer}
        extra={<Space></Space>}
      >
        <div>
          <RadioBtns
            title="Общее"
            btns={filterDataGeneral}
            onchange={changeCurrentGeneralFilter}
            defaultValue={generalFilter}
            currentValue={generalFilter}
          />
          <RadioBtns
            title="Сыр"
            btns={filterDataCheese}
            onchange={changeCurrentCheeseFilter}
            defaultValue={cheeseFilter}
            currentValue={cheeseFilter}
          />
          <RadioBtns
            title="Мясо"
            btns={filterDataMeat}
            onchange={changeCurrentMeatFilter}
            defaultValue={meatFilter}
            currentValue={meatFilter}
          />
          <RadioBtns
            title="Компонент"
            btns={filterDataComponents}
            onchange={changeCurrentComponentsFilter}
            defaultValue={componentsFilter}
            currentValue={componentsFilter}
          />
        </div>
        <div className="flex flex-row justify-between mt-5">
          <FilterBtnDrop onClick={dropFilter} />
          <FilterBtnAccept />
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
