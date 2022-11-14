import { useTour } from '@reactour/tour';
import { useEffect } from 'react';

const useTourStep = (step: number) => {
	const { currentStep, setCurrentStep } = useTour();
	useEffect(() => {
		if (currentStep === step - 1) setCurrentStep(step);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentStep]);
};

export default useTourStep;
