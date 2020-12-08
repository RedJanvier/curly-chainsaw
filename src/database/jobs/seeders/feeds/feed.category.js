import { objectParserCategory } from '../helpers/objectParser';
import main from './categoryProfile/feed.main';
import shoes from './categoryProfile/feed.shoe';
import sandals from './categoryProfile/feed.sandal';
import accessories from './categoryProfile/feed.accessory';
import electronic from './categoryProfile/feed.electronic';
import clothes from './categoryProfile/feed.clothe';
import baby from './categoryProfile/feed.baby';
import furniture from './categoryProfile/feed.furniture';
import newElectronic from './categoryProfile/feed.newElectronic';
import beautyAndHealth from './categoryProfile/feed.beautyAndHealth';
import saloonAndSpa from './categoryProfile/feed.saloonAndSpa';

const data = [];
objectParserCategory(main, data);
objectParserCategory(shoes, data);
objectParserCategory(sandals, data);
objectParserCategory(clothes, data);
objectParserCategory(accessories, data);
objectParserCategory(electronic, data);
objectParserCategory(furniture, data);
objectParserCategory(beautyAndHealth, data);
objectParserCategory(saloonAndSpa, data);
objectParserCategory(newElectronic, data);
objectParserCategory(baby, data);

module.exports = data;
