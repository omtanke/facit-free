import { TColor } from '../../type/color-type';

export interface IServiceProps {
	name: string;
	icon: string;
	color: TColor;
}

const surfing: IServiceProps = {
	name: 'Surfing',
	icon: 'Surfing',
	color: 'info',
};
const kiteSurfing: IServiceProps = {
	name: 'Kite Surfing',
	icon: 'Kitesurfing',
	color: 'danger',
};
const tennis: IServiceProps = {
	name: 'Tennis',
	icon: 'SportsTennis',
	color: 'success',
};
const kayaking: IServiceProps = {
	name: 'Kayaking',
	icon: 'Kayaking',
	color: 'info',
};
const handball: IServiceProps = {
	name: 'Handball',
	icon: 'SportsHandball',
	color: 'warning',
};
const iceSkating: IServiceProps = {
	name: 'Ice Skating',
	icon: 'IceSkating',
	color: 'info',
};
const snowboarding: IServiceProps = {
	name: 'Snowboarding',
	icon: 'Snowboarding',
	color: 'warning',
};
const volleyball: IServiceProps = {
	name: 'Volleyball',
	icon: 'SportsVolleyball',
	color: 'warning',
};
const cricket: IServiceProps = {
	name: 'Cricket',
	icon: 'SportsCricket',
	color: 'success',
};
const yoga: IServiceProps = {
	name: 'Yoga',
	icon: 'SelfImprovement',
	color: 'success',
};
const hiking: IServiceProps = {
	name: 'Hiking',
	icon: 'Hiking',
	color: 'danger',
};
const football: IServiceProps = {
	name: 'Football',
	icon: 'SportsFootball',
	color: 'success',
};

const SERVICES: { [key: string]: IServiceProps } = {
	SURFING: surfing,
	KITE_SURFING: kiteSurfing,
	TENNIS: tennis,
	KAYAKING: kayaking,
	HANDBALL: handball,
	ICE_SKATING: iceSkating,
	SNOWBOARDING: snowboarding,
	VOLLEYBALL: volleyball,
	CRICKET: cricket,
	YOGA: yoga,
	HIKING: hiking,
	FOOTBALL: football,
};

export function getServiceDataWithServiceName(serviceName: string) {
	return SERVICES[
		// @ts-ignore
		Object.keys(SERVICES).filter((f) => SERVICES[f].name.toString() === serviceName)
	];
}

export default SERVICES;
