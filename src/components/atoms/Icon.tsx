'use-client';

import Menu from '@/svg/menu.svg';

const iconMap = {
    menu: Menu
};

export type IconName = keyof typeof iconMap;

const Icon = ({ name }: { name: IconName }) => {
    const CurrentIcon = iconMap[name] || <p>icon missing?</p>;

    return <CurrentIcon className={`svg-${name}`} />;
};

export default Icon;
