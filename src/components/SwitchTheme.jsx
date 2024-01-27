import SwitchLabel from '@material-ui/core/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchTheme = params => {

    const handleChangeTheme = () => {
        params.setThemeMode(!params.themeMode);
    }

    return (
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSun} style={{ fontSize: '1.5em' }} />
            <SwitchLabel checked={params.themeMode} onChange={handleChangeTheme}/>
            <FontAwesomeIcon icon={faMoon} style={{ fontSize: '1.5em' }} />
        </span>
    );
}

export default SwitchTheme;