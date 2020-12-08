import { objectParserProfileCategory } from '../../helpers/objectParser';
import main from './feed.main';
import shoes from './feed.shoe';
import sandals from './feed.sandal';
import accessories from './feed.accessory';
import electronic from './feed.electronic';
import clothes from './feed.clothe';
import baby from './feed.baby';
import furniture from './feed.furniture';
import newElectronic from './feed.newElectronic';
import beautyAndHealth from './feed.beautyAndHealth';
import saloonAndSpa from './feed.saloonAndSpa';

const data = [];
objectParserProfileCategory(main, data);
objectParserProfileCategory(shoes, data);
objectParserProfileCategory(sandals, data);
objectParserProfileCategory(clothes, data);
objectParserProfileCategory(accessories, data);
objectParserProfileCategory(electronic, data);
objectParserProfileCategory(furniture, data);
objectParserProfileCategory(beautyAndHealth, data);
objectParserProfileCategory(saloonAndSpa, data);
objectParserProfileCategory(newElectronic, data);
objectParserProfileCategory(baby, data);

module.exports = data;
