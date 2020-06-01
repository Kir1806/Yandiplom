import '../../pages/paper.css';

import Dates from '../components/Dates';
import DataStorage from '../modules/DataStorage';
import Draw from '../components/Draw';
import Title from '../components/Title';

const dates = () => new Dates;
const dataStorage = new DataStorage;

const title = new Title(dataStorage.loadFromStorage());
const draw = new Draw(dates(), dataStorage.loadFromStorage());

title.loadTitle();
draw.drawTableGraph();
