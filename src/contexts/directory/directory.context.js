import {createContext} from 'react';

import DIRECTORY_DATA from './directory.data';

const DirectoryContext = createContext(DIRECTORY_DATA.sections);

export default DirectoryContext;