import React from 'react';

import Filter from '../Filter';
import FiltersRow from '../FiltersRow';

const filtersConfig = [
  [{
    className: "blockSearch_priorityArea",
    type: "selection",
    description: "Приоритетный район",
    options: [{name: "fnord", label: "fnord"}]
  }, {
    className: "blockSearch_typeOfUse",
    type: "selection",
    description: "Выберите вид разрешенного использования",
    options: [{name: "fnord", label: "fnord"}]
  }, {
    className: "blockSearch_classOfDanger",
    type: "selection",
    description: "Выберите класс опасности производства",
    options: [{name: "fnord", label: "fnord"}]
  }], [{
    className: "blockSearch_square",
    type: "range",
    description: "Площадь ЗУ",
    options: {unit: "м."}
  }, {
    className: "blockSearch_gasification",
    type: "range",
    description: "Газоснабжение",
    options: {unit: "м."}
  }, {
    className: "blockSearch_waterSupply",
    type: "range",
    description: "Водоснабжение",
    options: {unit: "м."}
  }], [{
    className: "blockSearch_severage",
    type: "range",
    description: "Водоотведение",
    options: {unit: "м."}
  }, {
    className: "blockSearch_heatSupply",
    type: "range",
    description: "Теплоснабжение",
    options: {unit: "м."}
  }, {
    className: "blockSearch_electricitySupply",
    type: "range",
    description: "Электроснабжение",
    options: {unit: "м."}
  }]
];

function SearchFilters() {
  return (
    <div className="blockSearch_content">
      {filtersConfig.map((row,i) => (
        <FiltersRow key={i}>
          {row.map((filter, i) => <Filter key={i} {...filter}/>)}
        </FiltersRow>
      ))}
    </div>
  )
}

//<div className="blockSearch_content">
//  <div className="blockSearch_raw">
//    <div className="blockSearch_square blockSearch_blocks">
//      <p>Площадь ЗУ:</p>
//      <div className="blockSearch_quantityOfSquare blockSearch_quantity">
//        <form name="quantityOfSquare" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>м.кв</p>
//        </form>
//      </div>
//    </div>
//    <div className="blockSearch_gasification blockSearch_blocks">
//      <p>Газоснабжение:</p>
//      <div className="blockSearch_quantityOfGas blockSearch_quantity">
//        <form name="quantityOfGas" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>м.куб./сутки</p>
//        </form>
//      </div>
//    </div>
//    <div className="blockSearch_waterSupply blockSearch_blocks">
//      <p>Водоснабжение:</p>
//      <div className="blockSearch_quantityOfWater blockSearch_quantity">
//        <form name="quantityOfWater" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>м.куб./сутки</p>
//        </form>
//      </div>
//    </div>
//  </div>
//  <div className="blockSearch_raw">
//    <div className="blockSearch_severage blockSearch_blocks">
//      <p>Водоотведение:</p>
//      <div className="blockSearch_quantityOfSeverage blockSearch_quantity">
//        <form name="quantityOfSeverage" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>м.куб./сутки</p>
//        </form>
//      </div>
//    </div>
//    <div className="blockSearch_heatSupply blockSearch_blocks">
//      <p>Теплоснабжение</p>
//      <div className="blockSearch_quantityOfHeat blockSearch_quantity">
//        <form name="quantityOfHeat" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>Гкал/час</p>
//        </form>
//      </div>
//    </div>
//    <div className="blockSearch_electricitySupply blockSearch_blocks">
//      <p>Электроснабжение</p>
//      <div className="blockSearch_quantityOfElectricity blockSearch_quantity">
//        <form name="quantityOfElectricity" method="post" action="search.php">
//          <p>от</p>
//          <input type="text" size="3" />
//          <p>до</p>
//          <input type="text" size="3" />
//          <p>кВт</p>
//        </form>
//      </div>
//    </div>
//  </div>
//</div>

export default SearchFilters;